<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🧠 BraTS 2021</h1>

<p align="center"><strong>RSNA–ASNR–MICCAI 脑肿瘤基准（brain tumor benchmark）· 术前 MRI（pre-operative MRI）</strong></p>

<p align="center">
<a href="https://www.med.upenn.edu/cbica/brats2021/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.med.upenn.edu/cbica/brats2021/"><img src="https://img.shields.io/badge/CHALLENGE-BraTS%202021-8b1e3f?style=flat-square" alt="BraTS 2021 挑战赛"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://arxiv.org/abs/2107.02314"><img src="https://img.shields.io/badge/arXiv-2107.02314-b31b1b?style=flat-square" alt="arXiv 2107.02314"></a>
<a href="https://doi.org/10.7937/jc8x-9874"><img src="https://img.shields.io/badge/TCIA%20DOI-10.7937%2Fjc8x--9874-1f6feb?style=flat-square" alt="TCIA DOI 10.7937/jc8x-9874"></a>
<a href="https://doi.org/10.1109/TMI.2014.2377694"><img src="https://img.shields.io/badge/IEEE%20TMI-2015-2455a4?style=flat-square" alt="IEEE TMI 2015"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | T1、T1ce、T2、FLAIR |
| **任务** | 胶质瘤亚区分割；基准还包含放射基因组学分类任务 |
| **病例数** | 共 2,040 例：1,251 例训练、219 例验证、570 例测试 |
| **机构来源** | 牵头组织方：宾夕法尼亚大学（University of Pennsylvania, UPenn）的 CBICA；挑战赛合作方：RSNA、ASNR 和 MICCAI。数据来自多个机构，包括 CBICA/UPenn、加州大学旧金山分校（University of California, San Francisco, UCSF）、圣路易斯华盛顿大学（Washington University in St. Louis）、海德堡大学（Heidelberg University）和塔塔纪念中心（Tata Memorial Centre）。[组织方与贡献者信息](https://www.med.upenn.edu/cbica/brats2021/)。 |
| **官方来源** | [BraTS 2021 挑战赛](https://www.med.upenn.edu/cbica/brats2021/) · [Synapse 当前访问说明](https://www.synapse.org/Synapse:syn25829067/discussion/threadId=12691) |

## 🗂️ 官方划分与标签可用性

| 队列 | 病例数 | 参考标签 |
| --- | ---: | --- |
| 训练集 | 1,251 | 随训练集公开提供 |
| 验证集 | 219 | 挑战赛排行榜评测所用标签未公开 |
| 测试集 | 570 | 隐藏挑战赛测试集；普通公开挑战赛下载中不包含标签 |

Synapse 当前公告称，旧版 BraTS 2018–2021 数据集已不再托管于该平台。公告引导用户申请注册用户可访问的 **BraTS-GLI** 版本；该版本复用 BraTS 2020/2021 数据，但需接受挑战赛后的数据条款。

## ⚠️ 标签版本说明

当前 BraTS-GLI 版本沿用了 BraTS 2020/2021 的底层数据，并有一项已说明的变化：增强肿瘤标签编号由原始的 **4** 改为 **3**。请在下载的掩膜或结果中记录所用版本及标签映射。

## 数据与标注

每个病例包含四种结构 MRI 序列。BraTS 标准目标包括全肿瘤（whole tumor, WT）、肿瘤核心（tumor core, TC）和增强肿瘤（enhancing tumor, ET）；训练集参考标签由专家进行肿瘤亚区标注。标签编码应以所用数据版本的说明为准，不应根据文件名推断。

## 🔒 获取方式与使用条款

- [BraTS 2021 组织方页面](https://www.med.upenn.edu/cbica/brats2021/)
- [当前 BraTS-GLI 数据访问页面](https://www.synapse.org/Synapse:syn51156910/wiki/622351)
- [Synapse 数据文件夹](https://www.synapse.org/Synapse:syn64952532)
- [关于历史数据与标签映射的官方公告](https://www.synapse.org/Synapse:syn25829067/discussion/threadId=12691)

当前 GLI 获取途径需要 Synapse 账户，并需接受挑战赛后的数据条款。下载或再分发前，请遵循 Synapse 最新条款。

## 🏁 相关挑战赛

**RSNA–ASNR–MICCAI BraTS 2021** 基于多机构术前 MRI 评测胶质瘤亚区分割，并开展 MGMT 启动子甲基化分类任务。

- [官方挑战赛概览、任务和时间安排](https://www.med.upenn.edu/cbica/brats2021/) · [Synapse 评测平台](https://www.synapse.org/Synapse:syn25829067)

## 📚 出版物与引用

**Benchmark paper（基准论文）：** Baid et al. “The RSNA-ASNR-MICCAI BraTS 2021 Benchmark on Brain Tumor Segmentation and Radiogenomic Classification.” *arXiv preprint*, 2021. [arXiv:2107.02314](https://arxiv.org/abs/2107.02314).

- [TCIA dataset record, DOI: 10.7937/jc8x-9874（TCIA 数据集记录）](https://doi.org/10.7937/jc8x-9874)

**Related foundational reference（相关基础参考）：** Menze et al. “The Multimodal Brain Tumor Image Segmentation Benchmark (BRATS).” *IEEE Transactions on Medical Imaging*, vol. 34, no. 10, pp. 1993–2024, 2015. [DOI: 10.1109/TMI.2014.2377694](https://doi.org/10.1109/TMI.2014.2377694).

此处链接的基准论文为 arXiv 版本；本页未将其标注为期刊或会议论文。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
