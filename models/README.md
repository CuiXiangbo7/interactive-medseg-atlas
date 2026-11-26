<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🤖 Interactive Medical Segmentation Models</h1>

<p align="center"><strong>Official code · checkpoints · papers · setup and inference guides</strong></p>

<p align="center">
<img src="https://raw.githubusercontent.com/CuiXiangbo7/interactive-medseg-atlas/main/assets/model-guides-badge.svg" alt="19 model guides">
<img src="https://img.shields.io/badge/LANGUAGE-English%20%2B%20中文-16803c?style=flat-square" alt="Bilingual">
</p>

> A practical atlas of interactive and promptable medical segmentation methods and agentic workflows. Categories describe method behavior in the cited paper and are **overlapping navigation tags**, not exclusive model families. Each row links to the paper used to assign that tag.

## Browse by category

- [Spatial prompts](#spatial-prompts)
- [Text, concept, and class prompts](#text-concept-and-class-prompts)
- [Sparse-slice propagation across a volume](#sparse-slice-propagation-across-a-volume)
- [Agent-guided multi-turn workflows](#agent-guided-multi-turn-workflows)

## Included models

There are 19 unique model guides. A model appears in more than one section when its paper describes more than one of the interaction patterns below. The categories are grounded in the method papers: spatial prompts include points, boxes, scribbles, and annotated slice masks; semantic prompts include free text, named concepts, or a model's explicit class label; propagation means using a sparse slice annotation to extend a mask through a volume or sequence; agentic workflows use an agent to plan or issue segmentation interactions.

### Spatial prompts

This category covers methods whose segmentation input includes a spatially located user cue. It includes sparse clicks, boxes, or scribbles, as well as a dense 2D mask on one slice. A model is included only when the cited paper or official method documentation describes that input; the exact prompt supported by each method is listed below.

| Model | Spatial interaction described by the paper | Method paper | Official code | Guide |
|---|---|---|---|---|
| SAM-Med3D | 3D foreground/background point prompts | [Paper](https://arxiv.org/abs/2310.15161) | [Code](https://github.com/uni-medical/SAM-Med3D) | [Guide](SAM-Med3D/README.md) |
| PRISM | Clicks, boxes, and scribbles with visual refinement | [Paper](https://arxiv.org/abs/2404.15028) | [Code](https://github.com/MedICL-VU/PRISM) | [Guide](PRISM/README.md) |
| nnInteractive | 3D clicks, boxes, lasso, and corrective interactions | [Paper](https://arxiv.org/abs/2503.08373) | [Code](https://github.com/MIC-DKFZ/nnInteractive) | [Guide](nnInteractive/README.md) |
| MedSAM2 | Spatial prompts on medical-image slices/frames, followed by mask propagation | [Paper](https://arxiv.org/abs/2504.03600) | [Code](https://github.com/bowang-lab/MedSAM2) | [Guide](MedSAM2/README.md) |
| VISTA3D | Positive/negative points, alongside class prompts | [Paper](https://openaccess.thecvf.com/content/CVPR2025/html/He_VISTA3D_A_Unified_Segmentation_Foundation_Model_For_3D_Medical_Imaging_CVPR_2025_paper.html) | [Code](https://github.com/Project-MONAI/VISTA) | [Guide](VISTA3D/README.md) |
| SegVol | Point and box prompts, alongside text prompts | [Paper](https://arxiv.org/abs/2311.13385) | [Code](https://github.com/BAAI-DCAI/SegVol) | [Guide](SegVol/README.md) |
| MedicoSAM | SAM-style spatial prompts for 2D/3D medical segmentation | [Paper](https://doi.org/10.1109/TMI.2025.3644811) | [Code](https://github.com/computational-cell-analytics/medico-sam) | [Guide](MedicoSAM/README.md) |
| SAM 3 | Points, boxes, and masks, alongside open-vocabulary concepts | [Paper](https://arxiv.org/abs/2511.16719) | [Code](https://github.com/facebookresearch/sam3) | [Guide](SAM%203/README.md) |
| Medical-SAM3 | Spatial boxes, alongside text prompts | [Paper](https://arxiv.org/abs/2601.10880) | [Code](https://github.com/AIM-Research-Lab/Medical-SAM3) | [Guide](Medical-SAM3/README.md) |
| PAM | A spatially annotated 2D prompt slice | [Paper](https://doi.org/10.1038/s41746-025-02087-y) | [Code](https://github.com/czifan/PAM) | [Guide](PAM/README.md) |
| Sli2Vol | A manually annotated 2D slice mask | [Paper](https://doi.org/10.1007/978-3-030-87196-3_7) | [Code](https://github.com/pakheiyeung/Sli2Vol) | [Guide](Sli2Vol/README.md) |
| Sli2Vol+ | One annotated slice mask per training and test volume | [Paper](https://doi.org/10.1109/WACV61041.2025.00357) | [Code](https://github.com/adlsn/Sli2Volplus) | [Guide](Sli2Vol%2B/README.md) |
| SLM-SAM2 | A prompted slice mask used to seed volume propagation | [Paper](https://doi.org/10.1109/TMI.2025.3627954) | [Code](https://github.com/mazurowski-lab/SLM-SAM2) | [Guide](SLM-SAM2/README.md) |
| MedSAM-Agent | An agent selects spatial prompts for its segmentation backend | [Paper](https://arxiv.org/abs/2602.03320) | [Code](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [Guide](MedSAM-Agent/README.md) |
| nnInteractive Agent | An agent issues corrective spatial interactions to nnInteractive | [Paper](https://arxiv.org/abs/2610.31080) | [Code](https://github.com/MIC-DKFZ/nninteractive-agent) | [Guide](nnInteractive%20Agent/README.md) |

### Text, concept, and class prompts

These methods can identify a target through language or a named semantic class. The distinction matters: VISTA3D uses a predefined class label, while methods such as VoxTell accept free-form text. This is a prompt-type category, so models that also accept spatial cues are listed in both sections.

| Model | Semantic prompt described by the paper | Method paper | Official code | Guide |
|---|---|---|---|---|
| SAM 3 | Open-vocabulary text concept and visual exemplars | [Paper](https://arxiv.org/abs/2511.16719) | [Code](https://github.com/facebookresearch/sam3) | [Guide](SAM%203/README.md) |
| MedSAM3-v1 | Text prompts adapted to medical images | [Paper](https://arxiv.org/abs/2511.19046) | [Code](https://github.com/Joey-S-Liu/MedSAM3) | [Guide](MedSAM3-v1/README.md) |
| Medical-SAM3 | Text prompts for medical targets | [Paper](https://arxiv.org/abs/2601.10880) | [Code](https://github.com/AIM-Research-Lab/Medical-SAM3) | [Guide](Medical-SAM3/README.md) |
| VoxTell v1.1 | Free-form text prompts for 3D targets | [Paper](https://openaccess.thecvf.com/content/CVPR2026/html/Rokuss_VoxTell_Free-Text_Promptable_Universal_3D_Medical_Image_Segmentation_CVPR_2026_paper.html) | [Code](https://github.com/MIC-DKFZ/VoxTell) | [Guide](VoxTell%20v1.1/README.md) |
| BiomedParse v2 | Text query paired with image/volume input | [Paper](https://doi.org/10.1038/s41592-024-02499-w) | [Code](https://github.com/microsoft/BiomedParse/tree/v2) | [Guide](BiomedParse%20v2/README.md) |
| DA-SAM3 | Text prompts with domain-adapted experts | [Paper](https://papers.miccai.org/miccai-2026/0308-Paper0711.html) | [Code](https://github.com/Reconsider80/DA-SAM3) | [Guide](DA-SAM3/README.md) |
| SegVol | Text description, with optional point or box cues | [Paper](https://arxiv.org/abs/2311.13385) | [Code](https://github.com/BAAI-DCAI/SegVol) | [Guide](SegVol/README.md) |
| VISTA3D | A predefined target-class label (not free-form language) | [Paper](https://openaccess.thecvf.com/content/CVPR2025/html/He_VISTA3D_A_Unified_Segmentation_Foundation_Model_For_3D_Medical_Imaging_CVPR_2025_paper.html) | [Code](https://github.com/Project-MONAI/VISTA) | [Guide](VISTA3D/README.md) |

### Sparse-slice propagation across a volume

The shared interaction is an annotation on one or a few 2D slices that is propagated through a 3D stack (or a video-like sequence). These papers use different mechanisms and data assumptions. In particular, Sli2Vol+ uses one labeled slice in **each training volume and each test volume**; that is not a zero-label test-time setting.

| Model | Propagation mechanism and annotation assumption | Method paper | Official code | Guide |
|---|---|---|---|---|
| PAM | One 2D prompt slice propagated through a 3D volume; reusable across reported modalities | [Paper](https://doi.org/10.1038/s41746-025-02087-y) | [Code](https://github.com/czifan/PAM) | [Guide](PAM/README.md) |
| Sli2Vol | Self-supervised inter-slice correspondence learned from raw volumes; one annotated test slice seeds the mask | [Paper](https://doi.org/10.1007/978-3-030-87196-3_7) | [Code](https://github.com/pakheiyeung/Sli2Vol) | [Guide](Sli2Vol/README.md) |
| Sli2Vol+ | Pseudo-labels and object-estimation-guided correspondence; one labeled slice per train and test volume | [Paper](https://doi.org/10.1109/WACV61041.2025.00357) | [Code](https://github.com/adlsn/Sli2Volplus) | [Guide](Sli2Vol%2B/README.md) |
| SLM-SAM2 | SAM 2 video-segmentation adapted with short- and long-term memories; a seed mask propagates across slices | [Paper](https://doi.org/10.1109/TMI.2025.3627954) | [Code](https://github.com/mazurowski-lab/SLM-SAM2) | [Guide](SLM-SAM2/README.md) |
| MedSAM2 | SAM 2 memory-based propagation between medical slices or video frames | [Paper](https://arxiv.org/abs/2504.03600) | [Code](https://github.com/bowang-lab/MedSAM2) | [Guide](MedSAM2/README.md) |

### Agent-guided multi-turn workflows

These are workflows in which an agent interprets the task and chooses or revises segmentation actions over multiple turns. The agent is not itself a new prompt modality for the segmentation backbone: these entries are also tagged under spatial prompts when the underlying method consumes points, boxes, or corrective masks.

| Workflow | What the agent does | Method paper | Official code | Guide |
|---|---|---|---|---|
| MedSAM-Agent | Plans and issues segmentation interactions through a medical segmentation backend | [Paper](https://arxiv.org/abs/2602.03320) | [Code](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [Guide](MedSAM-Agent/README.md) |
| nnInteractive Agent | Translates a segmentation request into iterative actions for nnInteractive | [Paper](https://arxiv.org/abs/2610.31080) | [Code](https://github.com/MIC-DKFZ/nninteractive-agent) | [Guide](nnInteractive%20Agent/README.md) |

## Practical notes

- Compare methods using the same modality, prompt type, annotation budget, and interaction protocol. A single annotated slice, one point, and an agent-selected click are not equivalent inputs.
- Record the exact checkpoint, version, preprocessing, and prompt policy. A paper checkpoint, task-specific weight, adapter, and foundation-model base checkpoint are different artifacts.
- Mark prompts synthesized from ground truth as GT-derived/oracle; do not compare them as if they were ordinary user-provided prompts.
- Code and weights can have different licenses or access conditions. Check both upstream sources before downloading or reusing them.

## Citation and scope

This catalog links to original papers, official code, and checkpoint sources. It does not redistribute third-party code, weights, or papers. Cite each original method and follow its upstream terms.

<sub>Upstream pages checked: 26 November 2026. Availability, weights, and dependencies can change; follow the linked original sources.</sub>

[← Back to the project home](../README.md)
