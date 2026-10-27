<h1 align="center">🧒🧠 BraTS-PEDs</h1>

<p align="center"><strong>Pediatric high-grade glioma segmentation · multiparametric MRI</strong></p>

<p align="center">
<a href="https://www.cancerimagingarchive.net/collection/brats-peds/"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://www.synapse.org/Synapse:syn51156910/wiki/622351"><img src="https://img.shields.io/badge/CHALLENGE-BraTS--PEDs%202023-8b1e3f?style=flat-square" alt="Related challenge"></a>
</p>

<p align="center"><strong>📚 Publications and records</strong></p>
<p align="center">
<a href="https://doi.org/10.1148/ryai.250902"><img src="https://img.shields.io/badge/Radiology%20AI-2026-2455a4?style=flat-square" alt="Radiology AI 2026"></a>
<a href="https://arxiv.org/abs/2305.17033"><img src="https://img.shields.io/badge/arXiv-2305.17033-b31b1b?style=flat-square" alt="arXiv 2305.17033"></a>
<a href="https://doi.org/10.7937/dx5c-tj86"><img src="https://img.shields.io/badge/TCIA%20DOI-10.7937%2Fdx5c--tj86-1f6feb?style=flat-square" alt="TCIA DOI 10.7937/dx5c-tj86"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | T1n, T1c, T2w, T2-FLAIR |
| **Total cohort** | 457 pediatric patients |
| **Institutional origin** | This is a multi-consortium pediatric cohort assembled through the Children’s Brain Tumor Network (CBTN), the DIPG Registry (DIPGR), the CONNECT consortium, and additional pediatric institutions. ASNR collaborators contributed to expert annotations. [Challenge and cohort article](https://pmc.ncbi.nlm.nih.gov/articles/PMC10246083/). |
| **Official source** | [TCIA collection](https://www.cancerimagingarchive.net/collection/brats-peds/) · [TCIA DOI](https://doi.org/10.7937/dx5c-tj86) |

## 🧾 Dataset overview

BraTS-PEDs is a multi-institutional, expert-annotated MRI benchmark for pediatric high-grade gliomas. The dataset paper describes standardized preprocessing, including DICOM-to-NIfTI conversion, registration/resampling, and defacing. Its segmentation labels cover enhancing tumor (ET), nonenhancing tumor (NET), cystic component (CC), and edema (ED).

## 🗂️ Official split and label availability

| Cohort | Cases | Official label status |
| --- | ---: | --- |
| Training | 257 | Expert-validated segmentation masks provided |
| Validation | 91 | Images provided without labels for leaderboard evaluation |
| Test | 109 | Hidden subset for final assessment |

The counts and label status above come from the dataset paper’s cohort description. The official collection portal is the source of truth for current files and any later release changes.

## 🔒 Access and terms

- [Download / collection page at TCIA](https://www.cancerimagingarchive.net/collection/brats-peds/)
- [Dataset DOI: 10.7937/dx5c-tj86](https://doi.org/10.7937/dx5c-tj86)
- The collection includes image and clinical/supporting metadata. Follow the current TCIA license and citation instructions.

## 🏁 Related challenge

**CBTN–CONNECT–DIPGR–ASNR–MICCAI BraTS-PEDs 2023** introduced a pediatric brain tumor segmentation benchmark using data from multiple pediatric neuro-oncology consortia and institutions.

- [Challenge and cohort paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC10246083/) · [BraTS 2023 challenge hub](https://www.synapse.org/Synapse:syn51156910/wiki/622351)

The cohort was also included in later BraTS challenge releases; see the [TCIA collection page](https://www.cancerimagingarchive.net/collection/brats-peds/) for current release notes.

## 📚 Publication and citation

Fathi Kazerooni et al. “Multi-Institutional Annotated Multiparametric MRI Dataset of Pediatric High-Grade Gliomas.” *Radiology: Artificial Intelligence*, vol. 8, no. 3, article e250902, 2026. [DOI: 10.1148/ryai.250902](https://doi.org/10.1148/ryai.250902).

- [Publisher article](https://pubs.rsna.org/doi/10.1148/ryai.250902) · [TCIA dataset record, DOI: 10.7937/dx5c-tj86](https://doi.org/10.7937/dx5c-tj86)
- [BraTS-PEDs challenge overview](https://arxiv.org/abs/2305.17033)

The journal article describes the multi-institutional dataset; the linked challenge overview provides the benchmark context.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
