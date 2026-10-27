# Hexo + Butterfly preview

This is an isolated Hexo trial. The current Docusaurus site remains at the project root on GitHub Pages; this preview is published under /hexo-preview/.

## Build

Run npm ci, then npm run build.

The build reads canonical Markdown guides from ../datasets/ and ../models/, then generates English and Simplified Chinese pages. Edit those repository guides to change dataset or model content.

To preview locally, run npm run server. The server mounts the same /interactive-medseg-atlas/hexo-preview/ base path used on GitHub Pages.

The site uses [Hexo](https://hexo.io/) with [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) (Apache-2.0). Butterfly's license is included at source/licenses/butterfly/LICENSE.txt. A small theme override removes blog-only archive/tag/category shortcuts from the navigation drawer.
