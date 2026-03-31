const fs = require('fs');
const file = 'src/components/sections/certificate/CertifiateSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const target1 = `    {
      id: 1,
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "KG/Bandaranayake M.V",
      location: "Kegalle, Sri Lanka",
      description:
        "Completed undergraduate studies with a focus on computer science fundamentals, mathematics, and software engineering principles.",
      icon: <BookOpen className="w-5 h-5" />,
    },`;

content = content.replace(target1, '');

const afterHNDITTarget = `    // {
    //   id: 3,`;

const insertion = `    {
      id: 2,
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "Kegalu Vidyalaya",
      location: "Kegalle, Sri Lanka",
      description:
        "Completed G.C.E. Advanced Level in the Science stream, successfully studying Combined Mathematics, Physics, and Chemistry.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    // {
    //   id: 3,`;

content = content.replace(afterHNDITTarget, insertion);
content = content.replace(`id: 2,
      year: "2023 - 2025"`, `id: 1,
      year: "2023 - 2025"`);

fs.writeFileSync(file, content);
console.log('Done!');
