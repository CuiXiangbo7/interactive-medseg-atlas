<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🤖 Interactive Medical Segmentation Models</h1>

<p align="center"><strong>Official code · checkpoints · papers · setup and inference guides</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/MODEL%20CARDS-15-7c3aed?style=flat-square" alt="15 model guides">
<img src="https://img.shields.io/badge/LANGUAGE-English%20%2B%20中文-16803c?style=flat-square" alt="Bilingual">
</p>

> A practical overview of interactive and promptable medical image segmentation models and agentic workflows, organized by primary interaction style and input modality. Institutional affiliations follow the cited project or paper; prompt capabilities can overlap.

## Included models

This catalog summarizes 15 interactive or promptable medical segmentation models and agentic workflows, including institutional affiliations, prompt styles, input modalities, official code, checkpoint access and run entry points. Each guide links to the original project and paper.

### Spatial and visual prompts

| Model / institutional origin | Modality / prompts | Official code | Weights | Details |
|---|---|---|---|---|
| [SAM-Med3D](SAM-Med3D/README.md)<br><sub>🏛️ Shanghai Jiao Tong University · Shanghai Artificial Intelligence Laboratory · Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences</sub> | 3D volume · point | [code](https://github.com/uni-medical/SAM-Med3D) | [Hugging-Face](https://huggingface.co/blueyo0/SAM-Med3D) | [guide](SAM-Med3D/README.md) |
| [PRISM](PRISM/README.md)<br><sub>🏛️ MedICL-VU · Vanderbilt University</sub> | 2D/3D · visual prompts | [code](https://github.com/MedICL-VU/PRISM) | [Google-Drive](https://github.com/MedICL-VU/PRISM#models) | [guide](PRISM/README.md) |
| [nnInteractive](nnInteractive/README.md)<br><sub>🏛️ MIC-DKFZ · German Cancer Research Center (DKFZ) · Helmholtz Imaging</sub> | 3D · points, boxes, lasso | [code](https://github.com/MIC-DKFZ/nnInteractive) | [Hugging-Face](https://huggingface.co/MIC-DKFZ/nnInteractive) | [guide](nnInteractive/README.md) |
| [MedSAM2](MedSAM2/README.md)<br><sub>🏛️ University Health Network (UHN) · University of Toronto</sub> | 3D/video · spatial prompts | [code](https://github.com/bowang-lab/MedSAM2) | [Hugging-Face](https://huggingface.co/wanglab/MedSAM2) | [guide](MedSAM2/README.md) |
| [VISTA3D](VISTA3D/README.md)<br><sub>🏛️ Project MONAI · NVIDIA</sub> | 3D CT · class/point | [code](https://github.com/Project-MONAI/VISTA) | [Hugging-Face](https://huggingface.co/nvidia/NV-Segment-CT) | [guide](VISTA3D/README.md) |
| [SegVol](SegVol/README.md)<br><sub>🏛️ Beijing Academy of Artificial Intelligence (BAAI) · DCAI</sub> | 3D CT · text/point/box | [code](https://github.com/BAAI-DCAI/SegVol) | [Hugging-Face](https://huggingface.co/BAAI/SegVol) | [guide](SegVol/README.md) |
| [MedicoSAM](MedicoSAM/README.md)<br><sub>🏛️ Computational Cell Analytics · University of Göttingen</sub> | 2D/3D · SAM prompts | [code](https://github.com/computational-cell-analytics/medico-sam) | [OwnCloud](https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF) | [guide](MedicoSAM/README.md) |

### Text and concept prompts

| Model / institutional origin | Modality / prompts | Official code | Weights | Details |
|---|---|---|---|---|
| [SAM 3](SAM%203/README.md)<br><sub>🏛️ Meta AI Research</sub> | 2D/video · text/visual | [code](https://github.com/facebookresearch/sam3) | [Gated-Checkpoint](https://huggingface.co/facebook/sam3) | [guide](SAM%203/README.md) |
| [MedSAM3-v1](MedSAM3-v1/README.md)<br><sub>🏛️ Hong Kong University of Science and Technology (Guangzhou) · University of Illinois Urbana-Champaign</sub> | medical image · text + LoRA | [code](https://github.com/Joey-S-Liu/MedSAM3) | [LoRA-Weights](https://huggingface.co/lal-Joey/MedSAM3_v1) | [guide](MedSAM3-v1/README.md) |
| [Medical-SAM3](Medical-SAM3/README.md)<br><sub>🏛️ University of Central Florida · University College London · University of Illinois Urbana-Champaign · University of Trento · The Hong Kong Polytechnic University · University of Pennsylvania</sub> | 2D + 3D v2 · text/box | [code](https://github.com/AIM-Research-Lab/Medical-SAM3) | [Hugging-Face](https://huggingface.co/Chongcong/Medical-SAM3) | [guide](Medical-SAM3/README.md) |
| [VoxTell v1.1](VoxTell%20v1.1/README.md)<br><sub>🏛️ German Cancer Research Center (DKFZ) · Helmholtz Imaging</sub> | 3D CT/MRI/PET · free text | [code](https://github.com/MIC-DKFZ/VoxTell) | [Hugging-Face](https://huggingface.co/mrokuss/VoxTell) | [guide](VoxTell%20v1.1/README.md) |
| [BiomedParse v2](BiomedParse%20v2/README.md)<br><sub>🏛️ Microsoft Research</sub> | 3D · text, challenge format | [code](https://github.com/microsoft/BiomedParse/tree/v2) | [Gated-Checkpoint](https://huggingface.co/microsoft/BiomedParse) | [guide](BiomedParse%20v2/README.md) |
| [DA-SAM3](DA-SAM3/README.md)<br><sub>🏛️ Shenzhen Research Institute, The Chinese University of Hong Kong, Shenzhen · University of Science and Technology of China · Nanyang Technological University · Imperial College London</sub> | medical image · text + experts | [code](https://github.com/Reconsider80/DA-SAM3) | [Not listed](https://github.com/Reconsider80/DA-SAM3#readme) | [guide](DA-SAM3/README.md) |

### Agentic multi-turn interaction

| Model / institutional origin | Modality / prompts | Official code | Weights | Details |
|---|---|---|---|---|
| [MedSAM-Agent](MedSAM-Agent/README.md)<br><sub>🏛️ The Chinese University of Hong Kong · Tencent Hunyuan</sub> | 2D · autonomous multi-turn | [code](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [Hugging-Face](https://huggingface.co/Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2) | [guide](MedSAM-Agent/README.md) |
| [nnInteractive Agent](nnInteractive%20Agent/README.md)<br><sub>🏛️ MIC-DKFZ · Heidelberg University · NCT Heidelberg · Helmholtz Imaging</sub> | 3D · natural-language tasks + agent-selected prompts | [code](https://github.com/MIC-DKFZ/nninteractive-agent) | [nnInteractive base weights](https://huggingface.co/MIC-DKFZ/nnInteractive) | [guide](nnInteractive%20Agent/README.md) |

## Practical notes

- Models differ in modality, spatial dimensionality and prompt type. Report the input, prompt policy and interaction budget when describing results.
- A project may host an original paper checkpoint, a newer release, task-specific weights or an adapter. Record the exact model version, checkpoint and preprocessing.
- Agentic methods choose prompts autonomously; their interaction rounds are not directly equivalent to a fixed number of manual clicks. nnInteractive Agent orchestrates nnInteractive and has no separate segmentation checkpoint.
- Some demo/evaluation code synthesizes prompts from ground truth. Mark those runs as GT-derived/oracle and distinguish them from human-input or deployment-style inference.
- Code and weights may use different licenses. Review both before downloading or reusing a model.

## Citation and scope

This catalog links to original projects, papers and checkpoint pages. It does not redistribute third-party code, weights or paper PDFs. Cite the original method paper and follow the upstream licenses when using a model.

<sub>Upstream pages checked: 27 October 2026. Access, weights and dependencies can change; follow the original project.</sub>

[← Back to the project home](../README.md)