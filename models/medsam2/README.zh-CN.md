<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🎞️ MedSAM2

<p align="center"><strong>从 SAM 2 适配而来的 3D 医学图像与医学视频提示分割模型，通过 memory-based propagation 在切片/帧间传播。</strong></p>

<p align="center">
<a href="https://github.com/bowang-lab/MedSAM2"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2504.03600"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2504.03600-991b1b?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/wanglab/MedSAM2"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

> ← 返回 [模型目录](../README.zh-CN.md) · 目录分组: SRO-Edit 对比基线

## 基本信息

| 字段 | 说明 |
|---|---|
| 目录分组 | SRO-Edit 对比基线 |
| 研究团队 / 机构 | University Health Network、University of Toronto 及合作机构 |
| 输入 / 模态 | 3D CT/MRI/PET 体数据，以及超声、内镜等医学视频。 |
| 提示 / 交互 | 在切片或帧上提供框/掩膜等空间提示，再进行传播与交互式修正。 |
| 代码许可 | 代码仓库：Apache-2.0。再分发或部署前，应查看 Hugging Face checkpoint 页面及原始 SAM 2 条款。 |

## 📚 论文与发表信息

**MedSAM2: Segment Anything in 3D Medical Images and Videos** — arXiv:2504.03600（2025 年预印本）。

## 📦 权重与获取方式

官方 Hugging Face 集合包含 `MedSAM2_latest.pt`、`MedSAM2_2411.pt`，以及 CT 病灶、MRI 肝病灶和超声心脏等任务专用权重。`bash download.sh` 会下载列表中的全部权重。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
conda create -n medsam2 python=3.12 -y
conda activate medsam2
# 安装兼容的 PyTorch/CUDA 版本及官方 package
pip install -e ".[dev]"
bash download.sh
python medsam2_infer_3D_CT.py -i CT_DeepLesion/images -o CT_DeepLesion/segmentation
```
该命令针对 CT；MRI 和视频请按官方 notebook 或脚本操作。

## ⚠️ 版本与对比说明

SRO-Edit 稿件中的 MedSAM2 对比对象是针对每个目标任务微调 250 个 epoch 的版本。替换成 `MedSAM2_latest.pt` 前，应核对其训练数据、checkpoint 版本和交互设置是否与论文基线一致。

## 📜 许可

代码仓库：Apache-2.0。再分发或部署前，应查看 Hugging Face checkpoint 页面及原始 SAM 2 条款。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
