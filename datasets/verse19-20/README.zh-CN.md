<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🦴 VerSe 2019 + 2020</h1>

<p align="center"><strong>椎体标记与分割 · 多探测器 CT</strong></p>

<p align="center">
<a href="https://github.com/anjany/verse"><img src="https://img.shields.io/badge/DATA-Official%20repository-2e8b57?style=flat-square" alt="官方数据集仓库"></a>
<a href="https://osf.io/nqjyw/"><img src="https://img.shields.io/badge/OSF-VerSe%2719-1f6feb?style=flat-square" alt="VerSe 2019 OSF"></a>
<a href="https://osf.io/t98fz/"><img src="https://img.shields.io/badge/OSF-VerSe%2720-1f6feb?style=flat-square" alt="VerSe 2020 OSF"></a>
</p>

<p align="center"><strong>📚 基准论文</strong></p>
<p align="center">
<a href="https://doi.org/10.1016/j.media.2021.102166"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2021-2455a4?style=flat-square" alt="Medical Image Analysis 2021"></a>
<a href="https://arxiv.org/abs/2001.09193"><img src="https://img.shields.io/badge/arXiv-2001.09193-b31b1b?style=flat-square" alt="arXiv 2001.09193"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | 多探测器 CT |
| **规模** | VerSe19/VerSe20 合并版本共 374 次扫描、355 位患者 |
| **目标** | 26 种椎体类别；提供体素级掩膜和椎体中心点坐标 |
| **机构来源** | 多中心数据，来自多个厂商的扫描设备；官方仓库没有把挑战赛组织者列为完整的影像采集医院名单。 |
| **官方来源** | [VerSe 仓库](https://github.com/anjany/verse) · [VerSe19 OSF](https://osf.io/nqjyw/) · [VerSe20 OSF](https://osf.io/t98fz/) |

## 🧾 数据集简介

VerSe 是用于椎体标记与分割的多探测器、多中心 CT 基准数据集。合并数据包含 355 位患者的 374 次扫描，以及 4,505 个逐个标注的椎体。标注包括体素级椎体掩膜和中心点坐标。挑战赛分两届举办，分别与 MICCAI 2019 和 MICCAI 2020 同期进行。

两个版本并非互不重叠的独立队列：基准论文报告有 86 位患者同时出现在两届数据中。官方仓库建议使用重构后的完整数据；其标注格式与原始挑战赛格式数据包不同。

## nnInteractive 训练清单中的对应记录

论文附录 A1 对该数据集列出以下记录。影像数是模型训练清单中的行级数字，不一定等于当前官方版本的总规模。

| A1 字段 | 论文所列内容 |
| --- | --- |
| 影像数 | 113 |
| 模态 | CT |
| 目标 | 28 Vertebrae |
| A1 数据入口 | [打开来源页面](https://github.com/anjany/verse) |
| 论文引用 | [ref 123](https://arxiv.org/html/2503.08373v1#bib.bib123), [ref 81](https://arxiv.org/html/2503.08373v1#bib.bib81), [ref 74](https://arxiv.org/html/2503.08373v1#bib.bib74) |

## 🏷️ 官方标签定义

| 标签 ID | 椎体类别 |
| --- | --- |
| 1–7 | 颈椎 C1–C7 |
| 8–19 | 胸椎 T1–T12 |
| 20–25 | 腰椎 L1–L6，其中包含变异类型 L6 |
| 28 | 额外的第 13 胸椎 T13 |
| 26–27 | 骶骨和尾骨的标签 ID；官方说明这两个结构未在本数据集中标注 |

因此，26 种已标注椎体类型包括常见的 C1–C7、T1–T12、L1–L5，以及变异类型 L6 和 T13。标签 ID 不连续，因为 26 和 27 对应未标注结构。扫描顶部或底部仅部分显示的椎体也不会被标注。

## 🗂️ 挑战赛版本与标注状态

| 版本/发布包 | 挑战赛期间扫描划分 | 当前参考标注状态 |
| --- | --- | --- |
| VerSe19 | 141 位患者、160 次扫描；训练 80、验证/公开测试 40、测试 40 | 官方仓库提供完整版本，包括曾作为隐藏测试数据使用的扫描 |
| VerSe20 | 300 位患者、319 次扫描；训练 113、验证/公开测试 103、测试 103 | 官方仓库提供完整版本，包括曾作为隐藏测试数据使用的扫描 |
| 合并重构版本 | 355 位患者、374 次扫描 | 请使用官方合并文件及其说明；两届数据有患者重叠，不能直接相加 |

各届的划分描述的是历史挑战设置，并不代表两届合并后的互斥划分。

## ⬇️ 获取方式与使用条款

- [官方仓库及下载说明](https://github.com/anjany/verse)
- [VerSe19 OSF 数据库](https://osf.io/nqjyw/)
- [VerSe20 OSF 数据库](https://osf.io/t98fz/)
- 官方仓库提供重构后的完整数据和挑战赛格式数据包。请按当前说明下载，并选择适合用途的数据格式。
- 数据集许可：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。仓库辅助代码采用 MIT 许可；两者适用范围不同。

## 📚 出版物与引用

Sekuboyina A. et al. “VerSe: A Vertebrae Labelling and Segmentation Benchmark for Multi-detector CT Images.” *Medical Image Analysis*, vol. 73, 2021, article 102166.

- [期刊 DOI：10.1016/j.media.2021.102166](https://doi.org/10.1016/j.media.2021.102166) · [arXiv:2001.09193](https://arxiv.org/abs/2001.09193)

引用 VerSe19/VerSe20 合并数据时，请引用这篇基准论文。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 11 月 25 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
