async function main() {
  const res = await fetch('https://api.github.com/users/Nimesh-Kavinda/repos?per_page=100&sort=updated');
  const repos = await res.json();
  let count = 0;
  for (const repo of repos) {
    if (repo.fork) continue;
    const branch = repo.default_branch;
    const url = `https://raw.githubusercontent.com/Nimesh-Kavinda/${repo.name}/${branch}/README.md`;
    const readmeRes = await fetch(url);
    if (!readmeRes.ok) continue;
    const text = await readmeRes.text();
    // find images that are not standard badges
    const matches = Array.from(text.matchAll(/!\[.*?\]\((.*?)\)|<img.*?src="(.*?)".*?>/g));
    let hasRealImage = false;
    for (const m of matches) {
      const src = m[1] || m[2];
      if (src && !src.includes('badge') && !src.includes('shields.io') && (src.match(/\.(png|jpe?g|gif|svg)/i) || src.includes('github.com/user-attachments') || src.includes('githubusercontent'))) {
         hasRealImage = true;
         break;
      }
    }
    if (hasRealImage) {
      console.log(repo.name);
      count++;
    }
  }
  console.log('Total repos with images:', count);
}
main();
