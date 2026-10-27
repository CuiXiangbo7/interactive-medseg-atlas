<p align="center"><strong>English</strong> | <a href="README.zh-CN.md">简体中文</a></p>

# 🧠 nnInteractive Agent

<p align="center"><strong>An agentic 3D annotation workflow that gives general-purpose AI agents nnInteractive as a tool, so they can interpret requests, place spatial prompts, inspect the resulting volume masks and refine them iteratively.</strong></p>

<p align="center">
<a href="https://github.com/MIC-DKFZ/nninteractive-agent"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="Official code"></a>
<a href="https://arxiv.org/abs/2610.31080"><img src="https://img.shields.io/badge/PAPER-arXiv--2610.31080-991b1b?style=flat-square&logo=academia" alt="Paper"></a>
<a href="https://huggingface.co/MIC-DKFZ/nnInteractive"><img src="https://img.shields.io/badge/WEIGHTS-nnInteractive--base-f59e0b?style=flat-square&logo=huggingface" alt="Base model weights"></a>
</p>

[← Model atlas](../README.md)

## At a glance

| Field | Details |
|---|---|
| Model type | Agentic annotation framework built around nnInteractive; it is not a standalone segmentation backbone. |
| Research team / organization | Paper affiliations include the Division of Medical Image Computing (MIC), German Cancer Research Center (DKFZ); National Center for Tumor Diseases (NCT) Heidelberg; Helmholtz Imaging; Heidelberg University; University Hospital Bonn; and Heidelberg University Hospital. |
| Input / modality | NIfTI, NRRD, MHA, TIFF stacks, PNG/JPG and NPY. The paper evaluates CT, MRI, PET and micro-CT; the project also documents microscopy and photographs. |
| Prompt / interaction | Natural-language task request; the agent finds targets, sends spatial scribbles/boxes/points to nnInteractive, inspects rendered 2D/3D views and iterates corrections. |
| Code and model terms | Agent software: Apache-2.0. The nnInteractive v1 checkpoint uses CC BY-NC-SA 4.0. The external LLM/provider has separate terms. |

## 📚 Paper and publication

**nnInteractive Agent: General-Purpose AI Agents as 3D Image Annotators** — technical report, arXiv:2610.31080v1 (2026; submitted 22 October 2026). The arXiv record identifies it as a technical report and does not list a journal or conference venue.

## 📦 Checkpoints and access

nnInteractive Agent has no separate trained segmentation checkpoint. Its setup installs the nnInteractive backend and downloads the base model weights (about 400 MB) from the official model registry; the paper's benchmark uses nnInteractive v1.0. The general-purpose language model is configured separately through Claude Code, Codex or another compatible agent runtime.

The base weights are linked above. Their license is separate from the Apache-2.0 agent code.

## ⚙️ Official setup and inference

Requires Python 3.10 or newer. Local inference strongly benefits from an NVIDIA GPU with about 10 GB of VRAM; CPU inference is possible but slow. Log into Codex or Claude Code before setup.

```bash
python -m venv .venv
source .venv/bin/activate
pip install "nninteractive-agent[local] @ git+https://github.com/MIC-DKFZ/nninteractive-agent"

# Register the MCP server and install its segmentation skill:
nninteractive-agent setup codex
# Or: nninteractive-agent setup claude

# Start an agent session and describe the task:
codex "Segment the liver in /data/ct.nii.gz and save the result."
# Or use: claude "Segment the liver in /data/ct.nii.gz and save the result."
```

For inference on a separate GPU server, configure `nninteractive-agent setup codex --server <URL>`. The agent writes an instance map and `objects.json`; supported inputs include medical volumes, TIFF stacks and common 2D images.

## 📊 Reported evaluation

The technical report evaluates 14 public images and 51 targets. From the target request alone, it reports mean Dice of 0.81 for Claude Code and 0.84 for Codex; when each target's location is also provided, both reach 0.85. These are results for the specific agent, LLM and benchmark protocol in the paper.

## ⚠️ Practical notes

- The agent decides what to segment and where to place prompts; nnInteractive produces the voxel masks. Record both the LLM/runtime and the nnInteractive checkpoint.
- Agent-selected prompts and interaction rounds are not equivalent to a fixed manual-click budget.
- The code, segmentation weights, paper and LLM service have separate licenses or usage terms; review each source before use.

## 📜 License

The nninteractive-agent repository is Apache-2.0. The official nnInteractive v1 weights are CC BY-NC-SA 4.0. The arXiv paper is CC BY-SA 4.0. Follow the separate terms for any selected LLM provider.

**Citation:** Fabian Isensee et al., “nnInteractive Agent: General-Purpose AI Agents as 3D Image Annotators,” arXiv:2610.31080, 2026. See the [paper](https://arxiv.org/abs/2610.31080) and [official project](https://github.com/MIC-DKFZ/nninteractive-agent). This repository links to these sources; it does not redistribute code, weights or paper files.

<sub>Upstream sources checked: 27 October 2026. Requirements, model weights and service terms can change; follow the official repository and model registry.</sub>