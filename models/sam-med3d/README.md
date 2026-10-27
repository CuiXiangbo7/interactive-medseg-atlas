<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧠 SAM-Med3D

<p align="center"><strong>A 3D promptable segmentation model adapted from SAM for volumetric medical images. Its original workflow uses iterative foreground/background point prompts and returns a volumetric mask.</strong></p>

<p align="center">
<a href="https://github.com/uni-medical/SAM-Med3D"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2310.15161"><img src="https://img.shields.io/badge/PAPER-ECCV%2DBIC%2D2024%2DOral-7f1d1d?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/blueyo0/SAM-Med3D"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | 3D point-prompt segmentation model |
| Research team / organization | Uni-Medical research project |
| Input / modality | 3D medical volumes; the project benchmarks CT, MRI and other volumetric modalities. |
| Prompt / interaction | Interactive 3D point prompts; iterative corrections. |
| Code license | Code: Apache-2.0. Check the checkpoint page for the weight-specific terms. |

## 📚 Paper and publication

**SAM-Med3D: Towards General-purpose Segmentation Models for Volumetric Medical Images** — arXiv:2310.15161 (2023); the project README reports acceptance as an ECCV BIC 2024 Oral.

## 📦 Checkpoints and access

The upstream project currently highlights the newer `SAM-Med3D-turbo` checkpoint. Its README links Hugging Face, Google Drive and HF-Mirror. The Hugging Face model `blueyo0/SAM-Med3D` exposes `sam_med3d_turbo.pth` and is referenced by the upstream MedIM example.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
git clone https://github.com/uni-medical/SAM-Med3D.git
cd SAM-Med3D
pip install medim
# Configure the image, ground-truth and output paths in the upstream demo
python medim_val_single.py
```
The demo is an evaluation example and expects a paired ground-truth mask. For model construction and checkpoint selection, see the [official MedIM example](https://github.com/uni-medical/SAM-Med3D/blob/main/medim_val_single.py).

## ⚠️ Version and practical notes

The project currently highlights the newer SAM-Med3D-turbo checkpoint. Keep it distinct from the original paper checkpoint, and record the exact weight and prompt protocol when reproducing published results.

## 📜 License

Code: Apache-2.0. Check the checkpoint page for the weight-specific terms.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
