<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🗂️ SegThy 1</h1>

<p align="center"><strong>Thyroid, Carotid, Jugular Vein · MRI</strong></p>

<p align="center">
<a href="https://www.cs.cit.tum.de/camp/publications/segthy-dataset"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://arxiv.org/html/2503.08373v1#bib.bib62"><img src="https://img.shields.io/badge/PAPER-2022-2455a4?style=flat-square" alt="Dataset publication"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | MRI; see the official page for the acquisition protocol and file format |
| **Literature-entry image count** | 14 images; this entry count is distinct from any official release-wide cohort total |
| **Targets** | Thyroid, Carotid, Jugular Vein |
| **Navigation categories** | Heart and cardiovascular structures, Head and neck |
| **Official source** | [Dataset/challenge record](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) |
| **Record title** | SegThy Dataset - Lehrstuhl für Informatikanwendungen in der Medizin |

## 🧾 Dataset overview

SegThy sub-dataset 1 combines tracked 3D neck ultrasound and 3 T T1-weighted MRI from healthy volunteers, with thyroid labels. The institutional page also documents a second cohort of routine-care patients, so the listed image count should not be read as the number of participants.

The paper-entry image count is shown separately from the official release scope below. Dataset files are not mirrored in this atlas.

## 🏷️ Segmentation targets and labels

| Item | Dataset information |
| --- | --- |
| Target listed for this entry | Thyroid, Carotid, Jugular Vein |
| Label definitions | The source provides thyroid label maps for the MRI and ultrasound acquisitions; the related release also defines carotid artery and jugular vein labels. Check the sub-dataset-specific annotation files before assuming all structures are present in every scan. |

## 🗂️ Official release and split

The source describes 28 healthy volunteers in sub-dataset 1 and 186 routine-care patients in sub-dataset 2. Volunteer scans include one 3 T T1-weighted neck MRI and nine tracked 3D ultrasound acquisitions per person; these are acquisition counts, not participant counts.

## ⬇️ Access and reuse terms

- [Official dataset or challenge page](https://www.cs.cit.tum.de/camp/publications/segthy-dataset).

- **Reuse terms:** No explicit dataset license was visible in the captured landing-page text. Check the linked source before downloading, redistributing, or using the data commercially.
- This atlas does not host the images, masks, or dataset archives.

## 📚 Publication and citation

- [Krönke et al., “Tracked 3d ultrasound and deep neural network-based thyroid segmentation reduce interobserver variability in thyroid volumetry.” Plos one, 17(7):e0268550, 2022.](https://arxiv.org/html/2503.08373v1#bib.bib62)


Use the dataset-specific citation and DOI on the official page when available. The source list may include more than one paper for a dataset or task.

## 📑 Published dataset record

| Field | Listed value |
| --- | --- |
| Image count | 14 |
| Modality | MRI |
| Target | Thyroid, Carotid, Jugular Vein |
| Dataset entry | [Official/source page](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) |
| Cited dataset publication(s) | [Krönke et al. (2022)](https://arxiv.org/html/2503.08373v1#bib.bib62) |

The image count above is retained for this literature entry. It is not treated as the total cohort size or the number of publicly downloadable, labelled cases; consult the release details above for those scopes.

---

<p align="center"><sub>Sources checked: 26 November 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
