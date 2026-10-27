<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🤖 MedSAM-Agent

<p align="center"><strong>一种 agentic 交互分割框架，可自主规划多轮提示与分割调用，不要求用户手动放置每次修正提示。</strong></p>

<p align="center">
<a href="https://github.com/CUHK-AIM-Group/MedSAM-Agent"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2602.03320"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2602.03320-991b1b?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

> ← 返回 [模型目录](../README.zh-CN.md) · 目录分组: SRO-Edit 对比基线

## 基本信息

| 字段 | 说明 |
|---|---|
| 目录分组 | SRO-Edit 对比基线 |
| 研究团队 / 机构 | 香港中文大学、腾讯混元及合作机构 |
| 输入 / 模态 | 作者评估包含 6 种模态、21 个数据集的 2D 医学图像。 |
| 提示 / 交互 | 自然语言目标描述加 agent 自动生成的点击；可选 Qwen 或 GPT grounding model，并需单独配置 segmentation backbone。 |
| 代码许可 | 检查到的 GitHub 仓库版本未包含顶层 LICENSE 文件。复用前请查看 model card 及各 backbone 条款；不要假定 Qwen agent 与分割权重采用同一许可。 |

## 📚 论文与发表信息

**MedSAM-Agent: Empowering Interactive Medical Image Segmentation with Multi-turn Agentic Reinforcement Learning** — arXiv:2602.03320（2026 年预印本）。

## 📦 权重与获取方式

官方 Hugging Face 模型为 `Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2`。推理还需单独提供 segmentation checkpoint（例如 MedSAM2）及配置。数据集/trajectory 发布在上游 README 中仍标为待完成。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
conda create -n msagent python=3.11
conda activate msagent
pip install -r requirements.txt
# 下载 Qwen agent 模型和 MedSAM2 checkpoint 后运行：
python infer/run_single_inference.py \
  --img-path infer/demo/BTCV-0-106_CT_abdomen.png \
  --target-description "right kidney in abdomen CT" \
  --model-path /path/to/mllm_model \
  --seg-checkpoint /path/to/MedSAM2_latest.pt \
  --seg-model medsam
```
上游报告开发环境为 Python 3.11、CUDA 12.9、PyTorch 2.8.0。论文训练使用 8 张 H20 GPU；这是训练配置，不代表推理的最低硬件要求。

## ⚠️ 版本与对比说明

该方法采用自主多轮交互，交互预算由 agent policy 控制。SRO-Edit 对比使用官方 closed-loop policy 和相同的 MedSAM2 baseline checkpoint；这与固定次数的人工点击并不等价。

## 📜 许可

检查到的 GitHub 仓库版本未包含顶层 LICENSE 文件。复用前请查看 model card 及各 backbone 条款；不要假定 Qwen agent 与分割权重采用同一许可。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
