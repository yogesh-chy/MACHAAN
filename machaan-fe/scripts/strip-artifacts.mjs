import fs from "fs";
import path from "path";

const root = path.join(import.meta.dirname, "..", "src");

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".tsx") || p.endsWith(".ts")) {
      const lines = fs.readFileSync(p, "utf8").split("\n");
      const filtered = lines.filter(
        (l) => !l.includes("motion-bar") && !l.match(/^function motion-bar/)
      );
      if (filtered.length !== lines.length) {
        fs.writeFileSync(p, filtered.join("\n"));
        console.log("cleaned", p);
      }
    }
  }
}

walk(root);
