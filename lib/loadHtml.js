import fs from 'fs';
import path from 'path';

export function loadHtml(relativePath) {
  const filePath = path.join(process.cwd(), 'dist', relativePath);
  const html = fs.readFileSync(filePath, 'utf8');
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const head = headMatch ? headMatch[1] : '';
  const body = bodyMatch ? bodyMatch[1] : html;
  const titleMatch = head.match(/<title>([^<]*)<\/title>/i);
  const descMatch = head.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  const canonicalMatch = head.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i);
  return {
    title: titleMatch ? titleMatch[1] : 'Timetrack',
    description: descMatch ? descMatch[1] : '',
    canonical: canonicalMatch ? canonicalMatch[1] : '',
    body,
  };
}
