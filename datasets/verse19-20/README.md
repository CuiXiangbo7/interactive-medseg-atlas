<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🦴 VerSe 2019 + 2020</h1>

<p align="center"><strong>Vertebral labeling and segmentation · multi-detector CT</strong></p>

<p align="center">
<a href="https://github.com/anjany/verse"><img src="https://img.shields.io/badge/DATA-Official%20repository-2e8b57?style=flat-square" alt="Official dataset repository"></a>
<a href="https://osf.io/nqjyw/"><img src="https://img.shields.io/badge/OSF-VerSe%2719-1f6feb?style=flat-square" alt="VerSe 2019 OSF"></a>
<a href="https://osf.io/t98fz/"><img src="https://img.shields.io/badge/OSF-VerSe%2720-1f6feb?style=flat-square" alt="VerSe 2020 OSF"></a>
</p>

<p align="center"><strong>📚 Benchmark paper</strong></p>
<p align="center">
<a href="https://doi.org/10.1016/j.media.2021.102166"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2021-2455a4?style=flat-square" alt="Medical Image Analysis 2021"></a>
<a href="https://arxiv.org/abs/2001.09193"><img src="https://img.shields.io/badge/arXiv-2001.09193-b31b1b?style=flat-square" alt="arXiv 2001.09193"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | Multi-detector CT |
| **Scale** | 374 scans from 355 patients across the combined VerSe19/VerSe20 release |
| **Targets** | 26 vertebral types, with voxel-level masks and vertebral centroid coordinates |
| **Institutional origin** | Multi-site collection acquired on scanners from multiple manufacturers; the official repository does not present the challenge organizers as a complete list of acquisition hospitals. |
| **Official source** | [VerSe repository](https://github.com/anjany/verse) · [VerSe19 OSF](https://osf.io/nqjyw/) · [VerSe20 OSF](https://osf.io/t98fz/) |

## 🧾 Dataset overview

VerSe is a multi-detector, multi-site CT benchmark for vertebra labeling and segmentation. The combined collection contains 374 scans from 355 patients and 4,505 individually annotated vertebrae. Annotations include voxel-level vertebral masks and centroid coordinates. The benchmark was organized in two iterations alongside MICCAI 2019 and MICCAI 2020.

The combined release is not the arithmetic sum of the two editions: the official benchmark paper reports 86 patients represented in both. The official repository recommends the restructured complete dataset, whose annotation format differs from the original challenge-format packages.

## nnInteractive training-table entry

The paper’s Appendix A1 reports the following row for this dataset. Its image count is a training-inventory figure, not necessarily the total size of the current release.

| A1 field | Paper-listed value |
| --- | --- |
| Images | 113 |
| Modality | CT |
| Target | 28 Vertebrae |
| Dataset entry linked by A1 | [Open source page](https://github.com/anjany/verse) |
| Cited references | [ref 123](https://arxiv.org/html/2503.08373v1#bib.bib123), [ref 81](https://arxiv.org/html/2503.08373v1#bib.bib81), [ref 74](https://arxiv.org/html/2503.08373v1#bib.bib74) |

## 🏷️ Official label definitions

| Label IDs | Vertebral types |
| --- | --- |
| 1–7 | Cervical vertebrae C1–C7 |
| 8–19 | Thoracic vertebrae T1–T12 |
| 20–25 | Lumbar vertebrae L1–L6, including the L6 transitional type |
| 28 | Additional thoracic type T13 |
| 26–27 | Sacrum and coccyx label IDs are listed as not labeled in this dataset |

This gives 26 annotated vertebral types: the usual C1–C7, T1–T12 and L1–L5 types, plus transitional L6 and T13. Label IDs are not contiguous because 26 and 27 are reserved for structures that are not annotated. Partially visible vertebrae at the top or bottom of a scan are not annotated.

## 🗂️ Challenge editions and annotation availability

| Edition / release | Scan split at challenge time | Current reference-label status |
| --- | --- | --- |
| VerSe19 | 160 scans from 141 patients; 80 training, 40 validation/public-test, 40 test scans | Complete edition, including scans formerly used as hidden test data, is linked from the official repository |
| VerSe20 | 319 scans from 300 patients; 113 training, 103 validation/public-test, 103 test scans | Complete edition, including scans formerly used as hidden test data, is linked from the official repository |
| Combined restructured release | 374 scans from 355 patients | Use the official combined files and documentation; do not add the two edition totals because patients overlap |

The edition-specific splits describe the historical challenge setup. They are not a single disjoint split across both editions.

## ⬇️ Access and terms

- [Official repository and download instructions](https://github.com/anjany/verse)
- [VerSe19 OSF repository](https://osf.io/nqjyw/)
- [VerSe20 OSF repository](https://osf.io/t98fz/)
- The official repository provides the restructured complete data and challenge-format packages. Follow its current instructions and choose the format that matches your use.
- Dataset license: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The helper code in the repository is MIT-licensed; these are separate terms.

## 📚 Publication and citation

Sekuboyina A. et al. “VerSe: A Vertebrae Labelling and Segmentation Benchmark for Multi-detector CT Images.” *Medical Image Analysis*, vol. 73, 2021, article 102166.

- [Journal DOI: 10.1016/j.media.2021.102166](https://doi.org/10.1016/j.media.2021.102166) · [arXiv:2001.09193](https://arxiv.org/abs/2001.09193)

The benchmark paper is the primary citation for the combined VerSe19/VerSe20 collection.

---

<p align="center"><sub>🕘 Sources last checked: 25 November 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
