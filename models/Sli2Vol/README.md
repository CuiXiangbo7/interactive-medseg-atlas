<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧩 Sli2Vol

<p align="center"><strong>Sli2Vol learns inter-slice correspondence from unlabeled 3D volumes and propagates one manually annotated slice to segment a full volume.</strong></p>

<p align="center">
<a href="https://github.com/pakheiyeung/Sli2Vol"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://doi.org/10.1007/978-3-030-87196-3_7"><img src="https://img.shields.io/badge/PAPER-MICCAI--2021-166534?style=flat-square&logo=academia" alt="Paper"></a>
</p>

[← Model catalog](../README.md)

## At a glance

| Field | Details |
|---|---|
| Method type | Self-supervised slice correspondence and 3D mask propagation |
| Research team / institutions | University of Oxford (authors' paper affiliations) |
| Inputs / modalities | Raw 3D volumes for self-supervised correspondence learning; paper evaluation includes CT and MRI. |
| Prompt / interaction | A user annotates one 2D slice; learned affinities propagate the mask to neighboring slices and through the volume. |
| Atlas categories | Spatial prompts · Sparse-slice propagation |
| Code license | No license file or license declaration was found in the official repository. Confirm reuse terms with the authors. |

## Paper

**Sli2Vol: Annotate a 3D Volume from a Single Slice with Self-Supervised Learning** — MICCAI 2021, pp. 69–79. [Paper](https://arxiv.org/abs/2105.12722) · [DOI](https://doi.org/10.1007/978-3-030-87196-3_7) · [Project page](https://pakheiyeung.github.io/Sli2Vol_wp/).

The method trains a correspondence-flow network through slice reconstruction using raw volumes. At inference, a single annotated slice seeds propagation; the paper describes the method as agnostic to the target structure and evaluation domain. This does not mean the method requires no annotated test input: the seed slice is the user-provided annotation.

## Checkpoints

The [official repository](https://github.com/pakheiyeung/Sli2Vol) provides source code and `train.py`/`eval.py`, but does not list an official downloadable pretrained checkpoint. Follow the paper and repository to train or adapt the model with the intended raw-volume data. Do not substitute a checkpoint from Sli2Vol+; it is a separate method and training setup.

## Official setup and entry points

The repository README lists Python 3.6 and PyTorch 1.6 (and notes other versions may work). It does not document a stable command-line argument recipe in the README. Inspect the data paths and options in the official scripts before running:

- [`train.py`](https://github.com/pakheiyeung/Sli2Vol/blob/master/train.py) — correspondence-model training.
- [`eval.py`](https://github.com/pakheiyeung/Sli2Vol/blob/master/eval.py) — evaluation and propagation.
- [`Readme.md`](https://github.com/pakheiyeung/Sli2Vol/blob/master/Readme.md) — dependencies and method summary.

The original code is from 2021; reproduce its dependency environment carefully rather than assuming current PyTorch versions are drop-in compatible.

## Scope notes

- The seed mask is a dense spatial prompt on one slice; the propagation network is not a text-prompt interface.
- Training uses unlabeled raw volumes for self-supervision; the test case still requires the single user-labeled slice.
- The official repository does not state a code license, and it does not provide a direct weight-download link.

## License and citation

No license file or license statement was found in the official repository. Ask the authors about reuse and redistribution.

```bibtex
@inproceedings{yeung2021sli2vol,
  title={Sli2Vol: Annotate a 3D Volume from a Single Slice with Self-Supervised Learning},
  author={Yeung, Pak-Hei and Namburete, Ana I. L. and Xie, Weidi},
  booktitle={Medical Image Computing and Computer Assisted Intervention},
  pages={69--79}, year={2021},
  doi={10.1007/978-3-030-87196-3_7}
}
```

<sub>Upstream sources checked: 26 November 2026. Follow the linked project for current code, checkpoints, and terms.</sub>
