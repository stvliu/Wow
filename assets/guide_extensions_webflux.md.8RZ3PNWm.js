import{_ as s,c as i,o as a,U as e}from"./chunks/framework.S0ywbvmF.js";const g=JSON.parse('{"title":"WebFlux","description":"","frontmatter":{},"headers":[],"relativePath":"guide/extensions/webflux.md","filePath":"guide/extensions/webflux.md","lastUpdated":1703842623000}'),t={name:"guide/extensions/webflux.md"},l=e(`<h1 id="webflux" tabindex="-1">WebFlux <a class="header-anchor" href="#webflux" aria-label="Permalink to &quot;WebFlux&quot;">​</a></h1><p><em>WebFlux</em> 扩展提供了对 <em>WebFlux</em> 的支持，依赖 <code>wow-openapi</code> 模块生成的路由规范，自动注册命令路由处理函数。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--c-dZ" id="tab-CFUA2cq" checked="checked"><label for="tab-CFUA2cq">Gradle(Kotlin)</label><input type="radio" name="group--c-dZ" id="tab-T1PvGWr"><label for="tab-T1PvGWr">Gradle(Groovy)</label><input type="radio" name="group--c-dZ" id="tab-fB4PZfe"><label for="tab-fB4PZfe">Maven</label></div><div class="blocks"><div class="language-kotlin vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">implementation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;me.ahoo.wow:wow-webflux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">implementation </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;me.ahoo.wow:wow-webflux&#39;</span></span></code></pre></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;me.ahoo.wow&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;wow-webflux&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${wow.version}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div>`,4),n=[l];function p(h,d,o,k,r,E){return a(),i("div",null,n)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
