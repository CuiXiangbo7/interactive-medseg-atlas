<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🗂️ Public Medical Segmentation Datasets</h1>

<p align="center"><strong>Official access · dataset splits · labels · reuse terms · papers</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/DATA%20CARDS-11-2563eb?style=flat-square" alt="11 dataset cards">
<img src="https://img.shields.io/badge/SOURCE%20POLICY-official%20first-16803c?style=flat-square" alt="Official source first">
<img src="https://img.shields.io/badge/PAPERS-linked-6f42c1?style=flat-square" alt="Linked dataset papers">
</p>

> 🧭 Each card is a starting point for finding official data, understanding what is labeled, and citing the publication.

**How to read the split column:** counts and label status reflect the source or challenge release named on each page. Original challenge access can differ from later archive releases; unclear details are identified explicitly.

## 🧠 Brain and neuro-oncology

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [BraTS 2015](brats-2015/README.md)<br><sub>🏛️ CBICA, University of Pennsylvania · multi-institutional cohort</sub> | Glioma subregions · T1, T1ce, T2, FLAIR MRI | Historical release; use the edition-specific source for exact files and split | <a href="https://doi.org/10.1109/TMI.2014.2377694"><img src="https://img.shields.io/badge/IEEE%20TMI-2015-2455a4?style=flat-square" alt="IEEE TMI 2015"></a> |
| [BraTS 2019](brats-2019/README.md)<br><sub>🏛️ CBICA, University of Pennsylvania · multi-institutional cohort</sub> | Glioma subregions · T1, T1ce, T2, FLAIR MRI | Training labels; validation and test were challenge evaluation cohorts | <a href="https://doi.org/10.1007/978-3-030-46640-4"><img src="https://img.shields.io/badge/BrainLes-2019-8b1e3f?style=flat-square" alt="BrainLes 2019"></a> |
| [BraTS 2021](brats-2021/README.md)<br><sub>🏛️ CBICA/UPenn lead; RSNA, ASNR, MICCAI · multi-institutional</sub> | Glioma subregions · T1, T1ce, T2, FLAIR MRI | 1,251 labeled training cases; validation/test challenge references hidden | <a href="https://arxiv.org/abs/2107.02314"><img src="https://img.shields.io/badge/arXiv-2107.02314-b31b1b?style=flat-square" alt="arXiv 2107.02314"></a> |
| [UCSF-BMSR](ucsf-bmsr/README.md)<br><sub>🏛️ University of California, San Francisco</sub> | Brain metastases · multiparametric MRI | 461 exams advertised for download; paper describes a 99-exam challenge test set | <a href="https://doi.org/10.1148/ryai.230126"><img src="https://img.shields.io/badge/Radiology%20AI-2024-2455a4?style=flat-square" alt="Radiology AI 2024"></a> |
| [BraTS-PEDs](brats-peds/README.md)<br><sub>🏛️ CBTN, CONNECT, DIPG Registry · pediatric sites</sub> | Pediatric high-grade glioma · multiparametric MRI | 257 labeled train; 91 image-only validation; 109 hidden test | <a href="https://doi.org/10.1148/ryai.250902"><img src="https://img.shields.io/badge/Radiology%20AI-2026-2455a4?style=flat-square" alt="Radiology AI 2026"></a> |
| [BraTS-MEN 2023](brats-men-2023/README.md)<br><sub>🏛️ 6 centers: Duke, Jefferson, Yale, Missouri, UCSF, Penn</sub> | Meningioma subregions · T1, T1ce, T2, FLAIR MRI | 1,000 train; 141 validation; 283 private test; release contents can differ | <a href="https://doi.org/10.1038/s41597-024-03350-9"><img src="https://img.shields.io/badge/Scientific%20Data-2024-2455a4?style=flat-square" alt="Scientific Data 2024"></a> |
| [BraTS-MEN-RT](brats-men-rt/README.md)<br><sub>🏛️ 7 centers: Duke, UCSF, SUNY Upstate, UW, Missouri, KCL, UCSD</sub> | Radiotherapy GTV · post-contrast T1 MRI | 500 labeled train; 70 image-only validation; 180 private test | <a href="https://doi.org/10.1038/s41597-026-06649-x"><img src="https://img.shields.io/badge/Scientific%20Data-2026-2455a4?style=flat-square" alt="Scientific Data 2026"></a> |
| [CFB-GBM](cfb-gbm/README.md)<br><sub>🏛️ Centre François Baclesse, France · single-center</sub> | Longitudinal glioblastoma · MRI, CT, RT dose/structures | TCIA collection; no official train/validation/test split | <a href="https://doi.org/10.59275/j.melba.2026-dd48"><img src="https://img.shields.io/badge/MELBA-2026-6f42c1?style=flat-square" alt="MELBA 2026"></a> |

## 🩻 Abdominal segmentation

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [AMOS 2022](amos/README.md)<br><sub>🏛️ HKU, CUHK-Shenzhen/SRIBD, Longgang hospitals · multicenter</sub> | 15 abdominal organs · CT and MRI | Challenge-time test labels withheld; later Zenodo release describes a labeled archive | <a href="https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf"><img src="https://img.shields.io/badge/NeurIPS%20D%26B-2022-2d6a4f?style=flat-square" alt="NeurIPS D&B 2022"></a> |
| [BTCV](btcv/README.md)<br><sub>🏛️ Vanderbilt University Medical Center</sub> | 13 abdominal organs · CT | 30 labeled development cases; 20 test cases without public labels | <a href="https://www.synapse.org/Synapse:syn3193805/wiki/217752"><img src="https://img.shields.io/badge/MICCAI%20workshop-2015-8b1e3f?style=flat-square" alt="MICCAI workshop 2015"></a> |

## 🧠 Stroke imaging

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [AISD](aisd/README.md)<br><sub>🏛️ Research teams: BUPT, Deepwise, Jinling/Nanjing Univ., Peking Univ., HKU; acquisition site not stated</sub> | Acute ischemic infarct · non-contrast CT | 345 train/validation combined; 52 test; test-mask availability not clearly itemized | <a href="https://doi.org/10.1007/978-3-030-87234-2_41"><img src="https://img.shields.io/badge/MICCAI-2021-8b1e3f?style=flat-square" alt="MICCAI 2021"></a> |

## 🧾 What each dataset page includes

- 🔗 Official dataset, challenge, or institutional access links
- 🗂️ Organizer-defined splits, when documented
- 🏷️ Label definitions and whether validation/test references are public
- ⬇️ Download routes and access requirements
- 🔒 License or reuse terms stated by the source
- 📚 Publication venue, year, volume/pages or article number, DOI, and preprint links when available

**Source rule:** if the official source does not specify a split, license, or label status, the card says so rather than filling the gap with an unofficial estimate. No images, masks, or paper PDFs are hosted here.

*Sources checked: 27 October 2026.*