# BraTS-MEN-RT 2024

> **Meningioma radiotherapy target segmentation · post-contrast T1 MRI**

| Quick facts | |
| --- | --- |
| **Cohort** | 750 MRI examinations from 747 patients |
| **Input** | Radiotherapy-planning 3D post-contrast T1 MRI |
| **Target** | Gross tumor volume (GTV), including at-risk postoperative site when applicable |
| **Official source** | [Synapse dataset](https://www.synapse.org/Synapse:syn59059779) |

## Official split and label availability

| Cohort | Cases | Images | GTV labels |
| --- | ---: | --- | --- |
| Training | 500 | Public | Public |
| Validation | 70 | Public | Not provided in the challenge release |
| Test | 180 | Private | Private |

The 2026 data article states that the 570 training and validation images and the 500 training GTV annotations are publicly available. The 180-case test set remains private for unbiased evaluation.

## Data and annotation notes

This is a radiotherapy-planning cohort, not the pre-operative four-sequence BraTS-MEN 2023 cohort. Images remain in native orientation and voxel resolution; acquisition parameters vary across sites. The target is a single GTV class, not a multi-compartment tumor label map.

## Access and terms

- [Official Synapse dataset, DOI 10.7303/syn59059779](https://doi.org/10.7303/syn59059779)
- [Challenge dataset paper and access steps](https://doi.org/10.1038/s41597-026-06649-x)
- Follow Synapse registration, data-use terms, and the release-specific download instructions.

## Dataset paper

**“The 2024 Brain Tumor Segmentation Challenge Meningioma Radiotherapy (BraTS-MEN-RT) dataset.”** *Scientific Data*, 2026; 13:306.

- [Publisher DOI: 10.1038/s41597-026-06649-x](https://doi.org/10.1038/s41597-026-06649-x)
- [Open-access article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12948943/)

**Checked:** 27 October 2026.
