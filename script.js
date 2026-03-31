const fs = require('fs');
const path = './frontend/src/styles/index.css';
let css = fs.readFileSync(path, 'utf8');

css = css.replace(/--bg-color:\s*#[0-9a-fA-F]+;/g, '--bg-color: #1B3C53;');

const overrides = '\n  --color-black: #1B3C53;\n  --color-white: #D2C1B6;\n  --color-zinc-950: #1B3C53;\n  --color-zinc-900: #234C6A;\n  --color-gray-900: #234C6A;\n  --color-gray-800: #456882;\n  --color-zinc-800: #456882;\n  --color-zinc-400: #D2C1B6;\n  --color-amber-400: #D2C1B6;\n  --color-orange-400: #D2C1B6;\n  --color-orange-500: #456882;\n  --color-zinc-300: #D2C1B6;\n';

css = css.replace('@theme inline {', '@theme inline { ' + overrides);

// Also modify root background to avoid OKLCH overriding
css = css.replace(/--background: oklch\([^)]+\);/g, '--background: #1B3C53;');
css = css.replace(/--foreground: oklch\([^)]+\);/g, '--foreground: #D2C1B6;');
css = css.replace(/--card: oklch\([^)]+\);/g, '--card: #234C6A;');
css = css.replace(/--card-foreground: oklch\([^)]+\);/g, '--card-foreground: #D2C1B6;');
css = css.replace(/--popover: oklch\([^)]+\);/g, '--popover: #234C6A;');
css = css.replace(/--popover-foreground: oklch\([^)]+\);/g, '--popover-foreground: #D2C1B6;');
css = css.replace(/--primary: oklch\([^)]+\);/g, '--primary: #D2C1B6;');
css = css.replace(/--primary-foreground: oklch\([^)]+\);/g, '--primary-foreground: #1B3C53;');
css = css.replace(/--muted: oklch\([^)]+\);/g, '--muted: #456882;');
css = css.replace(/--muted-foreground: oklch\([^)]+\);/g, '--muted-foreground: #D2C1B6;');
css = css.replace(/--border: oklch\([^)]+\);/g, '--border: #456882;');

fs.writeFileSync(path, css);
console.log('CSS updated successfully');
