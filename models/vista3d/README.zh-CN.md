<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🫁 VISTA3D

<p align="center"><strong>兼顾自动与交互式医学分割的统一 3D foundation model。论文研究实现对应 MONAI 1.3 版 VISTA3D 代码库。</strong></p>

<p align="center">
<a href="https://github.com/Project-MONAI/VISTA"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://openaccess.thecvf.com/content/CVPR2025/html/He_VISTA3D_A_Unified_Segmentation_Foundation_Model_For_3D_Medical_Imaging_CVPR_2025_paper.html"><img src="https://img.shields.io/badge/PAPER-CVPR%2D2025-075985?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/nvidia/NV-Segment-CT"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 3D 自动与点提示分割 |
| 研究团队 / 机构 | Project MONAI / NVIDIA |
| 输入 / 模态 | CVPR 2025 研究版 checkpoint 以 CT 为主，支持 127 类解剖结构/病灶。 |
| 提示 / 交互 | 自动分割使用类别提示；交互分割与细化使用 3D 正/负点击点。 |
| 代码许可 | 代码：Apache-2.0。研究 checkpoint 遵循 NVIDIA open model 条款，详见模型卡。VISTA3D 与 CTMR 版本在模态、权重和任务上不同。 |

## 📚 论文与发表信息

**VISTA3D: A Unified Segmentation Foundation Model For 3D Medical Imaging** — IEEE/CVF CVPR 2025。

## 📦 权重与获取方式

研究代码会自动下载 `nvidia/NV-Segment-CT/vista3d_pretrained_model/model_monai1.3.pt`。MONAI 1.4+ bundle 使用不同的 checkpoint 命名；NV-Segment-CTMR 是单独的 CT/MR 自动分割模型。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
git clone https://github.com/Project-MONAI/VISTA.git
cd VISTA/vista3d
conda create -n vista3d python=3.9 -y
conda activate vista3d
pip install -r requirements.txt
# 自动分割器官（官方映射中 label 1 为 liver）：
python -m scripts.infer --config_file 'configs/infer.yaml' - infer \
  --image_file example-1.nii.gz --label_prompt '[1]' --save_mask true
# 交互点击使用 --point 和 --point_label；参数见官方指南。
```


## ⚠️ 版本与使用说明

研究仓库主要面向 CT，与较新的 CTMR 自动模型不同。请注明推理使用类别提示、点提示，还是自动分割后再用点修正。

## 📜 许可

代码：Apache-2.0。研究 checkpoint 遵循 NVIDIA open model 条款，详见模型卡。VISTA3D 与 CTMR 版本在模态、权重和任务上不同。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
