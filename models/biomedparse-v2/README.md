<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧬 BiomedParse v2

<p align="center"><strong>The v2 release extends BiomedParse to end-to-end 3D segmentation and adds built-in object-existence detection. It is distinct from the original 2D BiomedParse v1.</strong></p>

<p align="center">
<a href="https://github.com/microsoft/BiomedParse/tree/v2"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://doi.org/10.1038/s41592-024-02499-w"><img src="https://img.shields.io/badge/PAPER-Nature%2DMethods%2D2025-166534?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/microsoft/BiomedParse"><img src="https://img.shields.io/badge/WEIGHTS-Gated%2DCheckpoint-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Text-guided biomedical parsing model |
| Research team / organization | Microsoft Research |
| Input / modality | 3D CT, MRI, ultrasound, PET and 3D microscopy according to the v2 README; dedicated pretrained v2 weights are for 3D. |
| Prompt / interaction | Text-concept prompts; slice-wise model inference with neighboring volume context encoded into RGB input. |
| Code license | Code: Apache-2.0. The Hugging Face model card lists CC BY-NC-SA 4.0 for model artifacts and requires acceptance of the gated-model conditions. Do not conflate v1 and v2 model terms. |

## 📚 Paper and publication

**A Foundation Model for Joint Segmentation, Detection, and Recognition of Biomedical Objects Across Nine Modalities** — Nature Methods 22, 166–176 (2025), DOI: 10.1038/s41592-024-02499-w. The v2 3D checkpoint also builds on the [CVPR 2025 Text-guided 3D Segmentation Challenge](https://www.codabench.org/competitions/5651/) release.

**Version pin:** this card follows the upstream v2 branch.

## 📦 Checkpoints and access

`biomedparse_v2.ckpt` (~4.46 GB) is hosted in the gated Hugging Face repository `microsoft/BiomedParse`; access may require accepting model conditions and authentication. The upstream v2 README also provides a challenge-trained Docker image.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
git clone --branch v2 https://github.com/microsoft/BiomedParse.git
cd BiomedParse
conda create -n biomedparse_v2 python=3.10.14
conda activate biomedparse_v2
python -m pip install -r assets/requirements/inference.txt
# Download biomedparse_v2.ckpt after completing HF access requirements:
python inference.py --input_dir examples/imgs --output_dir outputs/3d \
  --checkpoint /path/to/biomedparse_v2.ckpt --slice_batch_size 4
```
The script expects challenge-format preprocessed NPZ volumes. Raw DICOM/NIfTI still needs modality-appropriate intensity preprocessing; reduce `--slice_batch_size` if GPU memory is limited.

## ⚠️ Version and practical notes

Use the v2 branch and biomedparse_v2.ckpt for the 3D workflow. The v1 branch and weights are a separate 2D workflow; raw scanner images require modality-appropriate preprocessing.

## 📜 License

Code: Apache-2.0. The Hugging Face model card lists CC BY-NC-SA 4.0 for model artifacts and requires acceptance of the gated-model conditions. Do not conflate v1 and v2 model terms.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
