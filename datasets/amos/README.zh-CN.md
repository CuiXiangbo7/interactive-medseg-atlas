<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🩻 AMOS 2022</h1>

<p align="center"><strong>腹部多器官分割（abdominal multi-organ segmentation）· CT 与 MRI</strong></p>

<p align="center">
<a href="https://amos22.grand-challenge.org/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://amos22.grand-challenge.org/"><img src="https://img.shields.io/badge/CHALLENGE-AMOS%202022-8b1e3f?style=flat-square" alt="AMOS 2022 挑战赛"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf"><img src="https://img.shields.io/badge/NeurIPS%20D%26B-2022-2d6a4f?style=flat-square" alt="NeurIPS Datasets and Benchmarks 2022"></a>
<a href="https://arxiv.org/abs/2206.08023"><img src="https://img.shields.io/badge/arXiv-2206.08023-b31b1b?style=flat-square" alt="arXiv 2206.08023"></a>
<a href="https://doi.org/10.5281/zenodo.7262581"><img src="https://img.shields.io/badge/Zenodo%20DOI-10.5281%2Fzenodo.7262581-1f6feb?style=flat-square" alt="Zenodo DOI 10.5281/zenodo.7262581"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | 500 例 CT、100 例 MRI |
| **目标** | 15 类腹部器官 |
| **机构来源** | 基准团队作者单位包括香港大学（The University of Hong Kong, HKU）、香港中文大学（深圳）（The Chinese University of Hong Kong, Shenzhen, CUHK-Shenzhen）与深圳大数据研究院（Shenzhen Research Institute of Big Data, SRIBD）、龙岗中心医院（Longgang Central Hospital）和龙岗人民医院（Longgang People's Hospital）。论文将影像描述为多中心采集；这些作者单位不应被视为完整的影像采集医院列表。[NeurIPS 论文](https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf)。 |
| **官方来源** | [AMOS 2022 挑战赛](https://amos22.grand-challenge.org/) · [挑战赛后 Zenodo 记录](https://zenodo.org/records/7262581) |

## 🧾 数据集简介

AMOS 用于评估腹部器官分割在多中心、多厂商、多模态和多疾病影像上的表现。数据集论文介绍了 15 类器官的体素级标注，包括脾脏（spleen）、双肾（kidneys）、胆囊（gallbladder）、食管（esophagus）、肝脏（liver）、胃（stomach）、主动脉（aorta）、下腔静脉（inferior vena cava）、胰腺（pancreas）、肾上腺（adrenal glands）、十二指肠（duodenum）、膀胱（bladder）以及前列腺/子宫（prostate/uterus）。

挑战赛包含仅 CT 任务和 CT/MRI 混合任务。官方 Zenodo 记录提供一个含 500 例 CT 和 100 例 MRI 标签的数据包，以及另外的无标签数据。

## 🗂️ 官方划分与标签可用性

| 发布版本/队列 | 官方说明 |
| --- | --- |
| 挑战赛开发数据 | 训练和验证数据均提供参考标签。后续同行评审论文报告，这些可访问数据部分共含 300 例 CT 和 60 例 MRI。 |
| 挑战赛测试数据 | 挑战赛期间，门户网站说明测试影像不提供真实标签。 |
| 挑战赛后 Zenodo v2 | Zenodo 记录将其 500 例 CT/100 例 MRI 数据包描述为带标签版本。这比原始挑战赛期间公开的测试数据范围更广；若要判断测试参考标签是否可用，请核对具体数据包内容和版本。 |
| 额外无标签数据 | Zenodo 记录另行链接了这部分数据；它们不属于上述 600 例有标签影像。 |

挑战赛划分和挑战赛后数据包属于不同发布情境。请勿根据合并后的挑战赛后数据包推断训练集和验证集的划分。

## 🔒 获取方式与使用条款

- [AMOS 挑战赛门户](https://amos22.grand-challenge.org/)
- [Zenodo 数据集记录，DOI 10.5281/zenodo.7262581](https://doi.org/10.5281/zenodo.7262581)
- Zenodo 记录提供数据包和文件校验和。复用前请查看其最新元数据和挑战赛条款。

## 🏁 相关挑战赛

**AMOS 2022 挑战赛**基于多中心、多厂商采集的 CT 和 MRI，评测 15 类腹部器官的分割方法。

- [AMOS 2022 官方挑战赛网站](https://amos22.grand-challenge.org/) · [挑战赛论文](https://arxiv.org/abs/2206.08023)

## 📚 出版物与引用

**Ji et al.** “AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation.” *Advances in Neural Information Processing Systems (NeurIPS), Datasets and Benchmarks Track*, vol. 35, 2022, pp. 36722–36732.

- [NeurIPS proceedings paper（NeurIPS 论文集论文）](https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf) · [arXiv:2206.08023](https://arxiv.org/abs/2206.08023)
- [Dataset archive DOI: 10.5281/zenodo.7262581（数据集存档 DOI）](https://doi.org/10.5281/zenodo.7262581)

挑战赛门户与 Zenodo 存档对应不同的数据发布版本；选择数据时，请参考上方划分与标签说明。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
