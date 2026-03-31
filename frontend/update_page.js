const fs = require('fs');
const file = 'src/app/page.tsx';
let c = fs.readFileSync(file, 'utf8');

const importTarget = 'import ProjectsSection from \'@/components/sections/project/ProjectsSection\';';
const importReplace = `import ProjectsSection from '@/components/sections/project/ProjectsSection';
import GithubSection from '@/components/sections/github/GithubSection';`;

c = c.replace(importTarget, importReplace);

const renderTarget = `        <ProjectsSection />
        <TextScroll />`;
const renderReplace = `        <ProjectsSection />
        <GithubSection />
        <TextScroll />`;

c = c.replace(renderTarget, renderReplace);

fs.writeFileSync(file, c);
console.log('Added github section to page');
