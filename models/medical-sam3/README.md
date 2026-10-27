<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🏥 Medical-SAM3

<p align="center"><strong>A medical adaptation of SAM 3 with separate 2D benchmark tooling and a newer 3D v2 training/evaluation pipeline. The current 3D path runs text-prompted inference over full volumes in independent four-slice clips.</strong></p>

<p align="center">
<a href="https://github.com/AIM-Research-Lab/Medical-SAM3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2601.10880"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2601.10880-991b1b?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/Chongcong/Medical-SAM3"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Medical SAM3 2D/3D adaptation |
| Research team / organization | AIM Research Lab project |
| Input / modality | 2D medical benchmarks and 3D NPZ volumes; check which code path/version a result uses. |
| Prompt / interaction | 2D box/text prompts; current 3D v2 inference is text-prompted and full-depth. |
| Code license | The repository includes Meta's SAM License for SAM materials. Check the current Hugging Face model card for the fine-tuned checkpoint's terms. |

## 📚 Paper and publication

**Medical SAM3: A Foundation Model for Universal Prompt-Driven Medical Image Segmentation** — arXiv:2601.10880 (2026 preprint).

## 📦 Checkpoints and access

The project links model checkpoints on Hugging Face, including the June 2026 3D v2 weights. Select the 2D or 3D asset explicitly; the 3D CLI expects a local `medical_sam3_3d.pt` checkpoint.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
git clone https://github.com/AIM-Research-Lab/Medical-SAM3.git
cd Medical-SAM3
pip install -e ".[train]"
# 3D text-prompt inference on an upstream-format NPZ volume:
python medical/inference_3d.py \
  --input /path/to/case_or_directory --output-dir outputs/3d \
  --checkpoint /path/to/medical_sam3_3d.pt --prompt '1=liver'
```
The 2D evaluation path is separate: `cd inference && python run_medsam3_evaluation.py --checkpoint ... --model-name medsam3`. Outputs from the 3D path are NPZ files containing `segs` with original `(D,H,W)` geometry.

## ⚠️ Version and practical notes

The repository has separate 2D and 3D workflows. For 3D v2, the upstream README says inference covers the full depth without ground-truth prompts or ground-truth-selected slices.

## 📜 License

The repository includes Meta's SAM License for SAM materials. Check the current Hugging Face model card for the fine-tuned checkpoint's terms.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
