<h1 align="center">🧠 AISD — Acute Ischemic Stroke Dataset</h1>

<p align="center"><strong>Acute infarct segmentation · non-contrast CT</strong></p>

<p align="center">
<a href="https://github.com/GriffinLiang/AISD"><img src="https://img.shields.io/badge/DATA-Official%20source-2e8b57?style=flat-square" alt="Official dataset source"></a>
<a href="https://doi.org/10.1007/978-3-030-87234-2_41"><img src="https://img.shields.io/badge/MICCAI-2021-8b1e3f?style=flat-square" alt="MICCAI 2021"></a> <a href="https://arxiv.org/abs/2110.05039"><img src="https://img.shields.io/badge/arXiv-2110.05039-b31b1b?style=flat-square" alt="arXiv 2110.05039"></a>
</p>

| Quick facts | |
| --- | --- |
| **Input** | Non-contrast CT (NCCT), 5 mm slice thickness |
| **Cohort** | 397 acute ischemic stroke scans |
| **Reference** | DWI acquired within 24 hours after CT |
| **Official source** | [Authors’ AISD repository](https://github.com/GriffinLiang/AISD) |

## 🧾 Dataset overview

AISD pairs NCCT with infarct annotations informed by diffusion-weighted MRI (DWI). The authors report that NCCT was obtained within 24 hours of symptom onset, lesions were manually contoured using MRI as the reference, and a senior doctor double-reviewed the labels.

## 🗂️ Official split and label availability

| Cohort | Cases | Official description |
| --- | ---: | --- |
| Train/validation | 345 | Combined count; the repository does not define one official train-versus-validation subdivision |
| Test | 52 | Held-out test cohort; the repository lists its case IDs |

The official repository links a separate mask archive, but does not clearly state whether test reference masks are included or how the masks are separated by split. Confirm archive contents before treating test labels as available.

## 🏷️ Labels

The author repository defines:

| Value | Meaning |
| ---: | --- |
| 1 | Remote infarct |
| 2 | Clear acute infarct |
| 3 | Blurred acute infarct |
| 4 | Invisible acute infarct |
| 5 | Infarct |

The authors identify labels **{1, 2, 3, 5}** as the infarct-lesion region. Preserve the original categories if evaluating label-specific performance.

## ⬇️ Official downloads

The author repository links the following archives:

- **NCCT images:** [Baidu Netdisk](https://pan.baidu.com/s/12nouuU6MbFrQps4EmTcomA) (password: `aisd`) · [Google Drive](https://drive.google.com/file/d/157f9aE3ZhRSdIuIbP2PRG8ub9JJWvMGk/view?usp=share_link)
- **Masks:** [Baidu Netdisk](https://pan.baidu.com/s/1MR4tAEHypdTRnqprXuRRXQ) (password: `aisd`) · [Google Drive](https://drive.google.com/file/d/1d08fFpEvK4D6YTKfRlNuv_OlIxigZxl6/view?usp=share_link)
- [Official repository and DICOM archive links](https://github.com/GriffinLiang/AISD)

The repository states non-commercial use for academic research, teaching, scientific publication, and personal experimentation. Follow its current terms before using or redistributing data.

## 📚 Publication and citation

**Liang et al.** “Symmetry-Enhanced Attention Network for Acute Ischemic Infarct Segmentation with Non-Contrast CT Images.” *Medical Image Computing and Computer Assisted Intervention – MICCAI 2021*. Lecture Notes in Computer Science, vol. 12907, Part VII, pp. 432–441. Springer, 2021. DOI: [10.1007/978-3-030-87234-2_41](https://doi.org/10.1007/978-3-030-87234-2_41).

- [MICCAI proceedings page](https://miccai2021.org/openaccess/paperlinks/2021/09/01/467-Paper1341.html) · [arXiv:2110.05039](https://arxiv.org/abs/2110.05039)

The paper presents AISD and its symmetry-enhanced attention method. The public author repository is the source for the image and mask archive links above.

---

<p align="center"><sub>🕘 Sources last checked: 27 October 2026 · <a href="../README.md">Back to the dataset catalog</a></sub></p>
