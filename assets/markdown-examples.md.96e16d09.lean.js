import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{p as a,q as t,V as e}from"./framework.44a1938f.js";const g='{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"Syntax Highlighting","slug":"syntax-highlighting"},{"level":2,"title":"Custom Containers","slug":"custom-containers"},{"level":2,"title":"More","slug":"more"}],"relativePath":"markdown-examples.md","lastUpdated":1742219533661}',o={};function i(p,n,r,l,c,d){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-hidden="true">#</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-hidden="true">#</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noopener noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language-md"><pre><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js{4}</span>
<span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p><strong>Output</strong></p><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a></h2><p><strong>Input</strong></p><div class="language-md"><pre><code>::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
</code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning.</p></div><p>::: details This is a details block. :::</p><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-hidden="true">#</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noopener noreferrer">full list of markdown extensions</a>.</p>`,19)]))}var k=s(o,[["render",i]]);export{g as __pageData,k as default};
