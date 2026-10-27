import React, { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import catalog from '../data/catalog.json';

const FEATURED = [
  ['dataset', 'brats-2021'],
  ['dataset', 'amos'],
  ['model', 'nninteractive'],
  ['model', 'sam-3'],
];

const FEATURED_COPY = {
  'dataset:brats-2021': {
    en: ['BRAIN MRI', 'Glioma benchmark · pre-operative MRI'],
    zh: ['脑部 MRI', '胶质瘤基准 · 术前 MRI'],
  },
  'dataset:amos': {
    en: ['ABDOMINAL IMAGING', 'Multi-organ segmentation · CT + MRI'],
    zh: ['腹部影像', '多器官分割 · CT + MRI'],
  },
  'model:nninteractive': {
    en: ['SPATIAL PROMPTS', '3D interaction · points, boxes, lasso'],
    zh: ['空间提示', '3D 交互 · 点、框、套索'],
  },
  'model:sam-3': {
    en: ['TEXT + VISUAL PROMPTS', '2D and video · concepts and visual prompts'],
    zh: ['文本与视觉提示', '2D 与视频 · 概念和视觉提示'],
  },
};

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-CN';
  const atlasVisualUrl = useBaseUrl('/img/atlas-scan.svg');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const searchInputRef = useRef(null);

  useEffect(() => {
    const focusSearch = (event) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;
      event.preventDefault();
      searchInputRef.current?.focus();
    };
    window.addEventListener('keydown', focusSearch);
    return () => window.removeEventListener('keydown', focusSearch);
  }, []);

  const allItems = useMemo(() => [
    ...catalog.datasets.map((item) => ({ ...item, kind: 'dataset', path: `/docs/datasets/${item.slug}` })),
    ...catalog.models.map((item) => ({ ...item, kind: 'model', path: `/docs/models/${item.slug}` })),
  ], []);

  const visibleItems = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return allItems.filter((item) => {
      const matchesKind = filter === 'all' || item.kind === filter;
      const text = `${item.titleEn} ${item.titleZh} ${item.subtitleEn} ${item.subtitleZh} ${item.slug}`.toLocaleLowerCase();
      return matchesKind && (!needle || text.includes(needle));
    });
  }, [allItems, filter, query]);

  const featuredItems = useMemo(() => FEATURED.map(([kind, slug]) => allItems.find((item) => item.kind === kind && item.slug === slug)).filter(Boolean), [allItems]);
  const isSearching = Boolean(query.trim()) || filter !== 'all';
  const shownItems = isSearching ? visibleItems.slice(0, 8) : featuredItems;

  const copy = isZh ? {
    eyebrow: '医学图像分割 · 开放资料库',
    titleA: '数据集与模型，', titleB: '一站式探索。',
    intro: '从官方数据入口与评测划分，到交互式方法、论文、权重和运行指南，沿着可核查的来源快速查找。',
    exploreData: '浏览数据集', exploreModels: '浏览模型',
    metricDatasets: '数据集指南', metricModels: '模型指南', metricLanguages: '中英双语',
    searchTitle: '查找资料', searchNote: '按名称、模态或提示方式搜索',
    searchLabel: '搜索数据集与模型', searchPlaceholder: '试试 BraTS、CT、point prompts…',
    all: '全部', datasets: '数据集', models: '模型', results: '条匹配',
    initialCount: `共 ${allItems.length} 个指南`, noResults: '没有找到匹配条目，换个关键词试试。',
    featured: '精选入口', featuredTitle: '从这些指南开始', featuredNote: '常用数据集与交互方法',
    browse: '查看完整目录',
    howTitle: '每份指南都回答三个问题',
    step1Title: '数据从哪里来？', step1Text: '查找官方入口、发布方、数据划分与标签可用性。',
    step2Title: '方法怎样交互？', step2Text: '了解支持的模态、提示类型、论文版本与官方代码。',
    step3Title: '如何复现运行？', step3Text: '查看权重、环境依赖、推理入口和许可说明。',
    note: '资料优先链接至官方发布方与原始论文。数据、代码和权重由原项目托管；使用时请以来源页面的当前说明为准。',
    itemDataset: '数据集', itemModel: '模型',
  } : {
    eyebrow: 'MEDICAL IMAGING · OPEN RESEARCH ATLAS',
    titleA: 'Datasets and models,', titleB: 'mapped together.',
    intro: 'Move from official data access and evaluation splits to interactive methods, papers, weights, and run guides through source-linked pages.',
    exploreData: 'Explore datasets', exploreModels: 'Explore models',
    metricDatasets: 'dataset guides', metricModels: 'model guides', metricLanguages: 'EN + 中文',
    searchTitle: 'Find a guide', searchNote: 'Search by name, modality, or prompt type',
    searchLabel: 'Search datasets and models', searchPlaceholder: 'Try BraTS, CT, point prompts…',
    all: 'All', datasets: 'Datasets', models: 'Models', results: 'matches',
    initialCount: `${allItems.length} guides`, noResults: 'No matching entries. Try another search.',
    featured: 'START HERE', featuredTitle: 'Selected guides', featuredNote: 'A few useful places to begin',
    browse: 'Browse full catalog',
    howTitle: 'Each guide answers three questions',
    step1Title: 'Where does the data come from?', step1Text: 'Find official access, organizers, data splits, and label availability.',
    step2Title: 'How does the method interact?', step2Text: 'Review modalities, prompt types, paper versions, and official code.',
    step3Title: 'How can I run it?', step3Text: 'Check weights, environment requirements, inference entry points, and licenses.',
    note: 'Guides link to official releases and original papers. Data, code, and weights remain with their source projects; follow the current terms on those pages.',
    itemDataset: 'DATASET', itemModel: 'MODEL',
  };

  return (
    <Layout
      title={isZh ? '医学图像分割资料库' : 'Interactive Medical Segmentation Atlas'}
      description={copy.intro}>
      <main className="atlas-home">
        <section className="atlas-hero">
          <div className="atlas-hero-grid" aria-hidden="true" />
          <div className="container atlas-hero-inner">
            <div className="atlas-hero-copy">
              <p className="atlas-eyebrow"><span className="atlas-eyebrow-mark" />{copy.eyebrow}</p>
              <h1>{copy.titleA}<br /><span>{copy.titleB}</span></h1>
              <p className="atlas-hero-intro">{copy.intro}</p>
              <div className="atlas-hero-actions">
                <Link className="atlas-button atlas-button-primary" to="/docs/datasets">{copy.exploreData}<span aria-hidden="true">↗</span></Link>
                <Link className="atlas-button atlas-button-quiet" to="/docs/models">{copy.exploreModels}<span aria-hidden="true">↗</span></Link>
              </div>
              <div className="atlas-hero-metrics" aria-label={isZh ? '资料库规模' : 'Atlas collection size'}>
                <div><strong>{String(catalog.datasets.length).padStart(2, '0')}</strong><span>{copy.metricDatasets}</span></div>
                <i />
                <div><strong>{String(catalog.models.length).padStart(2, '0')}</strong><span>{copy.metricModels}</span></div>
                <i />
                <div><strong>EN<span className="atlas-plus">+</span>中</strong><span>{copy.metricLanguages}</span></div>
              </div>
            </div>
            <div className="atlas-hero-visual">
              <img src={atlasVisualUrl} alt={isZh ? '脑部 MRI 与分割轮廓的示意图' : 'Illustration of an MRI slice with segmentation contours'} />
              <span className="atlas-visual-caption">{isZh ? '示意图 · 非真实医学影像' : 'Illustration · not a clinical image'}</span>
            </div>
          </div>
          <div className="atlas-hero-bottom" />
        </section>

        <section className="container atlas-main-content">
          <div className="atlas-explore-heading">
            <div><p className="atlas-kicker">{isZh ? '浏览资料库' : 'EXPLORE THE ATLAS'}</p><h2>{isZh ? '按你的研究问题开始' : 'Start with your research question'}</h2></div>
            <p>{isZh ? '数据集与方法指南并列整理，原始来源一键可达。' : 'Dataset and method guides sit side by side, with their original sources one click away.'}</p>
          </div>

          <div className="atlas-collection-grid">
            <Link className="atlas-collection-card atlas-data-card" to="/docs/datasets">
              <span className="atlas-collection-icon" aria-hidden="true">01</span>
              <span className="atlas-collection-topline">{copy.metricDatasets}</span>
              <strong>{copy.datasets}</strong>
              <span className="atlas-collection-description">{isZh ? '官方下载与访问 · 挑战赛划分 · 标签状态 · 数据集论文' : 'Official access · challenge splits · label status · dataset papers'}</span>
              <span className="atlas-collection-tags"><i>Brain MRI</i><i>CT</i><i>CT + MRI</i></span>
              <span className="atlas-collection-link">{copy.browse}<b aria-hidden="true">↗</b></span>
              <span className="atlas-card-orbit" aria-hidden="true" />
            </Link>
            <Link className="atlas-collection-card atlas-model-card" to="/docs/models">
              <span className="atlas-collection-icon" aria-hidden="true">02</span>
              <span className="atlas-collection-topline">{copy.metricModels}</span>
              <strong>{copy.models}</strong>
              <span className="atlas-collection-description">{isZh ? '交互提示方式 · 原始论文与代码 · 权重 · 推理入口' : 'Prompt styles · original papers and code · weights · inference entry points'}</span>
              <span className="atlas-collection-tags"><i>Points</i><i>Text</i><i>Agentic</i></span>
              <span className="atlas-collection-link">{copy.browse}<b aria-hidden="true">↗</b></span>
              <span className="atlas-card-orbit" aria-hidden="true" />
            </Link>
          </div>

          <section className="atlas-search-section" aria-labelledby="atlas-search-title">
            <div className="atlas-section-heading">
              <div><p className="atlas-kicker">{copy.searchTitle}</p><h2 id="atlas-search-title">{copy.searchNote}</h2></div>
              <span className="atlas-total-count">{isSearching ? `${visibleItems.length} ${copy.results}` : copy.initialCount}</span>
            </div>
            <label className="atlas-search-box">
              <span className="atlas-search-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg></span>
              <span className="visually-hidden">{copy.searchLabel}</span>
              <input ref={searchInputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} type="search" />
              <kbd>/</kbd>
            </label>
            <div className="atlas-filter-row" role="group" aria-label={isZh ? '筛选条目' : 'Filter entries'}>
              {[
                ['all', copy.all], ['dataset', copy.datasets], ['model', copy.models],
              ].map(([key, label]) => <button key={key} type="button" className={`atlas-filter ${filter === key ? 'is-active' : ''}`} onClick={() => setFilter(key)} aria-pressed={filter === key}>{label}</button>)}
            </div>
            {shownItems.length ? <div className="atlas-result-grid">
              {shownItems.map((item) => {
                const meta = FEATURED_COPY[`${item.kind}:${item.slug}`];
                const label = meta ? meta[isZh ? 'zh' : 'en'][0] : (item.kind === 'dataset' ? copy.itemDataset : copy.itemModel);
                const summary = meta ? meta[isZh ? 'zh' : 'en'][1] : (isZh ? item.subtitleZh || item.subtitleEn : item.subtitleEn);
                return <Link className="atlas-result-card" to={item.path} key={`${item.kind}-${item.slug}`}>
                  <span className={`atlas-result-index ${item.kind}`} aria-hidden="true">{item.kind === 'dataset' ? 'D' : 'M'}</span>
                  <span className="atlas-result-body"><span className="atlas-result-kind">{label}</span><strong>{isZh ? item.titleZh : item.titleEn}</strong><small>{summary}</small></span>
                  <span className="atlas-result-arrow" aria-hidden="true">↗</span>
                </Link>;
              })}
            </div> : <p className="atlas-empty-state">{copy.noResults}</p>}
            {!isSearching && <p className="atlas-featured-caption">{copy.featured} <span>·</span> {copy.featuredTitle}</p>}
            <div className="atlas-directory-links">
              <Link to="/docs/datasets">{copy.datasets}<span>{catalog.datasets.length}</span><b aria-hidden="true">↗</b></Link>
              <Link to="/docs/models">{copy.models}<span>{catalog.models.length}</span><b aria-hidden="true">↗</b></Link>
            </div>
          </section>

          <section className="atlas-reading-path">
            <div className="atlas-reading-heading"><p className="atlas-kicker">{isZh ? '阅读路径' : 'HOW TO USE THE ATLAS'}</p><h2>{copy.howTitle}</h2></div>
            <div className="atlas-steps">
              <article><span>01</span><h3>{copy.step1Title}</h3><p>{copy.step1Text}</p></article>
              <article><span>02</span><h3>{copy.step2Title}</h3><p>{copy.step2Text}</p></article>
              <article><span>03</span><h3>{copy.step3Title}</h3><p>{copy.step3Text}</p></article>
            </div>
          </section>

          <div className="atlas-source-note"><span aria-hidden="true">↗</span><p>{copy.note}</p><a href="https://github.com/CuiXiangbo7/interactive-medseg-atlas" aria-label="GitHub repository">GitHub ↗</a></div>
        </section>
      </main>
    </Layout>
  );
}
