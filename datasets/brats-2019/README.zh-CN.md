<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 BraTS 2019</h1>

<p align="center"><strong>术前胶质瘤分割（pre-operative glioma segmentation）· 多模态 MRI（multimodal MRI）</strong></p>

<p align="center">
<a href="https://www.med.upenn.edu/cbica/brats-2019/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.med.upenn.edu/cbica/brats-2019/"><img src="https://img.shields.io/badge/CHALLENGE-BraTS%202019-8b1e3f?style=flat-square" alt="相关挑战赛"></a>
</p>

<p align="center"><strong>📚 出版物与数据记录</strong></p>
<p align="center">
<a href="https://doi.org/10.1007/978-3-030-46640-4"><img src="https://img.shields.io/badge/BrainLes-2019-8b1e3f?style=flat-square" alt="BrainLes 2019"></a>
<a href="https://doi.org/10.1007/978-3-030-46640-4"><img src="https://img.shields.io/badge/LNCS-11992-6f42c1?style=flat-square" alt="LNCS 11992"></a>
<a href="https://doi.org/10.1007/978-3-030-46643-5"><img src="https://img.shields.io/badge/LNCS-11993-6f42c1?style=flat-square" alt="LNCS 11993"></a>
<a href="https://doi.org/10.1038/sdata.2017.117"><img src="https://img.shields.io/badge/Scientific%20Data-2017-2455a4?style=flat-square" alt="Scientific Data 2017"></a>
<a href="https://doi.org/10.1109/TMI.2014.2377694"><img src="https://img.shields.io/badge/IEEE%20TMI-2015-2455a4?style=flat-square" alt="IEEE TMI 2015"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | T1、T1ce、T2、FLAIR |
| **任务** | 胶质瘤亚区分割及相关挑战赛任务 |
| **标签** | NCR/NET、水肿、增强肿瘤；可派生 WT、TC、ET 区域 |
| **机构来源** | 挑战赛由宾夕法尼亚大学佩雷尔曼医学院（Perelman School of Medicine at the University of Pennsylvania, UPenn）的 CBICA 牵头组织。官方挑战赛说明该术前 MRI 队列来自多个机构。[官方挑战赛页面](https://www.med.upenn.edu/cbica/brats-2019/)。 |
| **官方来源** | [挑战赛页面](https://www.med.upenn.edu/cbica/brats-2019/) · [官方数据说明](https://www.med.upenn.edu/cbica/brats2019/data.html) |

## 🧾 数据集简介

BraTS 2019 使用多机构术前 MRI（multi-institutional, pre-operative MRI） 和经过专家审核的肿瘤标注。官方数据说明介绍了标准化处理、图像配准与去颅骨流程，以及标注规范。

挑战赛训练集包含 **335 例有标签病例**。挑战赛还设置验证和测试阶段；挑战赛页面说明，测试数据和评测结果仅在投稿后的短期窗口内向已提交论文的团队开放。

## 🗂️ 官方划分与标签可用性

| 队列 | 官方状态 |
| --- | --- |
| 训练集 | 335 例，提供参考分割标注 |
| 验证集 | 挑战赛评测队列；普通公开训练数据中不包含参考标签 |
| 测试集 | 挑战赛评测队列；2019 年页面记录的是仅限已投稿论文团队、限时开放，而非永久公开测试标签 |

官方挑战赛页面并未将历史挑战赛划分描述为永久公开测试标签版本。请查阅组织方原始来源了解当前访问情况。

## 🏷️ 标签与评估说明

2019 年官方数据页面规定的体素标签为：**1 = NCR/NET**、**2 = 水肿（edema）**、**4 = 增强肿瘤（enhancing tumor）**。常用派生区域为 **WT (whole tumor) = {1,2,4}**、**TC (tumor core) = {1,4}**、**ET (enhancing tumor) = {4}**。报告指标时请同时注明这些定义。

## 🔒 获取方式与使用条款

- [BraTS 2019 挑战赛页面](https://www.med.upenn.edu/cbica/brats-2019/)
- [BraTS 2019 官方数据说明](https://www.med.upenn.edu/cbica/brats2019/data.html)
- [Synapse 历史项目页面](https://www.synapse.org/Synapse:syn25829067/wiki/610863)

原始挑战赛页面是了解该版本发布时间和访问条款的来源。历史 Synapse 链接目前可能不再提供原始文件；使用非官方镜像前，请先核实数据来源和使用条款。

## 🏁 相关挑战赛

**BraTS 2019** 于 MICCAI 2019 期间举办，属于 BrainLes 研讨会的一部分，涵盖胶质瘤 MRI 分割、总生存期预测和分割不确定性评估。

- [官方挑战赛页面](https://www.med.upenn.edu/cbica/brats-2019/) · [数据与评测说明](https://www.med.upenn.edu/cbica/brats2019/data.html)

## 📚 出版物与引用

**Challenge proceedings（挑战赛论文集）：** *BrainLes 2019*, held in conjunction with MICCAI 2019 and published in 2020 as Springer Lecture Notes in Computer Science, vols. 11992 (Part I) and 11993 (Part II).

- [Part I, LNCS 11992, DOI: 10.1007/978-3-030-46640-4（第一部分）](https://doi.org/10.1007/978-3-030-46640-4) · [Part II, LNCS 11993, DOI: 10.1007/978-3-030-46643-5（第二部分）](https://doi.org/10.1007/978-3-030-46643-5)

**Dataset resource paper（数据集资源论文）：** Bakas et al. “Advancing The Cancer Genome Atlas glioma MRI collections with expert segmentation labels and radiomic features.” *Scientific Data*, vol. 4, article 170117, 2017. [DOI: 10.1038/sdata.2017.117](https://doi.org/10.1038/sdata.2017.117).

**Foundational benchmark reference（基准研究论文）：** Menze et al. “The Multimodal Brain Tumor Image Segmentation Benchmark (BRATS).” *IEEE Transactions on Medical Imaging*, vol. 34, no. 10, pp. 1993–2024, 2015. [DOI: 10.1109/TMI.2014.2377694](https://doi.org/10.1109/TMI.2014.2377694).

MICCAI 2019 挑战赛档案及划分、标签说明见上方官方来源部分。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
