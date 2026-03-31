import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const userRes = await fetch('https://api.github.com/users/Nimesh-Kavinda', {
      next: { revalidate: 3600 }
    });
    const user = await userRes.json();

    const reposRes = await fetch('https://api.github.com/users/Nimesh-Kavinda/repos?per_page=100&sort=updated', {
      next: { revalidate: 3600 }
    });
    const repos = await reposRes.json();

    // 1. Filter out forks
    let scoredRepos = repos.filter((r: any) => !r.fork);

    // 2. Score repos based on target keywords
    const keywords = ['node', 'react', 'laravel', 'php'];
    scoredRepos = scoredRepos.map((repo: any) => {
      let score = 0;
      const searchStr = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase();
      
      keywords.forEach(kw => {
        if (searchStr.includes(kw)) score += 2; // Priority to keywords
      });

      // extra points for stars so better projects bubble up
      score += (repo.stargazers_count || 0) * 0.5;
      
      return { ...repo, score };
    });

    // 3. Only keep repos that have at least some relevance, and sort by score
    scoredRepos = scoredRepos.filter((r: any) => r.score > 0);
    scoredRepos.sort((a: any, b: any) => b.score - a.score || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    // 4. Take the top 10 candidates to check for images (so we don't overkill API)
    const topRepos = scoredRepos.slice(0, 10);
    const withImages: any[] = [];

    await Promise.all(topRepos.map(async (repo: any) => {
      try {
        const branch = repo.default_branch;
        const url = `https://raw.githubusercontent.com/Nimesh-Kavinda/${repo.name}/${branch}/README.md`;
        const readmeRes = await fetch(url, { next: { revalidate: 3600 } });
        
        // Fallback to github OpenGraph image if no internal image is found
        let imageUrl = `https://opengraph.githubassets.com/1/Nimesh-Kavinda/${repo.name}`;
        
        if (readmeRes.ok) {
          const text = await readmeRes.text();
          const matches = Array.from(text.matchAll(/!\[.*?\]\((.*?)\)|<img.*?src="(.*?)".*?>/g));
          
          for (const m of matches) {
            const src = m[1] || m[2];
            if (src && !src.includes('badge') && !src.includes('shields.io') && (src.match(/\.(png|jpe?g|gif|svg)/i) || src.includes('github.com/user-attachments') || src.includes('githubusercontent'))) {
              let parsedSrc = src;
              // resolve relative urls
              if (!parsedSrc.startsWith('http')) {
                if (parsedSrc.startsWith('./')) parsedSrc = parsedSrc.substring(2);
                parsedSrc = `https://raw.githubusercontent.com/Nimesh-Kavinda/${repo.name}/${branch}/${parsedSrc}`;
              }
              imageUrl = parsedSrc;
              break; // Found the primary image
            }
          }
        }

        withImages.push({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          language: repo.language,
          updated_at: repo.updated_at,
          image: imageUrl,
          score: repo.score
        });
      } catch (e) {
        // ignore errors
      }
    }));

    // sort back by score descending
    withImages.sort((a, b) => b.score - a.score || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    return NextResponse.json({
      user: {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        bio: user.bio,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      // send top 6 to the UI
      repos: withImages.slice(0, 6)
    });
  } catch (error) {
    console.error('Error fetching github data:', error);
    return NextResponse.json({ error: 'Failed to fetch github data' }, { status: 500 });
  }
}
