<p align="center"><strong>简体中文</strong> | <a href="README.md">English</a></p>

<h1 align="center">🗂️ ACDC</h1>

<p align="center"><strong>RV Cavity, LV Myocardium, LV Cavity · MRI</strong></p>

<p align="center">
<a href="https://www.creatis.insa-lyon.fr/Challenge/acdc/databases.html"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://arxiv.org/html/2503.08373v1#bib.bib15"><img src="https://img.shields.io/badge/PAPER-2018-2455a4?style=flat-square" alt="数据集论文"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入模态** | MRI；采集方案和文件格式请查阅官方页面 |
| **文献条目影像数** | 200 幅；该条目数量与官方发布的完整队列规模分别记录 |
| **目标** | RV Cavity, LV Myocardium, LV Cavity |
| **导航分类** | 心脏与心血管结构 |
| **官方来源** | [数据集/挑战记录](https://www.creatis.insa-lyon.fr/Challenge/acdc/databases.html) |
| **来源记录标题** | ACDC Challenge |

## 🧾 数据集简介

Automated Cardiac Diagnosis Challenge 使用第戎大学医院采集的心脏 cine MRI。研究队列包含五个均衡亚组：健康对照、既往心肌梗死、扩张型心肌病、肥厚型心肌病和右心室异常。

论文条目影像数与官方发布范围分开记录。本图谱不镜像托管影像或掩膜文件。

## 🏷️ 分割目标与标签

| 项目 | 数据集信息 |
| --- | --- |
| 本条记录列出的目标 | RV Cavity, LV Myocardium, LV Cavity |
| 标签定义 | 官方分割目标为右心室腔、左心室心肌和左心室腔。挑战还提供临床诊断类别，该信息属于元数据而非分割类别。 |

## 🗂️ 官方发布与数据划分

官方挑战页面介绍 150 名不同患者，分为五个等规模临床亚组。训练页和测试页分别提供挑战文件；本页将文献条目的 200 与官方患者总数分开记录。

## ⬇️ 获取方式与使用条款

- [官方数据集或挑战页面](https://www.creatis.insa-lyon.fr/Challenge/acdc/databases.html)。

- **使用条款：**本次读取的入口页正文未显示明确的数据许可。下载、再分发或商业使用前请核实链接来源中的条款。
- 本图谱不托管影像、掩膜或数据集压缩包。

## 📚 论文与引用

- [Bernard et al., “Deep learning techniques for automatic mri cardiac multi-structures segmentation and diagnosis: Is the problem solved?.” IEEE Transactions on Medical Imaging, 2018.](https://arxiv.org/html/2503.08373v1#bib.bib15)


如官方页面提供数据集专用引用和 DOI，请优先按该页面引用。一个数据集或任务可能对应多篇来源论文。

## 📑 文献条目记录

| 字段 | 条目所列内容 |
| --- | --- |
| 影像数 | 200 |
| 模态 | MRI |
| 目标 | RV Cavity, LV Myocardium, LV Cavity |
| 数据入口 | [官方/来源页面](https://www.creatis.insa-lyon.fr/Challenge/acdc/databases.html) |
| 数据集引用文献 | [Bernard et al. (2018)](https://arxiv.org/html/2503.08373v1#bib.bib15) |

上方影像数保留为该文献条目的记录，不视为数据集总队列规模或当前可下载的带标签病例数；这些范围请查看前文的官方发布说明。

---

<p align="center"><sub>来源核查日期：2026 年 11 月 26 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
