<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧩 SegVol

<p align="center"><strong>主要基于 CT 训练的通用可提示体积分割模型，结合 3D 图像编码器、文本提示和空间提示。</strong></p>

<p align="center">
<a href="https://github.com/BAAI-DCAI/SegVol"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2311.13385"><img src="https://img.shields.io/badge/PAPER-NeurIPS%2D2024%2DSpotlight-6b21a8?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/BAAI/SegVol"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

> ← 返回 [模型目录](../README.zh-CN.md) · 目录分组: SRO-Edit 对比基线

## 基本信息

| 字段 | 说明 |
|---|---|
| 目录分组 | SRO-Edit 对比基线 |
| 研究团队 / 机构 | 北京智源人工智能研究院（BAAI），DCAI |
| 输入 / 模态 | 3D CT；上游论文/发布版本强调支持 200 多种解剖类别。 |
| 提示 / 交互 | 文本、点和框提示；可选 zoom-in/zoom-out 细化。 |
| 代码许可 | 代码：MIT。权重条款请以模型托管页面为准。 |

## 📚 论文与发表信息

**SegVol: Universal and Interactive Volumetric Medical Image Segmentation** — NeurIPS 2024 Spotlight；arXiv:2311.13385。

## 📦 权重与获取方式

官方 checkpoint 和 demo 数据见 BAAI Hugging Face 仓库及 Google Drive；demo 脚本还需要本地 CLIP text encoder 文件夹。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
# 按仓库旧版兼容环境安装（PyTorch >=1.11、MONAI 0.9.0、
# transformers 4.18.0、einops 0.6.1）。
pip install 'monai[all]==0.9.0' einops==0.6.1 transformers==4.18.0
# 编辑 config/config_demo.json 和 script/inference_demo.sh：
# 设置 CT、真值、SegVol checkpoint、CLIP checkpoint 和工作目录。
bash script/inference_demo.sh
```
注意：上游 demo/评估脚本读取真值掩膜来合成点/框提示，属于 GT-derived/oracle 提示，不是人工输入推理流程。详见[官方推理指南](https://github.com/BAAI-DCAI/SegVol/blob/main/documents/inference_demo.md)。

## ⚠️ 版本与对比说明

SRO-Edit 稿件使用SRO-Edit 稿件中按目标任务微调 250 个 epoch 的 SegVol 变体。整理或复现结果时，应区分具体 checkpoint、提示模式，以及官方 demo 中 GT-derived 提示这一行为。

## 📜 许可

代码：MIT。权重条款请以模型托管页面为准。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
