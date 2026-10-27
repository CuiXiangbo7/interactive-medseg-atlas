<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 UCSF-BMSR</h1>

<p align="center"><strong>脑转移瘤（brain metastasis）分割 · 立体定向放射外科 MRI（stereotactic radiosurgery MRI）</strong></p>

<p align="center">
<a href="https://imagingdatasets.ucsf.edu/dataset/1"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.synapse.org/Synapse:syn51156910/wiki/622553"><img src="https://img.shields.io/badge/CHALLENGE-BraTS%20METS%202023-8b1e3f?style=flat-square" alt="相关挑战赛"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://doi.org/10.1148/ryai.230126"><img src="https://img.shields.io/badge/Radiology%20AI-2024-2455a4?style=flat-square" alt="Radiology AI 2024"></a>
<a href="https://doi.org/10.1148/ryai.230126"><img src="https://img.shields.io/badge/DOI-10.1148%2Fryai.230126-1f6feb?style=flat-square" alt="DOI 10.1148/ryai.230126"></a>
<a href="https://arxiv.org/abs/2306.00838"><img src="https://img.shields.io/badge/arXiv-2306.00838-b31b1b?style=flat-square" alt="arXiv 2306.00838"></a>
</p>

| 基本信息 | |
| --- | --- |
| **队列** | 412 名患者，共 560 次 MRI 检查 |
| **公开下载** | UCSF 页面当前公布 461 次检查 |
| **输入** | 增强 T1、平扫 T1、FLAIR、减影影像 |
| **目标** | 脑转移瘤增强区域的体素级标注 |
| **机构来源** | 数据采集于加州大学旧金山分校（University of California, San Francisco, UCSF）；官方登记将 UCSF 智能影像中心（UCSF Center for Intelligent Imaging）列为数据集管理机构。[UCSF 数据集页面](https://imagingdatasets.ucsf.edu/dataset/1)。 |
| **官方来源** | [UCSF Ci2 数据集页面](https://imagingdatasets.ucsf.edu/dataset/1) |

## 🧾 数据集简介

加州大学旧金山分校脑转移瘤立体定向放射外科 MRI 数据集（UCSF-BMSR）包含多模态、配准并去颅骨的 MRI，附有专家标注的 5,136 个转移瘤病灶及临床元数据。同一患者可能对应多次检查，因此**检查次数与患者人数是不同的统计单位**。

## 🗂️ 官方划分与标签可用性

数据集论文称，**461 次训练检查**可公开下载；另有 **99 次检查**组成 2024 年 MICCAI 挑战赛测试队列。论文当时指出测试数据将在挑战赛结束后提供。请查看 UCSF 当前数据集页面确认目前可下载的内容；页面显示的 461 次检查并不能证明测试标注已经发布。

99 次测试检查的参考标准由两套独立标注合并而成。未经官方来源核实，不要将 560 次检查都视为可公开下载的带标签病例。

## 模态与标签

每次检查可能包含增强 T1、平扫 T1、FLAIR 和减影影像（平扫 T1 减增强 T1）。分割目标是增强型脑转移瘤。官方数据采用 NIfTI 格式。

## 🔒 获取方式与使用条款

UCSF 官方仓库说明，数据免费提供给**非商业科研**使用。数据集专属条款包括署名要求，以及对再分发和重新识别的限制。使用前请阅读最新的 [UCSF 数据条款](https://imagingdatasets.ucsf.edu/dataset/1)。[AWS Registry 记录](https://registry.opendata.aws/ucsf-bmsr/)属于次级访问镜像；数据使用条款请以 UCSF 来源为准。

## 🏁 相关挑战赛

**2023 ASNR–MICCAI BraTS 脑转移瘤分割挑战赛：** UCSF-BMSR 的 324 次术前检查作为外部数据来源之一，与 Stanford BrainMetShare、NYUMets 等其他中心数据共同组成更大的挑战赛队列。

- [BraTS 2023 官方挑战赛主页](https://www.synapse.org/Synapse:syn51156910/wiki/622553) · [挑战赛论文](https://arxiv.org/abs/2306.00838)

## 📚 出版物与引用

Rudie et al. “The University of California San Francisco Brain Metastases Stereotactic Radiosurgery (UCSF-BMSR) MRI Dataset.” *Radiology: Artificial Intelligence*, vol. 6, no. 2, article e230126, 2024. [DOI: 10.1148/ryai.230126](https://doi.org/10.1148/ryai.230126).

- [Publisher article（期刊论文页面）](https://pubs.rsna.org/doi/10.1148/ryai.230126) · [PubMed: 38381038](https://pubmed.ncbi.nlm.nih.gov/38381038/) · [PMC10982817](https://pmc.ncbi.nlm.nih.gov/articles/PMC10982817/)

论文介绍了数据队列和挑战赛划分；当前可下载内容及使用条款请以 UCSF 官方数据集页面为准。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
