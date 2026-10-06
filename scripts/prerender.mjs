// Ghi HTML render sẵn của <App /> vào docs/index.html để bot (Google, Facebook, Zalo) đọc được nội dung không cần chạy JS
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "docs", "index.html");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.mjs")).href);

const template = fs.readFileSync(htmlPath, "utf-8");
if (!template.includes("<!--app-html-->")) {
  throw new Error("Không tìm thấy <!--app-html--> trong docs/index.html");
}

fs.writeFileSync(htmlPath, template.replace("<!--app-html-->", render()));
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log("Prerendered docs/index.html");
