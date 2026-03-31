
const fs = require("fs");

// Helper structure
const dotStyleStr = ` style={{
        backgroundColor: "#061E29",
        backgroundImage: "radial-gradient(circle, rgba(95, 149, 152, 0.4) 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px"
      }}`;

function addPatternToSection(filePath, tagId) {
    let content = fs.readFileSync(filePath, "utf8");
    // Find the opening section tag and append style
    const reg = new RegExp(`(<section[^>]*?className="[^"]*?")`, "i");
    content = content.replace(reg, `$1${dotStyleStr}`);
    fs.writeFileSync(filePath, content);
}

// 1. Tool Icon Slider (TechStackLoop / LogoLoop) -> "frontend/src/components/sections/logoloop/logoloop.tsx" doesn"t use <section>, uses div.
function addPatternToDiv(filePath) {
   let content = fs.readFileSync(filePath, "utf8");
   content = content.replace(/<div className="([^"]*?)">/, "<div className=\"$1\"" + dotStyleStr + ">");
   fs.writeFileSync(filePath, content);
}
addPatternToDiv("./frontend/src/components/sections/logoloop/logoloop.tsx");

// 2. Work Experience
addPatternToSection("./frontend/src/components/sections/experience/ExperienceSection.tsx");

// 3. Learning Journey (Education/Certificate)
addPatternToSection("./frontend/src/components/sections/certificate/CertifiateSection.tsx");

// 4. Kind Words Section (RecommendationSection)
addPatternToSection("./frontend/src/components/sections/recommendation/RecomondationSection.tsx");

console.log("Dotted background added to specific sections.");

