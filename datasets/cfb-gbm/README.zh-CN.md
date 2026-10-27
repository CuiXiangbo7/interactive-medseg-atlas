<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 CFB-GBM</h1>

<p align="center"><strong>胶质母细胞瘤影像与分割 · 纵向多模态数据</strong></p>

<p align="center">
<a href="https://www.cancerimagingarchive.net/collection/cfb-gbm/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://doi.org/10.59275/j.melba.2026-dd48"><img src="https://img.shields.io/badge/MELBA-2026-6f42c1?style=flat-square" alt="MELBA 2026"></a>
<a href="https://doi.org/10.7937/V9PN-2F72"><img src="https://img.shields.io/badge/TCIA%20DOI-10.7937%2FV9PN--2F72-1f6feb?style=flat-square" alt="TCIA DOI 10.7937/V9PN-2F72"></a>
</p>

| 基本信息 | |
| --- | --- |
| **当前 TCIA 数据集** | 264 名受试者 |
| **模态** | MRI、CT 和 RTDOSE；具体数据因病例和时间点而异 |
| **机构来源** | 单中心临床队列，来自法国卡昂弗朗索瓦·巴克莱斯中心（Centre François Baclesse）；数据集名称 CFB-GBM 即源自该机构。[TCIA 官方数据集记录](https://www.cancerimagingarchive.net/collection/cfb-gbm/)。 |
| **官方来源** | [The Cancer Imaging Archive 数据集](https://www.cancerimagingarchive.net/collection/cfb-gbm/) |

## 🧾 数据集简介

CFB-GBM 是一个纵向多模态胶质母细胞瘤数据集，包含影像、分割轮廓、治疗及随访信息。TCIA 当前 Version 4 页面列出 264 名受试者，以及 MR、CT 和 RTDOSE 的 NIfTI 影像/分割。不能假设每名受试者或每个时间点都包含所有模态或轮廓类别；请查阅数据集的模态可用性表和数据字典。

## 🗂️ 官方划分与标签可用性

TCIA 未为该数据集定义统一的训练/验证/测试划分。该数据集以科研用途发布；若自行构建队列或划分，应将病例纳入标准、模态可用性和划分方法描述为自己的实验方案。

分割和放疗结构是否可用取决于具体病例和时间点。请结合 TCIA 清单及对应版本的 CFB-GBM 文档，确认某张影像适用哪些轮廓标注。

## 🔒 获取方式与许可

- [TCIA 数据集页面与下载说明](https://www.cancerimagingarchive.net/collection/cfb-gbm/)
- [TCIA 数据集 DOI：10.7937/V9PN-2F72](https://doi.org/10.7937/V9PN-2F72)
- [CFB-GBM 项目文档](https://github.com/AurelienCD/CFB-GBM)

TCIA 当前数据集页面列出的许可为 **CC BY 4.0**。引用数据集并遵循 TCIA 的署名要求。

## 📚 出版物与引用

**数据集与方法论文：** Leclercq 等，“CFB-GBM v2.0: An Augmented Longitudinal Dataset for Multi-Modal Glioblastoma Segmentation, Radiomics, and RANO Progression Tracking.” *Machine Learning for Biomedical Imaging (MELBA)*，MICCAI Open Data 2026 专题，2026 年，763–771 页。[DOI：10.59275/j.melba.2026-dd48](https://doi.org/10.59275/j.melba.2026-dd48) · [开放获取论文](https://www.melba-journal.org/papers/2026%3A038.html)。

**TCIA 数据集引用：** Moreau 等，“Pre and post treatment MRI and radiotherapy plans of patients with glioblastoma: the CFB-GBM cohort (CFB-GBM), Version 4.” *The Cancer Imaging Archive*，2025 年。[DOI：10.7937/V9PN-2F72](https://doi.org/10.7937/V9PN-2F72)。

2026 年论文介绍扩展版 v2.0 数据资源；使用 Version 4 发布版本时，也应引用对应的 TCIA 数据集记录。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
