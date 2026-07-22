// Post-build step: inline the built JS/CSS AND local images into dist/index.html.
// Some networks serve the HTML document but block every *separate* request
// (the JS bundle, image files, etc). Delivering everything inside the one HTML
// response that already works makes the whole site load on those networks.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const htmlPath = join(dist, 'index.html')
let html = readFileSync(htmlPath, 'utf8')

const readAsset = (url) => readFileSync(join(dist, url.replace(/^\//, '')), 'utf8')

// --- Inline the local stylesheet (leaves the remote font <link> alone) ---
html = html.replace(
  /<link\b[^>]*rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g,
  (_m, href) => `<style>${readAsset(href)}</style>`
)

// --- Drop modulepreload hints — the module is inlined now ---
html = html.replace(/<link\b[^>]*rel="modulepreload"[^>]*>\s*/g, '')

// --- Inline the entry module script ---
html = html.replace(
  /<script\b[^>]*type="module"[^>]*src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (_m, src) => {
    const js = readAsset(src).replace(/<\/script>/g, '<\\/script>')
    return `<script type="module">${js}</script>`
  }
)

if (/(?:src|href)="\/assets\/[^"]+\.(?:js|css)"/.test(html)) {
  throw new Error('inline.mjs: a local asset is still referenced by URL — inlining failed')
}

// --- Inline local media (images, icons, favicon) as data URIs ---
const MIME = {
  '.svg': 'image/svg+xml',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
}
const extOf = (f) => f.slice(f.lastIndexOf('.')).toLowerCase()

const mediaPaths = []
for (const dir of ['images', 'icons']) {
  const abs = join(dist, dir)
  if (existsSync(abs)) for (const f of readdirSync(abs)) mediaPaths.push(`/${dir}/${f}`)
}
if (existsSync(join(dist, 'favicon.svg'))) mediaPaths.push('/favicon.svg')

let inlined = 0
for (const p of mediaPaths) {
  const type = MIME[extOf(p)]
  if (!type || !html.includes(p)) continue
  const b64 = readFileSync(join(dist, p.replace(/^\//, ''))).toString('base64')
  html = html.split(p).join(`data:${type};base64,${b64}`)
  inlined++
}

writeFileSync(htmlPath, html)
console.log(`inline.mjs: inlined CSS + JS and ${inlined} local media files into dist/index.html`)
