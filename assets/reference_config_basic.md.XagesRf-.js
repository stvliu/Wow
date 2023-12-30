import{_ as t,c as e,o as a,U as s}from"./chunks/framework.51rFIiMq.js";const u=JSON.parse('{"title":"基础","description":"","frontmatter":{},"headers":[],"relativePath":"reference/config/basic.md","filePath":"reference/config/basic.md","lastUpdated":1703842623000}'),o={name:"reference/config/basic.md"},i=s(`<h1 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当前配置文档仅涵盖规范级别的公共配置，有关各模块的具体配置，请查阅相应模块的配置文档。</p></div><h2 id="wowproperties" tabindex="-1">WowProperties <a class="header-anchor" href="#wowproperties" aria-label="Permalink to &quot;WowProperties&quot;">​</a></h2><ul><li><a href="https://github.com/Ahoo-Wang/Wow/blob/main/wow-spring-boot-starter/src/main/kotlin/me/ahoo/wow/spring/boot/starter/WowProperties.kt" target="_blank" rel="noreferrer">WowProperties</a></li><li>前缀：<code>wow.</code></li></ul><table><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>enabled</code></td><td><code>Boolean</code></td><td>是否启用</td><td><code>true</code></td></tr><tr><td><code>context-name</code></td><td><code>String</code></td><td>限界上下文名称</td><td><code>\${spring.application.name}</code></td></tr></tbody></table><h2 id="busproperties" tabindex="-1">BusProperties <a class="header-anchor" href="#busproperties" aria-label="Permalink to &quot;BusProperties&quot;">​</a></h2><blockquote><p><code>BusProperties</code> 是 <code>CommandBus</code> 和 <code>EventBus</code> 的公共配置。</p></blockquote><ul><li><a href="https://github.com/Ahoo-Wang/Wow/blob/main/wow-spring-boot-starter/src/main/kotlin/me/ahoo/wow/spring/boot/starter/BusProperties.kt" target="_blank" rel="noreferrer">BusProperties</a></li></ul><table><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>BusType</code></td><td>消息总线类型</td><td><code>kafka</code></td></tr><tr><td><code>local-first</code></td><td><code>LocalFirstProperties</code></td><td>LocalFist 模式</td><td></td></tr></tbody></table><h3 id="bustype" tabindex="-1">BusType <a class="header-anchor" href="#bustype" aria-label="Permalink to &quot;BusType&quot;">​</a></h3><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BusType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    KAFKA,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    REDIS,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    IN_MEMORY,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    NO_OP;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="localfirstproperties" tabindex="-1">LocalFirstProperties <a class="header-anchor" href="#localfirstproperties" aria-label="Permalink to &quot;LocalFirstProperties&quot;">​</a></h3><table><thead><tr><th>名称</th><th>数据类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>enabled</code></td><td><code>Boolean</code></td><td>是否启用</td><td><code>true</code></td></tr></tbody></table>`,13),r=[i];function d(l,n,c,h,p,b){return a(),e("div",null,r)}const g=t(o,[["render",d]]);export{u as __pageData,g as default};
