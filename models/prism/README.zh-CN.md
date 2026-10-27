<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# ✨ PRISM

<p align="center"><strong>以视觉提示为条件的交互式医学分割模型，支持逐轮细化分割结果。</strong></p>

<p align="center">
<a href="https://github.com/MedICL-VU/PRISM"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2404.15028"><img src="https://img.shields.io/badge/PAPER-MICCAI%2D2024-166534?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://github.com/MedICL-VU/PRISM#models"><img src="https://img.shields.io/badge/WEIGHTS-Google%2DDrive-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

> ← 返回 [模型目录](../README.zh-CN.md) · 目录分组: SRO-Edit 对比基线

## 基本信息

| 字段 | 说明 |
|---|---|
| 目录分组 | SRO-Edit 对比基线 |
| 研究团队 / 机构 | MedICL-VU；Vanderbilt University 研究团队 |
| 输入 / 模态 | 覆盖医学 2D 和 3D 任务；主要公开版本展示 3D CT 肿瘤分割，PRISM Lite 则是独立的 3D 超声胎盘分割项目。 |
| 提示 / 交互 | 点击/点提示、框与涂鸦提示；支持迭代细化。 |
| 代码许可 | 项目声明代码/模型采用 Apache-2.0；第三方数据条款需另行核对。 |

## 📚 论文与发表信息

**PRISM: A Promptable and Robust Interactive Segmentation Model with Visual Prompts** — MICCAI 2024，LNCS，第 389–399 页；arXiv:2404.15028。

## 📦 权重与获取方式

上游 README 提供预训练模型 Drive 文件夹，以及 colon、pancreas、liver、kidney 的任务专用 checkpoint。请按其模型表选择对应数据集版本。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
conda create -n prism python=3.9
conda activate prism
# 按上游要求安装匹配的 PyTorch、Segment Anything 和依赖
pip install torch==1.12.1+cu113 torchvision==0.13.1+cu113 --extra-index-url https://download.pytorch.org/whl/cu113
pip install git+https://github.com/facebookresearch/segment-anything.git
pip install -r requirements.txt
# 下载对应 checkpoint 并放入实现目录后：
python test.py --data colon --data_dir /path/to/data --split test \
  --checkpoint best --save_name prism_pretrain --num_clicks 1 --iter_nums 11 \
  --multiple_outputs --use_box --use_scribble --efficient_scribble --refine --refine_test
```
完整 CUDA/PyTorch 环境及其他提示参数见官方 README。

## ⚠️ 版本与对比说明

SRO-Edit 稿件报告的是采用默认任务设置训练 250 个 epoch 的 PRISM 基线。上游预训练权重与稿件中的微调对比模型是不同 artifact；官方测试示例也按数据集配置。

## 📜 许可

项目声明代码/模型采用 Apache-2.0；第三方数据条款需另行核对。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
