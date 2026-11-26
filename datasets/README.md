<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🗂️ Public Medical Segmentation Datasets</h1>

<p align="center"><strong>Official access · dataset splits · labels · reuse terms · papers</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/DATA%20GUIDES-124-2563eb?style=flat-square" alt="124 bilingual individual dataset guides">
<img src="https://img.shields.io/badge/NNINTERACTIVE%20A1%20ROWS-114-7c3aed?style=flat-square" alt="114 nnInteractive Appendix A1 rows">
<img src="https://img.shields.io/badge/SOURCE%20POLICY-official%20first-16803c?style=flat-square" alt="Official source first">
<img src="https://img.shields.io/badge/PAPERS-linked-6f42c1?style=flat-square" alt="Linked dataset papers">
</p>

> 🧭 The catalog now contains 124 individual dataset guides: 14 existing guides and 110 new pages for entries absent from the nnInteractive training list.

**How to read the split column:** counts and label status reflect the source or challenge release named on each page. Original challenge access can differ from later archive releases; unclear details are identified explicitly.

## 🧠 Brain and neuro-oncology

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [BraTS 2015](brats-2015/README.md)<br><sub>🏛️ CBICA, University of Pennsylvania · multi-institutional cohort</sub> | Glioma subregions · T1, T1ce, T2, FLAIR MRI | Historical release; use the edition-specific source for exact files and split | <a href="https://doi.org/10.1109/TMI.2014.2377694"><img src="https://img.shields.io/badge/IEEE%20TMI-2015-2455a4?style=flat-square" alt="IEEE TMI 2015"></a> |
| [BraTS 2019](brats-2019/README.md)<br><sub>🏛️ CBICA, University of Pennsylvania · multi-institutional cohort</sub> | Glioma subregions · T1, T1ce, T2, FLAIR MRI | Training labels; validation and test were challenge evaluation cohorts | <a href="https://doi.org/10.1007/978-3-030-46640-4"><img src="https://img.shields.io/badge/BrainLes-2019-8b1e3f?style=flat-square" alt="BrainLes 2019"></a> |
| [BraTS 2021](brats-2021/README.md)<br><sub>🏛️ CBICA/UPenn lead; RSNA, ASNR, MICCAI · multi-institutional</sub> | Glioma subregions · T1, T1ce, T2, FLAIR MRI | 1,251 labeled training cases; validation/test challenge references hidden | <a href="https://arxiv.org/abs/2107.02314"><img src="https://img.shields.io/badge/arXiv-2107.02314-b31b1b?style=flat-square" alt="arXiv 2107.02314"></a> |
| [UCSF-BMSR](ucsf-bmsr/README.md)<br><sub>🏛️ University of California, San Francisco</sub> | Brain metastases · multiparametric MRI | 461 exams advertised for download; paper describes a 99-exam challenge test set | <a href="https://doi.org/10.1148/ryai.230126"><img src="https://img.shields.io/badge/Radiology%20AI-2024-2455a4?style=flat-square" alt="Radiology AI 2024"></a> |
| [BraTS-PEDs](brats-peds/README.md)<br><sub>🏛️ CBTN, CONNECT, DIPG Registry · pediatric sites</sub> | Pediatric high-grade glioma · multiparametric MRI | 257 labeled train; 91 image-only validation; 109 hidden test | <a href="https://doi.org/10.1148/ryai.250902"><img src="https://img.shields.io/badge/Radiology%20AI-2026-2455a4?style=flat-square" alt="Radiology AI 2026"></a> |
| [BraTS-MEN 2023](brats-men-2023/README.md)<br><sub>🏛️ 6 centers: Duke, Jefferson, Yale, Missouri, UCSF, Penn</sub> | Meningioma subregions · T1, T1ce, T2, FLAIR MRI | 1,000 train; 141 validation; 283 private test; release contents can differ | <a href="https://doi.org/10.1038/s41597-024-03350-9"><img src="https://img.shields.io/badge/Scientific%20Data-2024-2455a4?style=flat-square" alt="Scientific Data 2024"></a> |
| [BraTS-MEN-RT](brats-men-rt/README.md)<br><sub>🏛️ 7 centers: Duke, UCSF, SUNY Upstate, UW, Missouri, KCL, UCSD</sub> | Radiotherapy GTV · post-contrast T1 MRI | 500 labeled train; 70 image-only validation; 180 private test | <a href="https://doi.org/10.1038/s41597-026-06649-x"><img src="https://img.shields.io/badge/Scientific%20Data-2026-2455a4?style=flat-square" alt="Scientific Data 2026"></a> |
| [CFB-GBM](cfb-gbm/README.md)<br><sub>🏛️ Centre François Baclesse, France · single-center</sub> | Longitudinal glioblastoma · MRI, CT, RT dose/structures | TCIA collection; no official train/validation/test split | <a href="https://doi.org/10.59275/j.melba.2026-dd48"><img src="https://img.shields.io/badge/MELBA-2026-6f42c1?style=flat-square" alt="MELBA 2026"></a> |

## 🦴 Spine imaging

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [VerSe19 + VerSe20](verse19-20/README.md)<br><sub>🏛️ Multi-site, multi-detector CT collection</sub> | Vertebral labeling and segmentation · CT | 374 scans from 355 patients in the combined release; complete annotations include formerly held-out data | <a href="https://doi.org/10.1016/j.media.2021.102166"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2021-2455a4?style=flat-square" alt="Medical Image Analysis 2021"></a> |

