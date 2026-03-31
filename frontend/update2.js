const fs = require('fs');
const file = 'src/components/sections/certificate/CertifiateSection.tsx';
let content = fs.readFileSync(file, 'utf8');

let lines = content.split('\n');
let gceLineStart = -1;
let gceLineEnd = -1;

for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('title: "GCE Advanced Level",')) {
      gceLineStart = i - 2; // back track to `    {`
      let brackets = 1;
      for (let j = i; j < lines.length; j++) {
         if (lines[j].includes('},')) {
             gceLineEnd = j;
             break;
         }
      }
   }
}

// remove duplicate by removing from start to end entirely for the second occurrence
let res = lines;
let c = content;

const badBlock = `    {
      id: 2,
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "Kegalu Vidyalaya",
      location: "Kegalle, Sri Lanka",
      description:
        "Completed G.C.E. Advanced Level in the Science stream, successfully studying Combined Mathematics, Physics, and Chemistry.",
      icon: <BookOpen className="w-5 h-5" />,
    },`;

c = c.replace(badBlock, "");
c = c.replace("\n\n\n", "\n\n");
c = c.replace("\n\n    {", "\n    {");

fs.writeFileSync(file, c);
console.log('Fixed dedup');
