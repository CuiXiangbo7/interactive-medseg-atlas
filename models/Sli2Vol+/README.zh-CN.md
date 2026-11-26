<p align="center"><a href="README.md">English</a> | <strong>简体中文</strong></p>

# 🧩 Sli2Vol+

<p align="center"><strong>Sli2Vol+ 通过对象估计引导的对应关系和传播伪标签，改进从单张切片向 3D 体数据的分割传播。</strong></p>

<p align="center">
<a href="https://github.com/adlsn/Sli2Volplus"><img src="https://img.shields.io/badge/GitHub-Code-181717?style=flat-square&logo=github" alt="官方代码"></a>
<a href="https://doi.org/10.1109/WACV61041.2025.00357"><img src="https://img.shields.io/badge/PAPER-WACV--2025-166534?style=flat-square&logo=academia" alt="论文"></a>
</p>

[← 模型目录](../README.zh-CN.md)

## 基本信息

| 字段 | 说明 |
|---|---|
| 模型类型 | 自监督对应关系学习与 3D 掩膜传播 |
| 研究团队 / 机构 | 圣母大学、德克萨斯大学里奥格兰德河谷分校、爱荷华大学 |
| 输入 / 模态 | 3D 医学影像体数据；论文在公开 CT 和 MRI 数据集上评估。 |
| 提示 / 交互 | **每个训练体数据和测试体数据都使用一张标注切片**。训练时先传播标注生成伪标签，再学习对象估计引导的切片对应关系。 |
| 目录类别 | 空间提示 · 稀疏切片传播 |
| 代码许可 | 官方仓库声明 Apache-2.0；数据集与派生权重需分别核对条款。 |

## 论文

**Sli2Vol+: Segmenting 3D Medical Images Based on an Object Estimation Guided Correspondence Flow Network** — WACV 2025，第 3624–3634 页。[论文](https://openaccess.thecvf.com/content/WACV2025/papers/An_Sli2Vol_Segmenting_3D_Medical_Images_Based_on_an_Object_Estimation_WACV_2025_paper.pdf) · [DOI](https://doi.org/10.1109/WACV61041.2025.00357) · [arXiv](https://arxiv.org/abs/2411.13873)。

论文报告了 9 个公开 CT/MRI 数据集上的评估。比较时要保留其训练和测试都需切片标注这一设定，不能与仅在测试时提示的方法混为一谈。

## 权重

[官方仓库](https://github.com/adlsn/Sli2Volplus)提供训练和测试脚本，但没有列出预训练 checkpoint 的直接下载链接。仓库说明的流程是依据配置的数据集训练权重，再通过 `test.py` 使用对应 checkpoint 和数据路径。

## 官方环境与命令

README 列出的环境是 Python 3.10 和 PyTorch 2.3.0（也可能支持其他版本），依赖从仓库安装：

```bash
git clone https://github.com/adlsn/Sli2Volplus.git
cd Sli2Volplus
conda create --name sliplus python=3.10
conda activate sliplus
pip install -r requirements.txt
python train.py
python test.py
```

上游 README 给出入口脚本，但数据路径和配置需要使用者设置。运行前请依据其代码和论文完成配置；上述命令不表示仓库内有可直接运行的默认数据集。

## 使用范围

- 测试时并非零标注：论文中每个训练体数据和测试体数据都各需一张标注切片。
- 测试切片上的掩膜既是稠密空间提示，也是体数据传播的起点。
- 官方仓库没有列出可下载的训练权重；代码采用 Apache-2.0 不代表数据或权重也自动采用同一许可。

## 许可与引用

代码许可：[Apache-2.0](https://github.com/adlsn/Sli2Volplus/blob/master/LICENSE)。使用方法时请按论文要求引用。

```bibtex
@inproceedings{an2025sli2volplus,
  title={Sli2Vol+: Segmenting 3D Medical Images Based on an Object Estimation Guided Correspondence Flow Network},
  author={An, Delin and Gu, Pengfei and Sonka, Milan and Wang, Chaoli and Chen, Danny Z.},
  booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision},
  pages={3624--3634}, year={2025},
  doi={10.1109/WACV61041.2025.00357}
}
```

<sub>上游页面核对日期：2026 年 11 月 26 日。最新数据路径、依赖、权重与条款请查看链接的项目页面。</sub>
