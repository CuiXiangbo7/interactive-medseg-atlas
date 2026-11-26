<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🩻 KiTS23</h1>

<p align="center"><strong>肾脏、肾肿瘤与肾囊肿分割 · 增强 CT</strong></p>

<p align="center">
<a href="https://kits-challenge.org/kits23/"><img src="https://img.shields.io/badge/DATA-Official%20challenge-2e8b57?style=flat-square" alt="KiTS23 官方挑战赛"></a>
<a href="https://github.com/neheller/kits23"><img src="https://img.shields.io/badge/CODE-Official%20repository-24292f?style=flat-square" alt="KiTS23 官方仓库"></a>
<a href="https://doi.org/10.5281/zenodo.7840134"><img src="https://img.shields.io/badge/Challenge%20record-Zenodo-1f6feb?style=flat-square" alt="官方挑战赛记录"></a>
</p>

<p align="center"><strong>📚 挑战赛论文集</strong></p>
<p align="center">
<a href="https://doi.org/10.1007/978-3-031-54806-2"><img src="https://img.shields.io/badge/Springer%20LNCS-KiTS%202023-8b1e3f?style=flat-square" alt="KiTS 2023 挑战赛论文集"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | 术前增强 CT；皮髓质期或肾实质期 |
| **规模** | 共 599 例：489 例训练、110 例保留测试 |
| **目标** | 肾脏、肾肿瘤和肾囊肿 |
| **机构来源** | 2010–2022 年间在 M Health Fairview 医疗中心接受疑似肾恶性肿瘤治疗的患者 |
| **官方来源** | [KiTS23 挑战赛](https://kits-challenge.org/kits23/) · [官方 GitHub 仓库](https://github.com/neheller/kits23) |

## 🧾 数据集简介

KiTS23 是第三届 Kidney and Kidney Tumor Segmentation 挑战赛。队列包括 2010 至 2022 年间在 M Health Fairview 医疗中心因疑似肾恶性肿瘤接受冷冻消融、部分肾切除或根治性肾切除的患者。每例使用最近一次、覆盖双肾的术前增强 CT。与此前 KiTS 数据相比，本届除皮髓质期影像外，也纳入肾实质期影像。

挑战赛官方说明指出，训练集中有部分病例曾用于 KiTS19、KiTS21 或 KNIGHT。描述数据来源或评估独立性时应考虑这些重叠。

## nnInteractive 训练清单中的对应记录

论文附录 A1 对该数据集列出以下记录。影像数是模型训练清单中的行级数字，不一定等于当前官方版本的总规模。

| A1 字段 | 论文所列内容 |
| --- | --- |
| 影像数 | 489 |
| 模态 | CT |
| 目标 | Kidneys, K. Tumor, Cysts |
| A1 数据入口 | [打开来源页面](https://kits-challenge.org/kits23) |
| 论文引用 | [ref 43](https://arxiv.org/html/2503.08373v1#bib.bib43) |

## 🏷️ 官方标签定义

| 数值 | 类别 | 官方定义 |
| ---: | --- | --- |
| 0 | 背景 | 不属于目标结构 |
| 1 | 肾脏 | 肾实质及肾门内非脂肪组织 |
| 2 | 肿瘤 | 术前怀疑为恶性的肾脏肿块 |
| 3 | 囊肿 | 影像学判断为囊肿的肾脏肿块；如有病理结果则按病理判断 |

挑战赛既评测语义类别，也使用由肾脏、肿瘤和囊肿组合而成的分层评测类别。

## 🗂️ 官方划分与标签可用性

| 队列 | 病例数 | 参考标签 |
| --- | ---: | --- |
| 训练集 | 489 | 随公开训练集发布 |
| 测试集 | 110 | 保留测试集；组织方说明不会发布测试标签 |

110 例测试病例不属于带标签训练档案。请勿将测试标签描述为可公开下载的真实标注。

## ⬇️ 获取方式与使用条款

- [官方挑战赛数据与队列说明](https://kits-challenge.org/kits23/)
- [官方仓库及下载说明](https://github.com/neheller/kits23)
- 官方仓库提供分割文件和影像下载工具；CT 影像从仓库链接的影像服务器下载。
- 数据集影像和分割标注采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。仓库代码另采用 MIT 许可。

## 🏁 相关挑战赛

**KiTS23** 与 MICCAI 2023 同期举办，由明尼苏达大学机器人研究所、Helmholtz Imaging/DKFZ 和克利夫兰诊所泌尿肿瘤项目共同组织。

- [KiTS23 官方挑战赛网站](https://kits-challenge.org/kits23/)
- [MICCAI Society 挑战赛记录](https://doi.org/10.5281/zenodo.7840134)

## 📚 出版物与引用

官方挑战赛记录为 **Heller et al.** “2023 Kidney and Kidney Tumor Segmentation Challenge”，注册于 MICCAI 2023。

- [Zenodo 挑战赛记录，DOI：10.5281/zenodo.7840134](https://doi.org/10.5281/zenodo.7840134)

挑战赛论文集于 2024 年由 Springer 出版，书名为 *Kidney and Kidney Tumor Segmentation: MICCAI 2023 Challenge, KiTS 2023, Proceedings*，收录于 Lecture Notes in Computer Science。

- [论文集 DOI：10.1007/978-3-031-54806-2](https://doi.org/10.1007/978-3-031-54806-2)

---

<p align="center"><sub>🕘 来源最后核查：2026 年 11 月 25 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
