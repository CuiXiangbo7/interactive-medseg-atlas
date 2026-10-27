<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧭 DA-SAM3

<p align="center"><strong>一种参数高效的 SAM 3 医学适配方法，使用 Dynamic Expert Router（DER）和 Decomposed Parameterized Experts（DPE），将文本/视觉特征路由到轻量专家。</strong></p>

<p align="center">
<a href="https://github.com/Reconsider80/DA-SAM3"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://papers.miccai.org/miccai-2026/0308-Paper0711.html"><img src="https://img.shields.io/badge/PAPER-MICCAI--2026-166534?style=flat-square&logo=academia" alt="论文"></a>
<a href="https://github.com/Reconsider80/DA-SAM3#readme"><img src="https://img.shields.io/badge/WEIGHTS-Not--Listed-f59e0b?style=flat-square&logo=huggingface" alt="权重"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 参数高效的医学 SAM3 适配 |
| 研究团队 / 机构 | Shenzhen Research Institute, The Chinese University of Hong Kong, Shenzhen（香港中文大学深圳研究院）；University of Science and Technology of China（中国科学技术大学）；Nanyang Technological University（南洋理工大学）；Imperial College London（帝国理工学院，Imperial Global Singapore）。 |
| 输入 / 模态 | 医学图像分割；公开仓库列出 Synapse、MMWHS、BTCV 和 ACDC 数据集。 |
| 提示 / 交互 | 自然语言文本提示，并结合图像条件的 expert routing。 |
| 代码许可 | 检查到的 GitHub README 标注 research use only，仓库快照未见顶层 LICENSE。SAM 3 base weights 仍受 Meta SAM License 约束。MICCAI 论文页未列代码链接，而公开 GitHub README 自称 official implementation。 |

## 📚 论文与发表信息

**Dual-Adaptive SAM3: Hierarchical Routing over Low-Rank Expert Layers for Parameter-Efficient Medical Image Segmentation** — MICCAI 2026，LNCS 16884，第 155–164 页；arXiv:2607.02571。

## 📦 权重与获取方式

项目链接了 gated [SAM 3 base checkpoint](https://huggingface.co/facebook/sam3)，但没有列出可下载的 DA-SAM3 checkpoint。推理示例要求本地生成 `outputs/da_sam3/best_warmup.pt`。

代码、模型 checkpoint 及所需 foundation-model checkpoint 可能适用不同条款。使用或再分发前请分别查看对应来源。

## ⚙️ 官方环境与推理方式

```bash
git clone https://github.com/Reconsider80/DA-SAM3.git
cd DA-SAM3
git clone https://github.com/Chongcong/Medical-SAM3.git ../Medical-SAM3
pip install -r requirements.txt
pip install -e .
# 按 README 设置 SAM3_ROOT、PYTHONPATH 和 HF_TOKEN。
python train.py --config configs/da_sam3_default.yaml --stage warmup
# 训练完成或取得兼容 DA checkpoint 后：
python infer.py --config configs/da_sam3_default.yaml \
  --checkpoint outputs/da_sam3/best_warmup.pt \
  --image path/to/ct_slice.png --prompt "left ventricle" --output result.png
```


## ⚠️ 版本与使用说明

公开实现未列出可下载的 DA-SAM3 checkpoint。请记录 Git revision、SAM 3 base checkpoint、训练阶段和 adapter checkpoint；论文页和 GitHub README 对代码发布状态的说明目前不同。

## 📜 许可

检查到的 GitHub README 标注 research use only，仓库快照未见顶层 LICENSE。SAM 3 base weights 仍受 Meta SAM License 约束。MICCAI 论文页未列代码链接，而公开 GitHub README 自称 official implementation。

**引用：请按作者要求引用上述论文及上游项目。本仓库仅链接原始论文，不再分发代码或权重。**

<sub>来源页面核对日期：2026 年 10 月 27 日。上游环境、权重和访问政策可能变化，请以链接的项目页面为准。</sub>
