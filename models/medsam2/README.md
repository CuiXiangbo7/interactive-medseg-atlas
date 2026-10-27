<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🎞️ MedSAM2

<p align="center"><strong>A promptable foundation model adapted from SAM 2 for 3D medical images and medical videos, using memory-based propagation across slices/frames.</strong></p>

<p align="center">
<a href="https://github.com/bowang-lab/MedSAM2"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2504.03600"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2504.03600-991b1b?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/wanglab/MedSAM2"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | 3D and video promptable segmentation |
| Research team / organization | University Health Network, University of Toronto and collaborating institutions |
| Input / modality | 3D CT/MRI/PET volumes and medical videos such as ultrasound or endoscopy. |
| Prompt / interaction | Spatial prompts such as boxes/masks on a slice or frame, followed by propagation and interactive correction. |
| Code license | Code repository: Apache-2.0. Check each Hugging Face checkpoint page and the original SAM 2 terms before redistribution or deployment. |

## 📚 Paper and publication

**MedSAM2: Segment Anything in 3D Medical Images and Videos** — arXiv:2504.03600 (2025 preprint).

## 📦 Checkpoints and access

The official Hugging Face collection includes `MedSAM2_latest.pt`, `MedSAM2_2411.pt` and task-specific CT lesion, MRI liver lesion and ultrasound heart checkpoints. `bash download.sh` downloads all listed weights.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
conda create -n medsam2 python=3.12 -y
conda activate medsam2
# Install a compatible PyTorch/CUDA build and the official package
pip install -e ".[dev]"
bash download.sh
python medsam2_infer_3D_CT.py -i CT_DeepLesion/images -o CT_DeepLesion/segmentation
```
That CLI example is CT-specific; follow the official MRI/video notebooks or scripts for those modalities.

## ⚠️ Version and practical notes

The upstream repository provides general and task-specific checkpoints. Record the exact checkpoint, training data, modality and prompt configuration; the latest release is not automatically identical to earlier published weights.

## 📜 License

Code repository: Apache-2.0. Check each Hugging Face checkpoint page and the original SAM 2 terms before redistribution or deployment.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
