
const fs = require("fs");

// 1. Remove border-t from GithubSection
let gitPath = "./frontend/src/components/sections/github/GithubSection.tsx";
let gitContent = fs.readFileSync(gitPath, "utf8");
gitContent = gitContent.replace(/border-t\s+border-\[#1D546D\]\/50/g, "");
fs.writeFileSync(gitPath, gitContent);
console.log("Removed Github section top border");

// 2. Make education cards opaque in CertificateSection
let certPath = "./frontend/src/components/sections/certificate/CertifiateSection.tsx";
let certContent = fs.readFileSync(certPath, "utf8");
// We look for the main div mapping in CertificateSection
certContent = certContent.replace(/className="group relative border-t border-\[#5F9598\]\/20 py-12 md:py-16 transition-all duration-700 hover:bg-white\/2"/g, 
  "className=\"group relative bg-[#061E29] border-t border-[#5F9598]/20 py-12 px-6 md:px-8 md:py-16 transition-all duration-700 hover:bg-[#1D546D]/20 z-10\"");
fs.writeFileSync(certPath, certContent);
console.log("Made education rows opaque.");

