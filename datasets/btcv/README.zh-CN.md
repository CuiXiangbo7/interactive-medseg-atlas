<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🩻 BTCV — Beyond the Cranial Vault</h1>

<p align="center"><strong>腹部多器官分割（abdominal multi-organ segmentation）· CT</strong></p>

<p align="center">
<a href="https://www.synapse.org/Synapse:syn3193805/wiki/217752"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="官方数据来源"></a>
<a href="https://www.synapse.org/Synapse:syn3193805/wiki/217752"><img src="https://img.shields.io/badge/CHALLENGE-MICCAI%202015-8b1e3f?style=flat-square" alt="相关挑战赛"></a>
</p>

<p align="center"><strong>📚 论文与记录</strong></p>
<p align="center">
<a href="https://www.synapse.org/Synapse:syn3193805/wiki/217752"><img src="https://img.shields.io/badge/MICCAI%20workshop-2015-8b1e3f?style=flat-square" alt="MICCAI workshop 2015"></a>
<a href="https://doi.org/10.7303/syn3193805"><img src="https://img.shields.io/badge/Dataset%20DOI-10.7303%2Fsyn3193805-1f6feb?style=flat-square" alt="数据集 DOI 10.7303/syn3193805"></a>
</p>

| 基本信息 | |
| --- | --- |
| **输入** | 腹部 CT |
| **目标** | 13 类器官 |
| **机构来源** | 腹部 CT 扫描采集于范德堡大学医学中心（Vanderbilt University Medical Center）。该数据集通过 MICCAI 2015「颅外多图谱标注」研讨会挑战赛发布。[挑战赛记录](https://www.synapse.org/Synapse:syn3193805/wiki/217752)。 |
| **挑战赛来源** | [MICCAI 2015 Beyond the Cranial Vault 多图谱标注挑战赛](https://www.synapse.org/Synapse:syn3193805/wiki/217752) |

## 🧾 数据集简介

BTCV 与 MICCAI 2015「颅外多图谱标注」研讨会及挑战赛相关。腹部任务包含 30 例带标签的 CT 开发病例，以及另一个 20 例测试队列。标签覆盖 13 个器官：脾脏（spleen）、左右肾（right and left kidneys）、胆囊（gallbladder）、食管（esophagus）、肝脏（liver）、胃（stomach）、主动脉（aorta）、下腔静脉（inferior vena cava）、门静脉和脾静脉（portal and splenic veins），以及左右肾上腺（right and left adrenal glands）。

## 🗂️ 官方划分与标签可用性

| 队列 | 病例数 | 标签 |
| --- | ---: | --- |
| 训练/开发 | 30 | 提供参考标签 |
| 测试 | 20 | 挑战赛评分所用测试标签未公开 |

官方来源定义了训练集与测试集，但并未将常见的 24/6 或 18/12 训练/验证划分规定为组织方划分。这些属于后续实验方案，因此不会在这里列为官方划分。

## 🔒 获取方式与使用条款

- [Synapse 官方挑战赛页面](https://www.synapse.org/Synapse:syn3193805/wiki/217752)
- [Synapse 文件页](https://www.synapse.org/Synapse:syn3193805/files/)
- Synapse 访问需要接受项目适用的数据使用条款。请查看挑战赛来源中的最新说明和许可信息。

## 🏁 相关挑战赛

**MICCAI 2015 Beyond the Cranial Vault 多图谱标注挑战赛**旨在评估腹部 CT 多器官标注方法；BTCV 腹部队列对应其中包含 13 个结构的任务。

- [Synapse 官方挑战赛与数据集页面](https://www.synapse.org/Synapse:syn3193805/wiki/217752)

## 📚 出版物与引用

Landman et al. “MICCAI Multi-Atlas Labeling Beyond the Cranial Vault — Workshop and Challenge.” *Proceedings of the MICCAI Multi-Atlas Labeling Beyond the Cranial Vault Workshop and Challenge*, 2015, vol. 5, p. 12.

- [Synapse dataset record, DOI: 10.7303/syn3193805（Synapse 数据集记录）](https://doi.org/10.7303/syn3193805) · [Challenge wiki（挑战赛页面）](https://www.synapse.org/Synapse:syn3193805/wiki/217752)

引用原始基准时，请使用挑战赛数据集记录中的获取信息和研讨会论文引用。

---

<p align="center"><sub>🕘 来源最后核查：2026 年 10 月 27 日 · <a href="../README.zh-CN.md">返回数据集目录</a></sub></p>
