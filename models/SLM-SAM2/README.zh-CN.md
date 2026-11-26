<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🎞️ SLM-SAM2

<p align="center"><strong>SLM-SAM2 通过分别设计短期和长期记忆，将 SAM 2 适配到医学体数据标注，并把提示切片掩膜传播到 3D 切片序列。</strong></p>

<p align="center">
<a href="https://github.com/mazurowski-lab/SLM-SAM2"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://doi.org/10.1109/TMI.2025.3627954"><img src="https://img.shields.io/badge/PAPER-IEEE%20TMI-166534?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://github.com/mazurowski-lab/SLM-SAM2/tree/main/checkpoints"><img src="https://img.shields.io/badge/BASE%20CHECKPOINTS-SAM%202.1-f59e0b?style=flat-square&logo=github" alt="基础权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 基于 SAM 2 的医学体数据掩膜传播 |
| 研究团队 / 机构 | 论文署名中的杜克大学团队及合作机构 |
| 输入 / 模态 | 将体数据表示为有序切片序列；论文/仓库报告 MRI、CT 和超声视频任务。 |
| 提示 / 交互 | 标注一张种子切片，再将掩膜传播至其他切片。动态短期/长期记忆用于处理过度传播和解剖结构变化。 |
| 目录类别 | 空间提示 · 稀疏切片传播 |
| 代码许可 | 官方仓库采用 GPL-3.0。SAM 2 基础权重另有上游条款。 |

## 论文

**Accelerating Volumetric Medical Image Annotation via Short-Long Memory SAM 2** — *IEEE Transactions on Medical Imaging*, 45(4), 1461–1474 (2026)。[DOI](https://doi.org/10.1109/TMI.2025.3627954) · [arXiv](https://arxiv.org/abs/2505.01854)。

论文在 SAM 2 中加入动态短期和长期记忆模块，并在医学体数据/序列上评估传播效果。复现时应记录适配数据集及具体 SAM 2.1 基础权重版本。

## 权重

官方仓库的 [`download_ckpts.sh`](https://github.com/mazurowski-lab/SLM-SAM2/blob/main/checkpoints/download_ckpts.sh)下载的是用于初始化的 **SAM 2.1 基础权重**。仓库 README 没有提供单独可下载的医学微调 SLM-SAM2 checkpoint；文档要求在医学数据上微调，再把生成的 checkpoint 传入推理。不要把 SAM 2.1 基础权重标成 SLM-SAM2 医学模型权重。

## 官方环境与推理

先安装兼容的 PyTorch/TorchVision，再按官方仓库流程安装和获取基础权重：

```bash
git clone https://github.com/mazurowski-lab/SLM-SAM2.git
cd SLM-SAM2
pip install -e .
cd checkpoints && ./download_ckpts.sh && cd ..
```

在 `configs/sam2.1_training/slm_sam2_hiera_t_finetune.yaml` 中配置医学图像/掩膜目录和体数据列表，然后微调：

```bash
CUDA_VISIBLE_DEVICES=0 python3 training/train.py \
  -c configs/sam2.1_training/slm_sam2_hiera_t_finetune.yaml \
  --use-cluster 0 --num-gpus 1
```

推理时需使用生成的 SLM-SAM2 checkpoint，并通过掩膜提示字典指定每个体数据的已标注切片。参数和数据布局见官方 [`inference.py`](https://github.com/mazurowski-lab/SLM-SAM2/blob/main/inference.py) 与[仓库 README](https://github.com/mazurowski-lab/SLM-SAM2#readme)。

## 使用范围

- 这是切片传播流程，种子掩膜属于空间提示，不是文本提示。
- 官方流程包含医学数据微调。公开的基础 checkpoint 本身不是最终医学模型权重。
- 除 SLM-SAM2 代码许可外，还需遵循 SAM 2 基础权重的使用条款。

## 许可与引用

代码许可：[GPL-3.0](https://github.com/mazurowski-lab/SLM-SAM2/blob/main/LICENSE)。SAM 2 权重条款需另外确认。

```bibtex
@article{chen2026slmsam2,
  title={Accelerating Volumetric Medical Image Annotation via Short-Long Memory SAM 2},
  journal={IEEE Transactions on Medical Imaging},
  volume={45}, number={4}, pages={1461--1474}, year={2026},
  doi={10.1109/TMI.2025.3627954}
}
```

<sub>上游页面核对日期：2026 年 11 月 26 日。最新权重、依赖与条款请查看链接的项目页面。</sub>
