<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧠 SAM-Med3D

<p align="center"><strong>将 SAM 扩展到医学体数据的 3D 可提示分割模型。原始流程使用前景/背景点逐轮交互，并输出三维掩膜。</strong></p>

<p align="center">
<a href="https://github.com/uni-medical/SAM-Med3D"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2310.15161"><img src="https://img.shields.io/badge/PAPER-ECCV--BIC--2024--Oral-7f1d1d?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/blueyo0/SAM-Med3D"><img src="https://img.shields.io/badge/WEIGHTS-Hugging--Face-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 3D 点提示分割模型 |
| 研究团队 / 机构 | Uni-Medical 医学图像研究项目 |
| 输入 / 模态 | 3D 医学体数据；项目在 CT、MRI 等多种体数据模态上评估。 |
| 提示 / 交互 | 3D 点提示交互与迭代修正。 |
| 代码许可 | 代码：Apache-2.0。权重条款请以对应 checkpoint 页面为准。 |

## 📚 论文与发表信息

**SAM-Med3D: Towards General-purpose Segmentation Models for Volumetric Medical Images** — arXiv:2310.15161（2023）；项目 README 标注获 ECCV BIC 2024 Oral。

## 📦 权重与获取方式

上游项目目前重点推荐较新的 `SAM-Med3D-turbo` 权重，README 提供 Hugging Face、Google Drive 和 HF-Mirror 入口。上游 MedIM 示例引用 Hugging Face 模型 `blueyo0/SAM-Med3D` 中的 `sam_med3d_turbo.pth`。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
git clone https://github.com/uni-medical/SAM-Med3D.git
cd SAM-Med3D
pip install medim
# 按上游示例设置图像、真值和输出路径
python medim_val_single.py
```
该示例用于评估，需要配对的真值掩膜。模型构建与权重选择见[官方 MedIM 示例](https://github.com/uni-medical/SAM-Med3D/blob/main/medim_val_single.py)。

## ⚠️ 版本与使用说明

项目目前重点推荐较新的 SAM-Med3D-turbo checkpoint。它与原始论文 checkpoint 不同；复现已发表结果时应记录具体权重和提示协议。

## 📜 许可

代码：Apache-2.0。权重条款请以对应 checkpoint 页面为准。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
