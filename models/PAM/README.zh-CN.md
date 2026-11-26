<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧭 PAM

<p align="center"><strong>PAM（Propagation-based Anything Model）从一张带空间标注的医学图像切片出发，将目标掩膜传播到 3D 体数据中。</strong></p>

<p align="center">
<a href="https://github.com/czifan/PAM"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://doi.org/10.1038/s41746-025-02087-y"><img src="https://img.shields.io/badge/PAPER-npj%20Digital%20Medicine-166534?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://drive.google.com/drive/folders/10fi5ZLFRnW5lCMVI7vMY61eTfOQlN9oI?usp=share_link"><img src="https://img.shields.io/badge/WEIGHTS-Google%20Drive-f59e0b?style=flat-square&logo=google-drive" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 提示驱动的 3D 掩膜传播 |
| 研究团队 / 机构 | 论文署名中的北京大学及合作机构 |
| 输入 / 模态 | 对 3D 体数据的一张 2D 切片提供提示；论文/仓库报告了 CT、MRI、PET、SRX 和 micro-CT。 |
| 提示 / 交互 | 在一张切片上给出空间标注，PAM 将目标提示传播到整个体数据。 |
| 目录类别 | 空间提示 · 稀疏切片传播 |
| 代码许可 | 官方仓库未声明许可证；复用或再分发前请向作者确认。 |

## 论文

**PAM: A Propagation-Based Model for Segmenting Any 3D Objects across Multi-Modal Medical Images** — *npj Digital Medicine* 8, 753 (2025)。[DOI](https://doi.org/10.1038/s41746-025-02087-y)。

项目介绍称模型基于 44 个数据集训练，并提供无需针对每个新目标微调的提示到体数据流程。这些是作者报告的范围，使用时应结合论文中的数据集和实验协议理解。

## 权重

[官方仓库提供 Google Drive 预训练权重](https://drive.google.com/drive/folders/10fi5ZLFRnW5lCMVI7vMY61eTfOQlN9oI?usp=share_link)和 [Baidu 网盘](https://pan.baidu.com/s/1WdTPG_ojCEeWR5qpl2_WzQ?pwd=mksh)（提取码：`mksh`）。仓库要求将权重文件放入 `tutorials/checkpoints/`。

代码仓库未声明许可证。使用权重前也需分别确认 checkpoint 的适用条款。

## 官方运行入口

上游 README 提供 notebook，而不是固定的一行命令行流程。可先阅读[3D 提示到体数据 notebook](https://github.com/czifan/PAM/blob/main/tutorials/3d-propagation.ipynb)，并按其中的环境与数据说明操作。仓库还提供[跨 2D 图像传播](https://github.com/czifan/PAM/blob/main/tutorials/cross-2d-image-propagation.ipynb)和[全切片病理图像传播](https://github.com/czifan/PAM/blob/main/tutorials/pathology-propagation.ipynb)的 notebook；后两者是论文核心 3D 工作流之外的扩展。

## 使用范围

- 这里归入空间切片标注提示，不是自然语言提示。
- 论文报告的模态与泛化结果不代表对所有扫描仪、器官或采集协议均已验证。
- 训练/评估数据、预处理和 checkpoint 细节请以论文和官方仓库为准。

## 许可与引用

官方仓库未声明代码许可。能下载权重并不自动表示可以再分发。

```bibtex
@article{chen2025pam,
  title={PAM: A propagation-based model for segmenting any 3d objects across multi-modal medical images},
  journal={npj Digital Medicine},
  year={2025}, volume={8}, number={753},
  doi={10.1038/s41746-025-02087-y}
}
```

<sub>上游页面核对日期：2026 年 11 月 26 日。最新权重、依赖和条款请查看链接的项目页面。</sub>
