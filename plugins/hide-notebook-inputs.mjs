const hideNotebookInputs = {
  name: 'hide-notebook-inputs',
  doc: 'Collapse executable notebook code inputs by default.',
  stage: 'document',
  plugin: (_, utils) => (tree) => {
    utils.selectAll('code', tree).forEach((node) => {
      if (node.executable && node.visibility !== 'remove') {
        node.visibility = 'hide';
      }
    });
  },
};

export default {
  name: 'Hide Notebook Inputs',
  transforms: [hideNotebookInputs],
};