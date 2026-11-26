<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧩 Sli2Vol+

<p align="center"><strong>Sli2Vol+ improves one-slice-to-volume segmentation by learning object-estimation-guided correspondences and using propagated pseudo-labels.</strong></p>

<p align="center">
<a href="https://github.com/adlsn/Sli2Volplus"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://doi.org/10.1109/WACV61041.2025.00357"><img src="https://img.shields.io/badge/PAPER-WACV--2025-166534?style=flat-square&logo=academia" alt="Paper"></a>
</p>

[← Model catalog](../README.md)

## At a glance

| Field | Details |
|---|---|
| Method type | Self-supervised correspondence learning and 3D mask propagation |
| Research team / institutions | University of Notre Dame, University of Texas Rio Grande Valley, and University of Iowa |
| Inputs / modalities | 3D medical volumes; paper evaluation includes public CT and MRI datasets. |
| Prompt / interaction | The method uses one annotated slice in **each training volume and each test volume**. Training propagates labels to create pseudo-labels, then learns object-estimation-guided correspondences. |
| Atlas categories | Spatial prompts · Sparse-slice propagation |
| Code license | Apache-2.0 in the official repository. Check the datasets and any derived weights separately. |

## Paper

**Sli2Vol+: Segmenting 3D Medical Images Based on an Object Estimation Guided Correspondence Flow Network** — WACV 2025, pp. 3624–3634. [Paper](https://openaccess.thecvf.com/content/WACV2025/papers/An_Sli2Vol_Segmenting_3D_Medical_Images_Based_on_an_Object_Estimation_WACV_2025_paper.pdf) · [DOI](https://doi.org/10.1109/WACV61041.2025.00357) · [arXiv](https://arxiv.org/abs/2411.13873).

The paper reports evaluation on nine public CT/MRI datasets. Its train-and-test annotation setup is important when comparing it with methods that require labels only at test time.

## Checkpoints

The [official repository](https://github.com/adlsn/Sli2Volplus) documents training and testing scripts but does not list a direct download for a pretrained checkpoint. The documented workflow trains weights from the configured dataset; the repository's `test.py` should be used with the checkpoint and data paths produced by that workflow.

## Official environment and commands

The README specifies Python 3.10 and PyTorch 2.3.0 (other versions may work), with dependencies installed from the repository:

```bash
git clone https://github.com/adlsn/Sli2Volplus.git
cd Sli2Volplus
conda create --name sliplus python=3.10
conda activate sliplus
pip install -r requirements.txt
python train.py
python test.py
```

The upstream README shows the entry points but leaves dataset paths/configuration to the user. Set those according to its code and paper before running; the commands above do not imply a ready-to-run default dataset.

## Scope notes

- This method is not test-time zero-shot with no annotation: the paper uses one labeled slice per training volume and one per test volume.
- One labeled test slice is a dense spatial prompt and is also the seed for volume propagation.
- The official repository does not list downloadable trained weights; code being Apache-2.0 does not automatically license data or weights.

## License and citation

Code: [Apache-2.0](https://github.com/adlsn/Sli2Volplus/blob/master/LICENSE). Follow the paper's citation guidance when using the method.

```bibtex
@inproceedings{an2025sli2volplus,
  title={Sli2Vol+: Segmenting 3D Medical Images Based on an Object Estimation Guided Correspondence Flow Network},
  author={An, Delin and Gu, Pengfei and Sonka, Milan and Wang, Chaoli and Chen, Danny Z.},
  booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision},
  pages={3624--3634}, year={2025},
  doi={10.1109/WACV61041.2025.00357}
}
```

<sub>Upstream sources checked: 26 November 2026. Follow the linked project for current data paths, dependencies, checkpoints, and terms.</sub>
