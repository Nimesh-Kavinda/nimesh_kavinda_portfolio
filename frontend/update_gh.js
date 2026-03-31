const fs = require('fs');
const file = 'src/components/sections/github/GithubSection.tsx';
let c = fs.readFileSync(file, 'utf8');

// Insert the contribution graph card just below the stats card.
// Wait, the stats card ends at `</div>\n            </div>\n          </div>` 

// Let's use string replacement on a specific region.
const target = `                  <div className="text-2xl font-mono font-bold">{data.user.followers}</div>
                </div>
              </div>
            </div>
          </div>`;

const replacement = `                  <div className="text-2xl font-mono font-bold">{data.user.followers}</div>
                </div>
              </div>

              {/* GitHub Contributions Graph */}
              <div className="mt-8 pt-8 border-t border-white/10 relative z-10 hidden sm:block">
                <h4 className="text-sm font-bold mb-4 flex items-center gap-2 text-white/70">
                  <Activity className="w-4 h-4 text-amber-400" /> Contribution Streak
                </h4>
                <div className="overflow-hidden border border-white/5 rounded-xl bg-black/40 p-3">
                  <img 
                    src={\`https://ghchart.rshah.org/fbbf24/\${data.user.login}\`} 
                    alt="GitHub Contributions" 
                    className="w-full mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>

            </div>
          </div>`;

c = c.replace(target, replacement);

fs.writeFileSync(file, c);
console.log('updated github section ui');
