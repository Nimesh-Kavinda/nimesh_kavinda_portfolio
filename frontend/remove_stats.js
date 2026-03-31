const fs = require('fs');
const file = 'src/components/sections/github/GithubSection.tsx';
let c = fs.readFileSync(file, 'utf8');

const target = `              {/* GitHub Stats & Languages */}
              <div className="mt-8 pt-8 border-t border-white/10 relative z-10 hidden sm:block">
                <h4 className="text-sm font-bold mb-4 flex items-center gap-2 text-white/70">
                  <Activity className="w-4 h-4 text-amber-400" /> GitHub Statistics
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="overflow-hidden border border-white/5 rounded-xl bg-black/40 p-2 hover:bg-white/[0.02] transition-colors">
                    <img 
                      src={\`https://github-readme-stats.vercel.app/api?username=\${data.user.login}&theme=transparent&hide_border=true&title_color=fbbf24&text_color=9ca3af&icon_color=fbbf24&show_icons=true\`} 
                      alt="GitHub Stats" 
                      className="w-full opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <div className="overflow-hidden border border-white/5 rounded-xl bg-black/40 p-2 hover:bg-white/[0.02] transition-colors">
                    <img 
                      src={\`https://github-readme-stats.vercel.app/api/top-langs/?username=\${data.user.login}&theme=transparent&hide_border=true&title_color=fbbf24&text_color=9ca3af&icon_color=fbbf24&layout=compact\`} 
                      alt="Top Languages" 
                      className="w-full opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                </div>
              </div>`;

if(c.includes(target)) {
    c = c.replace(target, '');
    fs.writeFileSync(file, c);
    console.log('Removed GitHub Stats & Languages block');
} else {
    console.log('Could not find the target block');
}
