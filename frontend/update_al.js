const fs = require('fs');
const certFile = 'src/components/sections/certificate/CertifiateSection.tsx';
const resumeFile = 'src/app/resume/page.tsx';

let certContent = fs.readFileSync(certFile, 'utf8');

const certOldAl = \    {
      id: 1,
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "KG/Bandaranayake M.V",
      location: "Kegalle, Sri Lanka",
      description:
        "Completed undergraduate studies with a focus on computer science fundamentals, mathematics, and software engineering principles.",
      icon: <BookOpen className="w-5 h-5" />,
    },\;

const certNewAl = \    {
      id: 2,
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "Kegalu Vidyalaya",
      location: "Kegalle, Sri Lanka",
      description:
        "Completed G.C.E. Advanced Level in the Science stream, successfully studying Combined Mathematics, Physics, and Chemistry.",
      icon: <BookOpen className="w-5 h-5" />,
    },\;

certContent = certContent.replace(certOldAl, '');
certContent = certContent.replace(/id: 2,/g, 'id: 1,'); // Change HND to id 1
certContent = certContent.replace('      icon: <GraduationCap className="w-5 h-5" />,\n    },', '      icon: <GraduationCap className="w-5 h-5" />,\n    },\n' + certNewAl);

fs.writeFileSync(certFile, certContent, 'utf8');

let resumeContent = fs.readFileSync(resumeFile, 'utf8');
const resumeOldAl = \    {
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "KG/Bandaranayake M.V",
      location: "Kegalle, Sri Lanka",
      description: "Completed undergraduate studies with a focus on computer science fundamentals, mathematics, and software engineering principles."
    }\;

const resumeNewAl = \    {
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "Kegalu Vidyalaya",
      location: "Kegalle, Sri Lanka",
      description: "Completed G.C.E. Advanced Level in the Science stream, successfully studying Combined Mathematics, Physics, and Chemistry."
    }\;

resumeContent = resumeContent.replace(resumeOldAl, resumeNewAl);
fs.writeFileSync(resumeFile, resumeContent, 'utf8');
