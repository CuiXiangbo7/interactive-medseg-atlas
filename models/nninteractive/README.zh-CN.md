<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🖱️ nnInteractive

<p align="center"><strong>面向实际标注流程的 3D open-set 交互式分割系统，在多样化体数据集上训练。</strong></p>

<p align="center">
<a href="https://github.com/MIC-DKFZ/nnInteractive"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://arxiv.org/abs/2503.08373"><img src="https://img.shields.io/badge/PAPER-arXiv%2D2503.08373-991b1b?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://huggingface.co/MIC-DKFZ/nnInteractive"><img src="https://img.shields.io/badge/WEIGHTS-Hugging%2DFace-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | Open-set 3D 交互式分割 |
| 研究团队 / 机构 | 德国癌症研究中心（DKFZ）/ Helmholtz Imaging |
| 输入 / 模态 | 3D CT、MRI、PET、3D 显微图像等体数据。 |
| 提示 / 交互 | 用 2D 交互生成 3D 掩膜；支持点、涂鸦、边界框和套索。 |
| 代码许可 | 代码：Apache-2.0。官方 v1 checkpoint：CC BY-NC-SA 4.0；权重条款比代码许可更严格。 |

## 📚 论文与发表信息

**nnInteractive: Redefining 3D Promptable Segmentation** — arXiv:2503.08373（2025 年预印本）。项目页面同时链接论文与 Python backend。

## 📦 权重与获取方式

官方模型注册表会按需从 Hugging Face 下载 `nnInteractive_v1.0`，默认缓存在 `~/.nninteractive`。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
# 先安装与本机 CUDA 驱动匹配的 PyTorch，再执行：
pip install nnInteractive
nninteractive-download-model nnInteractive_v1.0
```
使用官方 [minimal inference 示例](https://github.com/MIC-DKFZ/nnInteractive#getting-started) 中的 `nnInteractiveInferenceSession`。项目也提供远程 GPU server；无 GPU 的客户端可装 `nninteractive-client` 连接服务器。

## ⚠️ 版本与使用说明

该模型以官方预训练 checkpoint 形式发布。代码和权重适用不同许可，复用或再分发前请分别核对。

## 📜 许可

代码：Apache-2.0。官方 v1 checkpoint：CC BY-NC-SA 4.0；权重条款比代码许可更严格。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
