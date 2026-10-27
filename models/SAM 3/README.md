<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧠 SAM 3

<p align="center"><strong>A unified promptable concept-segmentation model that detects, segments and tracks objects in images and videos. It handles open-vocabulary text concepts and visual prompts.</strong></p>

<p align="center">
<a href="https://github.com/facebookresearch/sam3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2511.16719"><img src="https://img.shields.io/badge/PAPER-arXiv--2511.16719-991b1b?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/facebook/sam3"><img src="https://img.shields.io/badge/WEIGHTS-Gated--Checkpoint-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Concept-prompt image and video segmentation |
| Research team / organization | Meta AI Research |
| Input / modality | 2D images and videos; not a native 3D-volume segmenter. |
| Prompt / interaction | Short text concepts, image exemplars, points, boxes and masks; video tracking and refinement are supported. |
| Code license | Code and checkpoints use Meta's SAM License, not an unrestricted permissive license. Review the official terms before use. |

## 📚 Paper and publication

**SAM 3: Segment Anything with Concepts** — arXiv:2511.16719 (2025 technical report/preprint).

## 📦 Checkpoints and access

The official Hugging Face checkpoint is gated: request access, accept its conditions and authenticate with `hf auth login`. The repository currently also documents SAM 3.1 checkpoints; pin the exact checkpoint/repository revision when reproducing SAM 3.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
conda create -n sam3 python=3.12
conda activate sam3
# Install a PyTorch/CUDA combination supported by the current upstream README:
pip install torch==2.10.0 torchvision --index-url https://download.pytorch.org/whl/cu128
git clone https://github.com/facebookresearch/sam3.git
cd sam3
pip install -e .
hf auth login  # after checkpoint access is approved
```
For inference, follow the official image predictor notebook or the `build_sam3_image_model()` + `Sam3Processor` example in the [README](https://github.com/facebookresearch/sam3#basic-usage).

## ⚠️ Version and practical notes

SAM 3 natively handles 2D images and videos. Any 3D medical workflow adds an adaptation and a slice/clip policy that should be documented.

## 📜 License

Code and checkpoints use Meta's SAM License, not an unrestricted permissive license. Review the official terms before use.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
