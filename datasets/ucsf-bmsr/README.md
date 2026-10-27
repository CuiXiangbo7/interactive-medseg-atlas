<h1 align="center">🧠 UCSF-BMSR</h1>

<p align="center"><strong>Brain metastasis segmentation · stereotactic radiosurgery MRI</strong></p>

<p align="center">
<a href="https://imagingdatasets.ucsf.edu/dataset/1"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://doi.org/10.1148/ryai.230126"><img src="https://img.shields.io/badge/Radiology%20AI-2024-6f42c1?style=flat-square" alt="Radiology AI 2024"></a> <a href="https://doi.org/10.1148/ryai.230126"><img src="https://img.shields.io/badge/DOI-10.1148%2Fryai.230126-1f6feb?style=flat-square" alt="DOI 10.1148/ryai.230126"></a>
</p>

| Quick facts | |
| --- | --- |
| **Cohort** | 560 MRI examinations from 412 patients |
| **Public download** | The UCSF page currently advertises 461 examinations |
| **Input** | T1 post-contrast, T1 pre-contrast, FLAIR, subtraction |
| **Target** | Voxelwise enhancing brain-metastasis annotations |
| **Official source** | [UCSF Ci2 dataset page](https://imagingdatasets.ucsf.edu/dataset/1) |

## 🧾 Dataset overview

The UCSF Brain Metastases Stereotactic Radiosurgery MRI dataset (UCSF-BMSR) contains multimodal, registered and skull-stripped MRI with expert annotations of 5,136 metastases. It also includes clinical metadata. Multiple examinations can belong to one patient, so **examination count and patient count are different units**.

## 🗂️ Official split and label availability

The dataset article describes **461 training examinations** as publicly downloadable and a **99-examination test cohort** reserved for the 2024 MICCAI challenge. The article stated that the test data would become available after the challenge. The current UCSF dataset page should be checked for the present download contents; the public page’s advertised 461-download count does not itself confirm release of the test annotations.

The 99 test examinations include two independently produced annotation sets combined for the reference standard. Do not treat the 560-exam cohort as 560 publicly downloadable labeled cases without verifying the official source.

## Modalities and labels

Each examination may include T1 post-contrast, T1 pre-contrast, FLAIR, and subtraction (T1 pre-contrast minus T1 post-contrast). The segmentation target is enhancing brain metastasis. The official release is in NIfTI format.

## 🔒 Access and terms

The official UCSF repository states the data are provided at no cost for **non-commercial research**. Its dataset-specific terms include attribution and restrictions on redistribution and re-identification. Read the current [UCSF dataset terms](https://imagingdatasets.ucsf.edu/dataset/1) before use. The [AWS Registry entry](https://registry.opendata.aws/ucsf-bmsr/) is a secondary access mirror; prefer the UCSF source for the governing terms.

## 📚 Publication and citation

Rudie et al. “The University of California San Francisco Brain Metastases Stereotactic Radiosurgery (UCSF-BMSR) MRI Dataset.” *Radiology: Artificial Intelligence*, vol. 6, no. 2, article e230126, 2024. [DOI: 10.1148/ryai.230126](https://doi.org/10.1148/ryai.230126).

- [Publisher article](https://pubs.rsna.org/doi/10.1148/ryai.230126) · [PubMed: 38381038](https://pubmed.ncbi.nlm.nih.gov/38381038/) · [PMC10982817](https://pmc.ncbi.nlm.nih.gov/articles/PMC10982817/)

The paper describes the cohort and challenge split. The official UCSF dataset page remains the current source for accessible downloads and terms.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
