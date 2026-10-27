<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🤖 交互式模型目录</h1>

<p align="center"><strong>官方代码 · 权重 · 论文 · 运行方式 · 对比协议说明</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/MODEL%20CARDS-14-7c3aed?style=flat-square" alt="14 个模型页面">
<img src="https://img.shields.io/badge/LANGUAGE-English%20%2B%20中文-16803c?style=flat-square" alt="Bilingual">
</p>

> 以原始来源为依据的对比方法目录。每个页面均链接原始代码仓库、论文和 checkpoint，并整理上游运行方式。

## 📌 收录范围

本目录包含此前为本仓库讨论的两组对比方法。这里只整理方法资料，不表示所有模型采用同一架构、模态、checkpoint 或评估协议。

### SRO-Edit 论文中的对比基线

| 方法 | 提示 / 输入 | 官方代码 | 权重 | 详情 |
|---|---|---|---|---|
| [SAM-Med3D](sam-med3d/README.zh-CN.md) | 3D 体数据 · 点 | [code](https://github.com/uni-medical/SAM-Med3D) | [Hugging-Face](https://huggingface.co/blueyo0/SAM-Med3D) | [指南](sam-med3d/README.zh-CN.md) |
| [PRISM](prism/README.zh-CN.md) | 2D/3D · 视觉提示 | [code](https://github.com/MedICL-VU/PRISM) | [Google-Drive](https://github.com/MedICL-VU/PRISM#models) | [指南](prism/README.zh-CN.md) |
| [nnInteractive](nninteractive/README.zh-CN.md) | 3D · 点、框、套索 | [code](https://github.com/MIC-DKFZ/nnInteractive) | [Hugging-Face](https://huggingface.co/MIC-DKFZ/nnInteractive) | [指南](nninteractive/README.zh-CN.md) |
| [MedSAM2](medsam2/README.zh-CN.md) | 3D/视频 · 空间提示 | [code](https://github.com/bowang-lab/MedSAM2) | [Hugging-Face](https://huggingface.co/wanglab/MedSAM2) | [指南](medsam2/README.zh-CN.md) |
| [VISTA3D](vista3d/README.zh-CN.md) | 3D CT · 类别/点 | [code](https://github.com/Project-MONAI/VISTA) | [Hugging-Face](https://huggingface.co/nvidia/NV-Segment-CT) | [指南](vista3d/README.zh-CN.md) |
| [SegVol](segvol/README.zh-CN.md) | 3D CT · 文本/点/框 | [code](https://github.com/BAAI-DCAI/SegVol) | [Hugging-Face](https://huggingface.co/BAAI/SegVol) | [指南](segvol/README.zh-CN.md) |
| [MedSAM-Agent](medsam-agent/README.zh-CN.md) | 2D · 自主多轮 | [code](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [Hugging-Face](https://huggingface.co/Saint-lsy/MedSAM-Agent-Qwen3-VL-8B-MedSAM2) | [指南](medsam-agent/README.zh-CN.md) |
| [MedicoSAM](medicosam/README.zh-CN.md) | 2D/3D · SAM 提示 | [code](https://github.com/computational-cell-analytics/medico-sam) | [OwnCloud](https://owncloud.gwdg.de/index.php/s/f5Ol4FrjPQWfjUF) | [指南](medicosam/README.zh-CN.md) |

### 本轮六模型对比组

| 方法 | 提示 / 输入 | 官方代码 | 权重 | 详情 |
|---|---|---|---|---|
| [SAM 3](sam3/README.zh-CN.md) | 2D/视频 · 文本/视觉 | [code](https://github.com/facebookresearch/sam3) | [Gated-Checkpoint](https://huggingface.co/facebook/sam3) | [指南](sam3/README.zh-CN.md) |
| [MedSAM3-v1](medsam3-v1/README.zh-CN.md) | 医学图像 · 文本 + LoRA | [code](https://github.com/Joey-S-Liu/MedSAM3) | [LoRA-Weights](https://huggingface.co/lal-Joey/MedSAM3_v1) | [指南](medsam3-v1/README.zh-CN.md) |
| [Medical-SAM3](medical-sam3/README.zh-CN.md) | 2D + 3D v2 · 文本/框 | [code](https://github.com/AIM-Research-Lab/Medical-SAM3) | [Hugging-Face](https://huggingface.co/Chongcong/Medical-SAM3) | [指南](medical-sam3/README.zh-CN.md) |
| [VoxTell v1.1](voxtell-v1-1/README.zh-CN.md) | 3D CT/MRI/PET · 自由文本 | [code](https://github.com/MIC-DKFZ/VoxTell) | [Hugging-Face](https://huggingface.co/mrokuss/VoxTell) | [指南](voxtell-v1-1/README.zh-CN.md) |
| [BiomedParse v2](biomedparse-v2/README.zh-CN.md) | 3D · 文本、challenge 格式 | [code](https://github.com/microsoft/BiomedParse/tree/v2) | [Gated-Checkpoint](https://huggingface.co/microsoft/BiomedParse) | [指南](biomedparse-v2/README.zh-CN.md) |
| [DA-SAM3](da-sam3/README.zh-CN.md) | 医学图像 · 文本 + experts | [code](https://github.com/Reconsider80/DA-SAM3) | [未公开下载](https://github.com/Reconsider80/DA-SAM3#readme) | [指南](da-sam3/README.zh-CN.md) |
## 🧪 对比协议说明

- **SRO-Edit 中并非所有方法使用同一 checkpoint 设置。** 稿件协议中，SAM-Med3D、MedSAM2、VISTA3D、SegVol 和 MedicoSAM 按每个目标任务微调 250 个 epoch；PRISM 按默认目标设置训练 250 个 epoch；nnInteractive 使用官方预训练模型；MedSAM-Agent 使用官方 closed-loop policy 和相同的 MedSAM2 baseline checkpoint。
- 这些任务微调 artifact 不能与后续发布的通用 checkpoint 互换。记录每项结果的具体权重、训练数据、提示类型、交互预算和预处理。
- **MedSAM-Agent 是自主多轮方法。** 提示由 action policy 决定，因此其交互次数不能等同于固定次数的人工点击。
- **部分 demo 脚本使用 GT-derived prompts。** SegVol 官方 evaluation demo 会根据 ground-truth masks 合成空间提示。此类运行应标记为 GT-derived/oracle，并与人工输入推理分开。
- **不同方法的模态不同。** SAM 3 以图像/视频为主；VISTA3D 研究版权重主要面向 CT；VoxTell 和 nnInteractive 是原生 3D 体数据模型。对比前请查看各自页面。

## 🧭 权重与许可状态说明

- “官方权重”表示项目或作者提供 checkpoint/model host 链接，不代表权重不受限制或无需申请。
- 代码和模型权重可能适用不同许可。nnInteractive、BiomedParse v2、SAM 3 及其 adapter 尤其需要分别核对。
- 页面未提供 checkpoint 下载链接时，应查看论文/仓库联系作者或按训练流程复现；不要推断该 checkpoint 已公开下载。

## 📚 引用与范围

本仓库链接原始论文和代码，不再分发第三方代码、checkpoint 或论文 PDF。使用模型时请引用原始方法论文，并遵守上游代码与权重条款。

<sub>上游页面核对日期：2026 年 10 月 27 日。链接和访问控制可能变化，请以原始仓库及 model card 为准。</sub>

[← 返回项目首页](../README.zh-CN.md)