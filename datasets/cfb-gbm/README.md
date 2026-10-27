# CFB-GBM

> **Glioblastoma imaging and segmentation · longitudinal multimodal data**

| Quick facts | |
| --- | --- |
| **Current TCIA collection** | 264 subjects |
| **Modalities** | MRI, CT, and RTDOSE; availability varies by case and timepoint |
| **Official source** | [The Cancer Imaging Archive collection](https://www.cancerimagingarchive.net/collection/cfb-gbm/) |

## Dataset overview

CFB-GBM is a longitudinal, multimodal glioblastoma collection with imaging, segmentation contours, treatment and follow-up information. TCIA’s current Version 4 page lists 264 subjects and NIfTI images/segmentations across MR, CT, and RTDOSE. Not every subject or timepoint should be assumed to contain every modality or contour class; consult the collection’s modality-availability tables and data dictionary.

## Official split and label availability

TCIA does **not** define a universal train/validation/test split for this collection. The collection is released for research use, and users who construct a cohort or split should describe their inclusion criteria, modality availability, and split procedure as their own protocol.

Available segmentations and radiotherapy structures are case- and timepoint-dependent. Use TCIA manifests and the version-specific CFB-GBM documentation to determine which contours apply to a particular image.

## Access and license

- [TCIA collection page and download instructions](https://www.cancerimagingarchive.net/collection/cfb-gbm/)
- [TCIA dataset DOI: 10.7937/V9PN-2F72](https://doi.org/10.7937/V9PN-2F72)
- [CFB-GBM project documentation](https://github.com/AurelienCD/CFB-GBM)

The current TCIA collection page lists a **CC BY 4.0** license. Cite the dataset and follow TCIA’s attribution requirements.

## Dataset papers

1. **Leclercq et al.** “CFB-GBM v2.0: An Augmented Longitudinal Dataset for Multi-Modal Glioblastoma Segmentation, Radiomics, and RANO Progression Tracking.” *Machine Learning for Biomedical Imaging*, 2026, pp. 763–771. [DOI: 10.59275/j.melba.2026-dd48](https://doi.org/10.59275/j.melba.2026-dd48) · [Open article](https://www.melba-journal.org/papers/2026%3A038.html).
2. **Moreau et al.** “Pre and post treatment MRI and radiotherapy plans of patients with glioblastoma: the CFB-GBM cohort (CFB-GBM), Version 4.” [TCIA dataset citation, DOI: 10.7937/V9PN-2F72](https://doi.org/10.7937/V9PN-2F72).

**Checked:** 27 October 2026.
