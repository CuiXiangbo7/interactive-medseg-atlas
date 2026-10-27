# AMOS 2022

> **Abdominal multi-organ segmentation · CT and MRI**

| Quick facts | |
| --- | --- |
| **Input** | 500 CT and 100 MRI scans |
| **Targets** | 15 abdominal organs |
| **Official source** | [AMOS 2022 challenge](https://amos22.grand-challenge.org/) · [Post-challenge Zenodo record](https://zenodo.org/records/7262581) |

## Dataset overview

AMOS was designed to evaluate abdominal organ segmentation across multi-center, multi-vendor, multi-modality and multi-disease imaging. The dataset paper describes voxel-level annotations for 15 organs, including the spleen, kidneys, gallbladder, esophagus, liver, stomach, aorta, inferior vena cava, pancreas, adrenal glands, duodenum, bladder, and prostate/uterus.

The challenge has a CT-only task and a mixed CT/MRI task. The official Zenodo record provides the labeled set (500 CT + 100 MRI) and separately links additional unlabeled data.

## Official split and label availability

| Cohort | Official information |
| --- | --- |
| Labeled development data | Training and validation data were released after the challenge with reference labels; the combined accessible cohort is 300 CT and 60 MRI |
| Challenge test data | Images were released without ground-truth labels for the official test phase |
| Additional unlabeled data | Linked from the Zenodo record as separate downloads; not part of the 600 labeled scans |

The challenge page and post-challenge Zenodo package are the authority for the exact files and current access terms. Do not infer an official train/validation subdivision from a merged post-challenge archive.

## Access and terms

- [AMOS challenge portal](https://amos22.grand-challenge.org/)
- [Zenodo dataset record, DOI 10.5281/zenodo.7262581](https://doi.org/10.5281/zenodo.7262581)
- The Zenodo record lists the labeled archive, file checksums, and separate unlabeled-data downloads. Review the source terms and attribution requirements before reuse.

## Dataset paper

**Ji et al.** “AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation.” *Advances in Neural Information Processing Systems: Datasets and Benchmarks*, 2022, vol. 35, pp. 36722–36732.

- [NeurIPS proceedings paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf)
- [arXiv:2206.08023](https://arxiv.org/abs/2206.08023)

**Checked:** 27 October 2026.
