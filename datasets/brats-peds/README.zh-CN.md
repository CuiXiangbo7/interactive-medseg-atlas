<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧒🧠 BraTS-PEDs</h1>

<p align="center"><strong>儿童高级别胶质瘤分割 · 多参数 MRI</strong></p>

<p align="center">
<a href="https://www.cancerimagingarchive.net/collection/brats-peds/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.synapse.org/Synapse:syn51156910/wiki/622351"><img src="https://img.shields.io/badge/CHALLENGE-BraTS--PEDs%202023-8b1e3f?style=flat-square" alt="相关挑战赛"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://doi.org/10.1148/ryai.250902"><img src="https://img.shields.io/badge/Radiology%20AI-2026-2455a4?style=flat-square" alt="Radiology AI 2026"></a>
<a href="https://arxiv.org/abs/2305.17033"><img src="https://img.shields.io/badge/arXiv-2305.17033-b31b1b?style=flat-square" alt="arXiv 2305.17033"></a>
<a href="https://doi.org/10.7937/dx5c-tj86"><img src="https://img.shields.io/badge/TCIA%20DOI-10.7937%2Fdx5c--tj86-1f6feb?style=flat-square" alt="TCIA DOI 10.7937/dx5c-tj86"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | T1n、T1c、T2w、T2-FLAIR |
| **队列总量** | 457 名儿科患者 |
| **机构来源** | 这是一个由多个儿科联盟共同汇集的队列，包括儿童脑肿瘤网络（CBTN）、DIPG Registry、CONNECT 联盟及其他儿科机构。ASNR 合作者参与了专家标注。[挑战赛与队列论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC10246083/)。 |
| **官方来源** | [TCIA 数据集页面](https://www.cancerimagingarchive.net/collection/brats-peds/) · [TCIA DOI](https://doi.org/10.7937/dx5c-tj86) |

## 🧾 数据集简介

BraTS-PEDs 是用于儿童高级别胶质瘤的多机构专家标注 MRI 基准。数据集论文介绍了标准化预处理，包括 DICOM 转 NIfTI、配准/重采样和去面部信息。分割标签包括增强肿瘤（ET）、非增强肿瘤（NET）、囊性成分（CC）和水肿（ED）。

## 🗂️ 官方划分与标签可用性

| 队列 | 病例数 | 官方标签状态 |
| --- | ---: | --- |
| 训练集 | 257 | 提供经专家验证的分割掩膜 |
| 验证集 | 91 | 提供影像，不含排行榜评测所用标签 |
| 测试集 | 109 | 用于最终评估的隐藏队列 |

以上数量和标签状态来自数据集论文的队列说明。当前文件及后续发布变化请以官方数据集门户为准。

## 🔒 获取方式与使用条款

- [TCIA 下载/数据集页面](https://www.cancerimagingarchive.net/collection/brats-peds/)
- [数据集 DOI：10.7937/dx5c-tj86](https://doi.org/10.7937/dx5c-tj86)
- 数据集还包含影像、临床及辅助元数据。使用时请遵循 TCIA 最新许可和引用说明。

## 🏁 相关挑战赛

**CBTN–CONNECT–DIPGR–ASNR–MICCAI BraTS-PEDs 2023** 基于多个儿科神经肿瘤联盟和机构的数据，建立了儿童脑肿瘤分割基准。

- [挑战赛与队列论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC10246083/) · [BraTS 2023 挑战赛主页](https://www.synapse.org/Synapse:syn51156910/wiki/622351)

该队列也被纳入后续 BraTS 挑战赛发布版本。请查看 [TCIA 数据集页面](https://www.cancerimagingarchive.net/collection/brats-peds/)获取最新发布说明。

## 📚 出版物与引用

Fathi Kazerooni 等，“Multi-Institutional Annotated Multiparametric MRI Dataset of Pediatric High-Grade Gliomas.” *Radiology: Artificial Intelligence*，第 8 卷第 3 期，文章编号 e250902，2026 年。[DOI：10.1148/ryai.250902](https://doi.org/10.1148/ryai.250902)。

- [期刊论文](https://pubs.rsna.org/doi/10.1148/ryai.250902) · [TCIA 数据集记录，DOI：10.7937/dx5c-tj86](https://doi.org/10.7937/dx5c-tj86)
- [BraTS-PEDs 挑战赛概述](https://arxiv.org/abs/2305.17033)

期刊论文介绍多机构数据集；挑战赛概述论文补充了基准赛背景。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
