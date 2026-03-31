
const fs = require('fs');
const file = './frontend/src/components/sections/logoloop/logoloop.tsx';
let txt = fs.readFileSync(file, 'utf8');
txt = txt.replace(/fadeOutColor=.#000000./g, 'fadeOutColor=\
