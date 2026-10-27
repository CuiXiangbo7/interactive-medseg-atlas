<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

<h1 align="center">🤖 Interactive Model Atlas</h1>

<p align="center"><strong>Official code · checkpoints · papers · run instructions · comparison protocol notes</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/MODEL%20CARDS-14-7c3aed?style=flat-square" alt="14 model cards">
<img src="https://img.shields.io/badge/LANGUAGE-English%20%2B%20中文-16803c?style=flat-square" alt="Bilingual">
</p>

> A source-first index to the comparison methods discussed for this repository. Each card links to the original repository, paper and checkpoint, and records an upstream run path.

## 📌 Scope

This atlas contains two comparison sets discussed for this repository. They are method references, not a claim that all models share one architecture, modality, checkpoint or evaluation protocol.

### SRO-Edit paper comparison baselines

| Method | Prompt / input | Official code | Weights | Details |
|---|---|---|---|---|
| [SAM-Med3D](sam-med3d/README.md) | 3D volume · point | [code](https://github.com/uni-medical/SAM-Med3D) | [Hugging-Face](https://huggingface.co/blueyo0/SAM-Med3D) | [guide](sam-med3d/README.md) |
| [PRISM](prism/README.md) | 2D/3D · visual prompts | [code](https://github.com/MedICL-VU/PRISM) | [Google-Drive](https://github.com/MedICL-VU/PRISM#models) | [guide](prism/README.md) |
| [nnInteractive](nninteractive/README.md) | 3D · points, boxes, lasso | [code](https://github.com/MIC-DKFZ/nnInteractive) | [Hugging-Face](https://huggingface.co/MIC-DKFZ/nnInteractive) | [guide](nninteractive/README.md) |
| [MedSAM2](medsam2/README.md) | 3D/video · spatial prompts | [code](https://github.com/bowang-lab/MedSAM2) | [Hugging-Face](https://huggingface.co/wanglab/MedSAM2) | [guide](medsam2/README.md) |
| [VISTA3D](vista3d/README.md) | 3D CT · class/point | [code](https://github.com/Project-MONAI/VISTA) | [Hugging-Face](https://huggingface.co/nvidia/NV-Segment-CT) | [guide](vista3d/README.md) |
| [SegVol](segvol/README.md) | 3D CT · text/point/box | [code](https://github.com/BAAI-DCAI/SegVol) | [Hugging-Face](https://huggingface.co/BAAI/SegVol) | [guide](segvol/README.md) |
| [MedSAM-Agent](medsam-agent/README.md) | 2D · autonomous multi-turn | [code](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [Hugging-Face](https://huggingface.co/Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2) | [guide](medsam-agent/README.md) |
| [MedicoSAM](medicosam/README.md) | 2D/3D · SAM prompts | [code](https://github.com/computational-cell-analytics/medico-sam) | [OwnCloud](https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF) | [guide](medicosam/README.md) |

### Current six-model comparison set

| Method | Prompt / input | Official code | Weights | Details |
|---|---|---|---|---|
| [SAM 3](sam3/README.md) | 2D/video · text/visual | [code](https://github.com/facebookresearch/sam3) | [Gated-Checkpoint](https://huggingface.co/facebook/sam3) | [guide](sam3/README.md) |
| [MedSAM3-v1](medsam3-v1/README.md) | medical image · text + LoRA | [code](https://github.com/Joey-S-Liu/MedSAM3) | [LoRA-Weights](https://huggingface.co/lal-Joey/MedSAM3_v1) | [guide](medsam3-v1/README.md) |
| [Medical-SAM3](medical-sam3/README.md) | 2D + 3D v2 · text/box | [code](https://github.com/AIM-Research-Lab/Medical-SAM3) | [Hugging-Face](https://huggingface.co/Chongcong/Medical-SAM3) | [guide](medical-sam3/README.md) |
| [VoxTell v1.1](voxtell-v1-1/README.md) | 3D CT/MRI/PET · free text | [code](https://github.com/MIC-DKFZ/VoxTell) | [Hugging-Face](https://huggingface.co/mrokuss/VoxTell) | [guide](voxtell-v1-1/README.md) |
| [BiomedParse v2](biomedparse-v2/README.md) | 3D · text, challenge format | [code](https://github.com/microsoft/BiomedParse/tree/v2) | [Gated-Checkpoint](https://huggingface.co/microsoft/BiomedParse) | [guide](biomedparse-v2/README.md) |
| [DA-SAM3](da-sam3/README.md) | medical image · text + experts | [code](https://github.com/Reconsider80/DA-SAM3) | [Not listed](https://github.com/Reconsider80/DA-SAM3#readme) | [guide](da-sam3/README.md) |
## 🧪 Comparison protocol notes

- **SRO-Edit is not one uniform checkpoint setting.** In the manuscript protocol, SAM-Med3D, MedSAM2, VISTA3D, SegVol and MedicoSAM are fine-tuned for 250 epochs per target; PRISM is trained for 250 epochs with its default target setup; nnInteractive uses the official pretrained model; MedSAM-Agent runs its official closed-loop policy with the same MedSAM2 baseline checkpoint.
- Those task-fine-tuned artifacts are not interchangeable with later upstream general-purpose checkpoints. Record the exact weight, training data, prompt type, interaction budget and preprocessing for each result.
- **MedSAM-Agent is autonomous and multi-turn.** Its action policy determines prompts, so its interaction count should not be equated to a fixed manual-click budget.
- **Some demo scripts use GT-derived prompts.** SegVol's official evaluation demo synthesizes spatial prompts from ground-truth masks. Mark these runs as GT-derived/oracle and keep them separate from human-input inference.
- **Modality differs across methods.** SAM 3 is image/video-first; VISTA3D research weights are CT-focused; VoxTell and nnInteractive are native 3D volumetric models. Consult each card before comparing.

## 🧭 Checkpoint and license status

- “Official weights” means the project or authors link a checkpoint/model host; it does not mean the checkpoint is unrestricted or ungated.
- Code and model weights may have different licenses. This is especially important for nnInteractive, BiomedParse v2, SAM 3 and adapters built on SAM 3.
- If a card says that a checkpoint download is not linked, use the paper/repository to contact the authors or follow its training path; do not infer that the checkpoint is publicly downloadable.

## 📚 Citation and scope

This repository links to original papers and code; it does not redistribute third-party code, checkpoints or paper PDFs. Cite the original method paper when using a model, and follow all upstream code and weight terms.

<sub>Upstream pages checked: 27 October 2026. Links and access controls can change; follow the source repositories and model cards.</sub>

[← Back to the project home](../README.md)