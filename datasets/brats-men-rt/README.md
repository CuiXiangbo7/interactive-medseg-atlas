<h1 align="center">🧠 BraTS-MEN-RT 2024</h1>

<p align="center"><strong>Meningioma radiotherapy target segmentation · post-contrast T1 MRI</strong></p>

<p align="center">
<a href="https://www.synapse.org/Synapse:syn59059779"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://doi.org/10.1038/s41597-026-06649-x"><img src="https://img.shields.io/badge/Scientific%20Data-2026-2455a4?style=flat-square" alt="Scientific Data 2026"></a> <a href="https://doi.org/10.7303/syn59059779"><img src="https://img.shields.io/badge/Synapse%20DOI-10.7303%2Fsyn59059779-1f6feb?style=flat-square" alt="Synapse DOI 10.7303/syn59059779"></a>
</p>

| Quick facts | |
| --- | --- |
| **Cohort** | 750 MRI examinations from 747 patients |
| **Input** | Radiotherapy-planning 3D post-contrast T1 MRI |
| **Target** | Gross tumor volume (GTV), including at-risk postoperative site when applicable |
| **Official source** | [Synapse dataset](https://www.synapse.org/Synapse:syn59059779) |

## 🗂️ Official split and label availability

| Cohort | Cases | Images | GTV labels |
| --- | ---: | --- | --- |
| Training | 500 | Public | Public |
| Validation | 70 | Public | Not provided in the challenge release |
| Test | 180 | Private | Private |

The 2026 data article states that the 570 training and validation images and the 500 training GTV annotations are publicly available. The 180-case test set remains private for unbiased evaluation.

## 🧬 Data and annotation notes

This is a radiotherapy-planning cohort, not the pre-operative four-sequence BraTS-MEN 2023 cohort. Images remain in native orientation and voxel resolution; acquisition parameters vary across sites. The target is a single GTV class, not a multi-compartment tumor label map.

## 🔒 Access and terms

- [Official Synapse dataset, DOI 10.7303/syn59059779](https://doi.org/10.7303/syn59059779)
- [Challenge dataset paper and access steps](https://doi.org/10.1038/s41597-026-06649-x)
- Follow Synapse registration, data-use terms, and the release-specific download instructions.

## 📚 Publication and citation

LaBella et al. “The 2024 Brain Tumor Segmentation Challenge Meningioma Radiotherapy (BraTS-MEN-RT) dataset.” *Scientific Data*, vol. 13, no. 1, article 306, 2026. [DOI: 10.1038/s41597-026-06649-x](https://doi.org/10.1038/s41597-026-06649-x) · [PubMed: 41593091](https://pubmed.ncbi.nlm.nih.gov/41593091/).

- [Synapse dataset record, DOI: 10.7303/syn59059779](https://doi.org/10.7303/syn59059779)

The data article describes the public data release; the challenge-time split and label availability are summarized separately above.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
