<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🎞️ SLM-SAM2

<p align="center"><strong>SLM-SAM2 adapts SAM 2 for volumetric medical annotation with separate short- and long-term memories, propagating a prompted slice through a 3D volume.</strong></p>

<p align="center">
<a href="https://github.com/mazurowski-lab/SLM-SAM2"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://doi.org/10.1109/TMI.2025.3627954"><img src="https://img.shields.io/badge/PAPER-IEEE%20TMI-166534?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://github.com/mazurowski-lab/SLM-SAM2/tree/main/checkpoints"><img src="https://img.shields.io/badge/BASE%20CHECKPOINTS-SAM%202.1-f59e0b?style=flat-square&logo=github" alt="Base checkpoints"></a>
</p>

[← Model catalog](../README.md)

## At a glance

| Field | Details |
|---|---|
| Method type | SAM 2-based volumetric medical mask propagation |
| Research team / institutions | Duke University research team and collaborating institutions, per the paper's author affiliations |
| Inputs / modalities | A volume represented as an ordered slice sequence; the paper/repository reports MRI, CT, and ultrasound-video tasks. |
| Prompt / interaction | Annotate a seed slice, then propagate its mask through the remaining slices. A dynamic short-/long-term memory design targets over-propagation and changing anatomy. |
| Atlas categories | Spatial prompts · Sparse-slice propagation |
| Code license | GPL-3.0 in the official repository. SAM 2 base checkpoints have separate upstream terms. |

## Paper

**Accelerating Volumetric Medical Image Annotation via Short-Long Memory SAM 2** — *IEEE Transactions on Medical Imaging*, 45(4), 1461–1474 (2026). [DOI](https://doi.org/10.1109/TMI.2025.3627954) · [arXiv](https://arxiv.org/abs/2505.01854).

The paper adds dynamic short-term and long-term memory modules to SAM 2 and evaluates propagation on medical volumes/sequences. For reproducibility, record the chosen adaptation dataset and the exact SAM 2.1 base checkpoint.

## Checkpoints

The official repository's [`download_ckpts.sh`](https://github.com/mazurowski-lab/SLM-SAM2/blob/main/checkpoints/download_ckpts.sh) downloads **SAM 2.1 base checkpoints** used to initialize the method. The repository README does not link to a separately downloadable, medically fine-tuned SLM-SAM2 checkpoint; it documents fine-tuning on a medical dataset and then passing the resulting checkpoint to inference. Do not label the base SAM 2.1 weights as an SLM-SAM2 medical checkpoint.

## Official setup and inference

Install a compatible PyTorch/TorchVision build, then follow the official repository workflow:

```bash
git clone https://github.com/mazurowski-lab/SLM-SAM2.git
cd SLM-SAM2
pip install -e .
cd checkpoints && ./download_ckpts.sh && cd ..
```

Configure the medical image/mask folders and the volume list in `configs/sam2.1_training/slm_sam2_hiera_t_finetune.yaml`, then fine-tune:

```bash
CUDA_VISIBLE_DEVICES=0 python3 training/train.py \
  -c configs/sam2.1_training/slm_sam2_hiera_t_finetune.yaml \
  --use-cluster 0 --num-gpus 1
```

Use the produced SLM-SAM2 checkpoint and a mask-prompt dictionary that maps each volume to its annotated slice when running the official [`inference.py`](https://github.com/mazurowski-lab/SLM-SAM2/blob/main/inference.py). The complete argument list and data layout are in the [official README](https://github.com/mazurowski-lab/SLM-SAM2#readme).

## Scope notes

- This is a slice-propagation workflow; its seed mask is a spatial prompt, not a text prompt.
- Medical fine-tuning is part of the documented workflow. The public base-checkpoint download alone is not the final medical model weight.
- Follow the SAM 2 checkpoint terms in addition to the SLM-SAM2 code license.

## License and citation

Code: [GPL-3.0](https://github.com/mazurowski-lab/SLM-SAM2/blob/main/LICENSE). Check SAM 2 checkpoint terms separately.

```bibtex
@article{chen2026slmsam2,
  title={Accelerating Volumetric Medical Image Annotation via Short-Long Memory SAM 2},
  journal={IEEE Transactions on Medical Imaging},
  volume={45}, number={4}, pages={1461--1474}, year={2026},
  doi={10.1109/TMI.2025.3627954}
}
```

<sub>Upstream sources checked: 26 November 2026. Follow the linked project for current checkpoints, dependencies, and terms.</sub>
