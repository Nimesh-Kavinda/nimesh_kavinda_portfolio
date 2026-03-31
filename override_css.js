
const fs = require("fs");
const path = "./frontend/src/styles/index.css";
let css = fs.readFileSync(path, "utf8");

const colors = [
  "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal",
  "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
];

let generatedTheme = "\n  --color-black: #1B3C53;\n  --color-white: #D2C1B6;\n  --color-transparent: transparent;\n  --color-current: currentColor;\n";

for (let c of colors) {
  generatedTheme += "  --color-" + c + "-50: #D2C1B6;\n";
  generatedTheme += "  --color-" + c + "-100: #D2C1B6;\n";
  generatedTheme += "  --color-" + c + "-200: #D2C1B6;\n";
  generatedTheme += "  --color-" + c + "-300: #D2C1B6;\n";
  generatedTheme += "  --color-" + c + "-400: #D2C1B6;\n";
  
  generatedTheme += "  --color-" + c + "-500: #456882;\n";
  generatedTheme += "  --color-" + c + "-600: #456882;\n";
  generatedTheme += "  --color-" + c + "-700: #456882;\n";
  
  generatedTheme += "  --color-" + c + "-800: #456882;\n";
  generatedTheme += "  --color-" + c + "-900: #234C6A;\n";
  generatedTheme += "  --color-" + c + "-950: #1B3C53;\n";
}

const themeMatch = css.match(/@theme inline\s*{([^}]*)}/);
if (themeMatch) {
  css = css.replace(themeMatch[0], "@theme inline {" + generatedTheme + "\n}");
} else {
  css += "\n@theme inline {" + generatedTheme + "\n}\n";
}

fs.writeFileSync(path, css);
console.log("Massive theme injected successfully!");

