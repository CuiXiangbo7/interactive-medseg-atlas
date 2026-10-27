<h1 align="center">🩻 AMOS 2022</h1>

<p align="center"><strong>Abdominal multi-organ segmentation · CT and MRI</strong></p>

<p align="center">
<a href="https://amos22.grand-challenge.org/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://amos22.grand-challenge.org/"><img src="https://img.shields.io/badge/CHALLENGE-AMOS%202022-8b1e3f?style=flat-square" alt="Related challenge"></a>
</p>

<p align="center"><strong>📚 Publications and records</strong></p>
<p align="center">
<a href="https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf"><img src="https://img.shields.io/badge/NeurIPS%20D%26B-2022-2d6a4f?style=flat-square" alt="NeurIPS D&B 2022"></a>
<a href="https://arxiv.org/abs/2206.08023"><img src="https://img.shields.io/badge/arXiv-2206.08023-b31b1b?style=flat-square" alt="arXiv 2206.08023"></a>
<a href="https://doi.org/10.5281/zenodo.7262581"><img src="https://img.shields.io/badge/Zenodo%20DOI-10.5281%2Fzenodo.7262581-1f6feb?style=flat-square" alt="Zenodo DOI 10.5281/zenodo.7262581"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | 500 CT and 100 MRI scans |
| **Targets** | 15 abdominal organs |
| **Institutional origin** | The benchmark team’s affiliations include the University of Hong Kong, CUHK-Shenzhen and the Shenzhen Research Institute of Big Data, Longgang Central Hospital, and Longgang People’s Hospital. The paper describes the images as a multi-center collection; these affiliations should not be read as a complete list of acquisition hospitals. [NeurIPS paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf). |
| **Official source** | [AMOS 2022 challenge](https://amos22.grand-challenge.org/) · [Post-challenge Zenodo record](https://zenodo.org/records/7262581) |

## 🧾 Dataset overview

AMOS was designed to evaluate abdominal organ segmentation across multi-center, multi-vendor, multi-modality and multi-disease imaging. The dataset paper describes voxel-level annotations for 15 organs, including the spleen, kidneys, gallbladder, esophagus, liver, stomach, aorta, inferior vena cava, pancreas, adrenal glands, duodenum, bladder, and prostate/uterus.

The challenge has a CT-only task and a mixed CT/MRI task. The official Zenodo record links a labeled 500-CT/100-MRI archive and additional unlabeled data.

## 🗂️ Official split and label availability

| Release / cohort | Official information |
| --- | --- |
| Challenge development data | Training and validation data were released with reference labels. A later peer-reviewed description reports 300 CT and 60 MRI across these accessible sections. |
| Challenge test data | The challenge portal describes test images without ground-truth labels during the challenge. |
| Post-challenge Zenodo v2 | The Zenodo record describes its 500-CT/100-MRI archive as labeled. This is broader than the original challenge-time test release; check the archive contents and version before treating test references as available. |
| Additional unlabeled data | Linked separately from the Zenodo record; these are not the 600 labeled scans. |

The challenge split and the post-challenge archive are different release contexts. Do not infer a train/validation subdivision from a merged post-challenge package.

## 🔒 Access and terms

- [AMOS challenge portal](https://amos22.grand-challenge.org/)
- [Zenodo dataset record, DOI 10.5281/zenodo.7262581](https://doi.org/10.5281/zenodo.7262581)
- The Zenodo record lists archives and file checksums. Review its current metadata and the challenge terms before reuse.

## 🏁 Related challenge

**AMOS 2022 Challenge** benchmarked segmentation of 15 abdominal organs across CT and MRI, using data collected across multiple centers and vendors.

- [Official AMOS 2022 challenge website](https://amos22.grand-challenge.org/) · [Challenge paper](https://arxiv.org/abs/2206.08023)

## 📚 Publication and citation

**Ji et al.** “AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation.” *Advances in Neural Information Processing Systems (NeurIPS), Datasets and Benchmarks Track*, vol. 35, 2022, pp. 36722–36732.

- [NeurIPS proceedings paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf) · [arXiv:2206.08023](https://arxiv.org/abs/2206.08023)
- [Dataset archive DOI: 10.5281/zenodo.7262581](https://doi.org/10.5281/zenodo.7262581)

The challenge portal and Zenodo archive represent different release contexts; see the split and label notes above when selecting a release.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
