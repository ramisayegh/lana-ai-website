const fs = require('fs')
const dir = '/Users/rami/Desktop/Lana Ai Website/html/'

let html = fs.readFileSync(dir + 'index.html', 'utf8')
const css = fs.readFileSync(dir + '_compiled.css', 'utf8')
const js = fs.readFileSync(dir + 'main.js', 'utf8')
const imgB64 = fs.readFileSync(dir + 'hero-web.jpg').toString('base64')
const dataUri = 'data:image/jpeg;base64,' + imgB64

// 1. Drop the Tailwind Play CDN script
html = html.replace('<script src="https://cdn.tailwindcss.com"></script>', '')

// 2. Drop the inline tailwind.config script
html = html.replace(/<script>\s*tailwind\.config[\s\S]*?<\/script>/, '')

// 3. Swap the text/tailwindcss block for the compiled, self-contained CSS
html = html.replace(/<style type="text\/tailwindcss">[\s\S]*?<\/style>/, '<style>\n' + css + '\n</style>')

// 4. Inline the hero image as a data URI
html = html.replace('src="hero.jpg"', 'src="' + dataUri + '"')

// 5. Single-page: point checkout links at the pricing section
html = html.split('href="checkout.html"').join('href="#pricing"')

// 6. Inline the JS
html = html.replace('<script src="main.js"></script>', '<script>\n' + js + '\n</script>')

fs.writeFileSync(dir + 'lana-standalone.html', html)
console.log('standalone written: ' + (Buffer.byteLength(html) / 1024).toFixed(0) + ' KB')
console.log('still references cdn.tailwindcss: ' + html.includes('cdn.tailwindcss'))
console.log('still references hero.jpg src: ' + html.includes('src="hero.jpg"'))
console.log('still references main.js src: ' + html.includes('src="main.js"'))
console.log('checkout links remaining: ' + html.includes('checkout.html'))
