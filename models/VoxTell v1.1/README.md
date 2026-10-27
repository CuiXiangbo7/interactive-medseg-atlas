<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🗣️ VoxTell v1.1

<p align="center"><strong>A free-text promptable 3D vision-language segmentation model that maps natural-language descriptions, from short labels to clinical phrases, to volumetric masks.</strong></p>

<p align="center">
<a href="https://github.com/MIC-DKFZ/VoxTell"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://openaccess.thecvf.com/content/CVPR2026/html/Rokuss_VoxTell_Free-Text_Promptable_Universal_3D_Medical_Image_Segmentation_CVPR_2026_paper.html"><img src="https://img.shields.io/badge/PAPER-CVPR--2026-075985?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/mrokuss/VoxTell"><img src="https://img.shields.io/badge/WEIGHTS-Hugging--Face-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Free-text 3D segmentation model |
| Research team / organization | German Cancer Research Center (DKFZ) / Helmholtz Imaging |
| Input / modality | 3D CT, MRI and PET volumes; current v1.1 weights are distributed by the authors. |
| Prompt / interaction | Free-text prompt only; no point/box interaction is required by the standard predictor. |
| Code license | Code: Apache-2.0. Check the Hugging Face repository for model-weight terms. |

## 📚 Paper and publication

**VoxTell: Free-Text Promptable Universal 3D Medical Image Segmentation** — IEEE/CVF CVPR 2026, pp. 37538–37557; arXiv:2511.11450.

## 📦 Checkpoints and access

Official Hugging Face repository: `mrokuss/VoxTell`; v1.1 is downloaded automatically on first use and cached. The model includes the frozen Qwen3-Embedding-4B text encoder.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
conda create -n voxtell python=3.12
conda activate voxtell
# Install PyTorch matching the available CUDA driver, then:
pip install voxtell
voxtell-predict -i case.nii.gz -o output -p "liver" "spleen"
```
Use NIfTI input and preserve orientation metadata. VoxTell expects RAS orientation, does not automatically resample unusual voxel spacing and recommends checking orientation/spacing when results look anatomically misplaced.

## ⚠️ Version and practical notes

This is a text-only volumetric model. Preserve the exact English prompt, image orientation, voxel spacing and model tag; prompt wording and preprocessing can affect predictions.

## 📜 License

Code: Apache-2.0. Check the Hugging Face repository for model-weight terms.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
