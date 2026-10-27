<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧭 DA-SAM3

<p align="center"><strong>A parameter-efficient SAM 3 medical adapter using a Dynamic Expert Router (DER) and Decomposed Parameterized Experts (DPE) to route text/visual features through lightweight experts.</strong></p>

<p align="center">
<a href="https://github.com/Reconsider80/DA-SAM3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://papers.miccai.org/miccai-2026/0308-Paper0711.html"><img src="https://img.shields.io/badge/PAPER-MICCAI%2D2026-166534?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://github.com/Reconsider80/DA-SAM3#readme"><img src="https://img.shields.io/badge/WEIGHTS-Not%2DListed-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

> ← Back to the [model atlas](../README.md) · Selected set: Current six-model comparison set

## At a glance

| Field | Details |
|---|---|
| Atlas group | Current six-model comparison set |
| Research team / organization | MICCAI 2026 paper authors: Ying Chen, Jinyue Li, Kun Wang, Qiankun Li and Yang Liu |
| Input / modality | Medical image segmentation; the public repository lists Synapse, MMWHS, BTCV and ACDC datasets. |
| Prompt / interaction | Natural-language text prompt combined with image-conditioned expert routing. |
| Code license | The GitHub README says research use only and the repository has no top-level LICENSE in the checked snapshot. SAM 3 base weights remain subject to Meta's SAM License. The MICCAI paper page lists no code URL, while the public GitHub README calls itself an official implementation. |

## 📚 Paper and publication

**Dual-Adaptive SAM3: Hierarchical Routing over Low-Rank Expert Layers for Parameter-Efficient Medical Image Segmentation** — MICCAI 2026, LNCS 16884, pp. 155–164; arXiv:2607.02571.

## 📦 Checkpoints and access

The project links the gated [SAM 3 base checkpoint](https://huggingface.co/facebook/sam3), but does not list a downloadable DA-SAM3 checkpoint. Its inference example expects a locally produced `outputs/da_sam3/best_warmup.pt`. Its inference example expects a locally produced `outputs/da_sam3/best_warmup.pt`.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
git clone https://github.com/Reconsider80/DA-SAM3.git
cd DA-SAM3
git clone https://github.com/Chongcong/Medical-SAM3.git ../Medical-SAM3
pip install -r requirements.txt
pip install -e .
# Follow the README to set SAM3_ROOT, PYTHONPATH and HF_TOKEN.
python train.py --config configs/da_sam3_default.yaml --stage warmup
# After training / obtaining a compatible DA checkpoint:
python infer.py --config configs/da_sam3_default.yaml \
  --checkpoint outputs/da_sam3/best_warmup.pt \
  --image path/to/ct_slice.png --prompt "left ventricle" --output result.png
```


## ⚠️ Version and comparison notes

The upstream GitHub implementation is useful for studying/running the method, but its checkpoint is not a one-click download in the README. Record the Git commit, SAM 3 base checkpoint, training stage and locally produced adapter checkpoint; confirm the GitHub implementation with the authors if claiming exact paper reproduction.

## 📜 License

The GitHub README says research use only and the repository has no top-level LICENSE in the checked snapshot. SAM 3 base weights remain subject to Meta's SAM License. The MICCAI paper page lists no code URL, while the public GitHub README calls itself an official implementation.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
