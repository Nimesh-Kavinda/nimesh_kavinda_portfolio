
const fs = require("fs");
const path = require("path");

const dotStyleStr = ` style={{
          backgroundColor: "#061E29",
          backgroundImage: "radial-gradient(circle, rgba(95, 149, 152, 0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px"
      }}`;

// Add to Projects
let projPath = "./frontend/src/components/sections/project/ProjectsSection.tsx";
let projContent = fs.readFileSync(projPath, "utf8");
if (!projContent.includes("backgroundImage: \"radial-gradient")) {
    projContent = projContent.replace(/(<section[^>]*?className="[^"]*?")/i, `$1${dotStyleStr}`);
    fs.writeFileSync(projPath, projContent);
}

// Add to Github
let gitPath = "./frontend/src/components/sections/github/GithubSection.tsx";
let gitContent = fs.readFileSync(gitPath, "utf8");
// Replace all <section> tags in GithubSection
gitContent = gitContent.replace(/(<section[^>]*?className="[^"]*?")/ig, (match) => {
    if (match.includes("backgroundImage: \"radial-gradient")) return match;
    return match + dotStyleStr;
});
fs.writeFileSync(gitPath, gitContent);

console.log("Dots added to Projects and Github section.");

// Now revert `bg-transparent` to `bg-[#061E29]` in all sections
function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if ([".tsx", ".ts"].includes(path.extname(filePath))) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk("./frontend/src/components/sections");
for (let file of files) {
  let content = fs.readFileSync(file, "utf8");
  if (content.includes("bg-transparent")) {
      content = content.replace(/bg-transparent/g, "bg-[#061E29]");
      fs.writeFileSync(file, content);
  }
}
console.log("Restored solid backgrounds to non-dotted sections.");

