<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🔬 MedicoSAM

<p align="center"><strong>面向医学图像微调的 SAM 模型与工具库，支持 2D/3D 生物医学图像的交互标注和自动语义分割。</strong></p>

<p align="center">
<a href="https://github.com/computational-cell-analytics/medico-sam"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://doi.org/10.1109/TMI.2025.3644811"><img src="https://img.shields.io/badge/PAPER-IEEE%2DTMI%2D2026-1d4ed8?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF"><img src="https://img.shields.io/badge/WEIGHTS-OwnCloud-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 医学领域 SAM 分割模型 |
| 研究团队 / 机构 | University of Göttingen 的 Computational Cell Analytics 团队 |
| 输入 / 模态 | 2D 和 3D 生物医学图像；与上游 micro-sam 生态兼容。 |
| 提示 / 交互 | SAM 风格的点、框和掩膜提示；还提供额外预训练 segmentation decoder 用于语义分割。 |
| 代码许可 | 代码：MIT。权重的具体条件请查看 OwnCloud checkpoint 页面及原始 SAM 条款。 |

## 📚 论文与发表信息

**MedicoSAM: Robust Improvement of SAM for Medical Imaging** — IEEE Transactions on Medical Imaging，45(5)，1974–1985（2026 年 5 月），DOI: 10.1109/TMI.2025.3644811。预印本：arXiv:2501.11734。

## 📦 权重与获取方式

上游项目通过 Göttingen OwnCloud 提供 `vit_b_medicosam.pt`。请从模型链接下载；不要假定仓库 MIT 代码许可自动覆盖该权重文件。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
git clone https://github.com/computational-cell-analytics/medico-sam.git
cd medico-sam
conda env create -f environment.yaml
conda activate medico-sam
pip install -e .
wget 'https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF/download' \
  -O vit_b_medicosam.pt
```
交互标注界面方面，作者推荐 [micro-sam](https://github.com/computational-cell-analytics/micro-sam)；具体 viewer 流程见官方 [`TOOL_USAGE.md`](https://github.com/computational-cell-analytics/medico-sam/blob/master/TOOL_USAGE.md)。

## ⚠️ 版本与使用说明

公开的 vit_b_medicosam.pt 是起始 checkpoint。请记录后续微调设置和具体使用的 SAM 变体。

## 📜 许可

代码：MIT。权重的具体条件请查看 OwnCloud checkpoint 页面及原始 SAM 条款。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
