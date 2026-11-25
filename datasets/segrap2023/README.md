<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🩻 SegRap2023</h1>

<p align="center"><strong>Organs-at-risk and gross tumor volume segmentation · nasopharyngeal carcinoma radiotherapy · paired CT</strong></p>

<p align="center">
<a href="https://segrap2023.grand-challenge.org/segrap2023/"><img src="https://img.shields.io/badge/DATA-Official%20challenge-2e8b57?style=flat-square" alt="Official SegRap2023 challenge"></a>
<a href="https://github.com/HiLab-git/SegRap2023"><img src="https://img.shields.io/badge/CODE-Official%20repository-24292f?style=flat-square" alt="Official SegRap2023 repository"></a>
<a href="https://doi.org/10.1016/j.media.2024.103447"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2025-2455a4?style=flat-square" alt="Medical Image Analysis 2025"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | Paired, pre-aligned non-contrast CT and contrast-enhanced CT |
| **Scale** | 200 patients with nasopharyngeal carcinoma; 400 CT scans |
| **Targets** | 45 organs at risk (OARs) and 2 gross tumor volumes (GTVs) |
| **Institutional origin** | Sichuan Cancer Hospital & Institute, Sichuan Cancer Center, Chengdu, China |
| **Official source** | [SegRap2023 challenge](https://segrap2023.grand-challenge.org/segrap2023/) · [Official GitHub repository](https://github.com/HiLab-git/SegRap2023) |

## 🧾 Dataset overview

SegRap2023 is a MICCAI 2023 benchmark for outlining organs at risk and gross tumor volumes for nasopharyngeal carcinoma radiotherapy planning. Each of the 200 patients has a pair of pre-aligned CT volumes: a non-contrast CT (ncCT) and a contrast-enhanced CT (ceCT), for 400 volumes in total. The benchmark was collected at Sichuan Cancer Hospital & Institute, Sichuan Cancer Center, Chengdu, China.

## 🏷️ Official segmentation targets

The benchmark defines two tasks:

- **Task 1: 45 OARs.** The 13 unpaired structures are Brain, BrainStem, Chiasm, Esophagus, Larynx, Larynx_Glottic, Larynx_Supraglot, Oral cavity, PharynxCont, Pituitary, SpinalCord, Thyroid, and Trachea.
- The other 32 labels are the left and right sides of 16 paired structures: Cochlea, ETbone (Eustachian tube bone), Eye, Hippocampus, IAC (internal auditory canal), Lens, Mandible, Mastoid, MiddleEar, OpticNerve, Parotid, Submandibular, TemporalLobe, TMjoint (temporomandibular joint), TympanicCavity, and VestibulSemi (vestibular semicircular canal).
- **Task 2: 2 GTVs.** Primary nasopharyngeal tumor volume, called GTVnx on the challenge page and GTVp in the paper, and lymph-node tumor volume GTVnd.

The benchmark paper notes that small or thin OARs and GTVs remain challenging; it evaluates OAR and GTV tasks separately.

## 🗂️ Official split and label availability

| Cohort | Patients | CT volumes | Official release status |
| --- | ---: | ---: | --- |
| Training | 120 | 240 paired volumes | Training set with labels; use the official challenge page for current access instructions |
| Validation | 20 | 40 paired volumes | Challenge page identifies this as an image-only set |
| Test | 60 | 120 paired volumes | Held out for challenge evaluation; the portal does not list public reference labels |

The challenge page has dated notices: one states that labeled training data and unlabeled validation data can be downloaded without additional requirements; the original challenge rules also describe an end-user agreement and prohibit redistributing the data or download links. Follow the terms attached to the current release rather than treating the paper's publication license as a dataset license.

## ⬇️ Access and terms

- [Official challenge page and current download notices](https://segrap2023.grand-challenge.org/segrap2023/)
- [Official GitHub repository](https://github.com/HiLab-git/SegRap2023) for task definitions, label mapping, evaluation and container examples.
- The challenge rules state that data and links must not be transferred or redistributed. The challenge page does not identify a standard open license for the dataset. The article's own publication license, if shown by a publisher or archive, applies to that article and does not by itself license the images or masks.

## 🏁 Related challenge

**SegRap2023** was organized with MICCAI 2023 for organ-at-risk and GTV segmentation in nasopharyngeal carcinoma radiotherapy planning.

- [Official SegRap2023 challenge](https://segrap2023.grand-challenge.org/segrap2023/)
- [Official organizers](https://segrap2023.grand-challenge.org/organizers/)

## 📚 Publication and citation

Luo X. et al. “SegRap2023: A benchmark of organs-at-risk and gross tumor volume Segmentation for Radiotherapy Planning of Nasopharyngeal Carcinoma.” *Medical Image Analysis*, vol. 101, 2025, article 103447.

- [Journal DOI: 10.1016/j.media.2024.103447](https://doi.org/10.1016/j.media.2024.103447) · [PubMed record](https://pubmed.ncbi.nlm.nih.gov/39756265/) · [arXiv:2312.09576](https://arxiv.org/abs/2312.09576)

---

<p align="center"><sub>🕘 Sources last checked: 25 November 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
