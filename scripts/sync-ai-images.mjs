// Copies generated images from ../ai-images into public/ai and records which exist.
// If the source folder is missing, keeps whatever is already in public/ai.
import fs from "node:fs"; import path from "node:path";
const src = path.resolve("../ai-images"), dst = path.resolve("public/ai");
fs.mkdirSync(dst, { recursive: true });
if (fs.existsSync(src)) for (const f of fs.readdirSync(src)) if (f.endsWith(".webp")) fs.copyFileSync(path.join(src, f), path.join(dst, f));
const have = fs.readdirSync(dst).filter((f) => f.endsWith(".webp")).map((f) => f.replace(/\.webp$/, ""));
fs.writeFileSync("lib/aiImages.json", JSON.stringify(have.sort(), null, 1) + "\n");
console.log("ai images:", have.join(", ") || "none");
