<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🗂️ BTCV 2</h1>

<p align="center"><strong>9 Abdominal Organs · CT</strong></p>

<p align="center">
<a href="https://zenodo.org/records/1169361"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://arxiv.org/html/2503.08373v1#bib.bib37"><img src="https://img.shields.io/badge/PAPER-2018-2455a4?style=flat-square" alt="Dataset publication"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | CT; see the official page for the acquisition protocol and file format |
| **Literature-entry image count** | 63 images; this entry count is distinct from any official release-wide cohort total |
| **Targets** | 9 Abdominal Organs |
| **Navigation categories** | Abdomen and pelvis |
| **Official source** | [Dataset/challenge record](https://zenodo.org/records/1169361) |
| **Record title** | Multi-organ Abdominal CT Reference Standard Segmentations \| Zenodo |

## 🧾 Dataset overview

This Zenodo release provides abdominal CT reference segmentations associated with the DenseVNet study. The 90 segmentation volumes draw on both the TCIA Pancreas-CT and BTCV Abdomen collections, so the release is a set of labelled cases rather than a new single-site cohort.
> **Source note:** The Zenodo record warns that reference segmentations include challenge test data and must not be used to develop submissions for that challenge.

The paper-entry image count is shown separately from the official release scope below. Dataset files are not mirrored in this atlas.

## 🏷️ Segmentation targets and labels

| Item | Dataset information |
| --- | --- |
| Target listed for this entry | 9 Abdominal Organs |
| Label definitions | The release includes reference masks for the spleen, kidneys, gallbladder, oesophagus, liver, stomach, pancreas, and duodenum. The source mixes annotations derived from Pancreas-CT and BTCV, so check per-case label availability. |

## 🗂️ Official release and split

The Zenodo record contains segmentation volumes for 90 cases and the associated cropping coordinates. The CT images originate from both TCIA Pancreas-CT and BTCV Abdomen; the record cautions that reference segmentations include challenge test data and must not be used to develop challenge submissions.

## ⬇️ Access and reuse terms

- [Official dataset or challenge page](https://zenodo.org/records/1169361).

- **Reuse terms:** The official source text states CC BY 4.0; follow the source record for the complete terms.
- This atlas does not host the images, masks, or dataset archives.

## 📚 Publication and citation

- [Gibson et al., “Automatic multi-organ segmentation on abdominal ct with dense v-networks.” IEEE Transactions on Medical Imaging, 2018.](https://arxiv.org/html/2503.08373v1#bib.bib37)


Use the dataset-specific citation and DOI on the official page when available. The source list may include more than one paper for a dataset or task.

## 📑 Published dataset record

| Field | Listed value |
| --- | --- |
| Image count | 63 |
| Modality | CT |
| Target | 9 Abdominal Organs |
| Dataset entry | [Official/source page](https://zenodo.org/records/1169361) |
| Cited dataset publication(s) | [Gibson et al. (2018)](https://arxiv.org/html/2503.08373v1#bib.bib37) |

The image count above is retained for this literature entry. It is not treated as the total cohort size or the number of publicly downloadable, labelled cases; consult the release details above for those scopes.

---

<p align="center"><sub>Sources checked: 26 November 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
