import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const hexoDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoDir = path.resolve(hexoDir, '..');
const sourceDir = path.join(hexoDir, 'source');
const rawBase = process.env.ATLAS_ROOT || '/interactive-medseg-atlas/hexo-preview/';
const siteRoot = ('/' + rawBase).replace(/\/+/g, '/').replace(/\/?$/, '/');
const generated = { datasets: [], models: [] };
const themeSource = path.join(hexoDir, "node_modules", "hexo-theme-butterfly");
const themeOverlay = path.join(hexoDir, "themes/butterfly");
fs.rmSync(themeOverlay, { recursive: true, force: true });
fs.cpSync(themeSource, themeOverlay, { recursive: true });
fs.copyFileSync(path.join(hexoDir, "overrides/sidebar.pug"), path.join(themeOverlay, "layout/includes/sidebar.pug"));

function ensureDir(file) { fs.mkdirSync(path.dirname(file), { recursive: true }); }
function listDirs(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, 'en'));
}
function slugify(value) {
  return value.normalize('NFKD').toLowerCase()
    .replace(/[\u0300-\u036f]/g, '').replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function plainText(value) {
  return String(value ?? '').replace(/<[^>]*>/g, '').replace(/\*\*|__/g, '')
    .replace(new RegExp(String.fromCharCode(96), 'g'), '')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ').trim();
}
function getTitle(markdown, fallback) {
  const htmlTitle = markdown.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const mdTitle = markdown.match(/^#\s+(.+)$/m)?.[1];
  return plainText(htmlTitle ?? mdTitle ?? fallback);
}
function getSubtitle(markdown) {
  const subtitle = markdown.match(/<h1\b[^>]*>[\s\S]*?<\/h1>\s*<p\b[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<\/p>/i)?.[1];
  if (subtitle) return plainText(subtitle);
  const lines = markdown.split('\n');
  const h1 = lines.findIndex((line) => /^#\s+/.test(line));
  for (const line of lines.slice(h1 + 1)) {
    const item = line.trim();
    if (!item || /README(?:\.zh-CN)?\.md/i.test(item)) continue;
    if (item.startsWith('<p align="center"><img') || item.startsWith('<p align="center"><a')) continue;
    if (item.startsWith('<h1') || item.startsWith('#')) continue;
    if (item.startsWith('>')) return plainText(item.replace(/^>\s*/, ''));
    if (item.startsWith('**')) return plainText(item.replace(/^\*\*/, '').replace(/\*\*$/, ''));
  }
  return '';
}
function siteUrl(route, locale = 'en') {
  const language = locale === 'zh-CN' ? 'zh-CN/' : '';
  return siteRoot + language + String(route || '').replace(/^\/+/, '');
}
function sourceLocale(file) { return /README\.zh-CN\.md$/i.test(file) ? 'zh-CN' : 'en'; }
function linkRoute(file) {
  const clean = file.replace(/\\/g, '/');
  if (/^README(?:\.zh-CN)?\.md$/i.test(clean)) return '';
  if (/^datasets\/README(?:\.zh-CN)?\.md$/i.test(clean)) return 'docs/datasets/';
  if (/^models\/README(?:\.zh-CN)?\.md$/i.test(clean)) return 'docs/models/';
  let match = clean.match(/^datasets\/(.+)\/README(?:\.zh-CN)?\.md$/i);
  if (match) return 'docs/datasets/' + slugify(match[1]) + '/';
  match = clean.match(/^models\/(.+)\/README(?:\.zh-CN)?\.md$/i);
  if (match) return 'docs/models/' + slugify(match[1]) + '/';
  return null;
}
function pageRoute(file, locale) {
  if (/^README(?:\.zh-CN)?\.md$/i.test(file)) return 'overview/';
  return linkRoute(file);
}
function rewriteTarget(target, currentSource) {
  if (!target || /^(?:[a-z]+:|\/\/|#)/i.test(target)) return target;
  const match = target.match(/^([^?#]+)(\?[^#]*)?(#.*)?$/);
  if (!match) return target;
  let decoded;
  try { decoded = decodeURIComponent(match[1]); } catch { decoded = match[1]; }
  if (decoded === 'LICENSE' || decoded === '../LICENSE') {
    return 'https://github.com/CuiXiangbo7/interactive-medseg-atlas/blob/main/LICENSE';
  }
  if (!/README(?:\.zh-CN)?\.md$/i.test(decoded)) return target;
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(currentSource), decoded));
  const locale = sourceLocale(resolved);
  const route = linkRoute(resolved);
  if (route === null) return target;
  return siteUrl(route, locale) + (match[2] ?? '') + (match[3] ?? '');
}
function cleanContent(markdown, sourcePath) {
  let content = markdown.replace(/<p\b[^>]*>[\s\S]{0,400}?README(?:\.zh-CN)?\.md[\s\S]*?<\/p>\s*/i, '');
  content = content.replace(/(\]\()([^\s)]+)(\))/g, (_all, lead, target, end) => lead + rewriteTarget(target, sourcePath) + end);
  content = content.replace(/(href=["'])([^"']+)(["'])/g, (_all, lead, target, end) => lead + rewriteTarget(target, sourcePath) + end);
  content = content.replace(/<img\b([^>]*?)(?<!\/)>(?!<\/img>)/gi, '<img$1 />').replace(/<br\s*>/gi, '<br />');
  const heading = content.match(/<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i);
  if (heading) content = content.replace(heading[0], '');
  else content = content.replace(/^#\s+.+\n+/, '');
  return content.trimStart();
}
function localizedSwitch(sourcePath) {
  const enPath = sourcePath.replace(/README\.zh-CN\.md$/i, 'README.md');
  const zhPath = sourcePath.replace(/README\.md$/i, 'README.zh-CN.md');
  const enRoute = linkRoute(enPath) ?? '';
  const zhRoute = linkRoute(zhPath) ?? '';
  return '<p class="atlas-language-switch"><a href="' + siteUrl(enRoute, 'en') + '">English</a><span aria-hidden="true"> · </span><a href="' + siteUrl(zhRoute, 'zh-CN') + '">简体中文</a></p>';
}
function frontmatter(title, permalink, locale, aside, type) {
  return [
    '---',
    'title: ' + JSON.stringify(title),
    'date: 2026-10-27 00:00:00',
    'updated: 2026-10-27 00:00:00',
    'permalink: ' + JSON.stringify(permalink),
    'layout: page',
    'lang: ' + locale,
    'aside: ' + String(Boolean(aside)),
    'toc: ' + String(Boolean(aside)),
    'top_img: false',
    'comments: false',
    'type: ' + type,
    '---',
    '',
  ].join('\n');
}
function writePage(sourcePath, locale, title, kind = 'guide') {
  const sourceFile = path.join(repoDir, sourcePath);
  if (!fs.existsSync(sourceFile)) throw new Error('Missing source page: ' + sourcePath);
  const route = pageRoute(sourcePath, locale);
  if (route === null) throw new Error('Cannot route source page: ' + sourcePath);
  const permalink = (locale === "zh-CN" ? "/zh-CN/" : "/") + route;
  const rel = (locale === 'zh-CN' ? 'zh-CN/' : '') + route + 'index.md';
  const out = path.join(sourceDir, rel);
  ensureDir(out);
  const body = localizedSwitch(sourcePath) + '\n\n' + cleanContent(fs.readFileSync(sourceFile, 'utf8'), sourcePath);
  fs.writeFileSync(out, frontmatter(title, permalink, locale, kind === 'guide', 'atlas-' + kind) + body + '\n');
}
function cardHtml(item, locale) {
  const title = locale === 'zh-CN' ? item.titleZh : item.titleEn;
  const summary = locale === 'zh-CN' ? (item.subtitleZh || item.subtitleEn) : item.subtitleEn;
  const group = item.kind === 'dataset' ? 'datasets/' : 'models/';
  const kindLabel = locale === 'zh-CN' ? (item.kind === 'dataset' ? '数据集' : '模型') : item.kind.toUpperCase();
  const search = [item.titleEn, item.titleZh, item.subtitleEn, item.subtitleZh, item.slug].join(' ').toLowerCase();
  return '<a class="atlas-result-card" href="' + siteUrl('docs/' + group + item.slug + '/', locale) + '" data-kind="' + item.kind + '" data-search="' + escapeHtml(search) + '">' +
    '<span class="atlas-result-index ' + item.kind + '" aria-hidden="true">' + (item.kind === 'dataset' ? 'D' : 'M') + '</span>' +
    '<span class="atlas-result-body"><span class="atlas-result-kind">' + escapeHtml(kindLabel) + '</span><strong>' + escapeHtml(title) + '</strong><small>' + escapeHtml(summary) + '</small></span>' +
    '<span class="atlas-result-arrow" aria-hidden="true">↗</span></a>';
}
function homePage(locale) {
  const zh = locale === 'zh-CN';
  const c = zh ? {
    eyebrow: '医学图像分割 · 研究资料库', titleA: '交互式医学图像分割', titleB: '研究资料库',
    intro: '集中查找公开数据集、交互式模型及其原始资料：论文、官方代码、权重、评测划分与运行说明。',
    data: '查看数据集', models: '浏览模型', dataMetric: '数据集指南', modelMetric: '模型指南', langMetric: '语言版本',
    explore: '探索资料库', heading: '从研究问题开始', exploreNote: '从数据来源到方法实现，沿着原始论文与官方项目继续查证。',
    find: '检索', searchNote: '按名称、模态或交互提示搜索', searchLabel: '搜索数据集与模型', placeholder: '例如 BraTS、CT、point prompts…',
    all: '全部', datasets: '数据集', modelsName: '模型', initialCount: '共 ' + (generated.datasets.length + generated.models.length) + ' 条记录',
    empty: '没有匹配记录，请更换关键词。',
    browse: '浏览目录',
    note: '页面提供来源信息与复现入口。数据、代码和权重由原项目托管，使用前请核对其最新说明与许可。',
  } : {
    eyebrow: 'MEDICAL IMAGING / RESEARCH INDEX', titleA: 'Interactive medical', titleB: 'segmentation atlas',
    intro: 'Find public datasets, interactive models, and the sources behind them: original papers, official code, weights, evaluation splits, and run guides.',
    data: 'Browse datasets', models: 'Explore models', dataMetric: 'dataset guides', modelMetric: 'model guides', langMetric: 'language versions',
    explore: 'EXPLORE', heading: 'Start with a research question', exploreNote: 'Follow each record from its source and paper to practical access and run details.',
    find: 'SEARCH', searchNote: 'Search by name, modality, or interaction prompt', searchLabel: 'Search datasets and models', placeholder: 'For example: BraTS, CT, point prompts…',
    all: 'All', datasets: 'Datasets', modelsName: 'Models', initialCount: (generated.datasets.length + generated.models.length) + ' records',
    empty: 'No matching records. Try another query.',
    browse: 'Browse directory',
    note: 'Pages collect source details and reproduction links. Data, code, and weights are hosted by the original projects; check their current documentation and license before use.',
  };
  const dataUrl = siteUrl('docs/datasets/', locale);
  const modelUrl = siteUrl('docs/models/', locale);
  const scanUrl = siteRoot + 'img/atlas-scan.svg';
  const scanAlt = zh ? '脑部 MRI 与分割区域的示意图' : 'Illustration of a brain MRI with segmentation masks';
  const scanCaption = zh ? '视觉示意 · 非真实患者影像' : 'Illustration · no patient image shown';
  const items = generated.datasets.concat(generated.models);
  const cards = items.map((item) => cardHtml(item, locale)).join('\n');
  const datasetCopy = zh ? '官方来源、机构、数据划分、标签状态与论文' : 'Official sources, institutions, splits, label status, and papers';
  const modelCopy = zh ? '交互方式、原始论文、代码、权重与推理说明' : 'Interaction types, papers, code, weights, and inference notes';
  const languageHome = '<div class="atlas-lang-home"><a href="' + siteUrl('', 'en') + '">English</a><span aria-hidden="true"> · </span><a href="' + siteUrl('', 'zh-CN') + '">简体中文</a></div>';
  const html = [
    '<main class="atlas-home" lang="' + locale + '">',
    '<section class="atlas-hero"><div class="container atlas-hero-inner">',
    '<div class="atlas-hero-copy"><p class="atlas-eyebrow"><span class="atlas-eyebrow-mark" aria-hidden="true"></span>' + c.eyebrow + '</p>',
    '<h1>' + c.titleA + '<br><span>' + c.titleB + '</span></h1><p class="atlas-hero-intro">' + c.intro + '</p>',
    '<div class="atlas-hero-actions"><a href="' + dataUrl + '">' + c.data + '<span aria-hidden="true">↗</span></a><a href="' + modelUrl + '">' + c.models + '<span aria-hidden="true">↗</span></a></div>',
    '</div><figure class="atlas-hero-visual"><img src="' + scanUrl + '" alt="' + scanAlt + '" fetchpriority="high"><figcaption>' + scanCaption + '</figcaption></figure></div>',
    '<dl class="container atlas-hero-metrics" aria-label="' + (zh ? '资料库规模' : 'Atlas collection') + '"><div><dt>' + c.dataMetric + '</dt><dd>' + generated.datasets.length + '</dd><small>' + (zh ? '来源与论文链接' : 'source-linked records') + '</small></div><div><dt>' + c.modelMetric + '</dt><dd>' + generated.models.length + '</dd><small>' + (zh ? '论文、代码与运行指南' : 'papers, code, and run guides') + '</small></div><div><dt>' + c.langMetric + '</dt><dd>EN / 中文</dd><small>' + (zh ? '逐页提供双语内容' : 'English and Chinese pages') + '</small></div></dl></section>',
    '<section class="container atlas-main-content">' + languageHome,
    '<div class="atlas-explore-heading"><div><p class="atlas-kicker">' + c.explore + '</p><h2>' + c.heading + '</h2></div><p>' + c.exploreNote + '</p></div>',
    '<div class="atlas-collection-grid"><a class="atlas-collection-card atlas-data-card" href="' + dataUrl + '"><span class="atlas-collection-index" aria-hidden="true">01</span><span class="atlas-collection-copy"><span class="atlas-collection-topline">' + generated.datasets.length + ' ' + c.dataMetric + '</span><strong>' + c.datasets + '</strong><span class="atlas-collection-description">' + datasetCopy + '</span></span><span class="atlas-collection-link">' + c.browse + '<b aria-hidden="true">↗</b></span></a>',
    '<a class="atlas-collection-card atlas-model-card" href="' + modelUrl + '"><span class="atlas-collection-index" aria-hidden="true">02</span><span class="atlas-collection-copy"><span class="atlas-collection-topline">' + generated.models.length + ' ' + c.modelMetric + '</span><strong>' + c.modelsName + '</strong><span class="atlas-collection-description">' + modelCopy + '</span></span><span class="atlas-collection-link">' + c.browse + '<b aria-hidden="true">↗</b></span></a></div>',
    '<section class="atlas-search-section"><div class="atlas-section-heading"><div><p class="atlas-kicker">' + c.find + '</p><h2>' + c.searchNote + '</h2></div><span class="atlas-total-count" aria-live="polite">' + c.initialCount + '</span></div>',
    '<label class="atlas-search-box"><span class="atlas-search-icon" aria-hidden="true">⌕</span><span class="visually-hidden">' + c.searchLabel + '</span><input type="search" placeholder="' + c.placeholder + '"><kbd>/</kbd></label>',
    '<div class="atlas-filter-row" role="group" aria-label="' + (zh ? '筛选条目' : 'Filter entries') + '"><button class="atlas-filter is-active" type="button" data-filter="all" aria-pressed="true">' + c.all + '</button><button class="atlas-filter" type="button" data-filter="dataset" aria-pressed="false">' + c.datasets + '</button><button class="atlas-filter" type="button" data-filter="model" aria-pressed="false">' + c.modelsName + '</button></div>',
    '<div class="atlas-result-grid">' + cards + '</div><p class="atlas-empty-state" hidden>' + c.empty + '</p></section>',
    '<div class="atlas-source-note"><p>' + c.note + '</p><a href="https://github.com/CuiXiangbo7/interactive-medseg-atlas">GitHub ↗</a></div></section>',
    '</main>',
  ].join('\n');
  const title = zh ? '医学图像分割资料库' : 'Interactive Medical Segmentation Atlas';
  const permalink = zh ? '/zh-CN/' : '/';
  const out = path.join(sourceDir, zh ? 'zh-CN/index.md' : 'index.md');
  ensureDir(out);
  fs.writeFileSync(out, frontmatter(title, permalink, locale, false, 'atlas') + html + '\n');
}

for (const target of ['docs', 'zh-CN/docs', 'overview.md', 'overview-zh-CN.md', 'index.md', 'zh-CN/index.md']) {
  fs.rmSync(path.join(sourceDir, target), { recursive: true, force: true });
}
for (const locale of ['en', 'zh-CN']) {
  const suffix = locale === 'en' ? '' : '.zh-CN';
  writePage('README' + suffix + '.md', locale, locale === 'en' ? 'Project overview' : '项目概览', 'overview');
  writePage('datasets/README' + suffix + '.md', locale, locale === 'en' ? 'Dataset catalog' : '数据集目录', 'catalog');
  writePage('models/README' + suffix + '.md', locale, locale === 'en' ? 'Interactive model catalog' : '交互式模型目录', 'catalog');
}
for (const section of ['datasets', 'models']) {
  for (const name of listDirs(path.join(repoDir, section))) {
    const enSource = section + '/' + name + '/README.md';
    const zhSource = section + '/' + name + '/README.zh-CN.md';
    const enMarkdown = fs.readFileSync(path.join(repoDir, enSource), 'utf8');
    const zhMarkdown = fs.readFileSync(path.join(repoDir, zhSource), 'utf8');
    const titleEn = section === 'models' ? name : getTitle(enMarkdown, name);
    const titleZh = section === 'models' ? name : getTitle(zhMarkdown, titleEn);
    const item = {
      kind: section === 'datasets' ? 'dataset' : 'model',
      slug: slugify(name),
      titleEn,
      titleZh,
      subtitleEn: getSubtitle(enMarkdown),
      subtitleZh: getSubtitle(zhMarkdown),
    };
    generated[section].push(item);
    writePage(enSource, 'en', titleEn, 'guide');
    writePage(zhSource, 'zh-CN', titleZh, 'guide');
  }
}
homePage('en');
homePage('zh-CN');
console.log('Synced ' + generated.datasets.length + ' dataset guides and ' + generated.models.length + ' model guides for en and zh-CN.');
