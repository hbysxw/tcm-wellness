const fs = require("fs");
const path = require("path");
const outDir = path.join(__dirname, "..", "out");
const contentDir = path.join(__dirname, "..", "src", "content");
const baseUrl = "https://tcm-wellness-6ny.pages.dev";
const categories = ["about", "body", "diagnosis", "conditions", "food"];
const urls = [];
urls.push({ loc: baseUrl, priority: "1.0", changefreq: "weekly" });
urls.push({ loc: baseUrl + "/quiz", priority: "0.9", changefreq: "monthly" });
for (const cat of categories) { urls.push({ loc: baseUrl + "/category/" + cat, priority: "0.8", changefreq: "weekly" }); }
for (const cat of categories) {
  const dir = path.join(contentDir, cat);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
  for (const file of files) {
    const slug = file.replace(".md", "");
    urls.push({ loc: baseUrl + "/article/" + cat + "/" + slug, priority: "0.6", changefreq: "monthly" });
  }
}
let xml = '<?xml version="1.0" encoding="UTF-8"?>' + '\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + '\n';
for (const u of urls) { xml += '  <url>\n' + '    <loc>' + u.loc + '</loc>\n' + '    <priority>' + u.priority + '</priority>\n' + '    <changefreq>' + u.changefreq + '</changefreq>\n' + '  </url>\n'; }
xml += '</urlset>';
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf8");
console.log("Sitemap generated with " + urls.length + " URLs");
