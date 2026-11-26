<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🗂️ 医学图像分割公开数据集</h1>

<p align="center"><strong>官方获取 · 数据划分 · 标签 · 使用条款 · 论文</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/DATA%20GUIDES-124-2563eb?style=flat-square" alt="124 个中英文独立数据集页面">
<img src="https://img.shields.io/badge/NNINTERACTIVE%20A1%20ROWS-114-7c3aed?style=flat-square" alt="nnInteractive 附录 A1 共 114 条">
<img src="https://img.shields.io/badge/SOURCE%20POLICY-official%20first-16803c?style=flat-square" alt="优先采用官方来源">
<img src="https://img.shields.io/badge/PAPERS-linked-6f42c1?style=flat-square" alt="论文链接">
</p>

> 🧭 目录现有 124 个独立数据集介绍页：原有 14 页，以及本次为 nnInteractive 训练清单中缺少的数据新增的 110 页。

**划分信息说明：** 页面中的病例数量和标签状态对应各页注明的数据来源或挑战赛发布版本。原始挑战赛数据与后续档案版本可能不同；未能确认的细节会明确标出。

## 🧠 脑部与神经肿瘤

| 数据集与机构来源 | 任务与模态 | 官方划分与标注状态 | 论文 |
| --- | --- | --- | --- |
| [BraTS 2015](brats-2015/README.zh-CN.md)<br><sub>🏛️ 宾夕法尼亚大学 CBICA · 多机构队列</sub> | 胶质瘤亚区 · T1、T1ce、T2、FLAIR MRI | 历史版本；具体文件与划分请查阅对应版本来源 | <a href="https://doi.org/10.1109/TMI.2014.2377694"><img src="https://img.shields.io/badge/IEEE%20TMI-2015-2455a4?style=flat-square" alt="IEEE TMI 2015"></a> |
| [BraTS 2019](brats-2019/README.zh-CN.md)<br><sub>🏛️ 宾夕法尼亚大学 CBICA · 多机构队列</sub> | 胶质瘤亚区 · T1、T1ce、T2、FLAIR MRI | 训练集有标签；验证集与测试集用于挑战赛评测 | <a href="https://doi.org/10.1007/978-3-030-46640-4"><img src="https://img.shields.io/badge/BrainLes-2019-8b1e3f?style=flat-square" alt="BrainLes 2019"></a> |
| [BraTS 2021](brats-2021/README.zh-CN.md)<br><sub>🏛️ CBICA/UPenn 主办；RSNA、ASNR、MICCAI 合作 · 多机构</sub> | 胶质瘤亚区 · T1、T1ce、T2、FLAIR MRI | 1,251 例有标签训练数据；挑战赛验证集与测试集标签未公开 | <a href="https://arxiv.org/abs/2107.02314"><img src="https://img.shields.io/badge/arXiv-2107.02314-b31b1b?style=flat-square" alt="arXiv 2107.02314"></a> |
| [UCSF-BMSR](ucsf-bmsr/README.zh-CN.md)<br><sub>🏛️ 加州大学旧金山分校</sub> | 脑转移瘤 · 多参数 MRI | 当前页面公布可下载 461 次检查；论文描述了 99 次检查的挑战赛测试集 | <a href="https://doi.org/10.1148/ryai.230126"><img src="https://img.shields.io/badge/Radiology%20AI-2024-2455a4?style=flat-square" alt="Radiology AI 2024"></a> |
| [BraTS-PEDs](brats-peds/README.zh-CN.md)<br><sub>🏛️ CBTN、CONNECT、DIPG Registry · 多个儿科中心</sub> | 儿童高级别胶质瘤 · 多参数 MRI | 257 例有标签训练集；91 例无标签验证影像；109 例隐藏测试集 | <a href="https://doi.org/10.1148/ryai.250902"><img src="https://img.shields.io/badge/Radiology%20AI-2026-2455a4?style=flat-square" alt="Radiology AI 2026"></a> |
| [BraTS-MEN 2023](brats-men-2023/README.zh-CN.md)<br><sub>🏛️ 6 家机构：杜克、杰斐逊、耶鲁、密苏里、UCSF、宾夕法尼亚</sub> | 脑膜瘤亚区 · T1、T1ce、T2、FLAIR MRI | 1,000 例训练；141 例验证；283 例私有测试；具体发布包可能不同 | <a href="https://doi.org/10.1038/s41597-024-03350-9"><img src="https://img.shields.io/badge/Scientific%20Data-2024-2455a4?style=flat-square" alt="Scientific Data 2024"></a> |
| [BraTS-MEN-RT](brats-men-rt/README.zh-CN.md)<br><sub>🏛️ 7 家机构：杜克、UCSF、SUNY Upstate、华盛顿大学、密苏里、KCL、UCSD</sub> | 放疗大体肿瘤靶区 · 增强 T1 MRI | 500 例有标签训练；70 例无标签验证；180 例私有测试 | <a href="https://doi.org/10.1038/s41597-026-06649-x"><img src="https://img.shields.io/badge/Scientific%20Data-2026-2455a4?style=flat-square" alt="Scientific Data 2026"></a> |
| [CFB-GBM](cfb-gbm/README.zh-CN.md)<br><sub>🏛️ 法国弗朗索瓦·巴克莱斯中心 · 单中心</sub> | 胶质母细胞瘤纵向随访 · MRI、CT、放疗剂量/结构 | TCIA 数据集；官方未定义训练/验证/测试划分 | <a href="https://doi.org/10.59275/j.melba.2026-dd48"><img src="https://img.shields.io/badge/MELBA-2026-6f42c1?style=flat-square" alt="MELBA 2026"></a> |

## 🦴 脊柱影像

