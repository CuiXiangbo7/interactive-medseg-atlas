# Public Medical Segmentation Datasets

> A source-first catalog of public datasets used in medical image segmentation. Each page links to the official dataset or challenge portal and its associated paper.

**Scope:** dataset facts below are taken from organizer, institutional, repository, or publisher sources. When an official source does not specify a split, license, or test-label status, the page says so rather than filling the gap with an unofficial estimate. No image data or paper PDFs are hosted here.

## Browse by task

| Dataset | Modality | Primary task | Official split / label note |
| --- | --- | --- | --- |
| [BraTS 2015](brats-2015/README.md) | MRI: T1, T1ce, T2, FLAIR | Glioma subregions | Historical release; consult its edition-specific source for the exact files and split |
| [BraTS 2019](brats-2019/README.md) | MRI: T1, T1ce, T2, FLAIR | Glioma subregions | Training labels; validation/test were challenge evaluation cohorts |
| [BraTS 2021](brats-2021/README.md) | MRI: T1, T1ce, T2, FLAIR | Glioma subregions | 1,251 labeled training cases; later GLI release changes ET value 4 → 3 |
| [AMOS 2022](amos/README.md) | CT and MRI | 15 abdominal organs | Challenge-time test labels were withheld; post-challenge Zenodo describes a broader labeled archive |
| [BTCV](btcv/README.md) | CT | 13 abdominal organs | 30 labeled development cases; 20 test cases without public labels |
| [UCSF-BMSR](ucsf-bmsr/README.md) | MRI: T1post, T1pre, FLAIR, subtraction | Brain metastases | 461 exams currently advertised for download; paper describes a 99-exam challenge test set |
| [BraTS-PEDs](brats-peds/README.md) | MRI: T1n, T1c, T2w, T2f | Pediatric high-grade glioma | 257 labeled training; 91 validation without labels; 109 hidden test |
| [BraTS-MEN 2023](brats-men-2023/README.md) | MRI: T1, T1ce, T2, FLAIR | Meningioma subregions | 1,000 train, 141 validation, 283 private test; public availability depends on release |
| [BraTS-MEN-RT 2024](brats-men-rt/README.md) | MRI: post-contrast T1 | Radiotherapy GTV | 500 labeled train, 70 image-only validation, 180 private test |
| [AISD](aisd/README.md) | NCCT | Acute ischemic infarct | 345 train/validation combined; 52 test; test-mask availability is not clearly itemized |
| [CFB-GBM](cfb-gbm/README.md) | Longitudinal MRI, CT, RT dose/structures | Glioblastoma segmentation and response research | TCIA collection; no official train/validation/test split |

## How to use this catalog

- **Official split** means a split defined by the dataset publisher or challenge organizer. A split created in a research paper or toolkit is not presented as official.
- **Labels available** describes what the official source says is downloadable. It does not imply that a challenge holdout should be used for model development.
- **Access and license terms can change.** Follow the current terms shown by the linked source before downloading, redistributing, or publishing results.
- Each page includes a recommended dataset paper or challenge paper with a DOI or publisher/preprint link.

*Sources checked: 27 October 2026.*
