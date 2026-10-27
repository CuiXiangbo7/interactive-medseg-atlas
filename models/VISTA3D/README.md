<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🫁 VISTA3D

<p align="center"><strong>A unified 3D foundation model for automatic and interactive medical segmentation. The paper's research implementation is the MONAI 1.3 VISTA3D codebase.</strong></p>

<p align="center">
<a href="https://github.com/Project-MONAI/VISTA"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://openaccess.thecvf.com/content/CVPR2025/html/He_VISTA3D_A_Unified_Segmentation_Foundation_Model_For_3D_Medical_Imaging_CVPR_2025_paper.html"><img src="https://img.shields.io/badge/PAPER-CVPR--2025-075985?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/nvidia/NV-Segment-CT"><img src="https://img.shields.io/badge/WEIGHTS-Hugging--Face-f59e0b?style=flat-square&logo=huggingface" alt="Weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | 3D automatic and point-prompt segmentation |
| Research team / organization | Project MONAI / NVIDIA |
| Input / modality | The CVPR 2025 research checkpoint is CT-focused and supports 127 anatomy/lesion classes. |
| Prompt / interaction | Class prompts for automatic segmentation; positive/negative 3D point clicks for interactive segmentation and refinement. |
| Code license | Code: Apache-2.0. The research checkpoint is distributed under NVIDIA's open model terms; check the linked model card. VISTA3D and CTMR variants differ in modality, checkpoint and task. |

## 📚 Paper and publication

**VISTA3D: A Unified Segmentation Foundation Model For 3D Medical Imaging** — IEEE/CVF CVPR 2025.

## 📦 Checkpoints and access

The research code automatically fetches `nvidia/NV-Segment-CT/vista3d_pretrained_model/model_monai1.3.pt`. MONAI 1.4+ bundles use different checkpoint naming. NV-Segment-CTMR is a separate automatic CT/MR model.

The code, model checkpoint and any required foundation-model checkpoint can have different terms. Review each linked source before use or redistribution.

## ⚙️ Official setup and inference

```bash
git clone https://github.com/Project-MONAI/VISTA.git
cd VISTA/vista3d
conda create -n vista3d python=3.9 -y
conda activate vista3d
pip install -r requirements.txt
# Automatic organ segmentation (label 1 is liver in the official mapping):
python -m scripts.infer --config_file 'configs/infer.yaml' - infer \
  --image_file example-1.nii.gz --label_prompt '[1]' --save_mask true
# Interactive clicks use --point and --point_label; see the official guide.
```


## ⚠️ Version and practical notes

The research repository is CT-focused and distinct from the newer CTMR automatic model. State whether inference uses class prompts, points, or automatic segmentation followed by point refinement.

## 📜 License

Code: Apache-2.0. The research checkpoint is distributed under NVIDIA's open model terms; check the linked model card. VISTA3D and CTMR variants differ in modality, checkpoint and task.

**Citation: Cite the paper above and the upstream project as directed by its authors. This repository links to the original paper; it does not redistribute the code or weights.**

<sub>Source pages checked: 27 October 2026. Upstream environments, weights and access policies may change; use the linked project as the source of truth.</sub>
