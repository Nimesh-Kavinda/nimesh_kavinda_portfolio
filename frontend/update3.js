const fs = require('fs');
const file = 'src/components/sections/certificate/CertifiateSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `      icon: <GraduationCap className="w-5 h-5" />,
    },`;

const replacement = `      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: 2,
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "Kegalu Vidyalaya",
      location: "Kegalle, Sri Lanka",
      description:
        "Completed G.C.E. Advanced Level in the Science stream, successfully studying Combined Mathematics, Physics, and Chemistry.",
      icon: <BookOpen className="w-5 h-5" />,
    },`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
console.log('Added GCE AL back');
