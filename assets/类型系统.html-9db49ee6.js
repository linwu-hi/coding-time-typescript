import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-bf85d718.js";const p={},o=e(`<h1 id="类型系统层级" tabindex="-1"><a class="header-anchor" href="#类型系统层级" aria-hidden="true">#</a> 类型系统层级</h1><p>TypeScript 的类型系统是强类型和静态类型的，这为开发者提供了强大的类型检查和类型安全保障，同时也增加了一定的学习复杂性。为了更好地理解 TypeScript 的类型系统，本文将全面介绍其类型系统层级，包括顶层类型（Top Type）和底层类型（Bottom Type），以及在这个层次结构中如何处理和操作各种类型。理解 TypeScript 的类型系统层级有助于我们更好地使用和掌握 TypeScript，写出更健壮、可维护的代码。</p><h2 id="_1-顶层类型-top-type" tabindex="-1"><a class="header-anchor" href="#_1-顶层类型-top-type" aria-hidden="true">#</a> 1. 顶层类型（Top Type）</h2><p>顶层类型是所有其他类型的父类型，这意味着在 TypeScript 中的任何类型都可以看作是顶层类型的子类型。TypeScript 中有两个特殊的顶层类型：<code>any</code>和<code>unknown</code>。</p><h3 id="_1-1-any-类型" tabindex="-1"><a class="header-anchor" href="#_1-1-any-类型" aria-hidden="true">#</a> 1.1 any 类型</h3><p><code>any</code>类型是 TypeScript 的一个逃生窗口，它可以接受任意类型的值，并且对 <code>any</code> 类型的值进行的任何操作都是允许的。使用 <code>any</code> 类型，可以使我们绕过 TypeScript 的类型检查。下面的例子展示了 <code>any</code> 类型的灵活性：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>  <span class="token comment">// OK</span>
a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// OK</span>
a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// OK</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>

a<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，我们可以将任何类型的值赋给 <code>any</code> 类型的变量，甚至可以对 <code>any</code> 类型的值进行我们想要的任何操作，而 TypeScript 编译器并不会对此做出任何投诉。然而，正是由于其超高的灵活性，使得 <code>any</code> 类型在一定程度上削弱了 TypeScript 的类型安全性，因此在我们编写 TypeScript 代码时，应尽量避免使用 <code>any</code> 类型。</p><h3 id="_1-2-unknown-类型" tabindex="-1"><a class="header-anchor" href="#_1-2-unknown-类型" aria-hidden="true">#</a> 1.2 unknown 类型</h3><p><code>unknown</code> 类型与 <code>any</code> 类型在接受任何类型的值这一点上是一样的，但 <code>unknown</code> 类型却不能像 <code>any</code> 类型那样对其进行任何操作。我们在对 <code>unknown</code> 类型的值进行操作之前，必须进行类型检查或类型断言，确保操作的安全性。</p><p>下面的例子展示了 <code>unknown</code> 类型的使用：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>  <span class="token comment">// OK</span>
u <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// OK</span>
u <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// OK</span>
u <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>

<span class="token comment">// Error: Object is of type &#39;unknown&#39;.</span>
<span class="token comment">// u.foo(); </span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> u <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> u <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// OK after type check</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u <span class="token keyword">as</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>

 name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们对 <code>unknown</code> 类型的值 <code>u</code> 进行了类型检查，然后通过类型断言安全地访问了其 <code>name</code> 属性。</p><h2 id="_2-底层类型-bottom-type" tabindex="-1"><a class="header-anchor" href="#_2-底层类型-bottom-type" aria-hidden="true">#</a> 2. 底层类型（Bottom Type）</h2><p>与顶层类型相对，底层类型是所有类型的子类型。这意味着，在类型系统的层次结构中，任何类型都可以被看作是底层类型的超类型。在 TypeScript 中，<code>never</code> 类型是唯一的底层类型。</p><p><code>never</code> 类型用来表示永远不可能存在的值的类型。比如，一个永远抛出错误或者永远处于死循环的函数的返回类型就是 <code>never</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">infiniteLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，函数 <code>error</code> 和 <code>infiniteLoop</code> 的返回类型都是 <code>never</code>，这是因为这两个函数都永远不会有返回值。</p><h2 id="_3-对比-顶层类型-vs-底层类型" tabindex="-1"><a class="header-anchor" href="#_3-对比-顶层类型-vs-底层类型" aria-hidden="true">#</a> 3. 对比：顶层类型 vs 底层类型</h2><p>顶层类型和底层类型是 TypeScript 类型系统的两个重要组成部分，它们各自扮演着不同的角色。</p><p>顶层类型 <code>any</code> 和 <code>unknown</code> 能够接受任何类型的值，这使得我们可以灵活地处理不确定类型的数据。然而，<code>any</code> 类型和 <code>unknown</code> 类型在使用上有着重要的区别：<code>any</code> 类型允许我们对其进行任何操作，而 <code>unknown</code> 类型则要求我们在操作之前进行类型检查或类型断言，以确保类型的安全性。</p><p>底层类型 <code>never</code> 有点特殊，它表示一个永远不会有值的类型。在实际开发中，我们可能很少直接使用 <code>never</code> 类型，但是它在 TypeScript 的类型推断和控制流分析中起着非常重要的作用。</p><p>理解 TypeScript 的类型系统层级有助于我们编写更健壮、可维护的 TypeScript 代码。尽管 <code>any</code> 类型提供了很大的灵活性，但是它的滥用可能会削弱 TypeScript 的类型安全性。因此，我们应尽量避免使用 <code>any</code> 类型，而优先使用 <code>unknown</code> 类型和类型断言、类型保护等方式来处理不确定类型的数据。同时，虽然我们可能很少直接使用 <code>never</code> 类型，但是理解它的含义和用法，对于我们理解 TypeScript 的类型推断和控制流分析也是非常有帮助的。</p>`,23),t=[o];function c(i,l){return s(),a("div",null,t)}const u=n(p,[["render",c],["__file","类型系统.html.vue"]]);export{u as default};
