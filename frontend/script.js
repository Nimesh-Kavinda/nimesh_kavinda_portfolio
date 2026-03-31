const fs = require('fs');
const p1 = 'src/components/sections/certificate/CertifiateSection.tsx';
const p2 = 'src/app/resume/page.tsx';

let c1 = fs.readFileSync(p1, 'utf8');
let c2 = fs.readFileSync(p2, 'utf8');

const HND_SEMESTERS = [
  {
    sem: 1,
    gpa: '4.0',
    subjects: [
      'Visual Application Programming',
      'Web Design',
      'Computer and Network Systems',
      'Information Management and Information Systems',
      'ICT Project (Individual)',
      'Communication Skills',
    ],
  },
  {
    sem: 2,
    gpa: '4.0',
    subjects: [
      'Fundamentals of Programming',
      'Software Development ',
      'System Analysis and Design',
      'Data communication and Computer Networks',
      'Principles of User Interface Design',
      'ICT Project (Group)',
      'Technical Writing',
      'Human Value & Professional Ethics',
    ],
  },
  {
    sem: 3,
    gpa: '4.0',
    subjects: [
      'Object Oriented Programming',
      'Web Programming',
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Information and Computer Security',
      'Statistics for IT',
    ],
  },
  {
    sem: 4,
    gpa: '4.0',
    subjects: [
      'Software Engineering',
      'Software Quality Assurance',
      'IT Project Management',
      'Professional World',
      'Programming Individual Project',
      'Business Analysis Practice',
      'Enterprise Architecture',
    ],
  }
];

const semStr = `\n        semesters: ${JSON.stringify(HND_SEMESTERS, null, 10).replace(/\]/g, '        ]').replace(/}/g, '        }')},`;

// Check if already updated
if (!c1.includes("semesters: [")) {
    c1 = c1.replace(
    /\n\s*description:\n\s*"Specialized in Software Engineering, focusing on advanced data structures, algorithms, and full-stack development technologies.",/,
    `\n      description:\n        "Specialized in Software Engineering, focusing on advanced data structures, algorithms, and full-stack development technologies.",${semStr}`
    );

    const c1RenderOld = `                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-sans opacity-60 group-hover:opacity-100 transition-all duration-500">      
                    {edu.description}
                  </p>
                </div>`;

    const c1RenderNew = `                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-sans opacity-60 group-hover:opacity-100 transition-all duration-500">      
                    {edu.description}
                  </p>
                  
                  {edu.semesters && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {edu.semesters.map((sem, sIdx) => (
                        <div key={sIdx} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors relative overflow-hidden group/sem">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl -mr-10 -mt-10 group-hover/sem:bg-white/[0.05] transition-colors"></div>
                          <div className="flex justify-between items-center mb-4 relative z-10">
                            <h4 className="text-white font-bold text-xl">Semester {sem.sem}</h4>
                            <div className="bg-white/10 px-3 py-1 rounded-full border border-white/10">
                              <span className="text-white/80 font-mono text-sm font-semibold tracking-wider">GPA: {sem.gpa}</span>
                            </div>
                          </div>
                          <ul className="space-y-2 relative z-10">
                            {sem.subjects.map((sub, i) => (
                              <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                                <span className="text-white/30 text-[10px] mt-1"></span>
                                <span className="leading-snug">{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>`;

    c1 = c1.replace(c1RenderOld, c1RenderNew);
    fs.writeFileSync(p1, c1);
    console.log('Updated', p1);
}

if (!c2.includes("semesters: [")) {
    c2 = c2.replace(
    /\n\s*description: "Specialized in Software Engineering, focusing on advanced data structures, algorithms, and full-stack development technologies."/,
    `\n      description: "Specialized in Software Engineering, focusing on advanced data structures, algorithms, and full-stack development technologies.",${semStr}`
    );

    const c2RenderOld = `                  <p className="text-sm text-gray-600 mt-2 max-w-2xl">{edu.description}</p>
                </div>`;

    const c2RenderNew = `                  <p className="text-sm text-gray-600 mt-2 max-w-2xl">{edu.description}</p>
                  {edu.semesters && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 print:gap-2">
                      {edu.semesters.map((sem, sIdx) => (
                        <div key={sIdx} className="bg-white ring-1 ring-gray-100 border border-gray-100/50 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] print:shadow-none print:border-gray-200">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold text-black text-sm">Semester {sem.sem}</h4>
                            <span className="text-xs font-bold bg-neutral-100 px-2 py-0.5 rounded text-gray-600 border border-gray-200">GPA: {sem.gpa}</span>
                          </div>
                          <ul className="space-y-1">
                            {sem.subjects.map((sub, i) => (
                              <li key={i} className="text-[11px] text-gray-600 flex items-start gap-1.5 leading-snug">
                                <span className="text-gray-300 mt-[2px] text-[8px]"></span> {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>`;

    c2 = c2.replace(c2RenderOld, c2RenderNew);
    fs.writeFileSync(p2, c2);
    console.log('Updated', p2);
}

