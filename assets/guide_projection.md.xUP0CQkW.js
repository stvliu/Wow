import{_ as s,c as e,o as i,U as a}from"./chunks/framework.S0ywbvmF.js";const E=JSON.parse('{"title":"投影处理器","description":"","frontmatter":{},"headers":[],"relativePath":"guide/projection.md","filePath":"guide/projection.md","lastUpdated":1703842623000}'),t={name:"guide/projection.md"},n=a(`<h1 id="投影处理器" tabindex="-1">投影处理器 <a class="header-anchor" href="#投影处理器" aria-label="Permalink to &quot;投影处理器&quot;">​</a></h1><p><em>投影处理器</em>是一种将领域模型的状态以符合查询需求的形式进行组织和存储的机制。</p><p>由于 <em>EventStore</em> 中存储的是聚合根领域事件流，对于查询非常不友好。 通过结合 <em>CQRS</em> 架构模式，将<em>读模型</em>和<em>写模型</em>分开，允许针对查询的需求进行专门的优化。</p><p>在 <em>Wow</em> 框架中，<em>读模型投影</em>是通过定义<em>投影处理器</em>实现的。投影处理器负责处理领域事件，更新读模型的索引状态，以反映最新的数据状态。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要特别指出的是，当快照模式设置为 <code>all</code> 时，投影就不是必须的。</p><p>在一般场景中，聚合根的最新状态快照可以当做读模型，比如 <a href="./event-compensation.html">事件补偿控制台</a> 就没有定义投影处理器，直接使用了最新状态快照作为读模型。</p></div><ul><li>投影处理器需要标记 <code>@ProjectionProcessor</code> 注解，以便框架能够自动发现。</li><li>领域事件处理函数需要添加 <code>@OnEvent</code> 注解，但该注解不是必须的，默认情况下命名为 <code>onEvent</code> 即表明该函数为领域事件处理函数。</li><li>领域事件处理函数接受的参数为：具体领域事件 (<code>OrderCreated</code>)、领域事件 (<code>DomainEvent&lt;OrderCreated&gt;</code>)。</li></ul><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@ProjectionProcessor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OrderProjector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(orderCreated: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OrderCreated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 根据领域事件更新读模型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,7),l=[n];function o(p,r,c,d,h,k){return i(),e("div",null,l)}const _=s(t,[["render",o]]);export{E as __pageData,_ as default};
