import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const source = await readFile(join(root, 'index.html'), 'utf8');
const routes = [
  ['about', 'About Icon Concrete | Hyderabad Readymix Since 2017', 'Learn about Icon Premier Readymix Concrete, a Hyderabad company established in 2017, and its local operating approach.'],
  ['services', 'Ready-Mix Concrete Services | Icon Concrete Hyderabad', 'Explore ready-mix concrete, pumping, residential and commercial delivery, transport and additives from Icon Concrete in Hyderabad.'],
  ['projects', 'Clients & Projects | Icon Concrete Hyderabad', 'Explore Icon Concrete client references and project photo placeholders. Project details and client permissions are marked for confirmation.'],
  ['plants', 'Batching Plants | Icon Concrete Hyderabad', 'Find Icon Concrete plant locations at Gandi Maisamma–Medchal Road and CBIT Post, Khanapur. Confirm delivery coverage for your project.'],
  ['contact', 'Contact Icon Concrete | Request a Quote in Hyderabad', 'Contact Icon Premier Readymix Concrete in Hyderabad. Call, email or prepare a WhatsApp quote request with project details.'],
  ['gallery', 'Project Gallery | Icon Concrete Hyderabad', 'Browse a filterable Icon Concrete project gallery. Photo placeholders will be replaced with approved plant and site images.'],
];

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

for (const [route, title, description] of routes) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  let html = source.replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDescription}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${safeDescription}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="https://icon-concrete-prototype.vercel.app/${route}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="https://icon-concrete-prototype.vercel.app/${route}" />`);
  const destination = join(root, route, 'index.html');
  await mkdir(join(root, route), { recursive: true });
  await writeFile(destination, html);
}
