import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src =
  "C:/Users/USER/.cursor/projects/c-Users-USER-Desktop-Client-s-Project-MACHAAN/assets/c__Users_USER_AppData_Roaming_Cursor_User_workspaceStorage_e1310f82280530d967f6de56bfd4cec1_images_514362072_122130938420837858_2187504797590461273_n-ffccecba-e62f-4715-92e3-6a8acd32e7f4.png";
const destDir = path.join(root, "public", "images");
const dest = path.join(destDir, "logo.png");

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log("Copied logo:", fs.statSync(dest).size, "bytes");
