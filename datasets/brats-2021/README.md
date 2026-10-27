<h1 align="center">🧠 BraTS 2021</h1>

<p align="center"><strong>RSNA–ASNR–MICCAI brain tumor benchmark · pre-operative MRI</strong></p>

<p align="center">
<a href="https://www.med.upenn.edu/cbica/brats2021/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://www.med.upenn.edu/cbica/brats2021/"><img src="https://img.shields.io/badge/CHALLENGE-BraTS%202021-8b1e3f?style=flat-square" alt="Related challenge"></a>
</p>

<p align="center"><strong>📚 Publications and records</strong></p>
<p align="center">
<a href="https://arxiv.org/abs/2107.02314"><img src="https://img.shields.io/badge/arXiv-2107.02314-b31b1b?style=flat-square" alt="arXiv 2107.02314"></a>
<a href="https://doi.org/10.7937/jc8x-9874"><img src="https://img.shields.io/badge/TCIA%20DOI-10.7937%2Fjc8x--9874-1f6feb?style=flat-square" alt="TCIA DOI 10.7937/jc8x-9874"></a>
<a href="https://doi.org/10.1109/TMI.2014.2377694"><img src="https://img.shields.io/badge/IEEE%20TMI-2015-2455a4?style=flat-square" alt="IEEE TMI 2015"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | T1, T1ce, T2, FLAIR |
| **Task** | Glioma subregion segmentation; the benchmark also included radiogenomic classification |
| **Cases** | 2,040 total: 1,251 train, 219 validation, 570 test |
| **Institutional origin** | Lead organizer: CBICA, University of Pennsylvania; challenge partners: RSNA, ASNR, and MICCAI. Data came from multiple institutions, including CBICA/UPenn, UCSF, Washington University in St. Louis, Heidelberg University, and Tata Memorial Centre. [Official organizer and contributor information](https://www.med.upenn.edu/cbica/brats2021/). |
| **Official sources** | [BraTS 2021 challenge](https://www.med.upenn.edu/cbica/brats2021/) · [Current Synapse access notice](https://www.synapse.org/Synapse:syn25829067/discussion/threadId=12691) |

## 🗂️ Official split and label availability

| Cohort | Cases | Reference labels |
| --- | ---: | --- |
| Training | 1,251 | Publicly available with the training release |
| Validation | 219 | Challenge labels were withheld for leaderboard evaluation |
| Test | 570 | Hidden challenge test; labels were not part of the ordinary public challenge download |

The current Synapse notice says the old BraTS 2018–2021 datasets are no longer hosted there. It directs users to the registered-user **BraTS-GLI** release, which reuses the BraTS 2020/2021 data after acceptance of post-challenge terms.

## ⚠️ Important label-version note

The current BraTS-GLI release uses the same underlying data as BraTS 2020/2021 with one documented change: the enhancing-tumor label is **3** instead of the original **4**. Keep the release name and label mapping with any downloaded masks or results.

## Data and annotations

Each case uses four structural MRI sequences. The standard BraTS targets are whole tumor, tumor core, and enhancing tumor; the training references are expert tumor subregion annotations. The benchmark’s label convention should be taken from the specific release rather than inferred from a filename.

## 🔒 Access and terms

- [BraTS 2021 organizer page](https://www.med.upenn.edu/cbica/brats2021/)
- [Current BraTS-GLI data access page](https://www.synapse.org/Synapse:syn51156910/wiki/622351)
- [Synapse data folder](https://www.synapse.org/Synapse:syn64952532)
- [Official notice on legacy data and label remapping](https://www.synapse.org/Synapse:syn25829067/discussion/threadId=12691)

A Synapse account and acceptance of the post-challenge terms are required for the current GLI route. Follow the current Synapse terms before downloading or redistributing data.

## 🏁 Related challenge

**RSNA–ASNR–MICCAI BraTS 2021** evaluated glioma subregion segmentation on multi-institutional pre-operative MRI and MGMT promoter methylation classification.

- [Official challenge overview, tasks, and schedule](https://www.med.upenn.edu/cbica/brats2021/) · [Synapse evaluation platform](https://www.synapse.org/Synapse:syn25829067)

## 📚 Publications and citation

**Benchmark paper:** Baid et al. “The RSNA-ASNR-MICCAI BraTS 2021 Benchmark on Brain Tumor Segmentation and Radiogenomic Classification.” *arXiv preprint*, 2021. [arXiv:2107.02314](https://arxiv.org/abs/2107.02314).

- [TCIA dataset record, DOI: 10.7937/jc8x-9874](https://doi.org/10.7937/jc8x-9874)

**Related foundational reference:** Menze et al. “The Multimodal Brain Tumor Image Segmentation Benchmark (BRATS).” *IEEE Transactions on Medical Imaging*, vol. 34, no. 10, pp. 1993–2024, 2015. [DOI: 10.1109/TMI.2014.2377694](https://doi.org/10.1109/TMI.2014.2377694).

The arXiv entry is the linked benchmark citation; no journal or proceedings venue is claimed for that preprint here.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
