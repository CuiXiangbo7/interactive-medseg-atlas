<h1 align="center">🧠 BraTS 2019</h1>

<p align="center"><strong>Pre-operative glioma segmentation · multimodal MRI</strong></p>

<p align="center">
<a href="https://www.med.upenn.edu/cbica/brats-2019/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://doi.org/10.1007/978-3-030-46640-4"><img src="https://img.shields.io/badge/BrainLes-2019-8b1e3f?style=flat-square" alt="BrainLes 2019"></a> <a href="https://doi.org/10.1007/978-3-030-46643-5"><img src="https://img.shields.io/badge/LNCS-2020-6f42c1?style=flat-square" alt="LNCS 2020"></a> <a href="https://doi.org/10.1038/sdata.2017.117"><img src="https://img.shields.io/badge/Scientific%20Data-2017-2455a4?style=flat-square" alt="Scientific Data 2017"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | T1, T1ce, T2, FLAIR |
| **Task** | Glioma subregion segmentation and related challenge tasks |
| **Labels** | NCR/NET, edema, enhancing tumor; derived regions WT, TC, ET |
| **Official source** | [Challenge page](https://www.med.upenn.edu/cbica/brats-2019/) · [Official data notes](https://www.med.upenn.edu/cbica/brats2019/data.html) |

## 🧾 Dataset overview

BraTS 2019 uses multi-institutional, pre-operative MRI and expert-reviewed tumor annotations. The official data notes describe the standardized, co-registered and skull-stripped images and explain the annotation protocol.

The challenge training release contains **335 labeled cases**. The official challenge also used validation and testing phases; the challenge page says test data and evaluation were released only to submitted papers during a short post-submission window.

## 🗂️ Official split and label availability

| Cohort | Official status |
| --- | --- |
| Training | 335 cases with reference segmentations |
| Validation | Challenge evaluation cohort; reference labels were not part of the ordinary public training release |
| Test | Challenge evaluation cohort; the 2019 page documents a restricted, time-limited release to submitted papers rather than unrestricted public test labels |

The official challenge page does not make the old challenge split equivalent to a modern, permanent public test-label release. Check the original organizer source for current access.

## 🏷️ Labels and evaluation notes

The official 2019 data page specifies voxel labels **1 = NCR/NET**, **2 = edema**, and **4 = enhancing tumor**. The common derived regions are **WT = {1,2,4}**, **TC = {1,4}**, and **ET = {4}**. Keep these definitions attached to reported metrics.

## 🔒 Access and terms

- [BraTS 2019 challenge page](https://www.med.upenn.edu/cbica/brats-2019/)
- [BraTS 2019 official data description](https://www.med.upenn.edu/cbica/brats2019/data.html)
- [Legacy Synapse project page](https://www.synapse.org/Synapse:syn25829067/wiki/610863)

The original challenge page remains the source for its release schedule and access terms. The legacy Synapse link may not provide the historical files today; do not substitute an unofficial mirror without checking provenance and terms.

## 📚 Publications and citation

**Challenge proceedings:** *BrainLes 2019*, held in conjunction with MICCAI 2019 and published in 2020 as Springer Lecture Notes in Computer Science, vols. 11992 (Part I) and 11993 (Part II).

- [Part I, LNCS 11992, DOI: 10.1007/978-3-030-46640-4](https://doi.org/10.1007/978-3-030-46640-4) · [Part II, LNCS 11993, DOI: 10.1007/978-3-030-46643-5](https://doi.org/10.1007/978-3-030-46643-5)

**Dataset resource paper:** Bakas et al. “Advancing The Cancer Genome Atlas glioma MRI collections with expert segmentation labels and radiomic features.” *Scientific Data*, vol. 4, article 170117, 2017. [DOI: 10.1038/sdata.2017.117](https://doi.org/10.1038/sdata.2017.117).

**Foundational benchmark reference:** Menze et al. “The Multimodal Brain Tumor Image Segmentation Benchmark (BRATS).” *IEEE Transactions on Medical Imaging*, vol. 34, no. 10, pp. 1993–2024, 2015. [DOI: 10.1109/TMI.2014.2377694](https://doi.org/10.1109/TMI.2014.2377694).

The MICCAI 2019 challenge archive and split/label details are linked in the official source section above.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
