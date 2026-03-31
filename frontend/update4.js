const fs = require('fs');
const file = 'src/components/sections/certificate/CertifiateSection.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');
let filtered = [];
let skip = false;
let gceCount = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('title: "GCE Advanced Level",')) {
        gceCount++;
        if (gceCount > 1) {
            // Remove the second occurrence
            filtered.pop(); // remove `    {`
            filtered.pop(); // remove `      id: 2,`
            filtered.pop(); // remove `      year: ...`
            skip = true;
            continue;
        }
    }
    if (skip && lines[i].includes('    },')) {
        skip = false;
        continue;
    }
    if (!skip) {
        filtered.push(lines[i]);
    }
}
fs.writeFileSync(file, filtered.join('\n'));
console.log('Fixed duplications based on lines');
