<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🗂️ 医学图像分割公开数据集</h1>

<p align="center"><strong>官方获取 · 数据划分 · 标签 · 使用条款 · 论文</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/DATA%20CARDS-11-2563eb?style=flat-square" alt="11 个数据集页面">
<img src="https://img.shields.io/badge/SOURCE%20POLICY-official%20first-16803c?style=flat-square" alt="优先采用官方来源">
<img src="https://img.shields.io/badge/PAPERS-linked-6f42c1?style=flat-square" alt="论文链接">
</p>

> 🧭 每个数据集页面都提供官方数据入口，说明哪些数据带有标注，并列出相关论文引用信息。

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

## 🩻 腹部影像分割

| 数据集与机构来源 | 任务与模态 | 官方划分与标注状态 | 论文 |
| --- | --- | --- | --- |
| [AMOS 2022](amos/README.zh-CN.md)<br><sub>🏛️ 香港大学、港中大（深圳）/深圳大数据研究院、龙岗医院 · 多中心</sub> | 15 类腹部器官 · CT 与 MRI | 挑战赛期间测试集标签未公开；后续 Zenodo 版本称提供有标签档案 | <a href="https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf"><img src="https://img.shields.io/badge/NeurIPS%20D%26B-2022-2d6a4f?style=flat-square" alt="NeurIPS D&B 2022"></a> |
| [BTCV](btcv/README.zh-CN.md)<br><sub>🏛️ 范德堡大学医学中心</sub> | 13 类腹部器官 · CT | 30 例有标签开发数据；20 例测试数据标签未公开 | <a href="https://www.synapse.org/Synapse:syn3193805/wiki/217752"><img src="https://img.shields.io/badge/MICCAI%20workshop-2015-8b1e3f?style=flat-square" alt="MICCAI workshop 2015"></a> |

## 🧠 卒中影像

| 数据集与机构来源 | 任务与模态 | 官方划分与标注状态 | 论文 |
| --- | --- | --- | --- |
| [AISD](aisd/README.zh-CN.md)<br><sub>🏛️ 研究团队来自北邮、深度视界、南京大学/金陵医院、北京大学、港大；采集医院未注明</sub> | 急性缺血性梗死 · 平扫 CT | 训练/验证合计 345 例；测试 52 例；测试掩膜是否提供未明确列出 | <a href="https://doi.org/10.1007/978-3-030-87234-2_41"><img src="https://img.shields.io/badge/MICCAI-2021-8b1e3f?style=flat-square" alt="MICCAI 2021"></a> |

## 🧾 各数据集页面包含

- 🔗 官方数据集、挑战赛或机构页面链接
- 🗂️ 组织方公布的数据划分信息
- 🏷️ 标签定义及验证集/测试集参考标注是否公开
- ⬇️ 下载入口与访问要求
- 🔒 来源明确说明的许可或复用条款
- 📚 论文发表平台、年份、卷期/页码或文章编号、DOI，以及可用的预印本链接

**来源原则：** 如果官方来源未说明某项划分、许可或标签状态，页面会如实标注，而不会用非官方估计补全。本仓库不托管图像、掩膜或论文 PDF。

*来源核查日期：2026 年 10 月 27 日。*
