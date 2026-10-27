<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧠 SAM 3

<p align="center"><strong>统一的 promptable concept segmentation 模型，可在图像和视频中检测、分割、跟踪对象，支持 open-vocabulary 文本概念与视觉提示。</strong></p>

<p align="center">
<a href="https://github.com/facebookresearch/sam3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2511.16719"><img src="https://img.shields.io/badge/PAPER-arXiv--2511.16719-991b1b?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/facebook/sam3"><img src="https://img.shields.io/badge/WEIGHTS-Gated--Checkpoint-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 概念提示图像与视频分割 |
| 研究团队 / 机构 | Meta AI Research |
| 输入 / 模态 | 2D 图像和视频；不是原生 3D 体数据分割器。 |
| 提示 / 交互 | 短文本概念、图像示例、点、框和掩膜；支持视频跟踪与细化。 |
| 代码许可 | 代码和 checkpoint 遵循 Meta 的 SAM License，并非无限制的宽松许可。使用前请阅读官方条款。 |

## 📚 论文与发表信息

**SAM 3: Segment Anything with Concepts** — arXiv:2511.16719（2025 年技术报告/预印本）。

## 📦 权重与获取方式

官方 Hugging Face checkpoint 为 gated：需申请访问、接受条款并用 `hf auth login` 登录。仓库目前还提供 SAM 3.1 checkpoint；复现 SAM 3 时应固定具体 checkpoint 和仓库 revision。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
conda create -n sam3 python=3.12
conda activate sam3
# 按当前上游 README 安装兼容的 PyTorch/CUDA 组合：
pip install torch==2.10.0 torchvision --index-url https://download.pytorch.org/whl/cu128
git clone https://github.com/facebookresearch/sam3.git
cd sam3
pip install -e .
hf auth login  # checkpoint 获批后登录
```
推理请使用官方 image predictor notebook，或参照 README 中的 `build_sam3_image_model()` + `Sam3Processor` 示例。

## ⚠️ 版本与使用说明

SAM 3 原生处理 2D 图像和视频。3D 医学工作流程需要额外适配和 slice/clip 策略，使用时应说明这些设置。

## 📜 许可

代码和 checkpoint 遵循 Meta 的 SAM License，并非无限制的宽松许可。使用前请阅读官方条款。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
