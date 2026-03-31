const fs = require('fs');
const path = './frontend/src/styles/index.css';
let css = fs.readFileSync(path, 'utf8');

// Replace everything inside @theme inline
const themeMatch = css.match(/@theme inline\s*{([^}]+)}/);

const colors = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

let generatedTheme = '\n  --color-black: #1B3C53;\n  --color-white: #D2C1B6;\n  --color-transparent: transparent;\n  --color-current: currentColor;\n';

for (let c of colors) {
  // Map 50, 100, 200, 300, 400 to the Light Sand (#D2C1B6) or Medium Blue (#456882)
  generatedTheme +=   --color--50: #D2C1B6;\n;
  generatedTheme +=   --color--100: #D2C1B6;\n;
  generatedTheme +=   --color--200: #D2C1B6;\n;
  generatedTheme +=   --color--300: #D2C1B6;\n;
  generatedTheme +=   --color--400: #D2C1B6;\n;
  
  // Map 500, 600, 700 to Medium Blue
  generatedTheme +=   --color--500: #456882;\n;
  generatedTheme +=   --color--600: #456882;\n;
  generatedTheme +=   --color--700: #456882;\n;
  
  // Map 800-900 to Dark Blue
  generatedTheme +=   --color--800: #456882;\n; // Let's make 800 medium blue so it's visible on 900
  generatedTheme +=   --color--900: #234C6A;\n;
  
  // Map 950 to Darkest Blue
  generatedTheme +=   --color--950: #1B3C53;\n;
}

if (themeMatch) {
  css = css.replace(themeMatch[0], '@theme inline {' + generatedTheme + '\n}');
} else {
  // If not there for some reason
  css += '\n@theme inline {' + generatedTheme + '\n}\n';
}

fs.writeFileSync(path, css);
console.log('Massive theme injected');
