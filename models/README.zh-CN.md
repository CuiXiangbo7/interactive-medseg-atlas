<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🤖 交互式医学分割模型目录</h1>

<p align="center"><strong>官方代码 · 权重 · 论文 · 环境与推理指南</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/MODEL%20CARDS-15-7c3aed?style=flat-square" alt="15 个模型页面">
<img src="https://img.shields.io/badge/LANGUAGE-English%20%2B%20中文-16803c?style=flat-square" alt="Bilingual">
</p>

> 交互式与提示式医学分割模型及 Agent 工作流资料，按主要交互方式和输入模态整理。机构信息依据原始项目或论文中的署名单位；分类仅作导航，不同模型的提示能力可能交叉。

## 收录内容

本目录整理 15 种医学图像交互式或提示式分割模型与 Agent 工作流，并归纳其机构/大学、提示方式、输入模态、官方代码、权重获取和运行入口。每个页面均链接原始项目与论文。

### 空间与视觉提示

| 模型 / 机构来源 | 模态 / 提示 | 官方代码 | 权重 | 详情 |
|---|---|---|---|---|
| [SAM-Med3D](sam-med3d/README.zh-CN.md)<br><sub>🏛️ Shanghai Jiao Tong University · Shanghai Artificial Intelligence Laboratory · Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences</sub> | 3D 体数据 · 点 | [code](https://github.com/uni-medical/SAM-Med3D) | [Hugging-Face](https://huggingface.co/blueyo0/SAM-Med3D) | [指南](sam-med3d/README.zh-CN.md) |
| [PRISM](prism/README.zh-CN.md)<br><sub>🏛️ MedICL-VU · Vanderbilt University</sub> | 2D/3D · 视觉提示 | [code](https://github.com/MedICL-VU/PRISM) | [Google-Drive](https://github.com/MedICL-VU/PRISM#models) | [指南](prism/README.zh-CN.md) |
| [nnInteractive](nninteractive/README.zh-CN.md)<br><sub>🏛️ MIC-DKFZ · German Cancer Research Center (DKFZ) · Helmholtz Imaging</sub> | 3D · 点、框、套索 | [code](https://github.com/MIC-DKFZ/nnInteractive) | [Hugging-Face](https://huggingface.co/MIC-DKFZ/nnInteractive) | [指南](nninteractive/README.zh-CN.md) |
| [MedSAM2](medsam2/README.zh-CN.md)<br><sub>🏛️ University Health Network (UHN) · University of Toronto</sub> | 3D/视频 · 空间提示 | [code](https://github.com/bowang-lab/MedSAM2) | [Hugging-Face](https://huggingface.co/wanglab/MedSAM2) | [指南](medsam2/README.zh-CN.md) |
| [VISTA3D](vista3d/README.zh-CN.md)<br><sub>🏛️ Project MONAI · NVIDIA</sub> | 3D CT · 类别/点 | [code](https://github.com/Project-MONAI/VISTA) | [Hugging-Face](https://huggingface.co/nvidia/NV-Segment-CT) | [指南](vista3d/README.zh-CN.md) |
| [SegVol](segvol/README.zh-CN.md)<br><sub>🏛️ Beijing Academy of Artificial Intelligence (BAAI) · DCAI</sub> | 3D CT · 文本/点/框 | [code](https://github.com/BAAI-DCAI/SegVol) | [Hugging-Face](https://huggingface.co/BAAI/SegVol) | [指南](segvol/README.zh-CN.md) |
| [MedicoSAM](medicosam/README.zh-CN.md)<br><sub>🏛️ Computational Cell Analytics · University of Göttingen</sub> | 2D/3D · SAM 提示 | [code](https://github.com/computational-cell-analytics/medico-sam) | [OwnCloud](https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF) | [指南](medicosam/README.zh-CN.md) |

### 文本与概念提示

| 模型 / 机构来源 | 模态 / 提示 | 官方代码 | 权重 | 详情 |
|---|---|---|---|---|
| [SAM 3](sam3/README.zh-CN.md)<br><sub>🏛️ Meta AI Research</sub> | 2D/视频 · 文本/视觉 | [code](https://github.com/facebookresearch/sam3) | [Gated-Checkpoint](https://huggingface.co/facebook/sam3) | [指南](sam3/README.zh-CN.md) |
| [MedSAM3-v1](medsam3-v1/README.zh-CN.md)<br><sub>🏛️ Hong Kong University of Science and Technology (Guangzhou) · University of Illinois Urbana-Champaign</sub> | 医学图像 · 文本 + LoRA | [code](https://github.com/Joey-S-Liu/MedSAM3) | [LoRA-Weights](https://huggingface.co/lal-Joey/MedSAM3_v1) | [指南](medsam3-v1/README.zh-CN.md) |
| [Medical-SAM3](medical-sam3/README.zh-CN.md)<br><sub>🏛️ University of Central Florida · University College London · University of Illinois Urbana-Champaign · University of Trento · The Hong Kong Polytechnic University · University of Pennsylvania</sub> | 2D + 3D v2 · 文本/框 | [code](https://github.com/AIM-Research-Lab/Medical-SAM3) | [Hugging-Face](https://huggingface.co/Chongcong/Medical-SAM3) | [指南](medical-sam3/README.zh-CN.md) |
| [VoxTell v1.1](voxtell-v1-1/README.zh-CN.md)<br><sub>🏛️ German Cancer Research Center (DKFZ) · Helmholtz Imaging</sub> | 3D CT/MRI/PET · 自由文本 | [code](https://github.com/MIC-DKFZ/VoxTell) | [Hugging-Face](https://huggingface.co/mrokuss/VoxTell) | [指南](voxtell-v1-1/README.zh-CN.md) |
| [BiomedParse v2](biomedparse-v2/README.zh-CN.md)<br><sub>🏛️ Microsoft Research</sub> | 3D · 文本、challenge 格式 | [code](https://github.com/microsoft/BiomedParse/tree/v2) | [Gated-Checkpoint](https://huggingface.co/microsoft/BiomedParse) | [指南](biomedparse-v2/README.zh-CN.md) |
| [DA-SAM3](da-sam3/README.zh-CN.md)<br><sub>🏛️ Shenzhen Research Institute, The Chinese University of Hong Kong, Shenzhen · University of Science and Technology of China · Nanyang Technological University · Imperial College London</sub> | 医学图像 · 文本 + experts | [code](https://github.com/Reconsider80/DA-SAM3) | [未公开下载](https://github.com/Reconsider80/DA-SAM3#readme) | [指南](da-sam3/README.zh-CN.md) |

### Agentic 多轮交互

| 模型 / 机构来源 | 模态 / 提示 | 官方代码 | 权重 | 详情 |
|---|---|---|---|---|
| [MedSAM-Agent](medsam-agent/README.zh-CN.md)<br><sub>🏛️ The Chinese University of Hong Kong · Tencent Hunyuan</sub> | 2D · 自主多轮 | [code](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [Hugging-Face](https://huggingface.co/Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2) | [指南](medsam-agent/README.zh-CN.md) |
| [nnInteractive Agent](nninteractive-agent/README.zh-CN.md)<br><sub>🏛️ MIC-DKFZ · Heidelberg University · NCT Heidelberg · Helmholtz Imaging</sub> | 3D · 自然语言任务 + Agent 空间提示 | [code](https://github.com/MIC-DKFZ/nninteractive-agent) | [nnInteractive 基础权重](https://huggingface.co/MIC-DKFZ/nnInteractive) | [指南](nninteractive-agent/README.zh-CN.md) |

## 使用与复现提示

- 不同模型支持的模态、空间维度和提示类型不同；阅读结果时应注明输入、提示策略和交互预算。
- 同一项目可能提供论文 checkpoint、较新版本、任务专用权重或 adapter。记录准确的模型版本、权重和预处理。
- Agentic 方法会自主选择提示，其交互轮数不能直接等同于固定次数的人工点击。nnInteractive Agent 调用 nnInteractive 完成分割，本身不提供独立的分割 checkpoint。
- 某些演示/评估代码会根据真值合成提示。此类运行属于 GT-derived/oracle，应与人工或部署式推理区分。
- 代码和权重可能采用不同许可；下载或使用前请分别查看对应来源。

## 引用与范围

本目录链接至原始项目、论文及权重页面，不再分发第三方代码、checkpoint 或论文 PDF。使用模型时请引用原始方法论文，并遵守上游许可。

<sub>上游页面核对日期：2026 年 10 月 27 日。访问权限、权重和依赖可能变化，请以原始项目为准。</sub>

[← 返回项目首页](../README.zh-CN.md)