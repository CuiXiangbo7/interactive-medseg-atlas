import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const websiteDir = path.resolve(scriptDir, '..');
const repoDir = path.resolve(websiteDir, '..');
const docsDir = path.join(websiteDir, 'docs');
const zhDocsDir = path.join(websiteDir, 'i18n/zh-CN/docusaurus-plugin-content-docs/current');
const generated = { datasets: [], models: [] };

function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

function listDirs(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'en'));
}

function slugify(value) {
  return value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function plainText(value) {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/\*\*|__|`/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function getTitle(markdown, fallback) {
  const htmlTitle = markdown.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const mdTitle = markdown.match(/^#\s+(.+)$/m)?.[1];
  return plainText(htmlTitle ?? mdTitle ?? fallback);
}

function getSubtitle(markdown) {
  const htmlSubtitle = markdown.match(/<h1\b[^>]*>[\s\S]*?<\/h1>\s*<p\b[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<\/p>/i)?.[1];
  if (htmlSubtitle) return plainText(htmlSubtitle);
  const lines = markdown.split('\n');
  const h1 = lines.findIndex((line) => /^#\s+/.test(line));
  for (const line of lines.slice(h1 + 1)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('<p align="center"><strong>English') || trimmed.startsWith('<p align="center"><strong>简体中文')) continue;
    if (trimmed.startsWith('<p align="center"><img') || trimmed.startsWith('<p align="center"><a')) continue;
    if (trimmed.startsWith('<h1') || trimmed.startsWith('#')) continue;
    if (trimmed.startsWith('>')) return plainText(trimmed.replace(/^>\s*/, ''));
    if (trimmed.startsWith('**')) return plainText(trimmed.replace(/^\*\*/, '').replace(/\*\*$/, ''));
  }
  return '';
}

function cleanLanguageSwitcher(markdown) {
  return markdown.replace(/<p\b[^>]*>\s*(?:<strong>)?(?:English|简体中文)[\s\S]*?README(?:\.zh-CN)?\.md[\s\S]*?<\/p>\s*/i, '');
}

function stagePath(sourceRepoPath) {
  const normalized = sourceRepoPath.replace(/\\/g, '/');
  const section = normalized.startsWith('datasets/') ? 'datasets' : normalized.startsWith('models/') ? 'models' : null;
  if (!section) return /^README(?:\.zh-CN)?\.md$/.test(normalized) ? 'overview.md' : null;
  if (new RegExp(`^${section}/README(?:\\.zh-CN)?\\.md$`).test(normalized)) return `${section}/index.md`;
  const match = normalized.match(new RegExp(`^${section}/(.+)/README(?:\\.zh-CN)?\\.md$`));
  return match ? `${section}/${match[1]}/index.md` : null;
}

function rewriteTarget(target, sourceRepoPath, stagedRelPath) {
  if (!target || /^(?:[a-z]+:|\/\/|#)/i.test(target)) return target;
  const match = target.match(/^([^?#]+)(\?[^#]*)?(#.*)?$/);
  if (!match) return target;
  let targetPath;
  try { targetPath = decodeURIComponent(match[1]); } catch { targetPath = match[1]; }
  if (targetPath === 'LICENSE' || targetPath === '../LICENSE') return 'https://github.com/CuiXiangbo7/interactive-medseg-atlas/blob/main/LICENSE';
  if (!/README(?:\.zh-CN)?\.md$/i.test(targetPath)) return target;
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(sourceRepoPath), targetPath));
  const stagedTarget = stagePath(resolved);
  if (!stagedTarget) return target;
  let rel = path.posix.relative(path.posix.dirname(stagedRelPath), stagedTarget);
  if (!rel.startsWith('.')) rel = `./${rel}`;
  rel = encodeURI(rel);
  return `${rel}${match[2] ?? ''}${match[3] ?? ''}`;
}

function addFrontmatter(markdown, { id, title, slug }, sourceRepoPath, stagedRelPath) {
  let content = cleanLanguageSwitcher(markdown);
  const internalLink = (_whole, lead, target, suffix) => `${lead}${rewriteTarget(target, sourceRepoPath, stagedRelPath)}${suffix}`;
  content = content.replace(/(\]\()([^\s)]+)(\))/g, internalLink);
  content = content.replace(/(href=["'])([^"']+)(["'])/g, internalLink);
  content = content.replace(/<img\b([^>]*?)(?<!\/)>(?!<\/img>)/gi, '<img$1 />');
  content = content.replace(/<br\s*>/gi, '<br />');
  const encodedSourcePath = sourceRepoPath.split('/').map(encodeURIComponent).join('/');
  const editUrl = `https://github.com/CuiXiangbo7/interactive-medseg-atlas/edit/main/${encodedSourcePath}`;
  const frontmatter = `---\nid: ${JSON.stringify(id)}\ntitle: ${JSON.stringify(title)}\nslug: ${JSON.stringify(slug)}\ncustom_edit_url: ${JSON.stringify(editUrl)}\n---\n\n`;
  return frontmatter + content.trimStart();
}

function writePage(sourceRepoPath, locale, id, title, slug) {
  const sourceFile = path.join(repoDir, sourceRepoPath);
  if (!fs.existsSync(sourceFile)) throw new Error(`Missing source page: ${sourceRepoPath}`);
  const stagedRelPath = stagePath(sourceRepoPath);
  const targetDir = locale === 'zh-CN' ? zhDocsDir : docsDir;
  const target = path.join(targetDir, stagedRelPath);
  const text = fs.readFileSync(sourceFile, 'utf8');
  ensureDir(target);
  fs.writeFileSync(target, addFrontmatter(text, { id, title, slug }, sourceRepoPath, stagedRelPath));
}

for (const locale of ['en', 'zh-CN']) {
  const suffix = locale === 'en' ? '' : '.zh-CN';
  const rootTitle = locale === 'en' ? 'Project overview' : '项目概览';
  writePage(`README${suffix}.md`, locale, 'project-overview', rootTitle, '/overview');

  for (const section of ['datasets', 'models']) {
    const sectionTitle = locale === 'en'
      ? (section === 'datasets' ? 'Dataset catalog' : 'Interactive model catalog')
      : (section === 'datasets' ? '数据集目录' : '交互式模型目录');
    writePage(`${section}/README${suffix}.md`, locale, `${section}-catalog`, sectionTitle, `/${section}`);
  }
}

for (const section of ['datasets', 'models']) {
  const names = listDirs(path.join(repoDir, section));
  for (const name of names) {
    const slug = slugify(name);
    const enSource = `${section}/${name}/README.md`;
    const zhSource = `${section}/${name}/README.zh-CN.md`;
    const enMarkdown = fs.readFileSync(path.join(repoDir, enSource), 'utf8');
    const zhMarkdown = fs.readFileSync(path.join(repoDir, zhSource), 'utf8');
    const titleEn = section === 'models' ? name : getTitle(enMarkdown, name);
    const titleZh = section === 'models' ? name : getTitle(zhMarkdown, titleEn);
    const subtitleEn = getSubtitle(enMarkdown);
    const subtitleZh = getSubtitle(zhMarkdown);
    const id = `${section === 'datasets' ? 'dataset' : 'model'}-${slug}`;
    const routeSlug = `/${section}/${slug}`;
    writePage(enSource, 'en', id, titleEn, routeSlug);
    writePage(zhSource, 'zh-CN', id, titleZh, routeSlug);
    generated[section].push({ slug, docId: `${section}/${name}/${id}`, titleEn, titleZh, subtitleEn, subtitleZh });
  }
}

const dataPath = path.join(websiteDir, 'src/data/catalog.json');
ensureDir(dataPath);
fs.writeFileSync(dataPath, `${JSON.stringify(generated, null, 2)}\n`);
console.log(`Synced ${generated.datasets.length} dataset guides and ${generated.models.length} model guides for en and zh-CN.`);
