const fs = require('fs')
const dir = '/Users/rami/Desktop/Lana Ai Website/html/'

let html = fs.readFileSync(dir + 'index.html', 'utf8')
const css = fs.readFileSync(dir + '_compiled.css', 'utf8')
const js = fs.readFileSync(dir + 'main.js', 'utf8')

// 1. Remove ALL external resource links
html = html.replace(/<link[^>]*googleapis[^>]*>/g, '')
html = html.replace(/<link[^>]*gstatic[^>]*>/g, '')

// 2. Drop Tailwind CDN
html = html.replace('<script src="https://cdn.tailwindcss.com"></script>', '')
html = html.replace(/<script>\s*tailwind\.config[\s\S]*?<\/script>/, '')

// 3. Swap CSS with system font override
const fontOverride = `<style>:root{--font-inter:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;--font-grotesk:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;--font-mono:ui-monospace,'SF Mono',monospace;}</style>`
html = html.replace(/<style type="text\/tailwindcss">[\s\S]*?<\/style>/, fontOverride + '<style>\n' + css + '\n</style>')

// 4. Replace hero with gradient (no image)
html = html.replace(/<img[^>]*src="hero\.jpg"[^>]*>/, '<div style="position:absolute;inset:0;background:linear-gradient(135deg,#1a0533 0%,#06060d 40%,#1a0022 100%);"></div>')

// 5. Checkout links
html = html.split('href="checkout.html"').join('href="#pricing"')

// 6. Inline JS
html = html.replace('<script src="main.js"></script>', '<script>\n' + js + '\n</script>')

fs.writeFileSync(dir + 'lana-nodeps.html', html)
const size = Buffer.byteLength(html)
console.log('nodeps written: ' + (size/1024).toFixed(1) + ' KB')
console.log('googleapis:', html.includes('googleapis'))
console.log('cdn:', html.includes('cdn.tailwind'))
console.log('size bytes:', size)
