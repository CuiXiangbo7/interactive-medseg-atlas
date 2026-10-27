<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🤖 MedSAM-Agent

<p align="center"><strong>An agentic interactive-segmentation framework that autonomously plans multiple rounds of prompts and segmentation calls, rather than asking a person to place every correction.</strong></p>

<p align="center">
<a href="https://github.com/CUHK-AIM-Group/MedSAM-Agent"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2602.03320"><img src="https://img.shields.io/badge/PAPER-arXiv--2602.03320-991b1b?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2"><img src="https://img.shields.io/badge/WEIGHTS-Hugging--Face-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Agentic multi-turn segmentation framework |
| Research team / organization | The Chinese University of Hong Kong, Tencent Hunyuan and collaborators |
| Input / modality | 2D medical images from six modalities and 21 datasets in the authors' evaluation. |
| Prompt / interaction | Natural-language target description plus agent-generated clicks; selectable Qwen or GPT grounding model and a separate segmentation backbone. |
| Code license | The GitHub repository snapshot does not include a top-level LICENSE file. Check the model card and each backbone's terms before reuse; do not assume the Qwen agent and segmentation weights share one license. |

## 📚 Paper and publication

**MedSAM-Agent: Empowering Interactive Medical Image Segmentation with Multi-turn Agentic Reinforcement Learning** — arXiv:2602.03320 (2026 preprint).

## 📦 Checkpoints and access

The official Hugging Face model is `Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2`. Inference also requires a segmentation checkpoint (e.g. MedSAM2) and its configuration. Dataset/trajectory releases are marked pending in the upstream README.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
conda create -n msagent python=3.11
conda activate msagent
pip install -r requirements.txt
# Download the Qwen agent model and a MedSAM2 checkpoint, then:
python infer/run_single_inference.py \
  --img-path infer/demo/BTCV-0-106_CT_abdomen.png \
  --target-description "right kidney in abdomen CT" \
  --model-path /path/to/mllm_model \
  --seg-checkpoint /path/to/MedSAM2_latest.pt \
  --seg-model medsam
```
Upstream reports its development environment as Python 3.11, CUDA 12.9 and PyTorch 2.8.0. The paper's training used eight H20 GPUs; that is a training setup, not a guaranteed minimum inference requirement.

## ⚠️ Version and practical notes

This is an autonomous multi-turn method. Its action policy chooses prompts, so its interaction count is not directly comparable with a fixed manual-click budget. Record the grounding model and segmentation backbone separately.

## 📜 License

The GitHub repository snapshot does not include a top-level LICENSE file. Check the model card and each backbone's terms before reuse; do not assume the Qwen agent and segmentation weights share one license.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
