# BraTS 2015

> **Multimodal glioma MRI · historical BraTS challenge release**

| Quick facts | |
| --- | --- |
| **Input** | Pre-operative MRI: T1, T1ce, T2, FLAIR |
| **Task** | Glioma segmentation |
| **Targets** | Enhancing tumor (ET), tumor core (TC), whole tumor (WT) |
| **Official source** | [BraTS 2015 at SMIR](https://www.smir.ch/BRATS/Start2015) · [BraTS challenge archive](https://www.med.upenn.edu/cbica/brats/) |

## Dataset overview

BraTS 2015 is part of the earlier BraTS benchmark series. The 2015 challenge proceedings and the SMIR page are the primary references for this edition. Historical releases and later repackagings can differ, so use the files, label convention, and terms attached to the specific official release you download.

The commonly cited 2015 labeled cohort contains **274 cases (220 HGG and 54 LGG)**. This count describes that labeled cohort; it should not be interpreted as the number of challenge test cases.

## Official split and label availability

The current official pages link to the historical dataset and challenge material but do not provide one readily verifiable, versioned train/validation/test manifest for every redistributed copy. The exact test image and reference-label availability should therefore be read from the specific SMIR/archive package and its accompanying documentation. No separate researcher-created split is listed here as an official split.

## Labels and evaluation notes

BraTS uses nested tumor regions:

- **ET**: contrast-enhancing tumor
- **TC**: tumor core
- **WT**: whole tumor, including edema

Voxel IDs and label merging changed across BraTS editions and later releases. Preserve the release-specific mapping when comparing results; do not assume a single integer convention across 2015 and newer BraTS data.

## Access and terms

- **Dataset / historical download page:** [SMIR — BRATS 2015](https://www.smir.ch/BRATS/Start2015)
- **Challenge history and proceedings:** [CBICA BraTS archive](https://www.med.upenn.edu/cbica/brats/)
- Review the terms displayed by the official source. This page does not assign a blanket reuse license.

## Papers

1. **Menze et al.** “The Multimodal Brain Tumor Image Segmentation Benchmark (BRATS).” *IEEE Transactions on Medical Imaging*, 2015. [DOI: 10.1109/TMI.2014.2377694](https://doi.org/10.1109/TMI.2014.2377694). This is a foundational BraTS benchmark paper; it describes the earlier 2012–2013 editions.
2. **MICCAI-BRATS 2015 proceedings.** [Official proceedings PDF](https://www.cbica.upenn.edu/sbia/Spyridon.Bakas/MICCAI_BraTS/MICCAI_BraTS_2015_proceedings.pdf).

**Checked:** 27 October 2026. For exact download contents, label values, and access terms, follow the linked edition-specific source.
