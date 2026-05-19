# Copilot Instructions

This repository is a concise technical book. Write with formal, precise definitions first, then compact examples and figures. Avoid conversational tutorial prose.

For Jupyter notebooks:

- Put the concept map or table of contents at the top of the notebook.
- Use LaTeX for mathematics everywhere in markdown and figure labels. Prefer consistent notation such as `$A \in \mathbb{R}^{m \times n}$`, `$\mathcal{C}(A)$`, `$\mathcal{N}(A)$`, `$\operatorname{rank}(A)$`, `$\dim W$`, `$T_pM$`, and `$N_pM$`.
- Do not use `print` statements as exposition. Explain concepts in markdown and in labeled plots or diagrams. Code cells should not produce stdout dumps.
- Keep notebook cells valid and structured. Each cell must include `metadata.language`; existing cells must preserve a stable `metadata.id` when editing notebook JSON directly.
- Use compact, book-style code examples. Prefer figures that label the mathematical object being illustrated.

Use this plotting style in notebook setup cells:

```python
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib import rcParams

sns.set_theme(context='talk', style='ticks', palette='dark')
plt.rcParams['figure.dpi'] = 300
plt.rcParams['mathtext.fontset'] = 'cm'
plt.rcParams['font.family'] = 'serif'
plt.rcParams["savefig.transparent"] = True
plt.rcParams['axes.spines.top'] = False
plt.rcParams['axes.spines.right'] = False
plt.rcParams['lines.linewidth'] = 1
plt.rcParams['figure.figsize'] = [3.0, 3.0]
plt.rcParams['patch.linewidth'] = 0
rcParams['image.interpolation'] = 'none'
plt.rcParams.update({
    "legend.frameon": False,
    "legend.loc": "lower right",
})
```

Every plot should call `sns.despine(trim=True, offset=10)` before `plt.show()`.