## 🩻 Abdominal segmentation

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [AMOS 2022](amos/README.md)<br><sub>🏛️ HKU, CUHK-Shenzhen/SRIBD, Longgang hospitals · multicenter</sub> | 15 abdominal organs · CT and MRI | Challenge-time test labels withheld; later Zenodo release describes a labeled archive | <a href="https://proceedings.neurips.cc/paper_files/paper/2022/file/ee604e1bedbd069d9fc9328b7b9584be-Paper-Datasets_and_Benchmarks.pdf"><img src="https://img.shields.io/badge/NeurIPS%20D%26B-2022-2d6a4f?style=flat-square" alt="NeurIPS D&B 2022"></a> |
| [KiTS23](kits23/README.md)<br><sub>🏛️ M Health Fairview medical center</sub> | Kidney, renal tumor, cyst · contrast-enhanced CT | 489 labeled training cases; 110 test cases, labels withheld by the organizer | <a href="https://doi.org/10.1007/978-3-031-54806-2"><img src="https://img.shields.io/badge/Springer%20LNCS-2024-8b1e3f?style=flat-square" alt="Springer LNCS 2024"></a> |
| [BTCV](btcv/README.md)<br><sub>🏛️ Vanderbilt University Medical Center</sub> | 13 abdominal organs · CT | 30 labeled development cases; 20 test cases without public labels | <a href="https://www.synapse.org/Synapse:syn3193805/wiki/217752"><img src="https://img.shields.io/badge/MICCAI%20workshop-2015-8b1e3f?style=flat-square" alt="MICCAI workshop 2015"></a> |

## 🩻 Head and neck radiotherapy

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [SegRap2023](segrap2023/README.md)<br><sub>🏛️ Sichuan Cancer Hospital & Institute, China</sub> | NPC radiotherapy · paired non-contrast and contrast-enhanced CT | 120 train / 20 validation / 60 test patients; train labels published, validation images unlabeled, test held out | <a href="https://doi.org/10.1016/j.media.2024.103447"><img src="https://img.shields.io/badge/Medical%20Image%20Analysis-2025-2455a4?style=flat-square" alt="Medical Image Analysis 2025"></a> |

## 🧠 Stroke imaging

| Dataset and institutional origin | Task and modality | Official split and annotation status | Publication |
| --- | --- | --- | --- |
| [AISD](aisd/README.md)<br><sub>🏛️ Research teams: BUPT, Deepwise, Jinling/Nanjing Univ., Peking Univ., HKU; acquisition site not stated</sub> | Acute ischemic infarct · non-contrast CT | 345 train/validation combined; 52 test; test-mask availability not clearly itemized | <a href="https://doi.org/10.1007/978-3-030-87234-2_41"><img src="https://img.shields.io/badge/MICCAI-2021-8b1e3f?style=flat-square" alt="MICCAI 2021"></a> |

## 🧩 nnInteractive training-set entries and individual guides

The article says the training corpus contains 120+ public datasets. Its Appendix A1 caption says 120, but the table contains **114 active named rows**; the TeX source also has one commented-out `AbdOrgSegm` line. Four entries already had detailed guides, so **110 new bilingual individual pages** have been added here. The paper does not name six further rows, so they are not fabricated.

The per-row image count, modality, target, source URL, and cited references below reproduce Appendix A1. These paper-reported counts are not assumed to equal the official release size. Table A2 contains held-out/test/OOD datasets and is not mixed into this training list. Categories follow the anatomical targets in A1 and overlap when one dataset spans several regions.

**Source-page audit:** source links were checked on 26 November 2026. Some portals require registration or block automated previews. Where a page did not expose split, label-schema, or reuse details, the individual guide says so and links to the source instead of guessing.

