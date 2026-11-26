<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧭 PAM

<p align="center"><strong>PAM (Propagation-based Anything Model) turns a minimal 2D medical-image prompt into a volumetric segmentation by propagating the annotation across a 3D scan.</strong></p>

<p align="center">
<a href="https://github.com/czifan/PAM"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://doi.org/10.1038/s41746-025-02087-y"><img src="https://img.shields.io/badge/PAPER-npj%20Digital%20Medicine-166534?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://drive.google.com/drive/folders/10fi5ZLFRnW5lCMVI7vMY61eTfOQlN9oI?usp=share_link"><img src="https://img.shields.io/badge/WEIGHTS-Google%20Drive-f59e0b?style=flat-square&logo=google-drive" alt="Weights"></a>
</p>

[← Model catalog](../README.md)

## At a glance

| Field | Details |
|---|---|
| Method type | Prompt-driven 3D mask propagation |
| Research team / institutions | Peking University and collaborating institutions, as listed by the paper |
| Inputs / modalities | One prompted 2D slice from a 3D volume; the paper/repository reports CT, MRI, PET, SRX, and micro-CT use. |
| Prompt / interaction | Give a spatial annotation on one slice; PAM propagates the prompted target through the volume. |
| Atlas categories | Spatial prompts · Sparse-slice propagation |
| Code license | The official repository does not state a license. Check with the authors before reuse or redistribution. |

## Paper

**PAM: A Propagation-Based Model for Segmenting Any 3D Objects across Multi-Modal Medical Images** — *npj Digital Medicine* 8, 753 (2025). [DOI](https://doi.org/10.1038/s41746-025-02087-y).

The project describes a model trained on 44 datasets and a prompt-to-volume workflow that does not require fine-tuning for each new target. These are the authors' reported scope and should be read with their dataset and protocol details.

## Checkpoints

The [official repository lists pretrained checkpoints on Google Drive](https://drive.google.com/drive/folders/10fi5ZLFRnW5lCMVI7vMY61eTfOQlN9oI?usp=share_link) and [Baidu Pan](https://pan.baidu.com/s/1WdTPG_ojCEeWR5qpl2_WzQ?pwd=mksh) (access code: `mksh`). The repository asks users to put the downloaded files in `tutorials/checkpoints/`.

The code repository does not include a license declaration. Verify checkpoint terms separately before using the weights.

## Official workflow

The upstream README provides notebooks rather than a pinned one-line CLI workflow. Start with the [3D prompt-to-volume notebook](https://github.com/czifan/PAM/blob/main/tutorials/3d-propagation.ipynb); follow its environment setup and data instructions. The repository also provides separate notebooks for [2D image propagation](https://github.com/czifan/PAM/blob/main/tutorials/cross-2d-image-propagation.ipynb) and [whole-slide pathology](https://github.com/czifan/PAM/blob/main/tutorials/pathology-propagation.ipynb). The latter two are extensions beyond the core 3D workflow described in the paper.

## Scope notes

- The interaction described here is a spatially annotated slice, not a natural-language prompt.
- The paper's reported modalities and generalization claims do not establish performance on every scanner, organ, or acquisition protocol.
- See the paper and official repository for training/evaluation data, preprocessing, and full checkpoint details.

## License and citation

No code license is stated in the official repository. Checkpoint availability does not by itself grant redistribution rights.

```bibtex
@article{chen2025pam,
  title={PAM: A propagation-based model for segmenting any 3d objects across multi-modal medical images},
  journal={npj Digital Medicine},
  year={2025}, volume={8}, number={753},
  doi={10.1038/s41746-025-02087-y}
}
```

<sub>Upstream sources checked: 26 November 2026. Follow the linked project for current checkpoints, dependencies, and terms.</sub>
