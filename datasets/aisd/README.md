# AISD — Acute Ischemic Stroke Dataset

> **Acute infarct segmentation · non-contrast CT**

| Quick facts | |
| --- | --- |
| **Input** | Non-contrast CT (NCCT), 5 mm slice thickness |
| **Cohort** | 397 acute ischemic stroke scans |
| **Reference** | DWI acquired within 24 hours of symptom onset |
| **Official source** | [Authors’ AISD repository](https://github.com/GriffinLiang/AISD) |

## Dataset overview

AISD pairs NCCT with infarct annotations informed by diffusion-weighted MRI (DWI). The authors’ repository reports that all cases were acquired within 24 hours of symptom onset and that scans were reviewed by experienced readers.

## Official split and label availability

| Cohort | Cases | Official description |
| --- | ---: | --- |
| Train/validation | 345 | Combined count; the repository does not define a single official train-versus-validation split |
| Test | 52 | Held-out test cohort |

The official repository links separate image and mask archives, but its README does not clearly state whether the test reference masks are included in the mask archive or how they are separated. Confirm the archive contents and terms at the source before treating test labels as available.

## Labels

The author documentation distinguishes infarct-related regions, including remote infarct and several degrees of acute infarct visibility. Use the original label definitions and official mask archive rather than collapsing labels without documenting the change.

## Access and terms

- [Official download instructions and archives](https://github.com/GriffinLiang/AISD)
- The author repository describes use for non-commercial academic research. Check its current terms and required citation before downloading or redistributing the data.

## Dataset paper

**Liang et al.** “Symmetry-Enhanced Attention Network for Acute Ischemic Infarct Segmentation with Non-Contrast CT Images.” *MICCAI 2021*.

- [MICCAI paper page](https://miccai2021.org/openaccess/paperlinks/2021/09/01/467-Paper1341.html)
- [DOI: 10.1007/978-3-030-87234-2_41](https://doi.org/10.1007/978-3-030-87234-2_41)
- [arXiv:2110.05039](https://arxiv.org/abs/2110.05039)

**Checked:** 27 October 2026.
