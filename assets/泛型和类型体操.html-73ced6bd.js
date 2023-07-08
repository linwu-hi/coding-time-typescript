import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-bf85d718.js";const t={},p=e(`<h1 id="泛型和类型体操" tabindex="-1"><a class="header-anchor" href="#泛型和类型体操" aria-hidden="true">#</a> 泛型和类型体操</h1><p>泛型和类型体操（Type Gymnastics）是 TypeScript 中高级类型系统的重要组成部分。它们提供了强大的工具和技巧，用于处理复杂的类型操作和转换。</p><h2 id="泛型-generics" tabindex="-1"><a class="header-anchor" href="#泛型-generics" aria-hidden="true">#</a> 泛型（Generics）</h2><h3 id="_1-泛型函数" tabindex="-1"><a class="header-anchor" href="#_1-泛型函数" aria-hidden="true">#</a> 1. 泛型函数</h3><p>泛型函数允许我们在函数定义中使用类型参数，以便在函数调用时动态指定类型。例如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// result 的类型为 number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>identity</code> 函数使用类型参数 <code>T</code>，并返回与输入类型相同的值。通过显式传递泛型参数，我们可以确保在函数调用时指定了具体的类型。</p><h3 id="_2-泛型接口" tabindex="-1"><a class="header-anchor" href="#_2-泛型接口" aria-hidden="true">#</a> 2. 泛型接口</h3><p>泛型接口允许我们在接口定义中使用类型参数，以便在实现该接口时指定具体的类型。例如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Container<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> container<span class="token operator">:</span> Container<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们定义了一个泛型接口 <code>Container</code>，它包含一个类型参数 <code>T</code>。通过指定 <code>Container&lt;number&gt;</code>，我们创建了一个具体的实现，其中的 <code>value</code> 属性类型为 <code>number</code>。</p><h3 id="_3-泛型类" tabindex="-1"><a class="header-anchor" href="#_3-泛型类" aria-hidden="true">#</a> 3. 泛型类</h3><p>泛型类允许我们在类定义中使用类型参数，以便在创建类的实例时指定具体的类型。例如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">push</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> item <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// item 的类型为 number | undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们定义了一个泛型类 <code>Stack</code>，它使用类型参数 <code>T</code> 来表示堆栈中的元素类型。通过创建 <code>Stack&lt;number&gt;</code> 的实例，我们限制了堆栈中的元素必须为 <code>number</code> 类型。</p><h2 id="类型体操-type-gymnastics" tabindex="-1"><a class="header-anchor" href="#类型体操-type-gymnastics" aria-hidden="true">#</a> 类型体操（Type Gymnastics）</h2><h3 id="_1-条件类型-conditional-types" tabindex="-1"><a class="header-anchor" href="#_1-条件类型-conditional-types" aria-hidden="true">#</a> 1. 条件类型（Conditional Types）</h3><p>条件类型允许我们根据输入类型的条件判断结果来选择不同的类型。条件类型的语法形式为：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token constant">X</span> <span class="token operator">:</span> <span class="token constant">Y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>T</code> 是待检查的类型，<code>U</code> 是条件类型，<code>X</code> 是满足条件时返回的类型，<code>Y</code> 是不满足条件时返回的类型。</p><p>下面是一个使用条件类型的示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Check<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> Check<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// Result 的类型为 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们定义了一个条件</p><p>类型 <code>Check&lt;T&gt;</code>，它接受一个类型参数 <code>T</code>。如果 <code>T</code> 是 <code>string</code> 类型，那么 <code>Check&lt;T&gt;</code> 的类型将是 <code>true</code>，否则为 <code>false</code>。</p><h3 id="_2-keyof-操作符和索引访问类型" tabindex="-1"><a class="header-anchor" href="#_2-keyof-操作符和索引访问类型" aria-hidden="true">#</a> 2. <code>keyof</code> 操作符和索引访问类型</h3><p><code>keyof</code> 操作符用于获取类型的所有属性名，结合索引访问类型可以从一个类型中获取属性的具体类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PersonKeys</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Person<span class="token punctuation">;</span>  <span class="token comment">// &quot;name&quot; | &quot;age&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">PersonNameType</span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们使用 <code>keyof</code> 操作符获取了 <code>Person</code> 接口的属性名集合，并通过索引访问类型获取了 <code>Person</code> 接口中 <code>name</code> 属性的类型。</p><h3 id="_3-infer-关键字" tabindex="-1"><a class="header-anchor" href="#_3-infer-关键字" aria-hidden="true">#</a> 3. <code>infer</code> 关键字</h3><p><code>infer</code> 关键字用于在条件类型中推断类型，并将其赋值给一个类型变量。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">AddReturnValue</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> add<span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// 类型为 number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>ReturnType</code> 类型接受一个类型参数 <code>T</code>，并使用条件类型和 <code>infer</code> 关键字推断函数类型的返回类型。通过调用 <code>ReturnType&lt;typeof add&gt;</code>，我们推断出 <code>add</code> 函数的返回类型为 <code>number</code>。</p><p>当涉及到泛型时，还有一些重要的概念和内置泛型函数可以深入分析。让我们继续探讨 <code>extends</code> 关键字、TS 官方内置的一些泛型函数以及它们的使用。</p><h2 id="extends-关键字和类型约束" tabindex="-1"><a class="header-anchor" href="#extends-关键字和类型约束" aria-hidden="true">#</a> <code>extends</code> 关键字和类型约束</h2><p>在泛型中，我们可以使用 <code>extends</code> 关键字来对泛型类型进行约束。这样可以确保传递给泛型的类型满足特定条件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">printProperty</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出 &#39;John&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>printProperty</code> 函数接受一个泛型参数 <code>T</code>，该参数必须满足一个约束条件：具有 <code>name</code> 属性，且 <code>name</code> 的类型为 <code>string</code>。通过使用 <code>extends</code> 关键字和类型约束，我们可以确保 <code>obj</code> 参数具有所需的属性和类型，从而避免出现错误。</p><h3 id="泛型函数util" tabindex="-1"><a class="header-anchor" href="#泛型函数util" aria-hidden="true">#</a> 泛型函数Util</h3><p>TypeScript 提供了一些内置的泛型函数，这些函数被广泛用于处理各种类型操作。以下是一些常见的官方内置泛型函数：</p><h4 id="partial-t" tabindex="-1"><a class="header-anchor" href="#partial-t" aria-hidden="true">#</a> <code>Partial&lt;T&gt;</code></h4><p><code>Partial&lt;T&gt;</code> 是 TypeScript 中的一个内置泛型类型，它可以将给定类型 <code>T</code> 中的所有属性转换为可选属性。这对于创建部分完整的对象非常有用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PartialPerson</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> partialPerson<span class="token operator">:</span> PartialPerson <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// age 属性是可选的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>Partial&lt;Person&gt;</code> 将 <code>Person</code> 接口中的所有属性变为可选属性，从而创建了一个部分完整的 <code>PartialPerson</code> 类型。</p><h4 id="required-t" tabindex="-1"><a class="header-anchor" href="#required-t" aria-hidden="true">#</a> <code>Required&lt;T&gt;</code></h4><p><code>Required&lt;T&gt;</code> 是 TypeScript 中的另一个内置泛型类型，它可以将给定类型 <code>T</code> 中的所有可选属性转换为必需属性。这对于确保对象的完整性非常有用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">RequiredPerson</span> <span class="token operator">=</span> Required<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> requiredPerson<span class="token operator">:</span> RequiredPerson <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// name 和 age 属性是必需的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>Required&lt;Person&gt;</code> 将 <code>Person</code> 接口中的所有可选属性变为必需属性，从而创建了一个要求完整性的 <code>RequiredPerson</code> 类型。</p><h4 id="pick-t-k" tabindex="-1"><a class="header-anchor" href="#pick-t-k" aria-hidden="true">#</a> <code>Pick&lt;T, K&gt;</code></h4><p><code>Pick&lt;T, K&gt;</code> 是 TypeScript 中的另一个内置泛型函数，它可以从给定类型 <code>T</code> 中选择指定的属性 <code>K</code> 组成一个新的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">NameAndAge</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> NameAndAge <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span>

 <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// 只包含 name 和 age 属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>Pick&lt;Person, &#39;name&#39; | &#39;age&#39;&gt;</code> 从 <code>Person</code> 接口中选择了 <code>&#39;name&#39;</code> 和 <code>&#39;age&#39;</code> 属性，创建了一个新的类型 <code>NameAndAge</code>。</p><p>我们还可以结合泛型和内置泛型函数来实现更复杂的类型操作。以下是一个示例，展示了如何使用 <code>Pick</code> 和泛型来创建一个函数，该函数从给定对象中选择指定属性，并返回一个新的对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">pickProperties</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> keys<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result<span class="token operator">:</span> Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result <span class="token keyword">as</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  address<span class="token operator">:</span> <span class="token string">&#39;123 Main St&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> nameAndAge <span class="token operator">=</span> <span class="token function">pickProperties</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 只包含 name 和 age 属性</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nameAndAge<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: { name: &#39;John&#39;, age: 25 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>pickProperties</code> 函数接受一个泛型参数 <code>T</code> 和一个属性数组 <code>keys</code>。通过使用 <code>Pick&lt;T, K&gt;</code>，我们将从给定对象 <code>obj</code> 中选择指定的属性 <code>keys</code>，并创建一个新的对象。</p><p>这个例子结合了泛型、内置泛型函数 <code>Pick</code>、<code>keyof</code> 操作符和 <code>extends</code> 关键字，展示了如何在 TypeScript 中处理复杂的类型操作和转换。</p><p>当涉及到官方内置的泛型函数时，还有一些重要的函数值得分析。让我们继续探讨一些常用的官方内置泛型函数以及它们的使用。</p><h3 id="exclude-t-u" tabindex="-1"><a class="header-anchor" href="#exclude-t-u" aria-hidden="true">#</a> <code>Exclude&lt;T, U&gt;</code></h3><p><code>Exclude&lt;T, U&gt;</code> 是 TypeScript 中的一个内置泛型函数，用于从类型 <code>T</code> 中排除类型 <code>U</code>。它返回一个新类型，该新类型包含在 <code>T</code> 中存在但不在 <code>U</code> 中存在的成员类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;b&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// T 的类型为 &quot;c&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的示例中，<code>Exclude&lt;&quot;a&quot; | &quot;b&quot; | &quot;c&quot;, &quot;a&quot; | &quot;b&quot;&gt;</code> 排除了类型 <code>&quot;a&quot;</code> 和 <code>&quot;b&quot;</code>，返回类型为 <code>&quot;c&quot;</code>。</p><h3 id="omit-t-k" tabindex="-1"><a class="header-anchor" href="#omit-t-k" aria-hidden="true">#</a> <code>Omit&lt;T, K&gt;</code></h3><p><code>Omit&lt;T, K&gt;</code> 是 TypeScript 中的另一个内置泛型函数，它返回一个新类型，该新类型排除了类型 <code>T</code> 中指定的属性 <code>K</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PersonWithoutAddress</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;address&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>Omit&lt;Person, &quot;address&quot;&gt;</code> 返回了一个新类型 <code>PersonWithoutAddress</code>，该类型排除了 <code>Person</code> 接口中的 <code>address</code> 属性。</p><h3 id="readonly-t" tabindex="-1"><a class="header-anchor" href="#readonly-t" aria-hidden="true">#</a> <code>Readonly&lt;T&gt;</code></h3><p><code>Readonly&lt;T&gt;</code> 是 TypeScript 中的另一个内置泛型函数，它将类型 <code>T</code> 中的所有属性转换为只读属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">ReadonlyPerson</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>Readonly&lt;Person&gt;</code> 将 <code>Person</code> 接口中的所有属性变为只读属性，创建了一个新类型 <code>ReadonlyPerson</code>。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>泛型和类型体操是 TypeScript 中强大的类型系统的关键组成部分。通过使用泛型，我们可以创建可重用、灵活和类型安全的代码。内置泛型函数提供了一些常用的类型转换工具，如 <code>Partial</code>、<code>Required</code> 和 <code>Pick</code>，可以帮助我们更方便地处理类型操作。</p><p>通过结合泛型、<code>extends</code> 关键字、内置泛型函数和其他高级类型概念，我们能够在 TypeScript 中编写更复杂、类型安全的代码，并利用 TypeScript 的强大类型系统来提高代码的可读性、可维护性和可扩展性。</p>`,71),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","泛型和类型体操.html.vue"]]);export{u as default};
