<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 BraTS 2015</h1>

<p align="center"><strong>多模态胶质瘤 MRI（multimodal glioma MRI）· 历史版 BraTS 挑战赛数据</strong></p>

<p align="center">
<a href="https://www.smir.ch/BRATS/Start2015"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.smir.ch/BRATS/Start2015"><img src="https://img.shields.io/badge/CHALLENGE-BRATS%202015-8b1e3f?style=flat-square" alt="相关挑战赛"></a>
</p>

<p align="center"><strong>📚 出版物与数据记录</strong></p>
<p align="center">
<a href="https://doi.org/10.1109/TMI.2014.2377694"><img src="https://img.shields.io/badge/IEEE%20TMI-2015-2455a4?style=flat-square" alt="IEEE TMI 2015"></a>
<a href="https://www.cbica.upenn.edu/sbia/Spyridon.Bakas/MICCAI_BraTS/MICCAI_BraTS_2015_proceedings.pdf"><img src="https://img.shields.io/badge/BRATS-2015%20proceedings-8b1e3f?style=flat-square" alt="BRATS 2015 论文集"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | 术前 MRI：T1、T1ce、T2、FLAIR |
| **任务** | 胶质瘤分割 |
| **目标区域** | 增强肿瘤（ET）、肿瘤核心（TC）、全肿瘤（WT） |
| **机构来源** | 挑战赛组织和数据整理与宾夕法尼亚大学佩雷尔曼医学院（Perelman School of Medicine at the University of Pennsylvania, UPenn）生物医学图像计算与分析中心（Center for Biomedical Image Computing and Analytics, CBICA）有关。底层影像队列来自多个机构，并非单中心数据。[CBICA 挑战赛档案](https://www.med.upenn.edu/cbica/brats/)。 |
| **官方来源** | [SMIR 上的 BraTS 2015 页面](https://www.smir.ch/BRATS/Start2015) · [BraTS 挑战赛档案](https://www.med.upenn.edu/cbica/brats/) |

## 🧾 数据集简介

BraTS 2015 属于早期 BraTS 基准系列。该届挑战赛论文集和 SMIR 页面是本版本的主要参考来源。历史版本与后续重新打包的数据可能不同，因此请以实际下载的官方版本所附文件、标签规则和使用条款为准。

文献中常引用的 2015 年有标签队列包含 **274 例（220 例 HGG、54 例 LGG）**。该数字指有标签队列，不应解读为挑战赛测试集数量。

## 🗂️ 官方划分与标签可用性

当前官方页面提供历史数据集和挑战赛资料，但没有为所有重新分发版本提供一个可直接核验、带版本号的训练/验证/测试病例清单。因此，测试影像及其参考标签是否可用，应根据具体 SMIR/档案数据包及其说明确认。这里不会把研究者自行划分的方案称为官方划分。

## 🏷️ 标签与评估说明

BraTS 使用嵌套的肿瘤区域：

- **ET（enhancing tumor）**：对比剂增强肿瘤
- **TC（tumor core）**：肿瘤核心
- **WT（whole tumor）**：包含水肿（edema）区域的全肿瘤

不同 BraTS 版本及后续发布中的体素标签编号和合并方式有所变化。比较结果时请保留具体版本的标签映射，不要假设 2015 年与较新版本使用同一套整数编码。

## 🔒 获取方式与使用条款

- **数据集/历史下载页面：** [SMIR — BRATS 2015](https://www.smir.ch/BRATS/Start2015)
- **挑战赛历史与论文集：** [CBICA BraTS 档案](https://www.med.upenn.edu/cbica/brats/)
- 请阅读官方来源当前展示的条款。本页面不为数据集另行授予统一的复用许可。

## 🏁 相关挑战赛

**MICCAI-BRATS 2015** 挑战赛基于多模态术前 MRI，对胶质瘤亚区自动分割方法进行评测。

- [2015 年挑战赛与数据入口（SMIR）](https://www.smir.ch/BRATS/Start2015) · [CBICA BraTS 档案与论文集](https://www.med.upenn.edu/cbica/brats/)

## 📚 出版物与引用

**Edition-specific source（本届挑战赛资料）：** [MICCAI-BRATS 2015 official proceedings (PDF)](https://www.cbica.upenn.edu/sbia/Spyridon.Bakas/MICCAI_BraTS/MICCAI_BraTS_2015_proceedings.pdf) · [CBICA BraTS archive](https://www.med.upenn.edu/cbica/brats/)。

**Foundational benchmark article（基准研究论文）：** Menze et al. “The Multimodal Brain Tumor Image Segmentation Benchmark (BRATS).” *IEEE Transactions on Medical Imaging*, vol. 34, no. 10, pp. 1993–2024, 2015. [DOI: 10.1109/TMI.2014.2377694](https://doi.org/10.1109/TMI.2014.2377694).

IEEE TMI 论文是早期 2012–2013 年 BraTS 版本的重要基准参考；引用 2015 年挑战赛发布时，请同时引用 2015 年论文集。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
