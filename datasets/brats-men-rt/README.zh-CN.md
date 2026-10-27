<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 BraTS-MEN-RT 2024</h1>

<p align="center"><strong>脑膜瘤放疗靶区分割（meningioma radiotherapy target segmentation）· 增强 T1 MRI（post-contrast T1 MRI）</strong></p>

<p align="center">
<a href="https://www.synapse.org/Synapse:syn59059779"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.synapse.org/Synapse:syn53708249/wiki/627491"><img src="https://img.shields.io/badge/CHALLENGE-BraTS%202024-8b1e3f?style=flat-square" alt="相关挑战赛"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://doi.org/10.1038/s41597-026-06649-x"><img src="https://img.shields.io/badge/Scientific%20Data-2026-2455a4?style=flat-square" alt="Scientific Data 2026"></a>
<a href="https://doi.org/10.7303/syn59059779"><img src="https://img.shields.io/badge/Synapse%20DOI-10.7303%2Fsyn59059779-1f6feb?style=flat-square" alt="Synapse DOI 10.7303/syn59059779"></a>
<a href="https://arxiv.org/abs/2405.18383"><img src="https://img.shields.io/badge/arXiv-2405.18383-b31b1b?style=flat-square" alt="arXiv 2405.18383"></a>
</p>

| 基本信息 | |
| --- | --- |
| **队列** | 747 名患者，共 750 次 MRI 检查 |
| **输入** | 放疗计划用 3D 增强 T1 MRI |
| **目标** | 大体肿瘤体积（GTV），必要时包含术后高风险区域 |
| **机构来源** | 数据集论文报告了 7 家参与的学术中心：杜克大学（Duke University）、加州大学旧金山分校（University of California, San Francisco, UCSF）、纽约州立大学上州医科大学（SUNY Upstate Medical University）、华盛顿大学（University of Washington）、密苏里大学（University of Missouri）、伦敦国王学院（King's College London）和加州大学圣迭戈分校（University of California San Diego, UCSD）。[Scientific Data 论文](https://doi.org/10.1038/s41597-026-06649-x)。 |
| **官方来源** | [Synapse 数据集](https://www.synapse.org/Synapse:syn59059779) |

## 🗂️ 官方划分与标签可用性

| 队列 | 病例数 | 影像 | GTV 标签 |
| --- | ---: | --- | --- |
| 训练集 | 500 | 公开 | 公开 |
| 验证集 | 70 | 公开 | 挑战赛发布版本未提供 |
| 测试集 | 180 | 私有 | 私有 |

2026 年数据论文指出，570 例训练与验证影像及 500 例训练集 GTV 标注已经公开。为支持无偏评测，180 例测试集仍为私有。

## 🧬 数据与标注说明

该队列用于放疗计划，不同于术前、多序列的 BraTS-MEN 2023。影像保持原始方向和体素分辨率，不同中心的采集参数有所差异。分割目标只有一个 GTV 类别，并非多区域肿瘤标签图。

## 🔒 获取方式与使用条款

- [Synapse 官方数据集，DOI 10.7303/syn59059779](https://doi.org/10.7303/syn59059779)
- [数据集论文与获取步骤](https://doi.org/10.1038/s41597-026-06649-x)
- 请遵循 Synapse 注册要求、数据使用条款和对应版本的下载说明。

## 🏁 相关挑战赛

**BraTS-MEN-RT 2024** 使用每次检查对应的一例原始分辨率增强 T1 MRI，评估脑膜瘤放疗计划的大体肿瘤体积（GTV）分割。

- [官方挑战赛说明及数据门户](https://www.synapse.org/Synapse:syn53708249/wiki/627491) · [挑战赛论文](https://arxiv.org/abs/2405.18383) · [训练数据](https://www.synapse.org/Synapse:syn59059779)

## 📚 出版物与引用

LaBella et al. “The 2024 Brain Tumor Segmentation Challenge Meningioma Radiotherapy (BraTS-MEN-RT) dataset.” *Scientific Data*, vol. 13, no. 1, article 306, 2026. [DOI: 10.1038/s41597-026-06649-x](https://doi.org/10.1038/s41597-026-06649-x) · [PubMed: 41593091](https://pubmed.ncbi.nlm.nih.gov/41593091/).

- [Synapse dataset record, DOI: 10.7303/syn59059779（Synapse 数据集记录）](https://doi.org/10.7303/syn59059779)

数据论文描述了公开的数据发布；挑战赛期间的划分和标签情况在上方单独总结。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
