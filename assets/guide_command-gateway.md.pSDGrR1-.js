import{_ as s,c as a,o as i,U as e}from"./chunks/framework.S0ywbvmF.js";const n="/wow/assets/send-command.0mapJPZD.svg",m=JSON.parse('{"title":"命令网关","description":"","frontmatter":{},"headers":[],"relativePath":"guide/command-gateway.md","filePath":"guide/command-gateway.md","lastUpdated":1703842623000}'),t={name:"guide/command-gateway.md"},l=e('<h1 id="命令网关" tabindex="-1">命令网关 <a class="header-anchor" href="#命令网关" aria-label="Permalink to &quot;命令网关&quot;">​</a></h1><p>命令网关是系统中接收和发送命令的核心组件，作为命令的入口点发挥关键作用。 它是命令总线的扩展，不仅负责命令的传递，还增加了一系列重要的职责，包括命令的幂等性、等待策略以及命令验证。</p><h2 id="发送命令" tabindex="-1">发送命令 <a class="header-anchor" href="#发送命令" aria-label="Permalink to &quot;发送命令&quot;">​</a></h2><p><img src="'+n+`" alt="发送命令 - 命令网关"></p><h2 id="幂等性" tabindex="-1">幂等性 <a class="header-anchor" href="#幂等性" aria-label="Permalink to &quot;幂等性&quot;">​</a></h2><p>命令幂等性是确保相同命令在系统中最多执行一次的原则。</p><p>命令网关通过使用 <code>IdempotencyChecker</code> 对命令的 <code>RequestId</code> 进行幂等性检查。 如果命令已经执行过，则会抛出 <code>DuplicateRequestIdException</code> 异常，防止对同一命令的重复执行。</p><p>以下是一个示例的 HTTP 请求，展示了如何在请求中使用 <code>Command-Request-Id</code> 来确保命令的幂等性：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>开发者也可以通过<code>CommandMessage</code>的<code>requestId</code>属性自定义<code>RequestId</code>。</p></div><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">POST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http://localhost:8080/account/create_account</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/json</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Stage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCESSED</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 30000</span></span>
<span class="line has-focus"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Request-Id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {{$uuid}}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Aggregate-Id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sourceId</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;balance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="等待策略" tabindex="-1">等待策略 <a class="header-anchor" href="#等待策略" aria-label="Permalink to &quot;等待策略&quot;">​</a></h2><p><em>命令等待策略</em>指的是命令网关在发送命令后，等待命令执行结果的一种策略。</p><p><em>命令等待策略</em>是 <em>Wow</em> 框架中的重要特性，其目标是解决 <em>CQRS</em> 、读写分离模式下数据同步延迟的问题。</p><p>命令等待策略（<code>WaitStrategy</code>）支持的等待信号如下：</p><ul><li><code>SENT</code> : 当命令发布到命令总线/队列后，生成完成信号</li><li><code>PROCESSED</code> : 当命令被聚合根处理完成后，生成完成信号</li><li><code>SNAPSHOT</code> : 当快照被生成后，生成完成信号</li><li><code>PROJECTED</code> : 当命令产生的事件<em>投影</em>完成后，生成完成信号</li><li><code>EVENT_HANDLED</code> : 当命令产生的事件被<em>事件处理器</em>处理完成后，生成完成信号</li><li><code>SAGA_HANDLED</code> : 当命令产生的事件被<em>Saga</em>处理完成后，生成完成信号</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-nnS_d" id="tab-hVTeRIq" checked="checked"><label for="tab-hVTeRIq">http</label><input type="radio" name="group-nnS_d" id="tab-BnIxXMZ"><label for="tab-BnIxXMZ">kotlin</label></div><div class="blocks"><div class="language-http vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">POST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http://localhost:8080/account/create_account</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/json</span></span>
<span class="line has-focus"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Stage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCESSED</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 30000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Request-Id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {{$uuid}}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Aggregate-Id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sourceId</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;balance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commamdGateway.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendAndWaitForProcessed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message)</span></span></code></pre></div></div></div><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h2><p>命令网关在发送命令之前会使用 <code>jakarta.validation.Validator</code> 对命令进行验证，如果验证失败，将会抛出 CommandValidationException 异常。</p><p>通过利用 <code>jakarta.validation.Validator</code>，开发者可以使用 <code>jakarta.validation</code> 提供的各种验证注解，确保命令符合指定的规范和条件。</p>`,19),p=[l];function h(d,k,o,c,r,g){return i(),a("div",null,p)}const u=s(t,[["render",h]]);export{m as __pageData,u as default};
