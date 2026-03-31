const fs = require('fs');

const cssFiles = [
  './frontend/src/styles/about.css',
  './frontend/src/styles/hero.css',
  './frontend/src/styles/header.css',
  './frontend/src/styles/loading.css'
];

for (const file of cssFiles) {
  if (!fs.existsSync(file)) continue;
  let text = fs.readFileSync(file, 'utf8');
  
  // replace black (#000)
  text = text.replace(/rgb\(0,\s*0,\s*0\)/g, '#1B3C53');
  text = text.replace(/#000000/g, '#1B3C53');
  text = text.replace(/#000/g, '#1B3C53');
  text = text.replace(/black/g, '#1B3C53');
  
  // replace white (#fff)
  text = text.replace(/rgb\(255,\s*255,\s*255\)/g, '#D2C1B6');
  text = text.replace(/#ffffff/gi, '#D2C1B6');
  text = text.replace(/#fff/gi, '#D2C1B6');
  text = text.replace(/white/g, '#D2C1B6');
  
  // replace #212121
  text = text.replace(/#212121/gi, '#234C6A');
  
  fs.writeFileSync(file, text);
}
console.log('Extra CSS files updated');
