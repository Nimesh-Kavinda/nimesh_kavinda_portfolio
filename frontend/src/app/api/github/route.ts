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

    // only take the 30 most recently updated repos to avoid too long processing/rate limits
    // but the user wants "Project that only have images in the readme of the repos.."
    // we fetch readmes in parallel
    const reposToCheck = repos.filter((r: any) => !r.fork).slice(0, 40);
    const withImages: any[] = [];

    await Promise.all(reposToCheck.map(async (repo: any) => {
      try {
        const branch = repo.default_branch;
        const url = `https://raw.githubusercontent.com/Nimesh-Kavinda/${repo.name}/${branch}/README.md`;
        const readmeRes = await fetch(url, { next: { revalidate: 3600 } });
        if (!readmeRes.ok) return;
        const text = await readmeRes.text();
        
        const matches = Array.from(text.matchAll(/!\[.*?\]\((.*?)\)|<img.*?src="(.*?)".*?>/g));
        let imageUrl = null;
        for (const m of matches) {
          const src = m[1] || m[2];
          if (src && !src.includes('badge') && !src.includes('shields.io') && (src.match(/\.(png|jpe?g|gif|svg)/i) || src.includes('github.com/user-attachments') || src.includes('githubusercontent'))) {
            imageUrl = src;
            // resolve relative urls
            if (!imageUrl.startsWith('http')) {
              if (imageUrl.startsWith('./')) imageUrl = imageUrl.substring(2);
              imageUrl = `https://raw.githubusercontent.com/Nimesh-Kavinda/${repo.name}/${branch}/${imageUrl}`;
            }
            break;
          }
        }

        if (imageUrl) {
          withImages.push({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
            updated_at: repo.updated_at,
            image: imageUrl
          });
        }
      } catch (e) {
        // ignore errors
      }
    }));

    // sort back by updated_at descending
    withImages.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

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
      repos: withImages
    });
  } catch (error) {
    console.error('Error fetching github data:', error);
    return NextResponse.json({ error: 'Failed to fetch github data' }, { status: 500 });
  }
}
