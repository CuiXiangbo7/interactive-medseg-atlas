<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🩻 KiTS23</h1>

<p align="center"><strong>Kidney, renal tumor, and cyst segmentation · contrast-enhanced CT</strong></p>

<p align="center">
<a href="https://kits-challenge.org/kits23/"><img src="https://img.shields.io/badge/DATA-Official%20challenge-2e8b57?style=flat-square" alt="Official KiTS23 challenge"></a>
<a href="https://github.com/neheller/kits23"><img src="https://img.shields.io/badge/CODE-Official%20repository-24292f?style=flat-square" alt="Official KiTS23 repository"></a>
<a href="https://doi.org/10.5281/zenodo.7840134"><img src="https://img.shields.io/badge/Challenge%20record-Zenodo-1f6feb?style=flat-square" alt="Official challenge record"></a>
</p>

<p align="center"><strong>📚 Challenge proceedings</strong></p>
<p align="center">
<a href="https://doi.org/10.1007/978-3-031-54806-2"><img src="https://img.shields.io/badge/Springer%20LNCS-KiTS%202023-8b1e3f?style=flat-square" alt="KiTS 2023 challenge proceedings"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | Contrast-enhanced preoperative CT; corticomedullary or nephrogenic phase |
| **Scale** | 599 cases: 489 training and 110 held-out test cases |
| **Targets** | Kidney, renal tumor, and renal cyst |
| **Institutional origin** | Patients treated for suspected renal malignancy at an M Health Fairview medical center, 2010–2022 |
| **Official source** | [KiTS23 challenge](https://kits-challenge.org/kits23/) · [Official GitHub repository](https://github.com/neheller/kits23) |

## 🧾 Dataset overview

KiTS23 is the third Kidney and Kidney Tumor Segmentation challenge. The cohort includes patients who underwent cryoablation, partial nephrectomy, or radical nephrectomy for suspected renal malignancy between 2010 and 2022 at an M Health Fairview medical center. Each case uses the most recent contrast-enhanced preoperative CT that includes both kidneys. The challenge expanded the earlier KiTS cohort with nephrogenic-phase scans in addition to corticomedullary-phase scans.

The challenge source notes that parts of the training set were previously used in KiTS19, KiTS21, or KNIGHT. Consider this overlap when describing data provenance or evaluation independence.

## 🏷️ Official label definitions

| Value | Class | Official definition |
| ---: | --- | --- |
| 0 | Background | No target |
| 1 | Kidney | Renal parenchyma and non-adipose tissue within the hilum |
| 2 | Tumor | Kidney masses suspected to be malignant before surgery |
| 3 | Cyst | Kidney masses determined radiologically, or pathologically when available, to be cysts |

The challenge evaluates semantic classes and also reports hierarchical evaluation classes that combine kidney, tumor, and cyst regions.

## 🗂️ Official split and label availability

| Cohort | Cases | Reference labels |
| --- | ---: | --- |
| Training | 489 | Included in the public training release |
| Test | 110 | Held out; the organizer states that test labels will not be released |

The 110 test cases are distinct from the labeled training archive. Do not treat test labels as publicly downloadable ground truth.

## ⬇️ Access and terms

- [Official challenge data and cohort description](https://kits-challenge.org/kits23/)
- [Official repository and download instructions](https://github.com/neheller/kits23)
- The repository distributes segmentation files and provides the download utility for CT images, which are fetched from the linked imaging host.
- Dataset images and segmentations: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). The repository's code has a separate MIT license.

## 🏁 Related challenge

**KiTS23** was organized with MICCAI 2023 by the University of Minnesota Robotics Institute, Helmholtz Imaging/DKFZ, and the Cleveland Clinic Urologic Cancer Program.

- [Official KiTS23 challenge website](https://kits-challenge.org/kits23/)
- [MICCAI Society challenge record](https://doi.org/10.5281/zenodo.7840134)

## 📚 Publication and citation

The official challenge record is **Heller et al.**, “2023 Kidney and Kidney Tumor Segmentation Challenge,” registered for MICCAI 2023.

- [Zenodo challenge record, DOI: 10.5281/zenodo.7840134](https://doi.org/10.5281/zenodo.7840134)

The challenge proceedings were published as *Kidney and Kidney Tumor Segmentation: MICCAI 2023 Challenge, KiTS 2023, Proceedings*, Lecture Notes in Computer Science, Springer, 2024.

- [Proceedings DOI: 10.1007/978-3-031-54806-2](https://doi.org/10.1007/978-3-031-54806-2)

---

<p align="center"><sub>🕘 Sources last checked: 25 November 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