| 数据集与机构来源 | 任务与模态 | 官方划分与标注状态 | 论文 |
| --- | --- | --- | --- |
| [VerSe19 + VerSe20](verse19-20/README.zh-CN.md)<br><sub>🏛️ 多中心、多探测器 CT 数据</sub> | 椎体标记与分割 · CT | 合并版本含 355 位患者的 374 次扫描；完整标注包括曾作为隐藏测试的数据 | <a href="https://doi.org/10.1016/j.media.2021.102166"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2021-2455a4?style=flat-square" alt="Medical Image Analysis 2021"></a> |

## 🩻 腹部影像分割

| 数据集与机构来源 | 任务与模态 | 官方划分与标注状态 | 论文 |
| --- | --- | --- | --- |
| [AMOS 2022](amos/README.zh-CN.md)<br><sub>🏛️ 香港大学、港中大（深圳）/深圳大数据研究院、龙岗医院 · 多中心</sub> | 15 类腹部器官 · CT 与 MRI | 挑战赛期间测试集标签未公开；后续 Zenodo 版本称提供有标签档案 | <a href="https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf"><img src="https://img.shields.io/badge/NeurIPS%20D%26B-2022-2d6a4f?style=flat-square" alt="NeurIPS D&B 2022"></a> |
| [KiTS23](kits23/README.zh-CN.md)<br><sub>🏛️ M Health Fairview 医疗中心</sub> | 肾脏、肾肿瘤、肾囊肿 · 增强 CT | 489 例带标签训练数据；110 例测试标签由组织方保留 | <a href="https://doi.org/10.1007/978-3-031-54806-2"><img src="https://img.shields.io/badge/Springer%20LNCS-2024-8b1e3f?style=flat-square" alt="Springer LNCS 2024"></a> |
| [BTCV](btcv/README.zh-CN.md)<br><sub>🏛️ 范德堡大学医学中心</sub> | 13 类腹部器官 · CT | 30 例有标签开发数据；20 例测试数据标签未公开 | <a href="https://www.synapse.org/Synapse:syn3193805/wiki/217752"><img src="https://img.shields.io/badge/MICCAI%20workshop-2015-8b1e3f?style=flat-square" alt="MICCAI workshop 2015"></a> |

## 🩻 头颈部放疗影像

| 数据集与机构来源 | 任务与模态 | 官方划分与标注状态 | 论文 |
| --- | --- | --- | --- |
| [SegRap2023](segrap2023/README.zh-CN.md)<br><sub>🏛️ 中国四川省肿瘤医院</sub> | 鼻咽癌放疗 · 平扫与增强 CT 配对影像 | 训练/验证/测试分别为 120/20/60 位患者；训练集带标签、验证影像无标签，测试集保留 | <a href="https://doi.org/10.1016/j.media.2024.103447"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2025-2455a4?style=flat-square" alt="Medical Image Analysis 2025"></a> |

## 🧠 卒中影像

| 数据集与机构来源 | 任务与模态 | 官方划分与标注状态 | 论文 |
| --- | --- | --- | --- |
| [AISD](aisd/README.zh-CN.md)<br><sub>🏛️ 研究团队来自北邮、深度视界、南京大学/金陵医院、北京大学、港大；采集医院未注明</sub> | 急性缺血性梗死 · 平扫 CT | 训练/验证合计 345 例；测试 52 例；测试掩膜是否提供未明确列出 | <a href="https://doi.org/10.1007/978-3-030-87234-2_41"><img src="https://img.shields.io/badge/MICCAI-2021-8b1e3f?style=flat-square" alt="MICCAI 2021"></a> |

## 🧩 nnInteractive 训练集条目与独立介绍页

论文称训练集包含 120 多个公开数据集。附录 A1 表题写 120，但表中有 **114 条有效具名记录**；TeX 源码另有一条被注释的 `AbdOrgSegm`。其中 4 条已有详细介绍，因此本次新增 **110 个中英文独立页面**。论文没有列出其余 6 条的名称，目录不会臆造。

下方逐行列出附录 A1 的影像数、模态、目标、来源链接和论文引用。论文报告的行级影像数不等同于官方发布总量。附录 A2 是留出测试/OOD 数据集，不混入训练清单。分类按 A1 的解剖目标整理；跨部位数据会出现在多个分类中。

**来源页核查：**来源链接于 2026 年 11 月 26 日核查。部分门户需要注册或阻止自动化预览。若页面未显示划分、标签定义或许可信息，独立页面会如实说明并保留来源链接，不会猜测。

