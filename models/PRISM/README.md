<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# ✨ PRISM

<p align="center"><strong>A promptable and robust interactive medical segmentation model that learns from visual prompts and supports iterative refinement.</strong></p>

<p align="center">
<a href="https://github.com/MedICL-VU/PRISM"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2404.15028"><img src="https://img.shields.io/badge/PAPER-MICCAI--2024-166534?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://github.com/MedICL-VU/PRISM#models"><img src="https://img.shields.io/badge/WEIGHTS-Google--Drive-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Visual-prompt interactive segmentation |
| Research team / organization | MedICL-VU; Vanderbilt University research group |
| Input / modality | Medical 2D and 3D tasks; the main public release demonstrates 3D CT tumor segmentation, while PRISM Lite is a separate 3D ultrasound placenta project. |
| Prompt / interaction | Click/point interaction, boxes and scribbles; iterative refinement. |
| Code license | The project states Apache-2.0 for its code/model; verify the terms of third-party data separately. |

## 📚 Paper and publication

**PRISM: A Promptable and Robust Interactive Segmentation Model with Visual Prompts** — MICCAI 2024, LNCS, pp. 389–399; arXiv:2404.15028.

## 📦 Checkpoints and access

The upstream README provides a pretrained-model Drive folder and separate task-specific checkpoints for colon, pancreas, liver and kidney. Follow its model table for the intended dataset variant.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
conda create -n prism python=3.9
conda activate prism
# Install the compatible PyTorch build, Segment Anything, and requirements
pip install torch==1.12.1+cu113 torchvision==0.13.1+cu113 --extra-index-url https://download.pytorch.org/whl/cu113
pip install git+https://github.com/facebookresearch/segment-anything.git
pip install -r requirements.txt
# After downloading the intended checkpoint into the implementation directory:
python test.py --data colon --data_dir /path/to/data --split test \
  --checkpoint best --save_name prism_pretrain --num_clicks 1 --iter_nums 11 \
  --multiple_outputs --use_box --use_scribble --efficient_scribble --refine --refine_test
```
The official README documents the full CUDA/PyTorch installation and alternate prompt flags.

## ⚠️ Version and practical notes

The public release includes pretrained and task-specific checkpoints. Choose the intended dataset/model variant; the example test command is dataset-specific.

## 📜 License

The project states Apache-2.0 for its code/model; verify the terms of third-party data separately.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
