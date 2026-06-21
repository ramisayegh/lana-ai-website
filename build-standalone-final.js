const fs = require('fs')
const dir = '/Users/rami/Desktop/Lana Ai Website/html/'

let html = fs.readFileSync(dir + 'index.html', 'utf8')
const css = fs.readFileSync(dir + '_compiled.css', 'utf8')
const js = fs.readFileSync(dir + 'main.js', 'utf8')
const imgB64 = fs.readFileSync(dir + 'hero-web.jpg').toString('base64')
const dataUri = 'data:image/jpeg;base64,' + imgB64

// 1. Remove ALL external resource links (fonts, preconnect)
html = html.replace(/<link[^>]*googleapis[^>]*>/g, '')
html = html.replace(/<link[^>]*gstatic[^>]*>/g, '')

// 2. Drop Tailwind Play CDN
html = html.replace('<script src="https://cdn.tailwindcss.com"></script>', '')

// 3. Drop inline tailwind.config
html = html.replace(/<script>\s*tailwind\.config[\s\S]*?<\/script>/, '')

// 4. Swap text/tailwindcss for compiled CSS (with system font overrides)
const systemFontOverride = `
<style>
:root {
  --font-inter: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-grotesk: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-mono: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
}
</style>
`
html = html.replace(/<style type="text\/tailwindcss">[\s\S]*?<\/style>/, systemFontOverride + '<style>\n' + css + '\n</style>')

// 5. Inline hero image
html = html.replace('src="hero.jpg"', 'src="' + dataUri + '"')

// 6. Point checkout links at pricing
html = html.split('href="checkout.html"').join('href="#pricing"')

// 7. Inline JS
html = html.replace('<script src="main.js"></script>', '<script>\n' + js + '\n</script>')

fs.writeFileSync(dir + 'lana-final.html', html)
console.log('final written: ' + (Buffer.byteLength(html) / 1024).toFixed(0) + ' KB')
console.log('external fonts remaining: ' + /googleapis/.test(html))
console.log('cdn remaining: ' + /cdn\.tailwindcss/.test(html))
console.log('hero inlined: ' + html.includes('data:image/jpeg'))