**Paper:** [Isensee et al., “nnInteractive: Redefining 3D Promptable Segmentation” (arXiv v1, Appendix A1)](https://arxiv.org/html/2503.08373v1#appendix-A3-Dataset). [Abstract and full paper](https://arxiv.org/abs/2503.08373).

### 按目标解剖部位浏览

分类数量是出现次数，不是唯一记录数；多目标数据可能出现在多个分类。

### 🧠 脑与神经系统 — 23 个分类条目

Targets include brain regions, stroke/demyelinating lesions, brain tumors, and cerebral vessels.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 4](decathlon-task-4/README.zh-CN.md) | 208 | MRI | Hippocampus | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [ISLES2015](isles2015/README.zh-CN.md) | 28 | MRI | Stroke Lesion | [source](http://www.isles-challenge.org/ISLES2015) | [ref 91](https://arxiv.org/html/2503.08373v1#bib.bib91) |
| [ISBILesion2015](isbilesion2015/README.zh-CN.md) | 42 | MRI | MS Lesion | [source](https://iacl.ece.jhu.edu/index.php/MSChallenge) | [ref 23](https://arxiv.org/html/2503.08373v1#bib.bib23) |
| [BrainMetShare](brainmetshare/README.zh-CN.md) | 84 | MRI | Brain Metastases | [source](https://aimi.stanford.edu/brainmetshare) | [ref 40](https://arxiv.org/html/2503.08373v1#bib.bib40) |
| [CrossModa22](crossmoda22/README.zh-CN.md) | 168 | MRI | Vestibular Schwannoma, Cochlea | [source](https://crossmoda2022.grand-challenge.org) | [ref 124](https://arxiv.org/html/2503.08373v1#bib.bib124) |
| [Atlas22](atlas22/README.zh-CN.md) | 524 | MRI | Stroke Lesion | [source](https://atlas.grand-challenge.org) | [ref 75](https://arxiv.org/html/2503.08373v1#bib.bib75) |
| [BraTS24](brats24/README.zh-CN.md) | 1,251 | MRI | Glioblastoma | [source](https://www.synapse.org/Synapse:syn51156910/wiki/621282) | [ref 57](https://arxiv.org/html/2503.08373v1#bib.bib57), [ref 9](https://arxiv.org/html/2503.08373v1#bib.bib9), [ref 96](https://arxiv.org/html/2503.08373v1#bib.bib96), [ref 8](https://arxiv.org/html/2503.08373v1#bib.bib8) |
| [CTORG](ctorg/README.zh-CN.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [TopCow](topcow/README.zh-CN.md) | 200 | CT,MRI | Vessel Components of CoW | [source](https://topcow23.grand-challenge.org) | [ref 148](https://arxiv.org/html/2503.08373v1#bib.bib148) |
| [AxonEM](axonem/README.zh-CN.md) | 18 | El. Microscopy | Axon Instances | [source](https://axonem.grand-challenge.org) | [ref 142](https://arxiv.org/html/2503.08373v1#bib.bib142) |
| [NucMM](nucmm/README.zh-CN.md) | 62 | El. Microscopy | Neuronal Nuclei | [source](https://nucmm.grand-challenge.org) | [ref 76](https://arxiv.org/html/2503.08373v1#bib.bib76) |
| [FETA](feta/README.zh-CN.md) | 120 | MRI | Brain Regions | [source](https://fetachallenge.github.io/pages/Data_description) | [ref 102](https://arxiv.org/html/2503.08373v1#bib.bib102) |
| [Drosophila](drosophila/README.zh-CN.md) | 1 | El. Microscopy | Mitochondria, Synapses | [source](https://github.com/unidesigner/groundtruth-drosophila-vnc) | [ref 36](https://arxiv.org/html/2503.08373v1#bib.bib36) |
| [LGGMRISeg](lggmriseg/README.zh-CN.md) | 110 | MRI | Tumor | [source](https://www.kaggle.com/datasets/mateuszbuda/lgg-mri-segmentation/data) | [ref 21](https://arxiv.org/html/2503.08373v1#bib.bib21) |
| [M-CRIB](m-crib/README.zh-CN.md) | 10 | MRI | Neonatal Brain Atlas | [source](https://osf.io/4vthr) | [ref 3](https://arxiv.org/html/2503.08373v1#bib.bib3) |
| [RESECT](resect/README.zh-CN.md) | 69 | US | Cerebral Tumor | [source](https://osf.io/jv8bk) | [ref 12](https://arxiv.org/html/2503.08373v1#bib.bib12) |
| [WMHSegChallenge](wmhsegchallenge/README.zh-CN.md) | 60 | MRI | White Matter Hyperintensities | [source](https://dataverse.nl/dataset.xhtml?persistentId=doi:10.34894/AECRSD) | [ref 64](https://arxiv.org/html/2503.08373v1#bib.bib64) |
| [OASIS](oasis/README.zh-CN.md) | 436 | MRI | Brain Regions | [source](https://sites.wustl.edu/oasisbrains/home/oasis-1) | [ref 92](https://arxiv.org/html/2503.08373v1#bib.bib92) |
| [MrBrains18](mrbrains18/README.zh-CN.md) | 30 | MRI | Brain Structures | [source](https://doi.org/10.34894/E0U32Q) | [ref 63](https://arxiv.org/html/2503.08373v1#bib.bib63) |
| [VALDO Task 2](valdo-task-2/README.zh-CN.md) | 72 | MRI | Cerebral Microbleed | [source](https://valdo.grand-challenge.org/Task2) | [ref 129](https://arxiv.org/html/2503.08373v1#bib.bib129) |
| [UPENN-GBM](upenn-gbm/README.zh-CN.md) | 147 | MRI | Edema, Tumor | [source](https://www.cancerimagingarchive.net/collection/upenn-gbm) | [ref 10](https://arxiv.org/html/2503.08373v1#bib.bib10) |
| [ReMIND](remind/README.zh-CN.md) | 213 | MRI | Brain Resection | [source](https://www.cancerimagingarchive.net/collection/remind) | [ref 54](https://arxiv.org/html/2503.08373v1#bib.bib54) |
| [Instance2022](instance2022/README.zh-CN.md) | 100 | CT | Intracranial Hemorrhage | [source](https://instance.grand-challenge.org) | [ref 72](https://arxiv.org/html/2503.08373v1#bib.bib72) |

### ❤️ 心脏与心血管结构 — 20 个分类条目

Targets include cardiac chambers, myocardium, heart structures, and vessels.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 2](decathlon-task-2/README.zh-CN.md) | 20 | MRI | Heart | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 8](decathlon-task-8/README.zh-CN.md) | 303 | CT | Hepatic Vessel, H. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [ACDC](acdc/README.zh-CN.md) | 200 | MRI | RV Cavity, LV Myocardium, LV Cavity | [source](https://www.creatis.insa-lyon.fr/Challenge/acdc/databases.html) | [ref 15](https://arxiv.org/html/2503.08373v1#bib.bib15) |
| [SegTHOR](segthor/README.zh-CN.md) | 40 | CT | Heart, Aorta, Trachea, Esophagus | [source](https://competitions.codalab.org/competitions/21145) | [ref 66](https://arxiv.org/html/2503.08373v1#bib.bib66) |
| [M&Ms](m-and-ms/README.zh-CN.md) | 300 | MRI | Left & Right Ventricle, Myocardium | [source](https://www.ub.edu/mnms) | [ref 22](https://arxiv.org/html/2503.08373v1#bib.bib22), [ref 93](https://arxiv.org/html/2503.08373v1#bib.bib93) |
| [SegA](sega/README.zh-CN.md) | 56 | CT | Aorta | [source](https://multicenteraorta.grand-challenge.org/) | [ref 110](https://arxiv.org/html/2503.08373v1#bib.bib110), [ref 51](https://arxiv.org/html/2503.08373v1#bib.bib51), [ref 104](https://arxiv.org/html/2503.08373v1#bib.bib104) |
| [CTORG](ctorg/README.zh-CN.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [TopCow](topcow/README.zh-CN.md) | 200 | CT,MRI | Vessel Components of CoW | [source](https://topcow23.grand-challenge.org) | [ref 148](https://arxiv.org/html/2503.08373v1#bib.bib148) |
| [AortaSeg24](aortaseg24/README.zh-CN.md) | 50 | CT | Aorta | [source](https://aortaseg24.grand-challenge.org) | [ref 45](https://arxiv.org/html/2503.08373v1#bib.bib45) |
| [CAMUS](camus/README.zh-CN.md) | 1,000 | US | Endocardium, Epicardium, Atrium | [source](https://www.creatis.insa-lyon.fr/Challenge/camus/index.html) | [ref 68](https://arxiv.org/html/2503.08373v1#bib.bib68) |
| [CETUS](cetus/README.zh-CN.md) | 90 | US | LV Lumen | [source](https://www.creatis.insa-lyon.fr/Challenge/CETUS/databases.html) | [ref 14](https://arxiv.org/html/2503.08373v1#bib.bib14) |
| [CAP](cap/README.zh-CN.md) | 1,637 | MRI | Left Ventricle | [source](https://www.cardiacatlas.org/lv-segmentation-challenge) | [ref 55](https://arxiv.org/html/2503.08373v1#bib.bib55) |
| [AtriaSeg2018](atriaseg2018/README.zh-CN.md) | 100 | MRI | Left Atrium | [source](https://www.cardiacatlas.org/atriaseg2018-challenge/atria-seg-data) | [ref 145](https://arxiv.org/html/2503.08373v1#bib.bib145) |
| [SegThy 1](segthy-1/README.zh-CN.md) | 14 | MRI | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [SegThy 2](segthy-2/README.zh-CN.md) | 32 | US | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [Emidec](emidec/README.zh-CN.md) | 100 | MRI | Heart Structures | [source](https://emidec.com) | [ref 65](https://arxiv.org/html/2503.08373v1#bib.bib65) |
| [HVSMR-2.0](hvsmr-2-0/README.zh-CN.md) | 60 | MRI | Heart, Vessel | [source](https://segchd.csail.mit.edu) | [ref 101](https://arxiv.org/html/2503.08373v1#bib.bib101) |
| [Kipa22](kipa22/README.zh-CN.md) | 70 | CT | Kidney, Vessel, Tumor | [source](https://kipa22.grand-challenge.org) | [ref 41](https://arxiv.org/html/2503.08373v1#bib.bib41) |
| [OrCaScore](orcascore/README.zh-CN.md) | 32 | CT | Calcifications | [source](https://orcascore.grand-challenge.org) | [ref 143](https://arxiv.org/html/2503.08373v1#bib.bib143) |
| [Parse22](parse22/README.zh-CN.md) | 100 | CT | Pulmonary Artery | [source](https://parse2022.grand-challenge.org/Parse2022) | [ref 83](https://arxiv.org/html/2503.08373v1#bib.bib83) |

### 🫁 胸部、肺、气道与纵隔 — 22 个分类条目

Targets include lungs, airways, mediastinal structures, and pleural disease.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 6](decathlon-task-6/README.zh-CN.md) | 63 | CT | Lung Lesion | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [LIDC](lidc/README.zh-CN.md) | 1,010 | CT | Lung Lesion | [source](https://www.cancerimagingarchive.net/collection/lidc-idri) | [ref 7](https://arxiv.org/html/2503.08373v1#bib.bib7) |
| [StructSeg Task3](structseg-task3/README.zh-CN.md) | 50 | CT | 6 OAR Lung | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [StructSeg Task4](structseg-task4/README.zh-CN.md) | 50 | CT | Lung Cancer | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [SegTHOR](segthor/README.zh-CN.md) | 40 | CT | Heart, Aorta, Trachea, Esophagus | [source](https://competitions.codalab.org/competitions/21145) | [ref 66](https://arxiv.org/html/2503.08373v1#bib.bib66) |
| [Hecktor2022](hecktor2022/README.zh-CN.md) | 524 | PET,CT | Head and Neck Tumor | [source](https://hecktor.grand-challenge.org) | [ref 4](https://arxiv.org/html/2503.08373v1#bib.bib4) |
| [CTORG](ctorg/README.zh-CN.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Aero Path](aero-path/README.zh-CN.md) | 27 | CT | Lungs, Airways | [source](https://github.com/raidionics/AeroPath) | [ref 128](https://arxiv.org/html/2503.08373v1#bib.bib128) |
| [LungVis1.0](lungvis1-0/README.zh-CN.md) | 22 | Fl. Microscopy | Airway | [source](https://zenodo.org/records/7413818) | [ref 149](https://arxiv.org/html/2503.08373v1#bib.bib149) |
| [BBBC046 FiloData3D](bbbc046-filodata3d/README.zh-CN.md) | 5,400 | Fl. Microscopy | Lung Cancer Cells | [source](https://bbbc.broadinstitute.org/BBBC046) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [MediaLymph](medialymph/README.zh-CN.md) | 15 | CT | Mediastinal Lymph Nodes | [source](https://github.com/dbouget/ct_mediastinal_structures_segmentation) | [ref 19](https://arxiv.org/html/2503.08373v1#bib.bib19) |
| [MediaStruct](mediastruct/README.zh-CN.md) | 15 | CT | Mediastinal Structures | [source](https://github.com/dbouget/ct_mediastinal_structures_segmentation) | [ref 18](https://arxiv.org/html/2503.08373v1#bib.bib18) |
| [CT Lymph Nodes](ct-lymph-nodes/README.zh-CN.md) | 175 | CT | Lymph Nodes | [source](https://www.cancerimagingarchive.net/collection/ct-lymph-nodes) | [ref 118](https://arxiv.org/html/2503.08373v1#bib.bib118) |
| [MAMA MIA](mama-mia/README.zh-CN.md) | 1,506 | MRI | Breast Lesions | [source](https://www.synapse.org/Synapse:syn60868042/wiki/628716) | [ref 33](https://arxiv.org/html/2503.08373v1#bib.bib33) |
| [ATM2022](atm2022/README.zh-CN.md) | 300 | CT | Airway Tree | [source](https://atm22.grand-challenge.org) | [ref 151](https://arxiv.org/html/2503.08373v1#bib.bib151) |
| [Parse22](parse22/README.zh-CN.md) | 100 | CT | Pulmonary Artery | [source](https://parse2022.grand-challenge.org/Parse2022) | [ref 83](https://arxiv.org/html/2503.08373v1#bib.bib83) |
| [COVID-19 CT Lung](covid-19-ct-lung/README.zh-CN.md) | 10 | CT | COVID -19 | [source](https://zenodo.org/records/3757476) | [ref 53](https://arxiv.org/html/2503.08373v1#bib.bib53) |
| [LNDb](lndb/README.zh-CN.md) | 229 | CT | Lymph Nodes | [source](https://lndb.grand-challenge.org) | [ref 103](https://arxiv.org/html/2503.08373v1#bib.bib103) |
| [NIH Lymph](nih-lymph/README.zh-CN.md) | 176 | CT | Lymph Nodes | [source](https://www.cancerimagingarchive.net/collection/ct-lymph-nodes) | [ref 117](https://arxiv.org/html/2503.08373v1#bib.bib117) |
| [NSCLC Pleural Effusion](nsclc-pleural-effusion/README.zh-CN.md) | 78 | CT | Pleural Effusion | [source](https://www.cancerimagingarchive.net/analysis-result/plethora) | [ref 61](https://arxiv.org/html/2503.08373v1#bib.bib61) |
| [NSCLC Radiomics](nsclc-radiomics/README.zh-CN.md) | 503 | CT | Lung Lesions | [source](https://www.cancerimagingarchive.net/collection/nsclc-radiomics) | [ref 2](https://arxiv.org/html/2503.08373v1#bib.bib2) |
| [COVID-19-20](covid-19-20/README.zh-CN.md) | 199 | CT | COVID-19 | [source](https://covid-segmentation.grand-challenge.org/COVID-19-20) | [ref 120](https://arxiv.org/html/2503.08373v1#bib.bib120) |

### 🩻 腹部与盆腔器官 — 29 个分类条目

Targets include abdominal organs and pelvic structures such as the prostate.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 3](decathlon-task-3/README.zh-CN.md) | 131 | CT | Liver, L. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 5](decathlon-task-5/README.zh-CN.md) | 32 | MRI | Prostate | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 7](decathlon-task-7/README.zh-CN.md) | 281 | CT | Pancreas, P. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 8](decathlon-task-8/README.zh-CN.md) | 303 | CT | Hepatic Vessel, H. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 9](decathlon-task-9/README.zh-CN.md) | 41 | CT | Spleen | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 10](decathlon-task-10/README.zh-CN.md) | 126 | CT | Colon Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [BTCV](btcv/README.zh-CN.md) | 30 | CT | 13 Abdominal Organs | [source](https://www.synapse.org/Synapse:syn3193805/wiki/89480) | [ref 67](https://arxiv.org/html/2503.08373v1#bib.bib67) |
| [Promise12](promise12/README.zh-CN.md) | 50 | MRI | Prostate | [source](https://zenodo.org/records/8026660) | [ref 77](https://arxiv.org/html/2503.08373v1#bib.bib77) |
| [CHAOS](chaos/README.zh-CN.md) | 60 | MRI | Liver, Kidney (L and R), Spleen | [source](https://zenodo.org/records/3431873) | [ref 58](https://arxiv.org/html/2503.08373v1#bib.bib58) |
| [BTCV 2](btcv-2/README.zh-CN.md) | 63 | CT | 9 Abdominal Organs | [source](https://zenodo.org/records/1169361) | [ref 37](https://arxiv.org/html/2503.08373v1#bib.bib37) |
| [NIH-Pan](nih-pan/README.zh-CN.md) | 82 | CT | Pancreas | [source](https://wiki.cancerimagingarchive.net/display/Public/Pancreas-CT) | [ref 25](https://arxiv.org/html/2503.08373v1#bib.bib25), [ref 119](https://arxiv.org/html/2503.08373v1#bib.bib119) |
| [ProstateX](prostatex/README.zh-CN.md) | 140 | MRI | Prostate Lesion | [source](https://www.aapm.org/GrandChallenge/PROSTATEx-2) | [ref 78](https://arxiv.org/html/2503.08373v1#bib.bib78) |
| [KiTS23](kits23/README.zh-CN.md) | 489 | CT | Kidneys, K. Tumor, Cysts | [source](https://kits-challenge.org/kits23) | [ref 43](https://arxiv.org/html/2503.08373v1#bib.bib43) |
| [AMOS](amos/README.zh-CN.md) | 360 | CT,MRI | 15 Abdominal Organs | [source](https://amos22.grand-challenge.org) | [ref 50](https://arxiv.org/html/2503.08373v1#bib.bib50) |
| [AbdomenAtlas1.1Mini](abdomenatlas1-1mini/README.zh-CN.md) | 5,195 | CT | 8 Abdominal Organs | [source](https://huggingface.co/datasets/AbdomenAtlas/_AbdomenAtlas1.1Mini) | [ref 71](https://arxiv.org/html/2503.08373v1#bib.bib71), [ref 108](https://arxiv.org/html/2503.08373v1#bib.bib108) |
| [FLARE](flare/README.zh-CN.md) | 50 | CT | 13 Abdominal Organs | [source](https://flare22.grand-challenge.org) | [ref 87](https://arxiv.org/html/2503.08373v1#bib.bib87) |
| [WORD](word/README.zh-CN.md) | 120 | CT | 16 Abdominal Organs | [source](https://github.com/HiLab-git/WORD) | [ref 84](https://arxiv.org/html/2503.08373v1#bib.bib84), [ref 73](https://arxiv.org/html/2503.08373v1#bib.bib73) |
| [AbdomenCT1K](abdomenct1k/README.zh-CN.md) | 996 | CT | Liver, Kidney, Spleen, Pancreas | [source](https://github.com/JunMa11/AbdomenCT-1K) | [ref 86](https://arxiv.org/html/2503.08373v1#bib.bib86) |
| [CTORG](ctorg/README.zh-CN.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Duke Liver](duke-liver/README.zh-CN.md) | 310 | MRI | Liver | [source](https://zenodo.org/records/7774566) | [ref 90](https://arxiv.org/html/2503.08373v1#bib.bib90) |
| [BBBC027 Colon Tissue](bbbc027-colon-tissue/README.zh-CN.md) | 60 | Fl. Microscopy | Colon Tissue | [source](https://bbbc.broadinstitute.org/BBBC027) | [ref 132](https://arxiv.org/html/2503.08373v1#bib.bib132) |
| [NCI-ISBI](nci-isbi/README.zh-CN.md) | 59 | MRI | Prostate | [source](https://www.cancerimagingarchive.net/analysis-result/isbi-mr-prostate-2013) | [ref 16](https://arxiv.org/html/2503.08373v1#bib.bib16) |
| [Pediatric CT SEG](pediatric-ct-seg/README.zh-CN.md) | 353 | CT | Organs | [source](https://doi.org/10.7937/TCIA.X0H0-1706) | [ref 52](https://arxiv.org/html/2503.08373v1#bib.bib52) |
| [Atlas Bourgogne](atlas-bourgogne/README.zh-CN.md) | 60 | MRI | Liver, Tumor | [source](https://atlas-challenge.u-bourgogne.fr) | [ref 109](https://arxiv.org/html/2503.08373v1#bib.bib109) |
| [CC Tumor Heterogeneity](cc-tumor-heterogeneity/README.zh-CN.md) | 63 | MRI | Cervix, Tumor | [source](https://www.cancerimagingarchive.net/collection/cc-tumor-heterogeneity) | [ref 95](https://arxiv.org/html/2503.08373v1#bib.bib95) |
| [CURVAS](curvas/README.zh-CN.md) | 60 | CT | Pancreas, Kidney, Liver | [source](https://curvas.grand-challenge.org/curvas-dataset) | [ref 113](https://arxiv.org/html/2503.08373v1#bib.bib113) |
| [Kipa22](kipa22/README.zh-CN.md) | 70 | CT | Kidney, Vessel, Tumor | [source](https://kipa22.grand-challenge.org) | [ref 41](https://arxiv.org/html/2503.08373v1#bib.bib41) |
| [ProstateEdgeCases](prostateedgecases/README.zh-CN.md) | 131 | CT | Bladder, Prostate, Rectum | [source](https://www.cancerimagingarchive.net/collection/prostate-anatomical-edge-cases) | [ref 56](https://arxiv.org/html/2503.08373v1#bib.bib56) |
| [Prostate158](prostate158/README.zh-CN.md) | 188 | MRI | Gland, Tumor | [source](https://zenodo.org/records/6481141) | [ref 130](https://arxiv.org/html/2503.08373v1#bib.bib130) |

### 🗣️ 头颈部 — 8 个分类条目

Targets include head-and-neck organs at risk, nasopharynx, thyroid, cochlea, and dental structures.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [StructSeg Task1](structseg-task1/README.zh-CN.md) | 50 | CT | 22 OAR Head & Neck | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [StructSeg Task2](structseg-task2/README.zh-CN.md) | 50 | CT | Nasopharynx Cancer | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [CrossModa22](crossmoda22/README.zh-CN.md) | 168 | MRI | Vestibular Schwannoma, Cochlea | [source](https://crossmoda2022.grand-challenge.org) | [ref 124](https://arxiv.org/html/2503.08373v1#bib.bib124) |
| [Hecktor2022](hecktor2022/README.zh-CN.md) | 524 | PET,CT | Head and Neck Tumor | [source](https://hecktor.grand-challenge.org) | [ref 4](https://arxiv.org/html/2503.08373v1#bib.bib4) |
| [SegThy 1](segthy-1/README.zh-CN.md) | 14 | MRI | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [SegThy 2](segthy-2/README.zh-CN.md) | 32 | US | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [PDDCA](pddca/README.zh-CN.md) | 47 | CT | Head and Neck Structures | [source](https://www.imagenglab.com/newsite/pddca) | [ref 111](https://arxiv.org/html/2503.08373v1#bib.bib111) |
| [ToothFairy 2](toothfairy-2/README.zh-CN.md) | 480 | CT | Dental Structures | [source](https://ditto.ing.unimore.it/toothfairy2) | [ref 17](https://arxiv.org/html/2503.08373v1#bib.bib17) |

### 🦴 脊柱与肌肉骨骼 — 8 个分类条目

Targets include vertebrae, ribs, lumbar spine, lower limbs, cartilage, and bone.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [VerSe2020](verse19-20/README.zh-CN.md) | 113 | CT | 28 Vertebrae | [source](https://github.com/anjany/verse) | [ref 123](https://arxiv.org/html/2503.08373v1#bib.bib123), [ref 81](https://arxiv.org/html/2503.08373v1#bib.bib81), [ref 74](https://arxiv.org/html/2503.08373v1#bib.bib74) |
| [RibSeg](ribseg/README.zh-CN.md) | 370 | CT | Ribs | [source](https://github.com/HINTLab/RibSeg) | [ref 147](https://arxiv.org/html/2503.08373v1#bib.bib147) |
| [CTORG](ctorg/README.zh-CN.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Leg3DUS](leg3dus/README.zh-CN.md) | 44 | US | Lower-Limb Leg | [source](https://www.cs.cit.tum.de/camp/publications/leg-3d-us-dataset) | [ref 31](https://arxiv.org/html/2503.08373v1#bib.bib31) |
| [Spine-Mets](spine-mets/README.zh-CN.md) | 55 | CT | Vertebra | [source](https://www.cancerimagingarchive.net/collection/spine-mets-ct-seg) | [ref 105](https://arxiv.org/html/2503.08373v1#bib.bib105) |
| [SKI10](ski10/README.zh-CN.md) | 100 | MRI | Cartilage, Bone | [source](https://ski10.grand-challenge.org) | [ref 138](https://arxiv.org/html/2503.08373v1#bib.bib138) |
| [Soft Tissue Sarcoma](soft-tissue-sarcoma/README.zh-CN.md) | 102 | MRI | Edema, Tumor | [source](https://www.cancerimagingarchive.net/collection/soft-tissue-sarcoma) | [ref 136](https://arxiv.org/html/2503.08373v1#bib.bib136) |
| [Spider](spider/README.zh-CN.md) | 447 | MRI | Lumbar Spine | [source](https://zenodo.org/records/10159290) | [ref 137](https://arxiv.org/html/2503.08373v1#bib.bib137) |

### 🔬 显微、细胞与科学成像 — 18 个分类条目

Grouped by microscopy modality or cellular/microstructural targets, including non-clinical scientific images.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [AxonEM](axonem/README.zh-CN.md) | 18 | El. Microscopy | Axon Instances | [source](https://axonem.grand-challenge.org) | [ref 142](https://arxiv.org/html/2503.08373v1#bib.bib142) |
| [MitoEM](mitoem/README.zh-CN.md) | 4 | El. Microscopy | Mitochondria Instances | [source](https://mitoem.grand-challenge.org) | [ref 142](https://arxiv.org/html/2503.08373v1#bib.bib142) |
| [NucMM](nucmm/README.zh-CN.md) | 62 | El. Microscopy | Neuronal Nuclei | [source](https://nucmm.grand-challenge.org) | [ref 76](https://arxiv.org/html/2503.08373v1#bib.bib76) |
| [LungVis1.0](lungvis1-0/README.zh-CN.md) | 22 | Fl. Microscopy | Airway | [source](https://zenodo.org/records/7413818) | [ref 149](https://arxiv.org/html/2503.08373v1#bib.bib149) |
| [BBBC024 HL60 Cell line](bbbc024-hl60-cell-line/README.zh-CN.md) | 240 | Fl. Microscopy | Cell Nuclei | [source](https://bbbc.broadinstitute.org/BBBC024) | [ref 131](https://arxiv.org/html/2503.08373v1#bib.bib131) |
| [BBBC027 Colon Tissue](bbbc027-colon-tissue/README.zh-CN.md) | 60 | Fl. Microscopy | Colon Tissue | [source](https://bbbc.broadinstitute.org/BBBC027) | [ref 132](https://arxiv.org/html/2503.08373v1#bib.bib132) |
| [BBBC032 MouseEmbryoBlastocyst](bbbc032-mouseembryoblastocyst/README.zh-CN.md) | 1 | Fl. Microscopy | Blastocyst Cells | [source](https://bbbc.broadinstitute.org/BBBC032) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC033 MouseTrophoblast](bbbc033-mousetrophoblast/README.zh-CN.md) | 1 | Microscopy | Trophoblast | [source](https://bbbc.broadinstitute.org/BBBC033) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC034 PluripStemCells](bbbc034-pluripstemcells/README.zh-CN.md) | 1 | Microscopy | Stem Cells | [source](https://bbbc.broadinstitute.org/BBBC034) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC046 FiloData3D](bbbc046-filodata3d/README.zh-CN.md) | 5,400 | Fl. Microscopy | Lung Cancer Cells | [source](https://bbbc.broadinstitute.org/BBBC046) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC050 MouseEmbryoNuclei](bbbc050-mouseembryonuclei/README.zh-CN.md) | 165 | Fl. Microscopy | Mouse Embryonic Cells | [source](https://bbbc.broadinstitute.org/BBBC050) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [EPFL Mito](epfl-mito/README.zh-CN.md) | 1 | El. Microscopy | Mitochondria | [source](https://www.epfl.ch/labs/cvlab/data/data-em) | [ref 82](https://arxiv.org/html/2503.08373v1#bib.bib82) |
| [Drosophila](drosophila/README.zh-CN.md) | 1 | El. Microscopy | Mitochondria, Synapses | [source](https://github.com/unidesigner/groundtruth-drosophila-vnc) | [ref 36](https://arxiv.org/html/2503.08373v1#bib.bib36) |
| [ParticleSeg3D](particleseg3d/README.zh-CN.md) | 54 | MicroCT | Mineral Samples | [source](https://syncandshare.desy.de/index.php/s/wjiDQ49KangiPj5) | [ref 39](https://arxiv.org/html/2503.08373v1#bib.bib39) |
| [NIS3D](nis3d/README.zh-CN.md) | 6 | Fl. Microscopy | Cell Nuclei | [source](https://zenodo.org/records/11456029) | [ref 153](https://arxiv.org/html/2503.08373v1#bib.bib153) |
| [Fluo C3DH A549](fluo-c3dh-a549/README.zh-CN.md) | 90 | Fl. Microscopy | Cell | [source](https://celltrackingchallenge.net/3d-datasets) | [ref 94](https://arxiv.org/html/2503.08373v1#bib.bib94) |
| [Fluo N3DH](fluo-n3dh/README.zh-CN.md) | 230 | Fl. Microscopy | Cell, Border | [source](https://celltrackingchallenge.net/3d-datasets) | [ref 94](https://arxiv.org/html/2503.08373v1#bib.bib94) |
| [LAPD Mouse](lapd-mouse/README.zh-CN.md) | 34 | Fl. Microscopy | Airway | [source](https://cebs-ext.niehs.nih.gov/cahs/report/lapd/web-download-links) | [ref 13](https://arxiv.org/html/2503.08373v1#bib.bib13) |

### 🌐 全身与多部位 — 7 个分类条目

Targets explicitly span the whole body, multiple organs, or multiple lesion types.

| 数据集 / 任务 | A1 影像数 | 模态（A1 原文） | 目标（A1 原文） | 官方/来源页面 | 引用文献 |
| --- | --- | --- | --- | --- | --- |
| [AutoPet2](autopet2/README.zh-CN.md) | 1,014 | PET,CT | Lesions | [source](https://autopet-ii.grand-challenge.org) | [ref 34](https://arxiv.org/html/2503.08373v1#bib.bib34) |
| [TotalSegmentatorV2](totalsegmentatorv2/README.zh-CN.md) | 1,180 | CT | 117 Classes of Whole Body | [source](https://github.com/wasserth/TotalSegmentator) | [ref 141](https://arxiv.org/html/2503.08373v1#bib.bib141) |
| [DAP-ATLAS](dap-atlas/README.zh-CN.md) | 533 | CT | 142 Classes of Whole Body | [source](https://github.com/alexanderjaus/AtlasDataset) | [ref 48](https://arxiv.org/html/2503.08373v1#bib.bib48) |
| [CTORG](ctorg/README.zh-CN.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Pediatric CT SEG](pediatric-ct-seg/README.zh-CN.md) | 353 | CT | Organs | [source](https://doi.org/10.7937/TCIA.X0H0-1706) | [ref 52](https://arxiv.org/html/2503.08373v1#bib.bib52) |
| [TotalSegmentator MRI](totalsegmentator-mri/README.zh-CN.md) | 298 | MRI | Organs | [source](https://zenodo.org/records/11367005) | [ref 26](https://arxiv.org/html/2503.08373v1#bib.bib26) |
| [Deep Lesion](deep-lesion/README.zh-CN.md) | 1,093 | CT | Multiple Types of Lesions | [source](https://nihcc.app.box.com/v/DeepLesion) | [ref 146](https://arxiv.org/html/2503.08373v1#bib.bib146) |

## 🧾 各数据集页面包含

- 🔗 官方数据集、挑战赛或机构页面链接
- 🧾 nnInteractive 条目会区分模型论文行数据与数据源页面事实；官方未说明的字段明确标注，不作推断
- 🧾 nnInteractive 条目会区分模型论文行数据与数据源页面事实；官方未说明的字段明确标注，不作推断
- 🧾 nnInteractive 条目会区分模型论文行数据与数据源页面事实；官方未说明的字段明确标注，不作推断
- 🧾 nnInteractive 条目会区分模型论文行数据与数据源页面事实；官方未说明的字段明确标注，不作推断
- 🧾 nnInteractive 条目会区分模型论文行数据与数据源页面事实；官方未说明的字段明确标注，不作推断
- 🧾 nnInteractive 条目会区分模型论文行数据与数据源页面事实；官方未说明的字段明确标注，不作推断
- 🧾 nnInteractive 条目会区分模型论文行数据与数据源页面事实；官方未说明的字段明确标注，不作推断
- 🗂️ 组织方公布的数据划分信息
- 🏷️ 标签定义及验证集/测试集参考标注是否公开
- ⬇️ 下载入口与访问要求
- 🔒 来源明确说明的许可或复用条款
- 📚 论文发表平台、年份、卷期/页码或文章编号、DOI，以及可用的预印本链接

**来源原则：** 如果官方来源未说明某项划分、许可或标签状态，页面会如实标注，而不会用非官方估计补全。本仓库不托管图像、掩膜或论文 PDF。

*来源核查日期：2026 年 11 月 26 日。*
