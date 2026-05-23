const fs = require('fs');
const c = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const search = 'Food as Medicine</Link>';
const replace = 'Food as Medicine</Link>' +
  '\n              <Link href="/article/about/privacy-policy" className="text-sm text-text-muted hover:text-primary transition-colors">Privacy Policy</Link>' +
  '\n              <Link href="/article/about/contact" className="text-sm text-text-muted hover:text-primary transition-colors">Contact</Link>';

fs.writeFileSync('src/components/Footer.tsx', c.replace(search, replace), 'utf8');
console.log('Done');
