const fs = require('fs'); const txt = fs.readFileSync('frontend/src/app/view_experience/page.tsx', 'utf8'); fs.writeFileSync('frontend/src/app/view_experience/page.tsx', txt.replace('background: \
