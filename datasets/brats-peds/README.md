# BraTS-PEDs

> **Pediatric high-grade glioma segmentation · multiparametric MRI**

| Quick facts | |
| --- | --- |
| **Input** | T1n, T1c, T2w, T2-FLAIR |
| **Total cohort** | 457 pediatric patients |
| **Official source** | [TCIA collection](https://www.cancerimagingarchive.net/collection/brats-peds/) · [TCIA DOI](https://doi.org/10.7937/dx5c-tj86) |

## Dataset overview

BraTS-PEDs is a multi-institutional, expert-annotated MRI benchmark for pediatric high-grade gliomas. The dataset paper describes standardized preprocessing, including DICOM-to-NIfTI conversion, registration/resampling, and defacing. Its segmentation labels cover enhancing tumor (ET), nonenhancing tumor (NET), cystic component (CC), and edema (ED).

## Official split and label availability

| Cohort | Cases | Official label status |
| --- | ---: | --- |
| Training | 257 | Expert-validated segmentation masks provided |
| Validation | 91 | Images provided without labels for leaderboard evaluation |
| Test | 109 | Hidden subset for final assessment |

The counts and label status above come from the dataset paper’s cohort description. The official collection portal is the source of truth for current files and any later release changes.

## Access and terms

- [Download / collection page at TCIA](https://www.cancerimagingarchive.net/collection/brats-peds/)
- [Dataset DOI: 10.7937/dx5c-tj86](https://doi.org/10.7937/dx5c-tj86)
- The collection includes image and clinical/supporting metadata. Follow the current TCIA license and citation instructions.

## Dataset paper

**Fathi Kazerooni et al.** “Multi-Institutional Annotated Multiparametric MRI Dataset of Pediatric High-Grade Gliomas.” *Radiology: Artificial Intelligence*, 2026.

- [Publisher DOI: 10.1148/ryai.250902](https://doi.org/10.1148/ryai.250902)
- [Publisher article](https://pubs.rsna.org/doi/10.1148/ryai.250902)
- [BraTS-PEDs challenge overview](https://arxiv.org/abs/2305.17033)

**Checked:** 27 October 2026.
