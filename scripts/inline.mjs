// Post-build step: inline the built JS and CSS directly into dist/index.html.
// Some networks block the separate /assets/*.js request while still serving the
// HTML document; delivering everything in one HTML response avoids that.
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const htmlPath = join(dist, 'index.html')
let html = readFileSync(htmlPath, 'utf8')

const readAsset = (url) => readFileSync(join(dist, url.replace(/^\//, '')), 'utf8')

// Inline the local stylesheet (href ending in .css — leaves remote font <link> alone).
html = html.replace(
  /<link\b[^>]*rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g,
  (_m, href) => `<style>${readAsset(href)}</style>`
)

// Drop modulepreload hints — the module is inlined now.
html = html.replace(/<link\b[^>]*rel="modulepreload"[^>]*>\s*/g, '')

// Inline the entry module script.
html = html.replace(
  /<script\b[^>]*type="module"[^>]*src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (_m, src) => {
    const js = readAsset(src).replace(/<\/script>/g, '<\\/script>')
    return `<script type="module">${js}</script>`
  }
)

// Sanity check: nothing local should still be referenced by URL.
if (/(?:src|href)="\/assets\/[^"]+\.(?:js|css)"/.test(html)) {
  throw new Error('inline.mjs: a local asset is still referenced by URL — inlining failed')
}

writeFileSync(htmlPath, html)
console.log('inline.mjs: inlined CSS + JS into dist/index.html')
