import{u as r}from"./Debug.f2f81c5b.js";import{p as c,q as i,V as u,x as a,t,u as e,s}from"./framework.44a1938f.js";const x='{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Results","slug":"results"},{"level":3,"title":"Theme Data","slug":"theme-data"},{"level":3,"title":"Page Data","slug":"page-data"},{"level":3,"title":"Page Frontmatter","slug":"page-frontmatter"},{"level":2,"title":"More","slug":"more"}],"relativePath":"api-examples.md","lastUpdated":1742143871882}',d={},v=Object.assign(d,{__name:"api-examples",setup(k){const{site:g,theme:p,page:o,frontmatter:l}=r();return(m,n)=>(c(),i("div",null,[n[0]||(n[0]=u(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-hidden="true">#</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> theme<span class="token punctuation">,</span> page<span class="token punctuation">,</span> frontmatter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token title important"><span class="token punctuation">##</span> Results</span>

<span class="token title important"><span class="token punctuation">###</span> Theme Data</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ theme }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>

<span class="token title important"><span class="token punctuation">###</span> Page Data</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ page }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>

<span class="token title important"><span class="token punctuation">###</span> Page Frontmatter</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ frontmatter }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-hidden="true">#</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-hidden="true">#</a></h3>`,6)),a("pre",null,t(e(p)),1),n[1]||(n[1]=a("h3",{id:"page-data",tabindex:"-1"},[s("Page Data "),a("a",{class:"header-anchor",href:"#page-data","aria-hidden":"true"},"#")],-1)),a("pre",null,t(e(o)),1),n[2]||(n[2]=a("h3",{id:"page-frontmatter",tabindex:"-1"},[s("Page Frontmatter "),a("a",{class:"header-anchor",href:"#page-frontmatter","aria-hidden":"true"},"#")],-1)),a("pre",null,t(e(l)),1),n[3]||(n[3]=a("h2",{id:"more",tabindex:"-1"},[s("More "),a("a",{class:"header-anchor",href:"#more","aria-hidden":"true"},"#")],-1)),n[4]||(n[4]=a("p",null,[s("Check out the documentation for the "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noopener noreferrer"},"full list of runtime APIs"),s(".")],-1))]))}});export{x as __pageData,v as default};
