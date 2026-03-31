
const fs = require('fs');
const path = require('path');

const dir = './frontend/src';

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (['.tsx', '.ts', '.css'].includes(path.extname(filePath))) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk(dir);

let replacements = [
  { old: /(#1B3C53)/gi, newHex: '#061E29' }, // Background
  { old: /(#D2C1B6)/gi, newHex: '#F3F4F4' }, // Light Text
  { old: /(#234C6A)/gi, newHex: '#1D546D' }, // Darker Accents
  { old: /(#456882)/gi, newHex: '#5F9598' }, // Medium Accents
  // Replace direct Tailwind blacks and slates that might have been missed in CSS overrides if they are hardcoded
  { old: /bg-black/g, newHex: 'bg-[#061E29]' },
  { old: /bg-zinc-900/g, newHex: 'bg-[#1D546D]' },
  { old: /bg-zinc-950/g, newHex: 'bg-[#061E29]' },
  { old: /text-white/g, newHex: 'text-[#F3F4F4]' },
  { old: /text-gray-400/g, newHex: 'text-[#5F9598]' },
  { old: /border-white\/10/g, newHex: 'border-[#5F9598]/20' },
  { old: /border-white\/5/g, newHex: 'border-[#1D546D]/50' },
  { old: /bg-white\/5/g, newHex: 'bg-[#1D546D]/20' },
  { old: /text-black/g, newHex: 'text-[#061E29]' },
];

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (let rule of replacements) {
    if (rule.old.test(content)) {
      content = content.replace(rule.old, rule.newHex);
      changed = true;
    }
  }
  // Also fix black RGB / Hex if they exist
  const regexBlack1 = /rgb\(0,\s*0,\s*0\)/g;
  const regexBlack2 = /#000000/g;
  const regexWhite1 = /rgb\(255,\s*255,\s*255\)/g;
  const regexWhite2 = /#ffffff/gi;
  if(regexBlack1.test(content) || regexBlack2.test(content) || regexWhite1.test(content) || regexWhite2.test(content)) {
     content = content.replace(regexBlack1, '#061E29');
     content = content.replace(regexBlack2, '#061E29');
     content = content.replace(regexWhite1, '#F3F4F4');
     content = content.replace(regexWhite2, '#F3F4F4');
     changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
  }
}

console.log('All files processed!');

