<p align="center"><strong>简体中文</strong> | <a href="README.md">English</a></p>

<h1 align="center">🗂️ SegThy 1</h1>

<p align="center"><strong>Thyroid, Carotid, Jugular Vein · MRI</strong></p>

<p align="center">
<a href="https://www.cs.cit.tum.de/camp/publications/segthy-dataset"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://arxiv.org/html/2503.08373v1#bib.bib62"><img src="https://img.shields.io/badge/PAPER-2022-2455a4?style=flat-square" alt="数据集论文"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入模态** | MRI；采集方案和文件格式请查阅官方页面 |
| **文献条目影像数** | 14 幅；该条目数量与官方发布的完整队列规模分别记录 |
| **目标** | Thyroid, Carotid, Jugular Vein |
| **导航分类** | 心脏与心血管结构, 头颈部 |
| **官方来源** | [数据集/挑战记录](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) |
| **来源记录标题** | SegThy Dataset - Lehrstuhl für Informatikanwendungen in der Medizin |

## 🧾 数据集简介

SegThy 子数据集 1 汇集健康志愿者的跟踪式颈部三维超声和 3 T T1 加权 MRI，并提供甲状腺标签。机构页面还介绍常规诊疗患者组成的第二队列，因此条目影像数不能直接视为受试者数。

论文条目影像数与官方发布范围分开记录。本图谱不镜像托管影像或掩膜文件。

## 🏷️ 分割目标与标签

| 项目 | 数据集信息 |
| --- | --- |
| 本条记录列出的目标 | Thyroid, Carotid, Jugular Vein |
| 标签定义 | 来源为 MRI 和超声采集提供甲状腺标签图；相关发布还定义颈动脉和颈静脉标签。不要假定每次扫描都包含全部结构，具体以子数据集标注文件为准。 |

## 🗂️ 官方发布与数据划分

来源介绍子数据集 1 有 28 名健康志愿者，子数据集 2 有 186 名常规诊疗患者。志愿者扫描包括每人 1 次 3 T T1 加权颈部 MRI 和 9 次跟踪式三维超声；这些是采集数，不是受试者数。

## ⬇️ 获取方式与使用条款

- [官方数据集或挑战页面](https://www.cs.cit.tum.de/camp/publications/segthy-dataset)。

- **使用条款：**本次读取的入口页正文未显示明确的数据许可。下载、再分发或商业使用前请核实链接来源中的条款。
- 本图谱不托管影像、掩膜或数据集压缩包。

## 📚 论文与引用

- [Krönke et al., “Tracked 3d ultrasound and deep neural network-based thyroid segmentation reduce interobserver variability in thyroid volumetry.” Plos one, 17(7):e0268550, 2022.](https://arxiv.org/html/2503.08373v1#bib.bib62)


如官方页面提供数据集专用引用和 DOI，请优先按该页面引用。一个数据集或任务可能对应多篇来源论文。

## 📑 文献条目记录

| 字段 | 条目所列内容 |
| --- | --- |
| 影像数 | 14 |
| 模态 | MRI |
| 目标 | Thyroid, Carotid, Jugular Vein |
| 数据入口 | [官方/来源页面](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) |
| 数据集引用文献 | [Krönke et al. (2022)](https://arxiv.org/html/2503.08373v1#bib.bib62) |

上方影像数保留为该文献条目的记录，不视为数据集总队列规模或当前可下载的带标签病例数；这些范围请查看前文的官方发布说明。

---

<p align="center"><sub>来源核查日期：2026 年 11 月 26 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
