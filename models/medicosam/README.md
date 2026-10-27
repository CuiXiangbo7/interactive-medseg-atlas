<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🔬 MedicoSAM

<p align="center"><strong>A medical-domain SAM fine-tune and tooling library for interactive annotation and automatic semantic segmentation in 2D and 3D biomedical images.</strong></p>

<p align="center">
<a href="https://github.com/computational-cell-analytics/medico-sam"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://doi.org/10.1109/TMI.2025.3644811"><img src="https://img.shields.io/badge/PAPER-IEEE%2DTMI%2D2026-1d4ed8?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF"><img src="https://img.shields.io/badge/WEIGHTS-OwnCloud-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Medical-domain SAM segmentation model |
| Research team / organization | Computational Cell Analytics, University of Göttingen |
| Input / modality | 2D and 3D biomedical images; based on the upstream micro-sam ecosystem. |
| Prompt / interaction | SAM-style points, boxes and masks; also exposes an additional pretrained segmentation decoder for semantic segmentation. |
| Code license | Code: MIT. Check the OwnCloud checkpoint page and original SAM terms for weight-specific conditions. |

## 📚 Paper and publication

**MedicoSAM: Robust Improvement of SAM for Medical Imaging** — IEEE Transactions on Medical Imaging, 45(5), 1974–1985 (May 2026), DOI: 10.1109/TMI.2025.3644811. Preprint: arXiv:2501.11734.

## 📦 Checkpoints and access

The upstream project hosts `vit_b_medicosam.pt` on Göttingen OwnCloud. Download the checkpoint from the model link; do not assume the repository's MIT code license automatically covers that weight file.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
git clone https://github.com/computational-cell-analytics/medico-sam.git
cd medico-sam
conda env create -f environment.yaml
conda activate medico-sam
pip install -e .
wget 'https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF/download' \
  -O vit_b_medicosam.pt
```
For an interactive annotation UI, the authors recommend [micro-sam](https://github.com/computational-cell-analytics/micro-sam); follow the official [`TOOL_USAGE.md`](https://github.com/computational-cell-analytics/medico-sam/blob/master/TOOL_USAGE.md) for the exact viewer workflow.

## ⚠️ Version and practical notes

The public vit_b_medicosam.pt file is a starting checkpoint. Record any downstream fine-tuning and the exact SAM variant used.

## 📜 License

Code: MIT. Check the OwnCloud checkpoint page and original SAM terms for weight-specific conditions.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
