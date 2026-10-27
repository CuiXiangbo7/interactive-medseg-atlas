<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧬 BiomedParse v2

<p align="center"><strong>v2 扩展 BiomedParse 至端到端 3D 分割并加入内置 object-existence detection，与原始 2D BiomedParse v1 不同。</strong></p>

<p align="center">
<a href="https://github.com/microsoft/BiomedParse/tree/v2"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://doi.org/10.1038/s41592-024-02499-w"><img src="https://img.shields.io/badge/PAPER-Nature%2DMethods%2D2025-166534?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/microsoft/BiomedParse"><img src="https://img.shields.io/badge/WEIGHTS-Gated%2DCheckpoint-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

> ← 返回 [模型目录](../README.zh-CN.md) · 目录分组: 本轮六模型对比组

## 基本信息

| 字段 | 说明 |
|---|---|
| 目录分组 | 本轮六模型对比组 |
| 研究团队 / 机构 | Microsoft Research |
| 输入 / 模态 | 按 v2 README，支持 3D CT、MRI、超声、PET 和 3D 显微图像；专用预训练 v2 权重对应 3D。 |
| 提示 / 交互 | 文本概念提示；模型逐切片推理，并将相邻体数据上下文编码为 RGB 输入。 |
| 代码许可 | 代码：Apache-2.0。Hugging Face model card 将模型 artifact 标为 CC BY-NC-SA 4.0，并要求接受 gated-model 条款。请勿混淆 v1 与 v2 权重。 |

## 📚 论文与发表信息

**A Foundation Model for Joint Segmentation, Detection, and Recognition of Biomedical Objects Across Nine Modalities** — Nature Methods 22，166–176（2025），DOI: 10.1038/s41592-024-02499-w。v2 3D checkpoint 还基于 [CVPR 2025 Text-guided 3D Segmentation Challenge](https://www.codabench.org/competitions/5651/) release。

**版本固定：** 本页对应上游 v2 branch。

## 📦 权重与获取方式

`biomedparse_v2.ckpt`（约 4.46 GB）托管在 gated Hugging Face 仓库 `microsoft/BiomedParse`；访问可能需接受模型条款并登录。上游 v2 README 也提供 challenge-trained Docker image。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
git clone --branch v2 https://github.com/microsoft/BiomedParse.git
cd BiomedParse
conda create -n biomedparse_v2 python=3.10.14
conda activate biomedparse_v2
python -m pip install -r assets/requirements/inference.txt
# 完成 HF 访问条件后下载 biomedparse_v2.ckpt：
python inference.py --input_dir examples/imgs --output_dir outputs/3d \
  --checkpoint /path/to/biomedparse_v2.ckpt --slice_batch_size 4
```
脚本需要 challenge-format 预处理后的 NPZ 体数据。原始 DICOM/NIfTI 仍需按模态进行强度预处理；显存不足时可降低 `--slice_batch_size`。

## ⚠️ 版本与对比说明

3D 对比应使用 v2 branch 和 `biomedparse_v2.ckpt`。v1 branch/权重是独立的 2D 流程；v2 inference script 不会自动对原始扫描图像做 windowing 或 normalization。

## 📜 许可

代码：Apache-2.0。Hugging Face model card 将模型 artifact 标为 CC BY-NC-SA 4.0，并要求接受 gated-model 条款。请勿混淆 v1 与 v2 权重。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
