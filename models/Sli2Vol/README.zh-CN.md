<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧩 Sli2Vol

<p align="center"><strong>Sli2Vol 从无标注 3D 体数据中自监督学习切片对应关系，再将一张人工标注切片传播到整个体数据。</strong></p>

<p align="center">
<a href="https://github.com/pakheiyeung/Sli2Vol"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://doi.org/10.1007/978-3-030-87196-3_7"><img src="https://img.shields.io/badge/PAPER-MICCAI--2021-166534?style=flat-square&logo=academia" alt="论文"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 自监督切片对应关系学习与 3D 掩膜传播 |
| 研究团队 / 机构 | 论文署名单位为牛津大学 |
| 输入 / 模态 | 使用原始 3D 体数据自监督学习对应关系；论文评估包括 CT 和 MRI。 |
| 提示 / 交互 | 用户标注一张 2D 切片，模型依据学习到的亲和关系把掩膜传播到相邻切片和整个体数据。 |
| 目录类别 | 空间提示 · 稀疏切片传播 |
| 代码许可 | 官方仓库未发现许可证文件或声明；复用条款请向作者确认。 |

## 论文

**Sli2Vol: Annotate a 3D Volume from a Single Slice with Self-Supervised Learning** — MICCAI 2021，第 69–79 页。[论文](https://arxiv.org/abs/2105.12722) · [DOI](https://doi.org/10.1007/978-3-030-87196-3_7) · [项目页](https://pakheiyeung.github.io/Sli2Vol_wp/)。

该方法通过切片重建，使用原始体数据训练 correspondence-flow 网络。推理时仍需要用户标注一张切片作为传播起点；论文称方法对目标结构和评估域具有适应性，这并不表示测试时无需标注输入。

## 权重

[官方仓库](https://github.com/pakheiyeung/Sli2Vol)提供代码以及 `train.py`/`eval.py`，但没有列出官方可下载的预训练 checkpoint。请按论文和代码，使用目标原始体数据训练或适配。不要把 Sli2Vol+ 的权重当作本方法 checkpoint；两者是不同的方法和训练设定。

## 官方环境与入口

仓库 README 列出的环境为 Python 3.6 和 PyTorch 1.6（并说明其他版本也可能可用）。README 没有写出稳定的命令行参数用法；运行前请先检查官方脚本的数据路径和选项：

- [`train.py`](https://github.com/pakheiyeung/Sli2Vol/blob/master/train.py)：训练对应关系模型。
- [`eval.py`](https://github.com/pakheiyeung/Sli2Vol/blob/master/eval.py)：评估并传播掩膜。
- [`Readme.md`](https://github.com/pakheiyeung/Sli2Vol/blob/master/Readme.md)：依赖与方法说明。

原始代码发布于 2021 年，复现时应仔细处理依赖环境，不要默认当前 PyTorch 版本可直接替换。

## 使用范围

- 起始掩膜是单张切片上的稠密空间提示；该传播网络不是文本提示接口。
- 训练阶段使用无标注原始体数据进行自监督学习；每个测试病例仍需一张用户标注切片。
- 官方仓库没有声明代码许可，也没有提供直接的权重下载链接。

## 许可与引用

官方仓库未发现许可证文件或许可声明。复用和再分发前请向作者确认。

```bibtex
@inproceedings{yeung2021sli2vol,
  title={Sli2Vol: Annotate a 3D Volume from a Single Slice with Self-Supervised Learning},
  author={Yeung, Pak-Hei and Namburete, Ana I. L. and Xie, Weidi},
  booktitle={Medical Image Computing and Computer Assisted Intervention},
  pages={69--79}, year={2021},
  doi={10.1007/978-3-030-87196-3_7}
}
```

<sub>上游页面核对日期：2026 年 11 月 26 日。最新代码、权重和条款请查看链接的原始项目。</sub>
