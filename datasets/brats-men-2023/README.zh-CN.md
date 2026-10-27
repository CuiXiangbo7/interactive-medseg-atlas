<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 BraTS-MEN 2023</h1>

<p align="center"><strong>术前脑膜瘤分割 · 多参数 MRI</strong></p>

<p align="center">
<a href="https://www.synapse.org/Synapse:syn51514106"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.synapse.org/Synapse:syn51156910/wiki/622351"><img src="https://img.shields.io/badge/CHALLENGE-BraTS%202023-8b1e3f?style=flat-square" alt="相关挑战赛"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://doi.org/10.1038/s41597-024-03350-9"><img src="https://img.shields.io/badge/Scientific%20Data-2024-2455a4?style=flat-square" alt="Scientific Data 2024"></a>
<a href="https://arxiv.org/abs/2405.09787"><img src="https://img.shields.io/badge/arXiv-2405.09787-b31b1b?style=flat-square" alt="arXiv 2405.09787"></a>
<a href="https://doi.org/10.7303/syn51514106"><img src="https://img.shields.io/badge/Synapse%20DOI-10.7303%2Fsyn51514106-1f6feb?style=flat-square" alt="Synapse DOI 10.7303/syn51514106"></a>
</p>

| 基本信息 | |
| --- | --- |
| **队列** | 1,344 名患者，共 1,424 次 MRI 检查 |
| **输入** | T1、T1ce、T2、FLAIR |
| **机构来源** | 数据集论文报告了 6 家参与的学术医学中心：杜克大学、托马斯·杰斐逊大学、耶鲁大学、加州大学旧金山分校、密苏里大学和宾夕法尼亚大学。[Scientific Data 论文](https://doi.org/10.1038/s41597-024-03350-9)。 |
| **官方来源** | [BraTS-MEN Synapse 数据集](https://www.synapse.org/Synapse:syn51514106) · [BraTS 2023 挑战赛页面](https://www.synapse.org/Synapse:syn51156910/wiki/622351) |

## 🧾 数据集简介

BraTS 术前脑膜瘤数据集汇集了多机构术前 MRI、专家标注的肿瘤亚区及临床元数据，旨在分割脑膜瘤组成区域，并支持跨机构评测。

## 🗂️ 官方划分与标签可用性

| 队列 | 病例数 | 标签状态 |
| --- | ---: | --- |
| 训练集 | 1,000 | 提供专家分割标注 |
| 验证集 | 141 | 挑战赛排行榜评测队列；公开数据情况取决于发布版本 |
| 测试集 | 283 | 私有留出集；测试标签不公开 |

Scientific Data 论文指出，训练集和验证集公开，而 283 例测试队列保持私有。原始挑战赛期间，验证集标签用于排行榜评测。挑战赛结束后发布的 Synapse 数据包可能包含超出原始排行榜数据包的内容；下载时请核对具体标注文件和使用条款。

## 🧬 模态与标注

四种 MRI 序列为 T1、增强 T1（T1ce）、T2 和 FLAIR。标注规范包括增强肿瘤、非增强肿瘤/核心及周围水肿。派生 WT/TC/ET 区域时，请保留具体发布版本的体素标签映射。

## 🔒 获取方式与使用条款

- [Synapse 数据集记录，DOI 10.7303/syn51514106](https://doi.org/10.7303/syn51514106)
- [官方挑战赛/获取信息](https://www.synapse.org/Synapse:syn51156910/wiki/622351)
- 可能需要注册 Synapse 账户，并接受适用的挑战赛后数据条款。

## 🏁 相关挑战赛

**ASNR–MICCAI BraTS 2023 颅内脑膜瘤挑战赛**使用术前 T1、T1ce、T2 和 FLAIR MRI，评估肿瘤多区域分割。

- [BraTS 2023 官方挑战赛主页](https://www.synapse.org/Synapse:syn51156910/wiki/622351) · [挑战赛概述论文](https://arxiv.org/abs/2305.07642) · [挑战赛结果分析](https://arxiv.org/abs/2405.09787)

## 📚 出版物与引用

**数据集论文：** LaBella 等，“A multi-institutional meningioma MRI dataset for automated multi-sequence image segmentation.” *Scientific Data*，第 11 卷第 1 期，文章编号 496，2024 年。[DOI：10.1038/s41597-024-03350-9](https://doi.org/10.1038/s41597-024-03350-9)。

**挑战赛分析：** LaBella 等，“Analysis of the BraTS 2023 Intracranial Meningioma Segmentation Challenge”。*arXiv 预印本*，2024 年。[arXiv:2405.09787](https://arxiv.org/abs/2405.09787)。

- [Synapse 数据集记录，DOI：10.7303/syn51514106](https://doi.org/10.7303/syn51514106)

数据集论文与挑战赛分析是两篇不同的参考文献；上方划分说明区分了原始挑战赛队列与后续公开数据内容。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
