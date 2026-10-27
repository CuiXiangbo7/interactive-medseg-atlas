<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🖱️ nnInteractive

<p align="center"><strong>A 3D open-set interactive segmentation system trained across diverse volumetric datasets and designed for practical annotation workflows.</strong></p>

<p align="center">
<a href="https://github.com/MIC-DKFZ/nnInteractive"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2503.08373"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2503.08373-991b1b?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/MIC-DKFZ/nnInteractive"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

> ← Back to the [model atlas](../README.md) · Selected set: SRO-Edit comparison baselines

## At a glance

| Field | Details |
|---|---|
| Atlas group | SRO-Edit comparison baselines |
| Research team / organization | German Cancer Research Center (DKFZ) / Helmholtz Imaging |
| Input / modality | 3D CT, MRI, PET and 3D microscopy, among other volumetric images. |
| Prompt / interaction | 2D interactions produce 3D masks; supports points, scribbles, bounding boxes and lasso. |
| Code license | Code: Apache-2.0. Official v1 checkpoint: CC BY-NC-SA 4.0; model terms are more restrictive than the code license. |

## 📚 Paper and publication

**nnInteractive: Redefining 3D Promptable Segmentation** — arXiv:2503.08373 (2025 preprint). The project links the paper and its Python backend.

## 📦 Checkpoints and access

The official model registry downloads `nnInteractive_v1.0` on demand from Hugging Face. It is cached locally under `~/.nninteractive` by default.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
# Install a PyTorch build matching the local CUDA driver, then:
pip install nnInteractive
nninteractive-download-model nnInteractive_v1.0
```
Use the [official minimal inference example](https://github.com/MIC-DKFZ/nnInteractive#getting-started) with `nnInteractiveInferenceSession`. A remote GPU server is also available; CPU-only clients can install `nninteractive-client` and connect to that server.

## ⚠️ Version and comparison notes

The SRO-Edit manuscript uses the official pretrained model because nnInteractive does not provide the same target-specific training path as the other trained baselines. Keep its prompt protocol and checkpoint license visible in comparisons.

## 📜 License

Code: Apache-2.0. Official v1 checkpoint: CC BY-NC-SA 4.0; model terms are more restrictive than the code license.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
