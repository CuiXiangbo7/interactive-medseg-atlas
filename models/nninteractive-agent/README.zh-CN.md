<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧠 nnInteractive-Agent

<p align="center"><strong>一种基于 nnInteractive 的 Agentic 三维标注流程：通用 AI Agent 理解自然语言任务、选择空间提示、检查三维掩膜并逐轮修正。</strong></p>

<p align="center">
<a href="https://github.com/MIC-DKFZ/nninteractive-agent"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2610.31080"><img src="https://img.shields.io/badge/PAPER-arXiv--2610.31080-991b1b?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/MIC-DKFZ/nnInteractive"><img src="https://img.shields.io/badge/WEIGHTS-nnInteractive--base-f59e0b?style=flat-square&logo=huggingface" alt="基础模型权重"></a>
</p>

[← 返回模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 方法类型 | 基于 nnInteractive 的 Agentic 标注框架；它本身不是独立的分割 backbone。 |
| 研究团队 / 机构 | 论文署名单位包括 Division of Medical Image Computing (MIC), German Cancer Research Center (DKFZ)；National Center for Tumor Diseases (NCT) Heidelberg；Helmholtz Imaging；Heidelberg University；University Hospital Bonn；以及 Heidelberg University Hospital。 |
| 输入 / 模态 | 支持 NIfTI、NRRD、MHA、TIFF stack、PNG/JPG 和 NPY。论文评估 CT、MRI、PET 与 micro-CT；项目还说明支持 microscopy 和 photographs。 |
| 提示 / 交互 | 用户用自然语言说明任务；Agent 定位目标，向 nnInteractive 发送空间涂鸦/框/点提示，检查渲染的 2D/3D 视图并迭代修正。 |
| 代码与模型许可 | Agent 软件：Apache-2.0。nnInteractive v1 checkpoint：CC BY-NC-SA 4.0。外部 LLM/provider 另有使用条款。 |

## 📚 论文与发表信息

**nnInteractive Agent: General-Purpose AI Agents as 3D Image Annotators** — technical report，arXiv:2610.31080v1（2026 年；2026 年 10 月 22 日提交）。arXiv 将其标为 technical report，页面未列期刊或会议名称。

## 📦 权重与获取方式

nnInteractive-Agent 没有单独训练的分割 checkpoint。安装流程会安装 nnInteractive backend，并从官方模型注册表下载基础模型权重（约 400 MB）；论文 benchmark 使用 nnInteractive v1.0。通用语言模型需通过 Claude Code、Codex 或其他兼容 Agent runtime 单独配置。

上方链接指向基础模型权重。基础权重与 Apache-2.0 的 Agent 代码适用不同许可。

## ⚙️ 官方环境与推理方式

需要 Python 3.10 或更高版本。本地推理建议使用约 10 GB 显存的 NVIDIA GPU；CPU 也可运行，但速度较慢。运行配置前需先登录 Codex 或 Claude Code。

```bash
python -m venv .venv
source .venv/bin/activate
pip install "nninteractive-agent[local] @ git+https://github.com/MIC-DKFZ/nninteractive-agent"

# 注册 MCP server 并安装分割 skill：
nninteractive-agent setup codex
# 或：nninteractive-agent setup claude

# 启动 Agent 会话并用自然语言描述任务：
codex "Segment the liver in /data/ct.nii.gz and save the result."
# 也可使用：claude "Segment the liver in /data/ct.nii.gz and save the result."
```

若在另一台 GPU server 上运行 nnInteractive，可配置 `nninteractive-agent setup codex --server <URL>`。Agent 会输出 instance map 和 `objects.json`；支持医学体数据、TIFF stack 和常见 2D 图像格式。

## 📊 论文报告的评估

技术报告在 14 张公开图像和 51 个目标上进行评估。只给出目标名称时，Claude Code 和 Codex 的 mean Dice 分别为 0.81 和 0.84；同时提供目标位置时，两者均为 0.85。这些数值对应论文中指定的 Agent、LLM 和评估协议。

## ⚠️ 使用说明

- Agent 决定分割什么以及在哪里放提示；nnInteractive 负责生成体素掩膜。记录所用 LLM/runtime 和 nnInteractive checkpoint。
- Agent 自主选择的提示与交互轮数，不能直接等同于固定次数的人工点击。
- 代码、分割权重、论文和 LLM 服务分别适用不同许可或使用条款；使用前请查看对应来源。

## 📜 许可

nninteractive-agent 仓库采用 Apache-2.0。官方 nnInteractive v1 权重采用 CC BY-NC-SA 4.0。arXiv 论文采用 CC BY-SA 4.0。选用的 LLM provider 还需遵循其自身条款。

**引用：** Fabian Isensee 等， “nnInteractive Agent: General-Purpose AI Agents as 3D Image Annotators”，arXiv:2610.31080，2026。请参阅[论文](https://arxiv.org/abs/2610.31080)和[官方项目](https://github.com/MIC-DKFZ/nninteractive-agent)。本仓库只链接原始来源，不再分发代码、权重或论文文件。

<sub>上游来源核对日期：2026 年 10 月 27 日。环境要求、模型权重和服务条款可能变化，请以官方仓库和模型注册表为准。</sub>