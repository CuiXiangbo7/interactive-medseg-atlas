<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

<h1 align="center">🤖 交互式医学分割模型目录</h1>

<p align="center"><strong>官方代码 · 权重 · 论文 · 环境与推理指南</strong></p>

<p align="center">
<img src="https://img.shields.io/badge/MODEL%20CARDS-19-7c3aed?style=flat-square" alt="19 个模型页面">
<img src="https://img.shields.io/badge/LANGUAGE-English%20%2B%20中文-16803c?style=flat-square" alt="中英文">
</p>

> 这里整理交互式、提示式医学分割方法与 Agent 工作流。分类依据论文中实际使用的方法行为，**允许交叉归类**，不表示互斥的模型家族；每行都链接到用于判定该类别的论文。

## 按类别浏览

- [空间提示](#空间提示)
- [文本、概念与类别提示](#文本概念与类别提示)
- [从稀疏切片向三维体数据传播](#从稀疏切片向三维体数据传播)
- [Agent 引导的多轮工作流](#agent-引导的多轮工作流)

## 收录模型

目前有 19 个不同模型指南。同一模型可以出现在多个类别中。空间提示包括点、框、涂鸦和切片掩膜；语义提示包括自由文本、命名概念或模型明确使用的类别标签；传播类指将一张或少数几张切片上的标注扩展到三维体数据或序列；Agent 类则由智能体规划或执行分割交互。

### 空间提示

本类收录以空间位置或形状作为分割输入的方法，包括稀疏点击、框、涂鸦，以及单张切片上的稠密掩膜。只有论文或官方方法文档明确描述了相应输入时才归入；每行会标明论文所述的具体交互形式。

| 模型 | 论文描述的空间交互 | 方法论文 | 官方代码 | 指南 |
|---|---|---|---|---|
| SAM-Med3D | 3D 前景/背景点提示 | [论文](https://arxiv.org/abs/2310.15161) | [代码](https://github.com/uni-medical/SAM-Med3D) | [指南](SAM-Med3D/README.zh-CN.md) |
| PRISM | 点击、框和涂鸦视觉提示，可迭代细化 | [论文](https://arxiv.org/abs/2404.15028) | [代码](https://github.com/MedICL-VU/PRISM) | [指南](PRISM/README.zh-CN.md) |
| nnInteractive | 3D 点击、框、套索及纠正交互 | [论文](https://arxiv.org/abs/2503.08373) | [代码](https://github.com/MIC-DKFZ/nnInteractive) | [指南](nnInteractive/README.zh-CN.md) |
| MedSAM2 | 在医学图像切片/帧上输入空间提示，再传播掩膜 | [论文](https://arxiv.org/abs/2504.03600) | [代码](https://github.com/bowang-lab/MedSAM2) | [指南](MedSAM2/README.zh-CN.md) |
| VISTA3D | 正/负点提示，也可输入类别提示 | [论文](https://openaccess.thecvf.com/content/CVPR2025/html/He_VISTA3D_A_Unified_Segmentation_Foundation_Model_For_3D_Medical_Imaging_CVPR_2025_paper.html) | [代码](https://github.com/Project-MONAI/VISTA) | [指南](VISTA3D/README.zh-CN.md) |
| SegVol | 点和框提示，也支持文本提示 | [论文](https://arxiv.org/abs/2311.13385) | [代码](https://github.com/BAAI-DCAI/SegVol) | [指南](SegVol/README.zh-CN.md) |
| MedicoSAM | SAM 风格的医学 2D/3D 空间提示 | [论文](https://doi.org/10.1109/TMI.2025.3644811) | [代码](https://github.com/computational-cell-analytics/medico-sam) | [指南](MedicoSAM/README.zh-CN.md) |
| SAM 3 | 点、框和掩膜视觉提示，也支持开放词汇概念 | [论文](https://arxiv.org/abs/2511.16719) | [代码](https://github.com/facebookresearch/sam3) | [指南](SAM%203/README.zh-CN.md) |
| Medical-SAM3 | 空间框提示，也支持文本提示 | [论文](https://arxiv.org/abs/2601.10880) | [代码](https://github.com/AIM-Research-Lab/Medical-SAM3) | [指南](Medical-SAM3/README.zh-CN.md) |
| PAM | 在一张 2D 提示切片上给出空间标注 | [论文](https://doi.org/10.1038/s41746-025-02087-y) | [代码](https://github.com/czifan/PAM) | [指南](PAM/README.zh-CN.md) |
| Sli2Vol | 人工标注一张 2D 切片掩膜 | [论文](https://doi.org/10.1007/978-3-030-87196-3_7) | [代码](https://github.com/pakheiyeung/Sli2Vol) | [指南](Sli2Vol/README.zh-CN.md) |
| Sli2Vol+ | 每个训练体数据和测试体数据各标注一张切片掩膜 | [论文](https://doi.org/10.1109/WACV61041.2025.00357) | [代码](https://github.com/adlsn/Sli2Volplus) | [指南](Sli2Vol%2B/README.zh-CN.md) |
| SLM-SAM2 | 用一张提示掩膜切片启动体数据传播 | [论文](https://doi.org/10.1109/TMI.2025.3627954) | [代码](https://github.com/mazurowski-lab/SLM-SAM2) | [指南](SLM-SAM2/README.zh-CN.md) |
| MedSAM-Agent | Agent 为分割后端选择空间提示 | [论文](https://arxiv.org/abs/2602.03320) | [代码](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [指南](MedSAM-Agent/README.zh-CN.md) |
| nnInteractive Agent | Agent 对 nnInteractive 发出纠正性空间交互 | [论文](https://arxiv.org/abs/2610.31080) | [代码](https://github.com/MIC-DKFZ/nninteractive-agent) | [指南](nnInteractive%20Agent/README.zh-CN.md) |

### 文本、概念与类别提示

这些方法可以通过语言或明确的语义类别指定目标。两者并不相同：VISTA3D 使用预定义类别标签，而 VoxTell 接受自由文本。此类别依据提示类型划分，因此同时支持空间提示的模型也会列在上一个类别中。

| 模型 | 论文描述的语义提示 | 方法论文 | 官方代码 | 指南 |
|---|---|---|---|---|
| SAM 3 | 开放词汇文本概念和视觉示例 | [论文](https://arxiv.org/abs/2511.16719) | [代码](https://github.com/facebookresearch/sam3) | [指南](SAM%203/README.zh-CN.md) |
| MedSAM3-v1 | 面向医学图像适配的文本提示 | [论文](https://arxiv.org/abs/2511.19046) | [代码](https://github.com/Joey-S-Liu/MedSAM3) | [指南](MedSAM3-v1/README.zh-CN.md) |
| Medical-SAM3 | 面向医学目标的文本提示 | [论文](https://arxiv.org/abs/2601.10880) | [代码](https://github.com/AIM-Research-Lab/Medical-SAM3) | [指南](Medical-SAM3/README.zh-CN.md) |
| VoxTell v1.1 | 对 3D 目标使用自由文本提示 | [论文](https://openaccess.thecvf.com/content/CVPR2026/html/Rokuss_VoxTell_Free-Text_Promptable_Universal_3D_Medical_Image_Segmentation_CVPR_2026_paper.html) | [代码](https://github.com/MIC-DKFZ/VoxTell) | [指南](VoxTell%20v1.1/README.zh-CN.md) |
| BiomedParse v2 | 文本查询与图像/体数据联合输入 | [论文](https://doi.org/10.1038/s41592-024-02499-w) | [代码](https://github.com/microsoft/BiomedParse/tree/v2) | [指南](BiomedParse%20v2/README.zh-CN.md) |
| DA-SAM3 | 文本提示与领域适配专家模块 | [论文](https://papers.miccai.org/miccai-2026/0308-Paper0711.html) | [代码](https://github.com/Reconsider80/DA-SAM3) | [指南](DA-SAM3/README.zh-CN.md) |
| SegVol | 文本描述，可选点或框提示 | [论文](https://arxiv.org/abs/2311.13385) | [代码](https://github.com/BAAI-DCAI/SegVol) | [指南](SegVol/README.zh-CN.md) |
| VISTA3D | 预定义目标类别标签（不是自由文本） | [论文](https://openaccess.thecvf.com/content/CVPR2025/html/He_VISTA3D_A_Unified_Segmentation_Foundation_Model_For_3D_Medical_Imaging_CVPR_2025_paper.html) | [代码](https://github.com/Project-MONAI/VISTA) | [指南](VISTA3D/README.zh-CN.md) |

### 从稀疏切片向三维体数据传播

这类方法从一张或少数几张 2D 切片上的标注出发，将掩膜传播到 3D 切片序列（或类似视频的序列）中。各论文采用的机制和数据假设不同。特别是，Sli2Vol+ 在**每个训练体数据和每个测试体数据中都需要一张标注切片**，不能描述成测试时完全无需标注。

| 模型 | 传播机制与标注假设 | 方法论文 | 官方代码 | 指南 |
|---|---|---|---|---|
| PAM | 从一张 2D 提示切片传播到整个 3D 体数据；可跨论文报告的多种模态复用 | [论文](https://doi.org/10.1038/s41746-025-02087-y) | [代码](https://github.com/czifan/PAM) | [指南](PAM/README.zh-CN.md) |
| Sli2Vol | 从原始体数据自监督学习切片对应关系；测试时由一张标注切片启动传播 | [论文](https://doi.org/10.1007/978-3-030-87196-3_7) | [代码](https://github.com/pakheiyeung/Sli2Vol) | [指南](Sli2Vol/README.zh-CN.md) |
| Sli2Vol+ | 伪标签与对象估计引导的对应流；训练和测试体数据各需一张标注切片 | [论文](https://doi.org/10.1109/WACV61041.2025.00357) | [代码](https://github.com/adlsn/Sli2Volplus) | [指南](Sli2Vol%2B/README.zh-CN.md) |
| SLM-SAM2 | 以 SAM 2 视频分割为基础加入短期/长期记忆，由种子掩膜跨切片传播 | [论文](https://doi.org/10.1109/TMI.2025.3627954) | [代码](https://github.com/mazurowski-lab/SLM-SAM2) | [指南](SLM-SAM2/README.zh-CN.md) |
| MedSAM2 | 基于 SAM 2 记忆机制，在医学切片或视频帧间传播 | [论文](https://arxiv.org/abs/2504.03600) | [代码](https://github.com/bowang-lab/MedSAM2) | [指南](MedSAM2/README.zh-CN.md) |

### Agent 引导的多轮工作流

这类工作流由 Agent 理解任务，并在多轮中选择或调整分割操作。Agent 并不是分割骨干网络的一种新提示模态：当其底层方法实际消费点、框或纠正掩膜时，也会出现在“空间提示”中。

| 工作流 | Agent 的作用 | 方法论文 | 官方代码 | 指南 |
|---|---|---|---|---|
| MedSAM-Agent | 通过医学分割后端规划并执行分割交互 | [论文](https://arxiv.org/abs/2602.03320) | [代码](https://github.com/CUHK-AIM-Group/MedSAM-Agent) | [指南](MedSAM-Agent/README.zh-CN.md) |
| nnInteractive Agent | 将分割请求转换为 nnInteractive 的迭代操作 | [论文](https://arxiv.org/abs/2610.31080) | [代码](https://github.com/MIC-DKFZ/nninteractive-agent) | [指南](nnInteractive%20Agent/README.zh-CN.md) |

## 复现提示

- 比较方法时应统一模态、提示类型、标注预算和交互协议。一张切片标注、一个点和 Agent 选择的点击不是等价输入。
- 记录确切 checkpoint、版本、预处理和提示策略。论文权重、任务专用权重、适配器与基础模型权重是不同制品。
- 若提示由真值合成，应标记为 GT-derived/oracle，不能当作普通用户输入结果比较。
- 代码与权重可能使用不同许可或访问条件；下载和复用前分别检查上游来源。

## 引用与范围

本目录链接原始论文、官方代码与权重来源，不再分发第三方代码、权重或论文。使用时请引用对应方法，并遵守上游条款。

<sub>上游页面核对日期：2026 年 11 月 26 日。访问权限、权重与依赖可能变化，请以链接的原始项目为准。</sub>

[← 返回项目首页](../README.zh-CN.md)
