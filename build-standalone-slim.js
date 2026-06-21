const fs = require('fs')
const dir = '/Users/rami/Desktop/Lana Ai Website/html/'

let html = fs.readFileSync(dir + 'index.html', 'utf8')
const css = fs.readFileSync(dir + '_compiled.css', 'utf8')
const js = fs.readFileSync(dir + 'main.js', 'utf8')

// 1. Drop Tailwind Play CDN
html = html.replace('<script src="https://cdn.tailwindcss.com"></script>', '')
// 2. Drop inline tailwind.config
html = html.replace(/<script>\s*tailwind\.config[\s\S]*?<\/script>/, '')
// 3. Swap text/tailwindcss for compiled CSS
html = html.replace(/<style type="text\/tailwindcss">[\s\S]*?<\/style>/, '<style>\n' + css + '\n</style>')
// 4. Replace hero img with a CSS gradient div (keeps layout intact)
html = html.replace(
  /<img[^>]*src="hero\.jpg"[^>]*>/,
  '<div style="position:absolute;inset:0;background:linear-gradient(135deg,#1a0533 0%,#06060d 40%,#1a0022 100%);"></div>'
)
// 5. Point checkout links at pricing section
html = html.split('href="checkout.html"').join('href="#pricing"')
// 6. Inline JS
html = html.replace('<script src="main.js"></script>', '<script>\n' + js + '\n</script>')

fs.writeFileSync(dir + 'lana-slim.html', html)
console.log('slim written: ' + (Buffer.byteLength(html) / 1024).toFixed(1) + ' KB')
