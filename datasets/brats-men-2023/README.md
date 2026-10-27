<h1 align="center">🧠 BraTS-MEN 2023</h1>

<p align="center"><strong>Pre-operative meningioma segmentation · multiparametric MRI</strong></p>

<p align="center">
<a href="https://www.synapse.org/Synapse:syn51514106"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://doi.org/10.1038/s41597-024-03350-9"><img src="https://img.shields.io/badge/Scientific%20Data-2024-2455a4?style=flat-square" alt="Scientific Data 2024"></a> <a href="https://arxiv.org/abs/2405.09787"><img src="https://img.shields.io/badge/arXiv-2405.09787-b31b1b?style=flat-square" alt="arXiv 2405.09787"></a>
</p>

| Quick facts | |
| --- | --- |
| **Cohort** | 1,424 MRI examinations from 1,344 patients |
| **Input** | T1, T1ce, T2, FLAIR |
| **Official source** | [BraTS-MEN Synapse dataset](https://www.synapse.org/Synapse:syn51514106) · [BraTS 2023 challenge page](https://www.synapse.org/Synapse:syn51156910/wiki/622351) |

## 🧾 Dataset overview

The BraTS pre-operative meningioma dataset brings together multi-institutional, pre-operative MRI with expert-annotated tumor subregions and clinical metadata. It is intended for segmentation of meningioma components and supports evaluation across institutions.

## 🗂️ Official split and label availability

| Cohort | Cases | Label status |
| --- | ---: | --- |
| Training | 1,000 | Expert segmentations provided |
| Validation | 141 | Challenge leaderboard cohort; public data availability depends on the release/version |
| Test | 283 | Private holdout for unbiased evaluation; test labels are not public |

The Scientific Data article reports that training and validation data are publicly available, while the 283-case test cohort remains private. During the original challenge, validation labels were used for leaderboard evaluation. Because a post-challenge Synapse package may contain more than the original leaderboard bundle, verify the exact annotation files and terms for the version you download.

## 🧬 Modalities and annotation

The four MRI sequences are T1, post-contrast T1 (T1ce), T2, and FLAIR. The annotation protocol identifies enhancing tumor, non-enhancing tumor/core, and surrounding edema. Preserve the release-specific voxel-label mapping when deriving WT/TC/ET-style regions.

## 🔒 Access and terms

- [Synapse dataset record, DOI 10.7303/syn51514106](https://doi.org/10.7303/syn51514106)
- [Official challenge / access information](https://www.synapse.org/Synapse:syn51156910/wiki/622351)
- Synapse registration and acceptance of the applicable post-challenge data terms may be required.

## 📚 Publications and citation

**Dataset paper:** LaBella et al. “A multi-institutional meningioma MRI dataset for automated multi-sequence image segmentation.” *Scientific Data*, vol. 11, no. 1, article 496, 2024. [DOI: 10.1038/s41597-024-03350-9](https://doi.org/10.1038/s41597-024-03350-9).

**Challenge analysis:** LaBella et al. “Analysis of the BraTS 2023 Intracranial Meningioma Segmentation Challenge.” *arXiv preprint*, 2024. [arXiv:2405.09787](https://arxiv.org/abs/2405.09787).

- [Synapse dataset record, DOI: 10.7303/syn51514106](https://doi.org/10.7303/syn51514106)

The dataset article and challenge analysis are separate references; the split notes above distinguish the original challenge cohorts from later public release contents.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
