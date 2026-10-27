<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧩 SegVol

<p align="center"><strong>A universal promptable volumetric segmentation model trained primarily on CT data, combining a 3D image encoder with text and spatial prompts.</strong></p>

<p align="center">
<a href="https://github.com/BAAI-DCAI/SegVol"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2311.13385"><img src="https://img.shields.io/badge/PAPER-NeurIPS%2D2024%2DSpotlight-6b21a8?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/BAAI/SegVol"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

> ← Back to the [model atlas](../README.md) · Selected set: SRO-Edit comparison baselines

## At a glance

| Field | Details |
|---|---|
| Atlas group | SRO-Edit comparison baselines |
| Research team / organization | Beijing Academy of Artificial Intelligence (BAAI), DCAI |
| Input / modality | 3D CT; the upstream paper/release emphasizes more than 200 anatomical categories. |
| Prompt / interaction | Text, point and box prompts; optional zoom-in/zoom-out refinement. |
| Code license | Code: MIT. Verify the checkpoint-specific terms on the model-hosting page. |

## 📚 Paper and publication

**SegVol: Universal and Interactive Volumetric Medical Image Segmentation** — NeurIPS 2024 Spotlight; arXiv:2311.13385.

## 📦 Checkpoints and access

Official checkpoints and demo data are linked from the BAAI Hugging Face repository and Google Drive; the demo script also expects a local CLIP text-encoder folder.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
# Follow the repository's legacy-compatible environment (PyTorch >=1.11,
# MONAI 0.9.0, transformers 4.18.0, einops 0.6.1).
pip install 'monai[all]==0.9.0' einops==0.6.1 transformers==4.18.0
# Edit config/config_demo.json and script/inference_demo.sh:
# set CT, ground truth, SegVol checkpoint, CLIP checkpoint and work directory.
bash script/inference_demo.sh
```
Important: the upstream demo/evaluation script reads ground-truth masks to synthesize point/box prompts. Those are GT-derived/oracle prompts; they are not a human-input inference recipe. See the [official inference guide](https://github.com/BAAI-DCAI/SegVol/blob/main/documents/inference_demo.md).

## ⚠️ Version and comparison notes

The SRO-Edit manuscript uses a SegVol variant fine-tuned for 250 epochs on each target task. Keep the checkpoint, prompting mode and the official demo's GT-derived prompt behavior separate when documenting or reproducing results.

## 📜 License

Code: MIT. Verify the checkpoint-specific terms on the model-hosting page.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
