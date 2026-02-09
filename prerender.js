/**
 * Prerender script — generates static HTML for each route.
 *
 * Run: npm run prerender
 *   (which first runs `vite build` for client + server bundles, then this script)
 *
 * How it works:
 *   1. Reads the client-built dist/index.html as a template.
 *   2. Imports the server bundle (dist/server/entry-server.js).
 *   3. For each route, calls render(url) to get HTML + head tags.
 *   4. Injects the rendered HTML and head tags into the template.
 *   5. Writes the result to dist/<route>/index.html (or dist/index.html for /).
 *
 * The output in dist/ is fully static and can be deployed to any static host
 * (Netlify, Vercel, Cloudflare Pages, S3, etc.) with a catch-all rewrite
 * rule that serves each directory's index.html.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  '/',
  '/services',
  '/how-it-works',
  '/deal',
  '/apply',
  '/about',
  '/cannabis',
  '/contractors',
  '/restaurants',
  '/reach-us',
];

async function prerender() {
  // Read client template
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Import server render function
  const serverEntryPath = path.resolve(__dirname, 'dist/server/entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    console.error('dist/server/entry-server.js not found. Run "vite build --ssr src/entry-server.jsx --outDir dist/server" first.');
    process.exit(1);
  }
  const { render } = await import(serverEntryPath);

  for (const route of routes) {
    const { html, headTags } = render(route);

    // Inject rendered HTML into the root div
    let page = template.replace('<!--ssr-outlet-->', html);

    // Inject head tags (meta, title, etc.)
    page = page.replace('<!--helmet-tags-->', headTags);

    // Determine output path
    const filePath = route === '/'
      ? path.resolve(__dirname, 'dist/index.html')
      : path.resolve(__dirname, `dist${route}/index.html`);

    // Ensure directory exists
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    // Write the prerendered file
    fs.writeFileSync(filePath, page);
    console.log(`  Prerendered: ${route} -> ${path.relative(__dirname, filePath)}`);
  }

  console.log('\nAll routes prerendered successfully.');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
