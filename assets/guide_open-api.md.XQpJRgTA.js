import{_ as a}from"./chunks/open-api.DKbpWFp7.js";import{_ as i,c as s,o as e,U as t}from"./chunks/framework.51rFIiMq.js";const y=JSON.parse('{"title":"OpenAPI","description":"","frontmatter":{},"headers":[],"relativePath":"guide/open-api.md","filePath":"guide/open-api.md","lastUpdated":1703842623000}'),n={name:"guide/open-api.md"},p=t(`<h1 id="openapi" tabindex="-1">OpenAPI <a class="header-anchor" href="#openapi" aria-label="Permalink to &quot;OpenAPI&quot;">​</a></h1><blockquote><p>Wow OpenAPI 模块提供了基于 <a href="https://swagger.io/specification/" target="_blank" rel="noreferrer">OpenAPI</a> 规范的 API 接口。</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LQpbc" id="tab-_r3XncC" checked="checked"><label for="tab-_r3XncC">Gradle(Kotlin)</label><input type="radio" name="group-LQpbc" id="tab-VXUK5UI"><label for="tab-VXUK5UI">Gradle(Groovy)</label><input type="radio" name="group-LQpbc" id="tab-k3QO9zQ"><label for="tab-k3QO9zQ">Maven</label></div><div class="blocks"><div class="language-kotlin vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">implementation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;me.ahoo.wow:wow-openapi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">implementation </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;me.ahoo.wow:wow-openapi&#39;</span></span></code></pre></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;me.ahoo.wow&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;wow-openapi&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${wow.version}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><h2 id="swagger-ui" tabindex="-1">Swagger-UI <a class="header-anchor" href="#swagger-ui" aria-label="Permalink to &quot;Swagger-UI&quot;">​</a></h2><blockquote><p>Swagger-UI 是一个基于 OpenAPI 规范的 API 文档工具，可以通过 Swagger-UI 来查看和测试 API 接口。</p></blockquote><p><img src="`+a+'" alt="Swagger-UI"></p>',7),l=[p];function h(o,r,k,d,g,c){return e(),s("div",null,l)}const b=i(n,[["render",h]]);export{y as __pageData,b as default};
