<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🩺 MedSAM3-v1

<p align="center"><strong>A text/concept-guided medical adaptation of SAM 3 released as LoRA weights. It uses medical language prompts rather than requiring the traditional box/point interaction for its primary workflow.</strong></p>

<p align="center">
<a href="https://github.com/Joey-S-Liu/MedSAM3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2511.19046"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2511.19046-991b1b?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/lal-Joey/MedSAM3_v1"><img src="https://img.shields.io/badge/WEIGHTS-LoRA%2DWeights-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

> ← Back to the [model atlas](../README.md) · Selected set: Current six-model comparison set

## At a glance

| Field | Details |
|---|---|
| Atlas group | Current six-model comparison set |
| Research team / organization | Hong Kong University of Science and Technology (Guangzhou), University of Illinois Urbana-Champaign and collaborators |
| Input / modality | The authors describe radiology, optical/microscopy, pathology and procedure imagery; the first release's exact supported category list is still being documented. |
| Prompt / interaction | Text prompt; LoRA medical adapter on top of the SAM 3 model. |
| Code license | The MedSAM3 README does not state a separate license for the LoRA weights. SAM 3 base materials use Meta's SAM License; confirm the adapter/model-card terms before redistribution. |

## 📚 Paper and publication

**MedSAM3: Delving into Segment Anything with Medical Concepts** — arXiv:2511.19046 (2025 preprint).

## 📦 Checkpoints and access

The v1 LoRA is hosted at `lal-Joey/MedSAM3_v1`. It is an adapter: the gated SAM 3 base checkpoint and access approval are also required.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
git clone https://github.com/Joey-S-Liu/MedSAM3.git
cd MedSAM3
pip install -e .
hf auth login  # required for gated SAM 3 base weights
python3 infer_sam.py \
  --config configs/full_lora_config.yaml \
  --image path/to/image.jpg --prompt "skin lesion" \
  --threshold 0.5 --nms-iou 0.5 --output prediction.png
```
Set the LoRA checkpoint path in `configs/full_lora_config.yaml` as directed by the upstream README.

## ⚠️ Version and comparison notes

Use the name `MedSAM3-v1` for this LoRA release and keep it distinct from Meta's SAM 3 and from the Medical-SAM3 project. The authors note that the exact v1 supported-task list is still being documented.

## 📜 License

The MedSAM3 README does not state a separate license for the LoRA weights. SAM 3 base materials use Meta's SAM License; confirm the adapter/model-card terms before redistribution.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
