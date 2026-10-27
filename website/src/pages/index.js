import React, { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import catalog from '../data/catalog.json';

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const atlasMarkUrl = useBaseUrl('/img/atlas-mark.svg');
  const isZh = i18n.currentLocale === 'zh-CN';
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

  const copy = isZh ? {
    eyebrow: '开放的医学分割知识库',
    titleA: '找到数据。', titleB: '理解模型。',
    intro: '汇总公开医学图像分割数据集与交互式模型，直达官方来源、论文、代码、权重和运行指南。',
    exploreData: '浏览数据集', exploreModels: '浏览模型',
    searchLabel: '搜索数据集与模型', searchPlaceholder: '试试 BraTS、nnInteractive、CT…',
    all: '全部', datasets: '数据集', models: '模型', results: '条目',
    noResults: '没有找到匹配的条目。试试其他关键词。',
    datasetDesc: '官方获取入口、数据划分、标签可用性、许可与论文。',
    modelDesc: '原始项目、论文、权重、环境配置与推理入口。',
    datasetEyebrow: '数据资源', modelEyebrow: '方法与工具',
    browse: '打开目录', sourceNote: '以原始来源为准 · 不托管第三方数据、代码或权重',
    itemDataset: '数据集', itemModel: '模型',
  } : {
    eyebrow: 'An open atlas for medical segmentation',
    titleA: 'Find the data.', titleB: 'Know the models.',
    intro: 'A curated guide to public medical segmentation datasets and interactive models, with direct links to official sources, papers, code, weights, and run instructions.',
    exploreData: 'Explore datasets', exploreModels: 'Explore models',
    searchLabel: 'Search datasets and models', searchPlaceholder: 'Try BraTS, nnInteractive, CT…',
    all: 'All', datasets: 'Datasets', models: 'Models', results: 'entries',
    noResults: 'No matching entries. Try another search.',
    datasetDesc: 'Official access, dataset splits, label availability, reuse terms, and papers.',
    modelDesc: 'Original projects, papers, weights, setup notes, and inference entry points.',
    datasetEyebrow: 'Data resources', modelEyebrow: 'Methods & tools',
    browse: 'Browse catalog', sourceNote: 'Source-first · No third-party data, code, or weights are hosted here',
    itemDataset: 'Dataset', itemModel: 'Model',
  };

  return (
    <Layout
      title={isZh ? '医学分割资料库' : 'Medical Segmentation Atlas'}
      description={copy.intro}>
      <main className="atlas-home">
        <section className="atlas-hero">
          <div className="atlas-hero-glow atlas-hero-glow-one" />
          <div className="atlas-hero-glow atlas-hero-glow-two" />
          <div className="container atlas-hero-inner">
            <div className="atlas-hero-copy">
              <p className="atlas-eyebrow"><span className="atlas-eyebrow-dot" />{copy.eyebrow}</p>
              <h1>{copy.titleA}<br /><span>{copy.titleB}</span></h1>
              <p className="atlas-hero-intro">{copy.intro}</p>
              <div className="atlas-hero-actions">
                <Link className="button button--primary button--lg atlas-button-primary" to="/docs/datasets">{copy.exploreData}<span aria-hidden="true">↗</span></Link>
                <Link className="button button--secondary button--lg atlas-button-secondary" to="/docs/models">{copy.exploreModels}<span aria-hidden="true">↗</span></Link>
              </div>
              <div className="atlas-hero-note"><span aria-hidden="true">✳</span>{copy.sourceNote}</div>
            </div>
            <div className="atlas-hero-art" aria-hidden="true">
              <div className="atlas-orbit orbit-outer" />
              <div className="atlas-orbit orbit-inner" />
              <div className="atlas-art-card art-card-data"><span className="art-icon">◈</span><span>DATA</span><small>curated sources</small></div>
              <div className="atlas-art-card art-card-prompt"><span className="art-icon">⌖</span><span>PROMPT</span><small>interactive tools</small></div>
              <div className="atlas-art-core"><img src={atlasMarkUrl} alt="" /></div>
              <span className="atlas-art-node node-one" /><span className="atlas-art-node node-two" /><span className="atlas-art-node node-three" />
            </div>
          </div>
          <div className="atlas-hero-bottom" />
        </section>

        <section className="container atlas-content">
          <div className="atlas-stat-row" aria-label={isZh ? '资料库规模' : 'Atlas collection size'}>
            <div className="atlas-stat"><strong>{catalog.datasets.length.toString().padStart(2, '0')}</strong><span>{isZh ? '数据集指南' : 'dataset guides'}</span></div>
            <div className="atlas-stat-divider" />
            <div className="atlas-stat"><strong>{catalog.models.length.toString().padStart(2, '0')}</strong><span>{isZh ? '模型指南' : 'model guides'}</span></div>
            <div className="atlas-stat-divider" />
            <div className="atlas-stat atlas-stat-note"><strong>EN <i>+</i> 中文</strong><span>{isZh ? '双语资料' : 'bilingual guides'}</span></div>
          </div>

          <div className="atlas-section-heading">
            <div><p className="atlas-section-kicker">{isZh ? '快速开始' : 'Start exploring'}</p><h2>{isZh ? '从你关心的内容开始' : 'Start with what you need'}</h2></div>
            <p>{isZh ? '搜索名称或主题，快速定位对应指南。' : 'Search a name or topic to jump straight to a guide.'}</p>
          </div>

          <div className="atlas-collection-grid">
            <Link className="atlas-collection-card atlas-data-card" to="/docs/datasets">
              <span className="atlas-card-icon">▤</span>
              <span className="atlas-collection-count">{catalog.datasets.length} {isZh ? '个指南' : 'guides'}</span>
              <span className="atlas-collection-eyebrow">{copy.datasetEyebrow}</span>
              <strong>{copy.datasets}</strong>
              <span className="atlas-collection-description">{copy.datasetDesc}</span>
              <span className="atlas-collection-link">{copy.browse}<span aria-hidden="true">↗</span></span>
            </Link>
            <Link className="atlas-collection-card atlas-model-card" to="/docs/models">
              <span className="atlas-card-icon">⌘</span>
              <span className="atlas-collection-count">{catalog.models.length} {isZh ? '个指南' : 'guides'}</span>
              <span className="atlas-collection-eyebrow">{copy.modelEyebrow}</span>
              <strong>{copy.models}</strong>
              <span className="atlas-collection-description">{copy.modelDesc}</span>
              <span className="atlas-collection-link">{copy.browse}<span aria-hidden="true">↗</span></span>
            </Link>
          </div>

          <div className="atlas-search-section">
            <div className="atlas-search-heading">
              <div><p className="atlas-section-kicker">{isZh ? '资料库' : 'The atlas'}</p><h2>{isZh ? '查找指南' : 'Find a guide'}</h2></div>
              <span className="atlas-result-total">{visibleItems.length} {copy.results}</span>
            </div>
            <label className="atlas-search-box">
              <span className="atlas-search-icon" aria-hidden="true">⌕</span>
              <span className="visually-hidden">{copy.searchLabel}</span>
              <input ref={searchInputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} type="search" />
              <kbd>/</kbd>
            </label>
            <div className="atlas-filter-row" role="group" aria-label={isZh ? '筛选条目' : 'Filter entries'}>
              {[
                ['all', copy.all], ['dataset', copy.datasets], ['model', copy.models],
              ].map(([key, label]) => <button key={key} type="button" className={`atlas-filter ${filter === key ? 'is-active' : ''}`} onClick={() => setFilter(key)}>{label}</button>)}
            </div>
            {visibleItems.length ? <div className="atlas-result-grid">
              {visibleItems.map((item) => <Link className="atlas-result-card" to={item.path} key={`${item.kind}-${item.slug}`}>
                <span className={`atlas-result-icon ${item.kind}`}>{item.kind === 'dataset' ? '▤' : '⌘'}</span>
                <span className="atlas-result-body"><span className="atlas-result-kind">{item.kind === 'dataset' ? copy.itemDataset : copy.itemModel}</span><strong>{isZh ? item.titleZh : item.titleEn}</strong><small>{isZh ? item.subtitleZh || item.subtitleEn : item.subtitleEn}</small></span>
                <span className="atlas-result-arrow" aria-hidden="true">↗</span>
              </Link>)}
            </div> : <p className="atlas-empty-state">{copy.noResults}</p>}
          </div>

          <div className="atlas-citation-note"><span aria-hidden="true">ⓘ</span><p>{isZh ? '各条目均链接至原始数据集、论文或模型项目。下载、标签状态与许可请以对应官方来源为准。' : 'Every guide links back to original dataset, paper, or model sources. Check the linked official source for current downloads, label status, and terms.'}</p></div>
        </section>
      </main>
    </Layout>
  );
}
