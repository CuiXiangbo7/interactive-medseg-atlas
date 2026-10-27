<h1 align="center">🧠 CFB-GBM</h1>

<p align="center"><strong>Glioblastoma imaging and segmentation · longitudinal multimodal data</strong></p>

<p align="center">
<a href="https://www.cancerimagingarchive.net/collection/cfb-gbm/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
</p>

<p align="center"><strong>📚 Publications and records</strong></p>
<p align="center">
<a href="https://doi.org/10.59275/j.melba.2026-dd48"><img src="https://img.shields.io/badge/MELBA-2026-6f42c1?style=flat-square" alt="MELBA 2026"></a>
<a href="https://doi.org/10.7937/V9PN-2F72"><img src="https://img.shields.io/badge/TCIA%20DOI-10.7937%2FV9PN--2F72-1f6feb?style=flat-square" alt="TCIA DOI 10.7937/V9PN-2F72"></a>
</p>

| Quick facts | |
| --- | --- |
| **Current TCIA collection** | 264 subjects |
| **Modalities** | MRI, CT, and RTDOSE; availability varies by case and timepoint |
| **Institutional origin** | A single-center clinical cohort from Centre François Baclesse in Caen, France; the collection name CFB-GBM refers to this center. [Official TCIA collection record](https://www.cancerimagingarchive.net/collection/cfb-gbm/). |
| **Official source** | [The Cancer Imaging Archive collection](https://www.cancerimagingarchive.net/collection/cfb-gbm/) |

## 🧾 Dataset overview

CFB-GBM is a longitudinal, multimodal glioblastoma collection with imaging, segmentation contours, treatment and follow-up information. TCIA’s current Version 4 page lists 264 subjects and NIfTI images/segmentations across MR, CT, and RTDOSE. Not every subject or timepoint should be assumed to contain every modality or contour class; consult the collection’s modality-availability tables and data dictionary.

## 🗂️ Official split and label availability

TCIA does **not** define a universal train/validation/test split for this collection. The collection is released for research use, and users who construct a cohort or split should describe their inclusion criteria, modality availability, and split procedure as their own protocol.

Available segmentations and radiotherapy structures are case- and timepoint-dependent. Use TCIA manifests and the version-specific CFB-GBM documentation to determine which contours apply to a particular image.

## 🔒 Access and license

- [TCIA collection page and download instructions](https://www.cancerimagingarchive.net/collection/cfb-gbm/)
- [TCIA dataset DOI: 10.7937/V9PN-2F72](https://doi.org/10.7937/V9PN-2F72)
- [CFB-GBM project documentation](https://github.com/AurelienCD/CFB-GBM)

The current TCIA collection page lists a **CC BY 4.0** license. Cite the dataset and follow TCIA’s attribution requirements.

## 📚 Publications and citation

**Dataset and methods paper:** Leclercq et al. “CFB-GBM v2.0: An Augmented Longitudinal Dataset for Multi-Modal Glioblastoma Segmentation, Radiomics, and RANO Progression Tracking.” *Machine Learning for Biomedical Imaging (MELBA)*, Special Issue: MICCAI Open Data 2026, 2026, pp. 763–771. [DOI: 10.59275/j.melba.2026-dd48](https://doi.org/10.59275/j.melba.2026-dd48) · [Open article](https://www.melba-journal.org/papers/2026%3A038.html).

**TCIA collection citation:** Moreau et al. “Pre and post treatment MRI and radiotherapy plans of patients with glioblastoma: the CFB-GBM cohort (CFB-GBM), Version 4.” *The Cancer Imaging Archive*, 2025. [DOI: 10.7937/V9PN-2F72](https://doi.org/10.7937/V9PN-2F72).

The 2026 paper describes the expanded v2.0 dataset resource; the TCIA citation identifies the collection version and should accompany reuse of that release.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
