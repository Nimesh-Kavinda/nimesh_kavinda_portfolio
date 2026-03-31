
const fs = require('fs');
const filesToFix = [
  './frontend/src/app/page.tsx', 
  './frontend/src/app/view_experience/page.tsx'
];

for(const file of filesToFix) {
  let content = fs.readFileSync(file, 'utf8');
  // Revert back rgba(255,255,255,0.2) to our accent color that will pop out of the background, maybe using the 5F9598 colour or D2C1B6. Let's use 5F9598 at 50% opacity or similar.
  // Actually, wait, the previous script might have messed up text-white -> text-[#F3F4F4] but rgb(255,255,255) to F3F4F4.
  // Let's check regex White replacement. It was replaced with #F3F4F4.
  // Wait, in my previous script, I replaced: rgb(255, 255, 255) with #F3F4F4. But rgba(255, 255, 255, 0.2) has spaces! The previous script regex was /rgb\(255,\s*255,\s*255\)/g which doesn't match rgba!
  
  // So the dots are still rgba(255,255,255,0.2). Why aren't they showing? Oh, because I changed the base body background or a wrapper might be covering them. Let's check Heropage and other wrappers. Let's change the dots to use the new light text color '#F3F4F4' or accent '#5F9598'.
  
  content = content.replace(/rgba?\(255,\s*255,\s*255,\s*0\.2\)/g, '#5F9598'); // Just use the hex for the dot
  // Wait, radial-gradient needs an RGB with opacity, or hex with opacity. #5F9598 at some opacity.
  // #5F9598 is a medium accent. Let's use it as #5F9598 with opacity 40% -> #5F959866
  
  content = content.replace(/radial-gradient\(circle,\s*(?:rgba\([^)]+\)|#5F9598)(?:66)?\s*1\.5px,\s*transparent\s*1\.5px\)/g, 'radial-gradient(circle, #5F959866 1.5px, transparent 1.5px)');
  
  fs.writeFileSync(file, content);
}
console.log('Fixed dots!');