**Paper:** [Isensee et al., “nnInteractive: Redefining 3D Promptable Segmentation” (arXiv v1, Appendix A1)](https://arxiv.org/html/2503.08373v1#appendix-A3-Dataset). [Abstract and full paper](https://arxiv.org/abs/2503.08373).

### Browse by anatomical target

Category counts are memberships, not unique records. A row with multiple targets may appear in more than one category.

### 🧠 Brain and neuro-oncology — 23 category entries

脑区、卒中/脱髓鞘病灶、脑肿瘤和脑血管目标。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 4](decathlon-task-4/README.md) | 208 | MRI | Hippocampus | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [ISLES2015](isles2015/README.md) | 28 | MRI | Stroke Lesion | [source](http://www.isles-challenge.org/ISLES2015) | [ref 91](https://arxiv.org/html/2503.08373v1#bib.bib91) |
| [ISBILesion2015](isbilesion2015/README.md) | 42 | MRI | MS Lesion | [source](https://iacl.ece.jhu.edu/index.php/MSChallenge) | [ref 23](https://arxiv.org/html/2503.08373v1#bib.bib23) |
| [BrainMetShare](brainmetshare/README.md) | 84 | MRI | Brain Metastases | [source](https://aimi.stanford.edu/brainmetshare) | [ref 40](https://arxiv.org/html/2503.08373v1#bib.bib40) |
| [CrossModa22](crossmoda22/README.md) | 168 | MRI | Vestibular Schwannoma, Cochlea | [source](https://crossmoda2022.grand-challenge.org) | [ref 124](https://arxiv.org/html/2503.08373v1#bib.bib124) |
| [Atlas22](atlas22/README.md) | 524 | MRI | Stroke Lesion | [source](https://atlas.grand-challenge.org) | [ref 75](https://arxiv.org/html/2503.08373v1#bib.bib75) |
| [BraTS24](brats24/README.md) | 1,251 | MRI | Glioblastoma | [source](https://www.synapse.org/Synapse:syn51156910/wiki/621282) | [ref 57](https://arxiv.org/html/2503.08373v1#bib.bib57), [ref 9](https://arxiv.org/html/2503.08373v1#bib.bib9), [ref 96](https://arxiv.org/html/2503.08373v1#bib.bib96), [ref 8](https://arxiv.org/html/2503.08373v1#bib.bib8) |
| [CTORG](ctorg/README.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [TopCow](topcow/README.md) | 200 | CT,MRI | Vessel Components of CoW | [source](https://topcow23.grand-challenge.org) | [ref 148](https://arxiv.org/html/2503.08373v1#bib.bib148) |
| [AxonEM](axonem/README.md) | 18 | El. Microscopy | Axon Instances | [source](https://axonem.grand-challenge.org) | [ref 142](https://arxiv.org/html/2503.08373v1#bib.bib142) |
| [NucMM](nucmm/README.md) | 62 | El. Microscopy | Neuronal Nuclei | [source](https://nucmm.grand-challenge.org) | [ref 76](https://arxiv.org/html/2503.08373v1#bib.bib76) |
| [FETA](feta/README.md) | 120 | MRI | Brain Regions | [source](https://fetachallenge.github.io/pages/Data_description) | [ref 102](https://arxiv.org/html/2503.08373v1#bib.bib102) |
| [Drosophila](drosophila/README.md) | 1 | El. Microscopy | Mitochondria, Synapses | [source](https://github.com/unidesigner/groundtruth-drosophila-vnc) | [ref 36](https://arxiv.org/html/2503.08373v1#bib.bib36) |
| [LGGMRISeg](lggmriseg/README.md) | 110 | MRI | Tumor | [source](https://www.kaggle.com/datasets/mateuszbuda/lgg-mri-segmentation/data) | [ref 21](https://arxiv.org/html/2503.08373v1#bib.bib21) |
| [M-CRIB](m-crib/README.md) | 10 | MRI | Neonatal Brain Atlas | [source](https://osf.io/4vthr) | [ref 3](https://arxiv.org/html/2503.08373v1#bib.bib3) |
| [RESECT](resect/README.md) | 69 | US | Cerebral Tumor | [source](https://osf.io/jv8bk) | [ref 12](https://arxiv.org/html/2503.08373v1#bib.bib12) |
| [WMHSegChallenge](wmhsegchallenge/README.md) | 60 | MRI | White Matter Hyperintensities | [source](https://dataverse.nl/dataset.xhtml?persistentId=doi:10.34894/AECRSD) | [ref 64](https://arxiv.org/html/2503.08373v1#bib.bib64) |
| [OASIS](oasis/README.md) | 436 | MRI | Brain Regions | [source](https://sites.wustl.edu/oasisbrains/home/oasis-1) | [ref 92](https://arxiv.org/html/2503.08373v1#bib.bib92) |
| [MrBrains18](mrbrains18/README.md) | 30 | MRI | Brain Structures | [source](https://doi.org/10.34894/E0U32Q) | [ref 63](https://arxiv.org/html/2503.08373v1#bib.bib63) |
| [VALDO Task 2](valdo-task-2/README.md) | 72 | MRI | Cerebral Microbleed | [source](https://valdo.grand-challenge.org/Task2) | [ref 129](https://arxiv.org/html/2503.08373v1#bib.bib129) |
| [UPENN-GBM](upenn-gbm/README.md) | 147 | MRI | Edema, Tumor | [source](https://www.cancerimagingarchive.net/collection/upenn-gbm) | [ref 10](https://arxiv.org/html/2503.08373v1#bib.bib10) |
| [ReMIND](remind/README.md) | 213 | MRI | Brain Resection | [source](https://www.cancerimagingarchive.net/collection/remind) | [ref 54](https://arxiv.org/html/2503.08373v1#bib.bib54) |
| [Instance2022](instance2022/README.md) | 100 | CT | Intracranial Hemorrhage | [source](https://instance.grand-challenge.org) | [ref 72](https://arxiv.org/html/2503.08373v1#bib.bib72) |

### ❤️ Heart and cardiovascular structures — 20 category entries

心腔、心肌、心脏和血管结构。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 2](decathlon-task-2/README.md) | 20 | MRI | Heart | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 8](decathlon-task-8/README.md) | 303 | CT | Hepatic Vessel, H. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [ACDC](acdc/README.md) | 200 | MRI | RV Cavity, LV Myocardium, LV Cavity | [source](https://www.creatis.insa-lyon.fr/Challenge/acdc/databases.html) | [ref 15](https://arxiv.org/html/2503.08373v1#bib.bib15) |
| [SegTHOR](segthor/README.md) | 40 | CT | Heart, Aorta, Trachea, Esophagus | [source](https://competitions.codalab.org/competitions/21145) | [ref 66](https://arxiv.org/html/2503.08373v1#bib.bib66) |
| [M&Ms](m-and-ms/README.md) | 300 | MRI | Left & Right Ventricle, Myocardium | [source](https://www.ub.edu/mnms) | [ref 22](https://arxiv.org/html/2503.08373v1#bib.bib22), [ref 93](https://arxiv.org/html/2503.08373v1#bib.bib93) |
| [SegA](sega/README.md) | 56 | CT | Aorta | [source](https://multicenteraorta.grand-challenge.org/) | [ref 110](https://arxiv.org/html/2503.08373v1#bib.bib110), [ref 51](https://arxiv.org/html/2503.08373v1#bib.bib51), [ref 104](https://arxiv.org/html/2503.08373v1#bib.bib104) |
| [CTORG](ctorg/README.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [TopCow](topcow/README.md) | 200 | CT,MRI | Vessel Components of CoW | [source](https://topcow23.grand-challenge.org) | [ref 148](https://arxiv.org/html/2503.08373v1#bib.bib148) |
| [AortaSeg24](aortaseg24/README.md) | 50 | CT | Aorta | [source](https://aortaseg24.grand-challenge.org) | [ref 45](https://arxiv.org/html/2503.08373v1#bib.bib45) |
| [CAMUS](camus/README.md) | 1,000 | US | Endocardium, Epicardium, Atrium | [source](https://www.creatis.insa-lyon.fr/Challenge/camus/index.html) | [ref 68](https://arxiv.org/html/2503.08373v1#bib.bib68) |
| [CETUS](cetus/README.md) | 90 | US | LV Lumen | [source](https://www.creatis.insa-lyon.fr/Challenge/CETUS/databases.html) | [ref 14](https://arxiv.org/html/2503.08373v1#bib.bib14) |
| [CAP](cap/README.md) | 1,637 | MRI | Left Ventricle | [source](https://www.cardiacatlas.org/lv-segmentation-challenge) | [ref 55](https://arxiv.org/html/2503.08373v1#bib.bib55) |
| [AtriaSeg2018](atriaseg2018/README.md) | 100 | MRI | Left Atrium | [source](https://www.cardiacatlas.org/atriaseg2018-challenge/atria-seg-data) | [ref 145](https://arxiv.org/html/2503.08373v1#bib.bib145) |
| [SegThy 1](segthy-1/README.md) | 14 | MRI | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [SegThy 2](segthy-2/README.md) | 32 | US | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [Emidec](emidec/README.md) | 100 | MRI | Heart Structures | [source](https://emidec.com) | [ref 65](https://arxiv.org/html/2503.08373v1#bib.bib65) |
| [HVSMR-2.0](hvsmr-2-0/README.md) | 60 | MRI | Heart, Vessel | [source](https://segchd.csail.mit.edu) | [ref 101](https://arxiv.org/html/2503.08373v1#bib.bib101) |
| [Kipa22](kipa22/README.md) | 70 | CT | Kidney, Vessel, Tumor | [source](https://kipa22.grand-challenge.org) | [ref 41](https://arxiv.org/html/2503.08373v1#bib.bib41) |
| [OrCaScore](orcascore/README.md) | 32 | CT | Calcifications | [source](https://orcascore.grand-challenge.org) | [ref 143](https://arxiv.org/html/2503.08373v1#bib.bib143) |
| [Parse22](parse22/README.md) | 100 | CT | Pulmonary Artery | [source](https://parse2022.grand-challenge.org/Parse2022) | [ref 83](https://arxiv.org/html/2503.08373v1#bib.bib83) |

### 🫁 Chest, lung and airway — 22 category entries

肺、气道、纵隔和胸膜目标。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 6](decathlon-task-6/README.md) | 63 | CT | Lung Lesion | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [LIDC](lidc/README.md) | 1,010 | CT | Lung Lesion | [source](https://www.cancerimagingarchive.net/collection/lidc-idri) | [ref 7](https://arxiv.org/html/2503.08373v1#bib.bib7) |
| [StructSeg Task3](structseg-task3/README.md) | 50 | CT | 6 OAR Lung | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [StructSeg Task4](structseg-task4/README.md) | 50 | CT | Lung Cancer | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [SegTHOR](segthor/README.md) | 40 | CT | Heart, Aorta, Trachea, Esophagus | [source](https://competitions.codalab.org/competitions/21145) | [ref 66](https://arxiv.org/html/2503.08373v1#bib.bib66) |
| [Hecktor2022](hecktor2022/README.md) | 524 | PET,CT | Head and Neck Tumor | [source](https://hecktor.grand-challenge.org) | [ref 4](https://arxiv.org/html/2503.08373v1#bib.bib4) |
| [CTORG](ctorg/README.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Aero Path](aero-path/README.md) | 27 | CT | Lungs, Airways | [source](https://github.com/raidionics/AeroPath) | [ref 128](https://arxiv.org/html/2503.08373v1#bib.bib128) |
| [LungVis1.0](lungvis1-0/README.md) | 22 | Fl. Microscopy | Airway | [source](https://zenodo.org/records/7413818) | [ref 149](https://arxiv.org/html/2503.08373v1#bib.bib149) |
| [BBBC046 FiloData3D](bbbc046-filodata3d/README.md) | 5,400 | Fl. Microscopy | Lung Cancer Cells | [source](https://bbbc.broadinstitute.org/BBBC046) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [MediaLymph](medialymph/README.md) | 15 | CT | Mediastinal Lymph Nodes | [source](https://github.com/dbouget/ct_mediastinal_structures_segmentation) | [ref 19](https://arxiv.org/html/2503.08373v1#bib.bib19) |
| [MediaStruct](mediastruct/README.md) | 15 | CT | Mediastinal Structures | [source](https://github.com/dbouget/ct_mediastinal_structures_segmentation) | [ref 18](https://arxiv.org/html/2503.08373v1#bib.bib18) |
| [CT Lymph Nodes](ct-lymph-nodes/README.md) | 175 | CT | Lymph Nodes | [source](https://www.cancerimagingarchive.net/collection/ct-lymph-nodes) | [ref 118](https://arxiv.org/html/2503.08373v1#bib.bib118) |
| [MAMA MIA](mama-mia/README.md) | 1,506 | MRI | Breast Lesions | [source](https://www.synapse.org/Synapse:syn60868042/wiki/628716) | [ref 33](https://arxiv.org/html/2503.08373v1#bib.bib33) |
| [ATM2022](atm2022/README.md) | 300 | CT | Airway Tree | [source](https://atm22.grand-challenge.org) | [ref 151](https://arxiv.org/html/2503.08373v1#bib.bib151) |
| [Parse22](parse22/README.md) | 100 | CT | Pulmonary Artery | [source](https://parse2022.grand-challenge.org/Parse2022) | [ref 83](https://arxiv.org/html/2503.08373v1#bib.bib83) |
| [COVID-19 CT Lung](covid-19-ct-lung/README.md) | 10 | CT | COVID -19 | [source](https://zenodo.org/records/3757476) | [ref 53](https://arxiv.org/html/2503.08373v1#bib.bib53) |
| [LNDb](lndb/README.md) | 229 | CT | Lymph Nodes | [source](https://lndb.grand-challenge.org) | [ref 103](https://arxiv.org/html/2503.08373v1#bib.bib103) |
| [NIH Lymph](nih-lymph/README.md) | 176 | CT | Lymph Nodes | [source](https://www.cancerimagingarchive.net/collection/ct-lymph-nodes) | [ref 117](https://arxiv.org/html/2503.08373v1#bib.bib117) |
| [NSCLC Pleural Effusion](nsclc-pleural-effusion/README.md) | 78 | CT | Pleural Effusion | [source](https://www.cancerimagingarchive.net/analysis-result/plethora) | [ref 61](https://arxiv.org/html/2503.08373v1#bib.bib61) |
| [NSCLC Radiomics](nsclc-radiomics/README.md) | 503 | CT | Lung Lesions | [source](https://www.cancerimagingarchive.net/collection/nsclc-radiomics) | [ref 2](https://arxiv.org/html/2503.08373v1#bib.bib2) |
| [COVID-19-20](covid-19-20/README.md) | 199 | CT | COVID-19 | [source](https://covid-segmentation.grand-challenge.org/COVID-19-20) | [ref 120](https://arxiv.org/html/2503.08373v1#bib.bib120) |

### 🩻 Abdomen and pelvis — 29 category entries

腹部器官及前列腺等盆腔目标。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [Decathlon Task 3](decathlon-task-3/README.md) | 131 | CT | Liver, L. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 5](decathlon-task-5/README.md) | 32 | MRI | Prostate | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 7](decathlon-task-7/README.md) | 281 | CT | Pancreas, P. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 8](decathlon-task-8/README.md) | 303 | CT | Hepatic Vessel, H. Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 9](decathlon-task-9/README.md) | 41 | CT | Spleen | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [Decathlon Task 10](decathlon-task-10/README.md) | 126 | CT | Colon Tumor | [source](http://medicaldecathlon.com) | [ref 5](https://arxiv.org/html/2503.08373v1#bib.bib5), [ref 125](https://arxiv.org/html/2503.08373v1#bib.bib125) |
| [BTCV](btcv/README.md) | 30 | CT | 13 Abdominal Organs | [source](https://www.synapse.org/Synapse:syn3193805/wiki/89480) | [ref 67](https://arxiv.org/html/2503.08373v1#bib.bib67) |
| [Promise12](promise12/README.md) | 50 | MRI | Prostate | [source](https://zenodo.org/records/8026660) | [ref 77](https://arxiv.org/html/2503.08373v1#bib.bib77) |
| [CHAOS](chaos/README.md) | 60 | MRI | Liver, Kidney (L and R), Spleen | [source](https://zenodo.org/records/3431873) | [ref 58](https://arxiv.org/html/2503.08373v1#bib.bib58) |
| [BTCV 2](btcv-2/README.md) | 63 | CT | 9 Abdominal Organs | [source](https://zenodo.org/records/1169361) | [ref 37](https://arxiv.org/html/2503.08373v1#bib.bib37) |
| [NIH-Pan](nih-pan/README.md) | 82 | CT | Pancreas | [source](https://wiki.cancerimagingarchive.net/display/Public/Pancreas-CT) | [ref 25](https://arxiv.org/html/2503.08373v1#bib.bib25), [ref 119](https://arxiv.org/html/2503.08373v1#bib.bib119) |
| [ProstateX](prostatex/README.md) | 140 | MRI | Prostate Lesion | [source](https://www.aapm.org/GrandChallenge/PROSTATEx-2) | [ref 78](https://arxiv.org/html/2503.08373v1#bib.bib78) |
| [KiTS23](kits23/README.md) | 489 | CT | Kidneys, K. Tumor, Cysts | [source](https://kits-challenge.org/kits23) | [ref 43](https://arxiv.org/html/2503.08373v1#bib.bib43) |
| [AMOS](amos/README.md) | 360 | CT,MRI | 15 Abdominal Organs | [source](https://amos22.grand-challenge.org) | [ref 50](https://arxiv.org/html/2503.08373v1#bib.bib50) |
| [AbdomenAtlas1.1Mini](abdomenatlas1-1mini/README.md) | 5,195 | CT | 8 Abdominal Organs | [source](https://huggingface.co/datasets/AbdomenAtlas/_AbdomenAtlas1.1Mini) | [ref 71](https://arxiv.org/html/2503.08373v1#bib.bib71), [ref 108](https://arxiv.org/html/2503.08373v1#bib.bib108) |
| [FLARE](flare/README.md) | 50 | CT | 13 Abdominal Organs | [source](https://flare22.grand-challenge.org) | [ref 87](https://arxiv.org/html/2503.08373v1#bib.bib87) |
| [WORD](word/README.md) | 120 | CT | 16 Abdominal Organs | [source](https://github.com/HiLab-git/WORD) | [ref 84](https://arxiv.org/html/2503.08373v1#bib.bib84), [ref 73](https://arxiv.org/html/2503.08373v1#bib.bib73) |
| [AbdomenCT1K](abdomenct1k/README.md) | 996 | CT | Liver, Kidney, Spleen, Pancreas | [source](https://github.com/JunMa11/AbdomenCT-1K) | [ref 86](https://arxiv.org/html/2503.08373v1#bib.bib86) |
| [CTORG](ctorg/README.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Duke Liver](duke-liver/README.md) | 310 | MRI | Liver | [source](https://zenodo.org/records/7774566) | [ref 90](https://arxiv.org/html/2503.08373v1#bib.bib90) |
| [BBBC027 Colon Tissue](bbbc027-colon-tissue/README.md) | 60 | Fl. Microscopy | Colon Tissue | [source](https://bbbc.broadinstitute.org/BBBC027) | [ref 132](https://arxiv.org/html/2503.08373v1#bib.bib132) |
| [NCI-ISBI](nci-isbi/README.md) | 59 | MRI | Prostate | [source](https://www.cancerimagingarchive.net/analysis-result/isbi-mr-prostate-2013) | [ref 16](https://arxiv.org/html/2503.08373v1#bib.bib16) |
| [Pediatric CT SEG](pediatric-ct-seg/README.md) | 353 | CT | Organs | [source](https://doi.org/10.7937/TCIA.X0H0-1706) | [ref 52](https://arxiv.org/html/2503.08373v1#bib.bib52) |
| [Atlas Bourgogne](atlas-bourgogne/README.md) | 60 | MRI | Liver, Tumor | [source](https://atlas-challenge.u-bourgogne.fr) | [ref 109](https://arxiv.org/html/2503.08373v1#bib.bib109) |
| [CC Tumor Heterogeneity](cc-tumor-heterogeneity/README.md) | 63 | MRI | Cervix, Tumor | [source](https://www.cancerimagingarchive.net/collection/cc-tumor-heterogeneity) | [ref 95](https://arxiv.org/html/2503.08373v1#bib.bib95) |
| [CURVAS](curvas/README.md) | 60 | CT | Pancreas, Kidney, Liver | [source](https://curvas.grand-challenge.org/curvas-dataset) | [ref 113](https://arxiv.org/html/2503.08373v1#bib.bib113) |
| [Kipa22](kipa22/README.md) | 70 | CT | Kidney, Vessel, Tumor | [source](https://kipa22.grand-challenge.org) | [ref 41](https://arxiv.org/html/2503.08373v1#bib.bib41) |
| [ProstateEdgeCases](prostateedgecases/README.md) | 131 | CT | Bladder, Prostate, Rectum | [source](https://www.cancerimagingarchive.net/collection/prostate-anatomical-edge-cases) | [ref 56](https://arxiv.org/html/2503.08373v1#bib.bib56) |
| [Prostate158](prostate158/README.md) | 188 | MRI | Gland, Tumor | [source](https://zenodo.org/records/6481141) | [ref 130](https://arxiv.org/html/2503.08373v1#bib.bib130) |

### 🗣️ Head and neck — 8 category entries

头颈部危及器官、鼻咽、甲状腺、耳蜗和牙科结构。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [StructSeg Task1](structseg-task1/README.md) | 50 | CT | 22 OAR Head & Neck | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [StructSeg Task2](structseg-task2/README.md) | 50 | CT | Nasopharynx Cancer | [source](https://structseg2019.grand-challenge.org) | [ref 69](https://arxiv.org/html/2503.08373v1#bib.bib69) |
| [CrossModa22](crossmoda22/README.md) | 168 | MRI | Vestibular Schwannoma, Cochlea | [source](https://crossmoda2022.grand-challenge.org) | [ref 124](https://arxiv.org/html/2503.08373v1#bib.bib124) |
| [Hecktor2022](hecktor2022/README.md) | 524 | PET,CT | Head and Neck Tumor | [source](https://hecktor.grand-challenge.org) | [ref 4](https://arxiv.org/html/2503.08373v1#bib.bib4) |
| [SegThy 1](segthy-1/README.md) | 14 | MRI | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [SegThy 2](segthy-2/README.md) | 32 | US | Thyroid, Carotid, Jugular Vein | [source](https://www.cs.cit.tum.de/camp/publications/segthy-dataset) | [ref 62](https://arxiv.org/html/2503.08373v1#bib.bib62) |
| [PDDCA](pddca/README.md) | 47 | CT | Head and Neck Structures | [source](https://www.imagenglab.com/newsite/pddca) | [ref 111](https://arxiv.org/html/2503.08373v1#bib.bib111) |
| [ToothFairy 2](toothfairy-2/README.md) | 480 | CT | Dental Structures | [source](https://ditto.ing.unimore.it/toothfairy2) | [ref 17](https://arxiv.org/html/2503.08373v1#bib.bib17) |

### 🦴 Spine and musculoskeletal — 8 category entries

椎骨、肋骨、腰椎、下肢、软骨和骨骼目标。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [VerSe2020](verse19-20/README.md) | 113 | CT | 28 Vertebrae | [source](https://github.com/anjany/verse) | [ref 123](https://arxiv.org/html/2503.08373v1#bib.bib123), [ref 81](https://arxiv.org/html/2503.08373v1#bib.bib81), [ref 74](https://arxiv.org/html/2503.08373v1#bib.bib74) |
| [RibSeg](ribseg/README.md) | 370 | CT | Ribs | [source](https://github.com/HINTLab/RibSeg) | [ref 147](https://arxiv.org/html/2503.08373v1#bib.bib147) |
| [CTORG](ctorg/README.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Leg3DUS](leg3dus/README.md) | 44 | US | Lower-Limb Leg | [source](https://www.cs.cit.tum.de/camp/publications/leg-3d-us-dataset) | [ref 31](https://arxiv.org/html/2503.08373v1#bib.bib31) |
| [Spine-Mets](spine-mets/README.md) | 55 | CT | Vertebra | [source](https://www.cancerimagingarchive.net/collection/spine-mets-ct-seg) | [ref 105](https://arxiv.org/html/2503.08373v1#bib.bib105) |
| [SKI10](ski10/README.md) | 100 | MRI | Cartilage, Bone | [source](https://ski10.grand-challenge.org) | [ref 138](https://arxiv.org/html/2503.08373v1#bib.bib138) |
| [Soft Tissue Sarcoma](soft-tissue-sarcoma/README.md) | 102 | MRI | Edema, Tumor | [source](https://www.cancerimagingarchive.net/collection/soft-tissue-sarcoma) | [ref 136](https://arxiv.org/html/2503.08373v1#bib.bib136) |
| [Spider](spider/README.md) | 447 | MRI | Lumbar Spine | [source](https://zenodo.org/records/10159290) | [ref 137](https://arxiv.org/html/2503.08373v1#bib.bib137) |

### 🔬 Microscopy and cellular imaging — 18 category entries

按显微成像模态或细胞/微观结构目标归类，其中含非临床显微图像。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [AxonEM](axonem/README.md) | 18 | El. Microscopy | Axon Instances | [source](https://axonem.grand-challenge.org) | [ref 142](https://arxiv.org/html/2503.08373v1#bib.bib142) |
| [MitoEM](mitoem/README.md) | 4 | El. Microscopy | Mitochondria Instances | [source](https://mitoem.grand-challenge.org) | [ref 142](https://arxiv.org/html/2503.08373v1#bib.bib142) |
| [NucMM](nucmm/README.md) | 62 | El. Microscopy | Neuronal Nuclei | [source](https://nucmm.grand-challenge.org) | [ref 76](https://arxiv.org/html/2503.08373v1#bib.bib76) |
| [LungVis1.0](lungvis1-0/README.md) | 22 | Fl. Microscopy | Airway | [source](https://zenodo.org/records/7413818) | [ref 149](https://arxiv.org/html/2503.08373v1#bib.bib149) |
| [BBBC024 HL60 Cell line](bbbc024-hl60-cell-line/README.md) | 240 | Fl. Microscopy | Cell Nuclei | [source](https://bbbc.broadinstitute.org/BBBC024) | [ref 131](https://arxiv.org/html/2503.08373v1#bib.bib131) |
| [BBBC027 Colon Tissue](bbbc027-colon-tissue/README.md) | 60 | Fl. Microscopy | Colon Tissue | [source](https://bbbc.broadinstitute.org/BBBC027) | [ref 132](https://arxiv.org/html/2503.08373v1#bib.bib132) |
| [BBBC032 MouseEmbryoBlastocyst](bbbc032-mouseembryoblastocyst/README.md) | 1 | Fl. Microscopy | Blastocyst Cells | [source](https://bbbc.broadinstitute.org/BBBC032) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC033 MouseTrophoblast](bbbc033-mousetrophoblast/README.md) | 1 | Microscopy | Trophoblast | [source](https://bbbc.broadinstitute.org/BBBC033) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC034 PluripStemCells](bbbc034-pluripstemcells/README.md) | 1 | Microscopy | Stem Cells | [source](https://bbbc.broadinstitute.org/BBBC034) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC046 FiloData3D](bbbc046-filodata3d/README.md) | 5,400 | Fl. Microscopy | Lung Cancer Cells | [source](https://bbbc.broadinstitute.org/BBBC046) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [BBBC050 MouseEmbryoNuclei](bbbc050-mouseembryonuclei/README.md) | 165 | Fl. Microscopy | Mouse Embryonic Cells | [source](https://bbbc.broadinstitute.org/BBBC050) | [ref 80](https://arxiv.org/html/2503.08373v1#bib.bib80) |
| [EPFL Mito](epfl-mito/README.md) | 1 | El. Microscopy | Mitochondria | [source](https://www.epfl.ch/labs/cvlab/data/data-em) | [ref 82](https://arxiv.org/html/2503.08373v1#bib.bib82) |
| [Drosophila](drosophila/README.md) | 1 | El. Microscopy | Mitochondria, Synapses | [source](https://github.com/unidesigner/groundtruth-drosophila-vnc) | [ref 36](https://arxiv.org/html/2503.08373v1#bib.bib36) |
| [ParticleSeg3D](particleseg3d/README.md) | 54 | MicroCT | Mineral Samples | [source](https://syncandshare.desy.de/index.php/s/wjiDQ49KangiPj5) | [ref 39](https://arxiv.org/html/2503.08373v1#bib.bib39) |
| [NIS3D](nis3d/README.md) | 6 | Fl. Microscopy | Cell Nuclei | [source](https://zenodo.org/records/11456029) | [ref 153](https://arxiv.org/html/2503.08373v1#bib.bib153) |
| [Fluo C3DH A549](fluo-c3dh-a549/README.md) | 90 | Fl. Microscopy | Cell | [source](https://celltrackingchallenge.net/3d-datasets) | [ref 94](https://arxiv.org/html/2503.08373v1#bib.bib94) |
| [Fluo N3DH](fluo-n3dh/README.md) | 230 | Fl. Microscopy | Cell, Border | [source](https://celltrackingchallenge.net/3d-datasets) | [ref 94](https://arxiv.org/html/2503.08373v1#bib.bib94) |
| [LAPD Mouse](lapd-mouse/README.md) | 34 | Fl. Microscopy | Airway | [source](https://cebs-ext.niehs.nih.gov/cahs/report/lapd/web-download-links) | [ref 13](https://arxiv.org/html/2503.08373v1#bib.bib13) |

### 🌐 Whole-body and multi-region — 7 category entries

目标明确覆盖全身、多器官或多类病灶，而非单一解剖区域。

| Dataset / task | A1 images | Modality (A1 wording) | Target (A1 wording) | Official/source page | Cited source |
| --- | --- | --- | --- | --- | --- |
| [AutoPet2](autopet2/README.md) | 1,014 | PET,CT | Lesions | [source](https://autopet-ii.grand-challenge.org) | [ref 34](https://arxiv.org/html/2503.08373v1#bib.bib34) |
| [TotalSegmentatorV2](totalsegmentatorv2/README.md) | 1,180 | CT | 117 Classes of Whole Body | [source](https://github.com/wasserth/TotalSegmentator) | [ref 141](https://arxiv.org/html/2503.08373v1#bib.bib141) |
| [DAP-ATLAS](dap-atlas/README.md) | 533 | CT | 142 Classes of Whole Body | [source](https://github.com/alexanderjaus/AtlasDataset) | [ref 48](https://arxiv.org/html/2503.08373v1#bib.bib48) |
| [CTORG](ctorg/README.md) | 140 | CT | Lung, Brain, Bones, Liver, Kidney, Bladder | [source](https://www.cancerimagingarchive.net/collection/ct-org) | [ref 114](https://arxiv.org/html/2503.08373v1#bib.bib114) |
| [Pediatric CT SEG](pediatric-ct-seg/README.md) | 353 | CT | Organs | [source](https://doi.org/10.7937/TCIA.X0H0-1706) | [ref 52](https://arxiv.org/html/2503.08373v1#bib.bib52) |
| [TotalSegmentator MRI](totalsegmentator-mri/README.md) | 298 | MRI | Organs | [source](https://zenodo.org/records/11367005) | [ref 26](https://arxiv.org/html/2503.08373v1#bib.bib26) |
| [Deep Lesion](deep-lesion/README.md) | 1,093 | CT | Multiple Types of Lesions | [source](https://nihcc.app.box.com/v/DeepLesion) | [ref 146](https://arxiv.org/html/2503.08373v1#bib.bib146) |

## 🧾 What each dataset page includes

- 🔗 Official dataset, challenge, or institutional access links
- 🧾 For nnInteractive entries, the model-paper row is separated from source-page facts; unspecified official details are marked instead of inferred
- 🧾 For nnInteractive entries, the model-paper row is separated from source-page facts; unspecified official details are marked instead of inferred
- 🧾 For nnInteractive entries, the model-paper row is separated from source-page facts; unspecified official details are marked instead of inferred
- 🧾 For nnInteractive entries, the model-paper row is separated from source-page facts; unspecified official details are marked instead of inferred
- 🧾 For nnInteractive entries, the model-paper row is separated from source-page facts; unspecified official details are marked instead of inferred
- 🧾 For nnInteractive entries, the model-paper row is separated from source-page facts; unspecified official details are marked instead of inferred
- 🧾 For nnInteractive entries, the model-paper row is separated from source-page facts; unspecified official details are marked instead of inferred
- 🗂️ Organizer-defined splits, when documented
- 🏷️ Label definitions and whether validation/test references are public
- ⬇️ Download routes and access requirements
- 🔒 License or reuse terms stated by the source
- 📚 Publication venue, year, volume/pages or article number, DOI, and preprint links when available

**Source rule:** if the official source does not specify a split, license, or label status, the card says so rather than filling the gap with an unofficial estimate. No images, masks, or paper PDFs are hosted here.

*Sources checked: 26 November 2026.*