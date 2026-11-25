<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🩻 SegRap2023</h1>

<p align="center"><strong>鼻咽癌放疗危及器官与大体肿瘤体积分割 · 配对 CT</strong></p>

<p align="center">
<a href="https://segrap2023.grand-challenge.org/segrap2023/"><img src="https://img.shields.io/badge/DATA-Official%20challenge-2e8b57?style=flat-square" alt="SegRap2023 官方挑战赛"></a>
<a href="https://github.com/HiLab-git/SegRap2023"><img src="https://img.shields.io/badge/CODE-Official%20repository-24292f?style=flat-square" alt="SegRap2023 官方仓库"></a>
<a href="https://doi.org/10.1016/j.media.2024.103447"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2025-2455a4?style=flat-square" alt="Medical Image Analysis 2025"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | 预对齐的平扫 CT 与增强 CT 配对影像 |
| **规模** | 200 位鼻咽癌患者，共 400 次 CT 扫描 |
| **目标** | 45 类危及器官（OAR）和 2 类大体肿瘤体积（GTV） |
| **机构来源** | 中国成都四川省肿瘤医院（Sichuan Cancer Hospital & Institute, Sichuan Cancer Center） |
| **官方来源** | [SegRap2023 挑战赛](https://segrap2023.grand-challenge.org/segrap2023/) · [官方 GitHub 仓库](https://github.com/HiLab-git/SegRap2023) |

## 🧾 数据集简介

SegRap2023 是 MICCAI 2023 的鼻咽癌放疗计划分割基准，目标是勾画危及器官和大体肿瘤体积。每位患者有一套预对齐的平扫 CT（ncCT）和一套增强 CT（ceCT），200 位患者共计 400 个 CT 影像体。基准数据来自中国成都四川省肿瘤医院（Sichuan Cancer Hospital & Institute, Sichuan Cancer Center）。

## 🏷️ 官方分割目标

基准定义了两个任务：

- **任务 1：45 类危及器官。** 13 个单侧/中线结构为 Brain、BrainStem、Chiasm、Esophagus、Larynx、Larynx_Glottic、Larynx_Supraglot、Oral cavity、PharynxCont、Pituitary、SpinalCord、Thyroid 和 Trachea。
- 其余 32 个标签为 16 组左右配对结构：Cochlea、ETbone（咽鼓管骨部）、Eye、Hippocampus、IAC（内听道）、Lens、Mandible、Mastoid、MiddleEar、OpticNerve、Parotid、Submandibular、TemporalLobe、TMjoint（颞下颌关节）、TympanicCavity 和 VestibulSemi（前庭半规管）。
- **任务 2：2 类大体肿瘤体积。** 原发鼻咽肿瘤体积，挑战赛页面称 GTVnx、论文中称 GTVp；以及淋巴结肿瘤体积 GTVnd。

基准论文指出，小型或细长的危及器官及 GTV 仍较难分割；OAR 与 GTV 作为不同任务评估。

## 🗂️ 官方划分与标签可用性

| 队列 | 患者数 | CT 影像体数 | 官方发布状态 |
| --- | ---: | ---: | --- |
| 训练集 | 120 | 240 个配对影像体 | 提供带标签训练集；当前获取说明见官方挑战赛页面 |
| 验证集 | 20 | 40 个配对影像体 | 挑战赛页面将其标为仅有影像的队列 |
| 测试集 | 60 | 120 个配对影像体 | 用于挑战赛评测；门户未列出公开参考标签 |

挑战赛页面包含不同日期的通知：一则通知称带标签训练集和无标签验证集可直接下载；原始挑战赛规则也提到终端用户协议，并禁止转发数据或下载链接。请遵循当前下载版本附带的条款，不要把论文的出版许可当作数据集许可。

## ⬇️ 获取方式与使用条款

- [官方挑战赛页面与当前下载通知](https://segrap2023.grand-challenge.org/segrap2023/)
- [官方 GitHub 仓库](https://github.com/HiLab-git/SegRap2023)提供任务定义、标签映射、评测代码和容器示例。
- 挑战赛规则规定不得转发或再分发数据及链接。挑战赛页面没有给出该数据集的标准开放许可。即使出版商或论文档案列出论文本身的许可，该许可也不会自动覆盖影像或掩膜。

## 🏁 相关挑战赛

**SegRap2023** 与 MICCAI 2023 同期举办，研究鼻咽癌放疗计划中的危及器官和 GTV 分割。

- [SegRap2023 官方挑战赛](https://segrap2023.grand-challenge.org/segrap2023/)
- [官方组织者](https://segrap2023.grand-challenge.org/organizers/)

## 📚 出版物与引用

Luo X. et al. “SegRap2023: A benchmark of organs-at-risk and gross tumor volume Segmentation for Radiotherapy Planning of Nasopharyngeal Carcinoma.” *Medical Image Analysis*, vol. 101, 2025, article 103447.

- [期刊 DOI：10.1016/j.media.2024.103447](https://doi.org/10.1016/j.media.2024.103447) · [PubMed 记录](https://pubmed.ncbi.nlm.nih.gov/39756265/) · [arXiv:2312.09576](https://arxiv.org/abs/2312.09576)

---

<p align="center"><sub>🕘 来源最后核查：2026 年 11 月 25 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
