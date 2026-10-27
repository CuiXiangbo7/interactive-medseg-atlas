# BraTS-MEN 2023

> **Pre-operative meningioma segmentation · multiparametric MRI**

| Quick facts | |
| --- | --- |
| **Cohort** | 1,424 MRI examinations from 1,344 patients |
| **Input** | T1, T1ce, T2, FLAIR |
| **Official source** | [BraTS-MEN Synapse dataset](https://www.synapse.org/Synapse:syn51514106) · [BraTS 2023 challenge page](https://www.synapse.org/Synapse:syn51156910/wiki/622351) |

## Dataset overview

The BraTS pre-operative meningioma dataset brings together multi-institutional, pre-operative MRI with expert-annotated tumor subregions and clinical metadata. It is intended for segmentation of meningioma components and supports evaluation across institutions.

## Official split and label availability

| Cohort | Cases | Label status |
| --- | ---: | --- |
| Training | 1,000 | Expert segmentations provided |
| Validation | 141 | Challenge leaderboard cohort; public data availability depends on the release/version |
| Test | 283 | Private holdout for unbiased evaluation; test labels are not public |

The Scientific Data article reports that training and validation data are publicly available, while the 283-case test cohort remains private. During the original challenge, validation labels were used for leaderboard evaluation. Because a post-challenge Synapse package may contain more than the original leaderboard bundle, verify the exact annotation files and terms for the version you download.

## Modalities and annotation

The four MRI sequences are T1, post-contrast T1 (T1ce), T2, and FLAIR. The annotation protocol identifies enhancing tumor, non-enhancing tumor/core, and surrounding edema. Preserve the release-specific voxel-label mapping when deriving WT/TC/ET-style regions.

## Access and terms

- [Synapse dataset record, DOI 10.7303/syn51514106](https://doi.org/10.7303/syn51514106)
- [Official challenge / access information](https://www.synapse.org/Synapse:syn51156910/wiki/622351)
- Synapse registration and acceptance of the applicable post-challenge data terms may be required.

## Dataset papers

1. **LaBella et al.** “A multi-institutional meningioma MRI dataset for automated multi-sequence image segmentation.” *Scientific Data*, 2024. [DOI: 10.1038/s41597-024-03350-9](https://doi.org/10.1038/s41597-024-03350-9).
2. **LaBella et al.** “Analysis of the BraTS 2023 Intracranial Meningioma Segmentation Challenge.” [arXiv:2405.09787](https://arxiv.org/abs/2405.09787).

**Checked:** 27 October 2026.
