const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');
const adTag = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8636894949117468" crossorigin="anonymous"></script>';
c = c.replace('</head>', adTag + '\n</head>');
fs.writeFileSync('src/app/layout.tsx', c, 'utf8');
console.log('AdSense added');
