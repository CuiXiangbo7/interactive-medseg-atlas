<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🗣️ VoxTell v1.1

<p align="center"><strong>自由文本提示的 3D 视觉语言分割模型，可将从简短标签到临床描述的自然语言映射为体数据掩膜。</strong></p>

<p align="center">
<a href="https://github.com/MIC-DKFZ/VoxTell"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://openaccess.thecvf.com/content/CVPR2026/html/Rokuss_VoxTell_Free-Text_Promptable_Universal_3D_Medical_Image_Segmentation_CVPR_2026_paper.html"><img src="https://img.shields.io/badge/PAPER-CVPR%2D2026-075985?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/mrokuss/VoxTell"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 自由文本 3D 分割模型 |
| 研究团队 / 机构 | 德国癌症研究中心（DKFZ）/ Helmholtz Imaging |
| 输入 / 模态 | 3D CT、MRI 和 PET 体数据；作者提供当前 v1.1 权重。 |
| 提示 / 交互 | 标准 predictor 使用自由文本提示，不要求点/框交互。 |
| 代码许可 | 代码：Apache-2.0。模型权重条款请查看 Hugging Face 仓库。 |

## 📚 论文与发表信息

**VoxTell: Free-Text Promptable Universal 3D Medical Image Segmentation** — IEEE/CVF CVPR 2026，第 37538–37557 页；arXiv:2511.11450。

## 📦 权重与获取方式

官方 Hugging Face 仓库：`mrokuss/VoxTell`；首次使用会自动下载并缓存 v1.1。模型使用冻结的 Qwen3-Embedding-4B text encoder。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
conda create -n voxtell python=3.12
conda activate voxtell
# 安装与本机 CUDA 驱动匹配的 PyTorch，再执行：
pip install voxtell
voxtell-predict -i case.nii.gz -o output -p "liver" "spleen"
```
使用 NIfTI 输入并保留方向元数据。VoxTell 期望 RAS 方向，不会自动重采样异常 voxel spacing；若解剖定位异常，应检查方向和间距。

## ⚠️ 版本与使用说明

这是文本提示的体数据模型。请保留精确英文 prompt、图像方向、voxel spacing 和模型 tag；提示措辞与预处理会影响预测结果。

## 📜 许可

代码：Apache-2.0。模型权重条款请查看 Hugging Face 仓库。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
