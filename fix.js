const fs = require('fs'); const txt = fs.readFileSync('frontend/src/app/page.tsx', 'utf8'); fs.writeFileSync('frontend/src/app/page.tsx', txt.replace('background: \
