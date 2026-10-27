# AMOS 2022

> **Abdominal multi-organ segmentation · CT and MRI**

| Quick facts | |
| --- | --- |
| **Input** | 500 CT and 100 MRI scans |
| **Targets** | 15 abdominal organs |
| **Official source** | [AMOS 2022 challenge](https://amos22.grand-challenge.org/) · [Post-challenge Zenodo record](https://zenodo.org/records/7262581) |

## Dataset overview

AMOS was designed to evaluate abdominal organ segmentation across multi-center, multi-vendor, multi-modality and multi-disease imaging. The dataset paper describes voxel-level annotations for 15 organs, including the spleen, kidneys, gallbladder, esophagus, liver, stomach, aorta, inferior vena cava, pancreas, adrenal glands, duodenum, bladder, and prostate/uterus.

The challenge has a CT-only task and a mixed CT/MRI task. The official Zenodo record links a labeled 500-CT/100-MRI archive and additional unlabeled data.

## Official split and label availability

| Release / cohort | Official information |
| --- | --- |
| Challenge development data | Training and validation data were released with reference labels. A later peer-reviewed description reports 300 CT and 60 MRI across these accessible sections. |
| Challenge test data | The challenge portal describes test images without ground-truth labels during the challenge. |
| Post-challenge Zenodo v2 | The Zenodo record describes its 500-CT/100-MRI archive as labeled. This is broader than the original challenge-time test release; check the archive contents and version before treating test references as available. |
| Additional unlabeled data | Linked separately from the Zenodo record; these are not the 600 labeled scans. |

The challenge split and the post-challenge archive are different release contexts. Do not infer a train/validation subdivision from a merged post-challenge package.

## Access and terms

- [AMOS challenge portal](https://amos22.grand-challenge.org/)
- [Zenodo dataset record, DOI 10.5281/zenodo.7262581](https://doi.org/10.5281/zenodo.7262581)
- The Zenodo record lists archives and file checksums. Review its current metadata and the challenge terms before reuse.

## Dataset paper

**Ji et al.** “AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation.” *Advances in Neural Information Processing Systems: Datasets and Benchmarks*, 2022, vol. 35, pp. 36722–36732.

- [NeurIPS proceedings paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf)
- [arXiv:2206.08023](https://arxiv.org/abs/2206.08023)

**Checked:** 27 October 2026.
