
const fs = require("fs");
const path = require("path");

const dir = "./frontend/src/components/sections";

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

const files = walk(dir);

for (let file of files) {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/bg-\[#061E29\](?!\/)/g, "bg-transparent");
  fs.writeFileSync(file, content);
}
console.log("Sections made transparent!");

