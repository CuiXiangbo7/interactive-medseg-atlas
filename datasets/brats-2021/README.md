# BraTS 2021

> **RSNA–ASNR–MICCAI brain tumor benchmark · pre-operative MRI**

| Quick facts | |
| --- | --- |
| **Input** | T1, T1ce, T2, FLAIR |
| **Task** | Glioma subregion segmentation; the benchmark also included radiogenomic classification |
| **Cases** | 2,040 total: 1,251 train, 219 validation, 570 test |
| **Official sources** | [BraTS 2021 challenge](https://www.med.upenn.edu/cbica/brats2021/) · [Current Synapse access notice](https://www.synapse.org/Synapse:syn25829067/discussion/threadId=12691) |

## Official split and label availability

| Cohort | Cases | Reference labels |
| --- | ---: | --- |
| Training | 1,251 | Publicly available with the training release |
| Validation | 219 | Challenge labels were withheld for leaderboard evaluation |
| Test | 570 | Hidden challenge test; labels were not part of the ordinary public challenge download |

The current Synapse notice says the old BraTS 2018–2021 datasets are no longer hosted there. It directs users to the registered-user **BraTS-GLI** release, which reuses the BraTS 2020/2021 data after acceptance of post-challenge terms.

## Important label-version note

The current BraTS-GLI release uses the same underlying data as BraTS 2020/2021 with one documented change: the enhancing-tumor label is **3** instead of the original **4**. Keep the release name and label mapping with any downloaded masks or results.

## Data and annotations

Each case uses four structural MRI sequences. The standard BraTS targets are whole tumor, tumor core, and enhancing tumor; the training references are expert tumor subregion annotations. The benchmark’s label convention should be taken from the specific release rather than inferred from a filename.

## Access and terms

- [BraTS 2021 organizer page](https://www.med.upenn.edu/cbica/brats2021/)
- [Current BraTS-GLI data access page](https://www.synapse.org/Synapse:syn51156910/wiki/622351)
- [Synapse data folder](https://www.synapse.org/Synapse:syn64952532)
- [Official notice on legacy data and label remapping](https://www.synapse.org/Synapse:syn25829067/discussion/threadId=12691)

A Synapse account and acceptance of the post-challenge terms are required for the current GLI route. Follow the current Synapse terms before downloading or redistributing data.

## Papers

1. **Baid et al.** “The RSNA-ASNR-MICCAI BraTS 2021 Benchmark on Brain Tumor Segmentation and Radiogenomic Classification.” [arXiv:2107.02314](https://arxiv.org/abs/2107.02314).
2. **Menze et al.** “The Multimodal Brain Tumor Image Segmentation Benchmark (BRATS).” *IEEE Transactions on Medical Imaging*, 2015. [DOI: 10.1109/TMI.2014.2377694](https://doi.org/10.1109/TMI.2014.2377694).

**Checked:** 27 October 2026.
