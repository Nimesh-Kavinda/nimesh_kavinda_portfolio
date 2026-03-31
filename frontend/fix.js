const fs = require('fs');
const file = 'src/app/page.tsx';
let c = fs.readFileSync(file, 'utf8');

let lines = c.split('\n');
let filtered = [];
let seen = new Set();
for (let line of lines) {
    if (line.includes('import GithubSection')) {
        if (!seen.has('gh')) {
            filtered.push(line);
            seen.add('gh');
        }
    } else {
        filtered.push(line);
    }
}
fs.writeFileSync(file, filtered.join('\n'));
