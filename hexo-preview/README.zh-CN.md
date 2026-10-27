# Hexo + Butterfly 试用版

这是与现有网站并行的 Hexo 试用版。GitHub Pages 原地址继续提供 Docusaurus 版本；试用页面发布在 /hexo-preview/ 子路径。

## 构建

运行 npm ci，然后运行 npm run build。

构建时会从 ../datasets/ 和 ../models/ 读取权威 Markdown 资料，并生成英文及简体中文页面。修改数据集或模型介绍时，请编辑原有资料文件。

本地预览可运行 npm run server。预览服务器使用与 GitHub Pages 相同的 /interactive-medseg-atlas/hexo-preview/ 路径。

本页面使用 [Hexo](https://hexo.io/) 与 [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 主题（Apache-2.0）。主题许可证保存在 source/licenses/butterfly/LICENSE.txt。少量主题覆盖代码用于移除博客式的归档、标签和分类快捷入口。
