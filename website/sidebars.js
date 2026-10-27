const catalog = require('./src/data/catalog.json');

module.exports = {
  atlasSidebar: [
    { type: 'doc', id: 'project-overview', label: 'Project overview' },
    {
      type: 'category',
      label: 'Datasets',
      link: { type: 'doc', id: 'datasets/datasets-catalog' },
      items: catalog.datasets.map((item) => item.docId),
    },
    {
      type: 'category',
      label: 'Models',
      link: { type: 'doc', id: 'models/models-catalog' },
      items: catalog.models.map((item) => item.docId),
    },
  ],
};
