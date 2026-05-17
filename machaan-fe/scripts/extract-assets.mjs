import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const url = "https://unidine.webflow.io/";
  console.log(`Fetching HTML from ${url}...`);
  try {
    const res = await fetch(url);
    const html = await res.text();

    console.log("HTML length:", html.length);

    // Find all images
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
    const images = [];
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }

    // Find all style links
    const linkRegex = /<link[^>]+href=["']([^"']+)["']/g;
    const links = [];
    while ((match = linkRegex.exec(html)) !== null) {
      links.push(match[1]);
    }

    // Find custom css files or inline styles
    const styles = [];
    const styleRegex = /<style>([\s\S]*?)<\/style>/g;
    while ((match = styleRegex.exec(html)) !== null) {
      styles.push(match[1]);
    }

    console.log("--- IMAGES FOUND ---");
    images.forEach((img, i) => console.log(`${i + 1}: ${img}`));

    console.log("--- CSS LINKS ---");
    links.forEach((link, i) => console.log(`${i + 1}: ${link}`));

    // Write HTML to scratch folder for analysis if needed
    const outPath = path.join(__dirname, "..", "public", "raw_page.html");
    fs.writeFileSync(outPath, html);
    console.log("Saved raw HTML to public/raw_page.html");
  } catch (err) {
    console.error("Error fetching or parsing:", err);
  }
}

run();
