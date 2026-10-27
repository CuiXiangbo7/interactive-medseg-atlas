<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🩺 MedSAM3-v1

<p align="center"><strong>基于 SAM 3、以 LoRA 权重发布的文本/概念引导医学适配版本。其主要流程使用医学文本提示，不要求传统框/点交互。</strong></p>

<p align="center">
<a href="https://github.com/Joey-S-Liu/MedSAM3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2511.19046"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2511.19046-991b1b?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/lal-Joey/MedSAM3_v1"><img src="https://img.shields.io/badge/WEIGHTS-LoRA%2DWeights-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

> ← 返回 [模型目录](../README.zh-CN.md) · 目录分组: 本轮六模型对比组

## 基本信息

| 字段 | 说明 |
|---|---|
| 目录分组 | 本轮六模型对比组 |
| 研究团队 / 机构 | 香港科技大学（广州）、University of Illinois Urbana-Champaign 及合作机构 |
| 输入 / 模态 | 作者介绍覆盖放射影像、光学/显微、病理及操作视频；首版具体支持类别仍在补充文档。 |
| 提示 / 交互 | 文本提示；在 SAM 3 基础模型上加载医学 LoRA adapter。 |
| 代码许可 | MedSAM3 README 未声明 LoRA 权重的单独许可。SAM 3 base materials 遵循 Meta 的 SAM License；再分发前请核对 adapter/model card 条款。 |

## 📚 论文与发表信息

**MedSAM3: Delving into Segment Anything with Medical Concepts** — arXiv:2511.19046（2025 年预印本）。

## 📦 权重与获取方式

v1 LoRA 托管在 `lal-Joey/MedSAM3_v1`。它是 adapter；还需申请并获取 gated SAM 3 base checkpoint。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
git clone https://github.com/Joey-S-Liu/MedSAM3.git
cd MedSAM3
pip install -e .
hf auth login  # gated SAM 3 base 权重需要登录
python3 infer_sam.py \
  --config configs/full_lora_config.yaml \
  --image path/to/image.jpg --prompt "skin lesion" \
  --threshold 0.5 --nms-iou 0.5 --output prediction.png
```
按上游 README 在 `configs/full_lora_config.yaml` 中设置 LoRA checkpoint 路径。

## ⚠️ 版本与对比说明

该 LoRA 发布版称为 `MedSAM3-v1`，应与 Meta 的 SAM 3 及 Medical-SAM3 项目区分。作者注明 v1 具体支持任务列表仍在补充。

## 📜 许可

MedSAM3 README 未声明 LoRA 权重的单独许可。SAM 3 base materials 遵循 Meta 的 SAM License；再分发前请核对 adapter/model card 条款。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
