<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 AISD — 急性缺血性卒中数据集</h1>

<p align="center"><strong>急性缺血性梗死灶分割（acute ischemic infarct segmentation）· 平扫 CT（non-contrast CT, NCCT）</strong></p>

<p align="center">
<a href="https://github.com/GriffinLiang/AISD"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://doi.org/10.1007/978-3-030-87234-2_41"><img src="https://img.shields.io/badge/MICCAI-2021-8b1e3f?style=flat-square" alt="MICCAI 2021"></a>
<a href="https://arxiv.org/abs/2110.05039"><img src="https://img.shields.io/badge/arXiv-2110.05039-b31b1b?style=flat-square" alt="arXiv 2110.05039"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | 平扫 CT（NCCT），层厚 5 mm |
| **队列** | 397 例急性缺血性卒中扫描 |
| **参考影像** | CT 后 24 小时内采集的 DWI |
| **机构来源** | 关联论文作者单位包括北京邮电大学（Beijing University of Posts and Telecommunications, BUPT）的模式识别与智能系统实验室（Pattern Recognition and Intelligent System Laboratory）、深度视界 AI 实验室（Deepwise AI Lab）、南京大学医学院附属金陵医院（Jinling Hospital, Nanjing University School of Medicine）、北京大学（Peking University）和香港大学（The University of Hong Kong）。公开数据发布未注明唯一的患者采集中心。[原始论文](https://arxiv.org/abs/2110.05039)。 |
| **官方来源** | [作者维护的 AISD 仓库](https://github.com/GriffinLiang/AISD) |

## 🧾 数据集简介

AISD 将 NCCT 与基于弥散加权 MRI（diffusion-weighted imaging, DWI）确定的梗死标注配对。作者报告，NCCT 在症状出现后 24 小时内采集；病灶以 MRI 为参考进行手工勾画，并由高年资医生复核。

## 🗂️ 官方划分与标签可用性

| 队列 | 病例数 | 官方说明 |
| --- | ---: | --- |
| 训练/验证 | 345 | 仅公布合计数量；仓库未规定官方训练集与验证集的具体划分 |
| 测试 | 52 | 留出的测试队列；仓库列出了病例 ID |

官方仓库提供单独的掩膜压缩包链接，但没有清楚说明其中是否包含测试集参考掩膜，也未说明各划分对应哪些掩膜。若要确认测试标签是否可用，请先检查压缩包内容。

## 🏷️ 标签

作者仓库定义了以下标签：

| 数值 | 含义 |
| ---: | --- |
| 1 | 远隔梗死（remote infarct） |
| 2 | 明确的急性梗死（clear acute infarct） |
| 3 | 模糊的急性梗死（blurred acute infarct） |
| 4 | CT 上不可见的急性梗死（invisible acute infarct） |
| 5 | 梗死（infarct） |

作者将 **{1, 2, 3, 5}** 定义为梗死病灶区域（infarct-lesion region）。若评估各标签类别的性能，请保留原始类别定义。

## ⬇️ 官方下载

作者仓库提供以下数据包链接：

- **NCCT 影像：** [百度网盘](https://pan.baidu.com/s/12nouuU6MbFrQps4EmTcomA)（提取码：aisd）· [Google Drive](https://drive.google.com/file/d/157f9aE3ZhRSdIuIbP2PRG8ub9JJWvMGk/view?usp=share_link)
- **掩膜：** [百度网盘](https://pan.baidu.com/s/1MR4tAEHypdTRnqprXuRRXQ)（提取码：aisd）· [Google Drive](https://drive.google.com/file/d/1d08fFpEvK4D6YTKfRlNuv_OlIxigZxl6/view?usp=share_link)
- [官方仓库及 DICOM 数据包链接](https://github.com/GriffinLiang/AISD)

仓库说明数据仅用于非商业用途，包括学术研究、教学、科学出版和个人实验。下载或再分发数据前，请遵循官方仓库的最新条款。

## 📚 论文与引用

**Liang et al.** “Symmetry-Enhanced Attention Network for Acute Ischemic Infarct Segmentation with Non-Contrast CT Images.” *Medical Image Computing and Computer Assisted Intervention – MICCAI 2021*. Lecture Notes in Computer Science, vol. 12907, Part VII, pp. 432–441. Springer, 2021. DOI: [10.1007/978-3-030-87234-2_41](https://doi.org/10.1007/978-3-030-87234-2_41).

- [MICCAI proceedings page（MICCAI 论文集页面）](https://miccai2021.org/openaccess/paperlinks/2021/09/01/467-Paper1341.html) · [arXiv:2110.05039](https://arxiv.org/abs/2110.05039)

该论文介绍了 AISD 数据集及其 symmetry-enhanced attention 方法。影像与掩膜压缩包链接来自作者维护的公开仓库。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
