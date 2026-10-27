<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🏥 Medical-SAM3

<p align="center"><strong>SAM 3 的医学适配项目，分别提供 2D benchmark 工具和较新的 3D v2 训练/评估流程。当前 3D 路径以独立的四切片 clip 对整个体数据执行文本提示推理。</strong></p>

<p align="center">
<a href="https://github.com/AIM-Research-Lab/Medical-SAM3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2601.10880"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2601.10880-991b1b?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/Chongcong/Medical-SAM3"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

> ← 返回 [模型目录](../README.zh-CN.md) · 目录分组: 本轮六模型对比组

## 基本信息

| 字段 | 说明 |
|---|---|
| 目录分组 | 本轮六模型对比组 |
| 研究团队 / 机构 | AIM Research Lab 项目 |
| 输入 / 模态 | 2D 医学 benchmark 与 3D NPZ 体数据；需注明结果使用的代码路径/版本。 |
| 提示 / 交互 | 2D 框/文本提示；当前 3D v2 推理使用文本提示并覆盖完整深度。 |
| 代码许可 | 仓库中的 SAM materials 包含 Meta 的 SAM License。微调 checkpoint 的条款请查看当前 Hugging Face model card。 |

## 📚 论文与发表信息

**Medical SAM3: A Foundation Model for Universal Prompt-Driven Medical Image Segmentation** — arXiv:2601.10880（2026 年预印本）。

## 📦 权重与获取方式

项目在 Hugging Face 提供模型 checkpoint，包括 2026 年 6 月发布的 3D v2 权重。请明确选择 2D 或 3D artifact；3D CLI 需要本地 `medical_sam3_3d.pt`。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
git clone https://github.com/AIM-Research-Lab/Medical-SAM3.git
cd Medical-SAM3
pip install -e ".[train]"
# 在上游格式 NPZ 体数据上做 3D 文本提示推理：
python medical/inference_3d.py \
  --input /path/to/case_or_directory --output-dir outputs/3d \
  --checkpoint /path/to/medical_sam3_3d.pt --prompt '1=liver'
```
2D evaluation 路径独立：`cd inference && python run_medsam3_evaluation.py --checkpoint ... --model-name medsam3`。3D 路径输出 NPZ 文件，其中 `segs` 保持原始 `(D,H,W)` 几何。

## ⚠️ 版本与对比说明

对于 3D v2，上游 README 说明推理覆盖完整深度，不使用真值掩膜、框、点或由真值选择的切片。对比结果应说明使用 2D 模型还是 3D v2 checkpoint。

## 📜 许可

仓库中的 SAM materials 包含 Meta 的 SAM License。微调 checkpoint 的条款请查看当前 Hugging Face model card。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
