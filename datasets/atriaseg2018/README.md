<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🗂️ AtriaSeg2018</h1>

<p align="center"><strong>Left Atrium · MRI</strong></p>

<p align="center">
<a href="https://www.cardiacatlas.org/atriaseg2018-challenge/atria-seg-data"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://arxiv.org/html/2503.08373v1#bib.bib145"><img src="https://img.shields.io/badge/PAPER-2021-2455a4?style=flat-square" alt="Dataset publication"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | MRI; see the official page for the acquisition protocol and file format |
| **Literature-entry image count** | 100 images; this entry count is distinct from any official release-wide cohort total |
| **Targets** | Left Atrium |
| **Navigation categories** | Heart and cardiovascular structures |
| **Official source** | [Dataset/challenge record](https://www.cardiacatlas.org/atriaseg2018-challenge/atria-seg-data) |
| **Record title** | 2018 Atria Segmentation Data - Cardiac Atlas Project |

## 🧾 Dataset overview

The 2018 Atria Segmentation challenge uses clinical 3D MRI from patients with atrial fibrillation. Expert manual masks label the left-atrial cavity; the official page states the voxel resolution and train/test access arrangement.

The paper-entry image count is shown separately from the official release scope below. Dataset files are not mirrored in this atlas.

## 🏷️ Segmentation targets and labels

| Item | Dataset information |
| --- | --- |
| Target listed for this entry | Left Atrium |
| Label definitions | The reference mask is the left-atrial cavity, stored as binary values (255 foreground, 0 background) on the official page. |

## 🗂️ Official release and split

The official page reports 154 3D MRIs: 100 training patients with labels and 54 test/evaluation patients without released masks. Original voxel spacing is 0.625 mm isotropic.

## ⬇️ Access and reuse terms

- [Official dataset or challenge page](https://www.cardiacatlas.org/atriaseg2018-challenge/atria-seg-data).

- **Reuse terms:** No explicit dataset license was visible in the captured landing-page text. Check the linked source before downloading, redistributing, or using the data commercially.
- This atlas does not host the images, masks, or dataset archives.

## 📚 Publication and citation

- [Xiong et al., “A global benchmark of algorithms for segmenting the left atrium from late gadolinium-enhanced cardiac magnetic resonance imaging.” Medical image analysis, 67:101832, 2021.](https://arxiv.org/html/2503.08373v1#bib.bib145)


Use the dataset-specific citation and DOI on the official page when available. The source list may include more than one paper for a dataset or task.

## 📑 Published dataset record

| Field | Listed value |
| --- | --- |
| Image count | 100 |
| Modality | MRI |
| Target | Left Atrium |
| Dataset entry | [Official/source page](https://www.cardiacatlas.org/atriaseg2018-challenge/atria-seg-data) |
| Cited dataset publication(s) | [Xiong et al. (2021)](https://arxiv.org/html/2503.08373v1#bib.bib145) |

The image count above is retained for this literature entry. It is not treated as the total cohort size or the number of publicly downloadable, labelled cases; consult the release details above for those scopes.

---

<p align="center"><sub>Sources checked: 26 November 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
