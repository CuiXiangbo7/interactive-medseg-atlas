<p align="center"><strong>简体中文</strong> | <a href="README.md">English</a></p>

<h1 align="center">🗂️ LGGMRISeg</h1>

<p align="center"><strong>Tumor · MRI</strong></p>

<p align="center">
<a href="https://www.kaggle.com/datasets/mateuszbuda/lgg-mri-segmentation/data"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://arxiv.org/html/2503.08373v1#bib.bib21"><img src="https://img.shields.io/badge/PAPER-2019-2455a4?style=flat-square" alt="数据集论文"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入模态** | MRI；采集方案和文件格式请查阅官方页面 |
| **文献条目影像数** | 110 幅；该条目数量与官方发布的完整队列规模分别记录 |
| **目标** | Tumor |
| **导航分类** | 脑与神经系统 |
| **官方来源** | [数据集/挑战记录](https://www.kaggle.com/datasets/mateuszbuda/lgg-mri-segmentation/data) |
| **来源记录标题** | Brain MRI segmentation \| Kaggle |

## 🧾 数据集简介

Kaggle 条目提供低级别胶质瘤病例的脑 MRI 和 FLAIR 异常区人工掩膜。底层 TCGA-LGG 影像集合及相关分割标签另由 TCIA 分别维护。
> **来源说明：**Kaggle 图像/掩膜包与 TCIA 影像集合、分割标签记录相关但属于不同发布记录。

论文条目影像数与官方发布范围分开记录。本图谱不镜像托管影像或掩膜文件。

## 🏷️ 分割目标与标签

| 项目 | 数据集信息 |
| --- | --- |
| 本条记录列出的目标 | Tumor |
| 标签定义 | 该数据集条目将 **Tumor** 列为分割目标。本次读取的公开入口页未显示完整类别 ID 表；类别编号和边界约定请以链接中的标签文件或数据说明为准。 |

## 🗂️ 官方发布与数据划分

本指南读取到的公开入口页正文未列出完整训练/验证/测试划分；不会根据文献条目影像数推断数据划分。

## ⬇️ 获取方式与使用条款

- [官方数据集或挑战页面](https://www.kaggle.com/datasets/mateuszbuda/lgg-mri-segmentation/data)。
- [TCIA 官方分割标签记录](https://www.cancerimagingarchive.net/analysis-result/brats-tcga-lgg/)。
- [TCIA 官方影像集合](https://www.cancerimagingarchive.net/collection/tcga-lgg/)。

- **使用条款：**本次读取的入口页正文未显示明确的数据许可。下载、再分发或商业使用前请核实链接来源中的条款。
- 本图谱不托管影像、掩膜或数据集压缩包。

## 📚 论文与引用

- [Buda et al., “Association of genomic subtypes of lower-grade gliomas with shape features automatically extracted by a deep learning algorithm.” Computers in biology and medicine, 109:218–225, 2019.](https://arxiv.org/html/2503.08373v1#bib.bib21)


如官方页面提供数据集专用引用和 DOI，请优先按该页面引用。一个数据集或任务可能对应多篇来源论文。

## 📑 文献条目记录

| 字段 | 条目所列内容 |
| --- | --- |
| 影像数 | 110 |
| 模态 | MRI |
| 目标 | Tumor |
| 数据入口 | [官方/来源页面](https://www.kaggle.com/datasets/mateuszbuda/lgg-mri-segmentation/data) |
| 数据集引用文献 | [Buda et al. (2019)](https://arxiv.org/html/2503.08373v1#bib.bib21) |

上方影像数保留为该文献条目的记录，不视为数据集总队列规模或当前可下载的带标签病例数；这些范围请查看前文的官方发布说明。

---

<p align="center"><sub>来源核查日期：2026 年 11 月 26 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
