import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-06d34901.js";const o={},p=e(`<h1 id="类型兼容-协变和逆变" tabindex="-1"><a class="header-anchor" href="#类型兼容-协变和逆变" aria-hidden="true">#</a> 类型兼容：协变和逆变</h1><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>在类型系统中，协变和逆变是对类型比较(<code>类型兼容</code>)一种形式化描述。在一些类型系统中，例如 Java，这些概念是显式嵌入到语言中的，例如使用<code>extends</code>关键字表示协变，使用<code>super</code>关键字表示逆变。在其他一些类型系统中，例如 TypeScript，协变和逆变的规则是隐式嵌入的，通过类型兼容性检查来实现。</p><p>协变和逆变的存在使得类型系统具有更大的灵活性。例如，如果你有一个<code>Animal</code>类型的数组，并且你有一个<code>Dog</code>类型的对象（假设<code>Dog</code>是<code>Animal</code>的子类型），那么你应该能够将<code>Dog</code>对象添加到<code>Animal</code>数组中。这就是协变。反过来，如果你有一个处理<code>Animal</code>类型对象的函数，并且你有一个<code>Dog</code>类型的对象，你应该可以使用这个函数来处理<code>Dog</code>对象。这就是逆变。</p><p>协变和逆变还可以帮助我们创建更通用的代码。例如，如果你有一个可以处理任何<code>Animal</code>的函数，那么这个函数应该能够处理任何<code>Animal</code>的子类型。这意味着，你可以编写一段只依赖于<code>Animal</code>类型的代码，然后使用这段代码处理任何<code>Animal</code>的子类型。</p><h2 id="协变-covariance" tabindex="-1"><a class="header-anchor" href="#协变-covariance" aria-hidden="true">#</a> 协变（Covariance）</h2><p>协变描述的是如果存在类型A和B，并且A是B的子类型，那么我们就可以说由A组成的复合类型（例如<code>Array&lt;A&gt;</code>或者<code>(a: A) =&gt; void</code>）也是由B组成的相应复合类型（例如<code>Array&lt;B&gt;</code>或者<code>(b: B) =&gt; void</code>）的子类型。</p><p>让我们通过一个例子来理解协变。假设我们有两个类型<code>Animal</code>和<code>Dog</code>，其中<code>Dog</code>是<code>Animal</code>的子类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span> breed<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> dogs<span class="token operator">:</span> Dog<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Fido&quot;</span><span class="token punctuation">,</span> breed<span class="token operator">:</span> <span class="token string">&quot;Poodle&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> animals<span class="token operator">:</span> Animal<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> dogs<span class="token punctuation">;</span>  <span class="token comment">// OK because Dog extends Animal, Dog[] is a subtype of Animal[]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们可以将类型为<code>Dog[]</code>的<code>dogs</code>赋值给类型为<code>Animal[]</code>的<code>animals</code>，因为<code>Dog[]</code>是<code>Animal[]</code>的子类型，所以数组是协变的。</p><h3 id="协变-类型的向下兼容性" tabindex="-1"><a class="header-anchor" href="#协变-类型的向下兼容性" aria-hidden="true">#</a> 协变：类型的向下兼容性</h3><p>协变是类型系统中的一个基本概念，它描述的是类型的“向下兼容性”。如果一个类型A可以被看作是另一个类型B的子类型（即A可以被安全地用在期望B的任何地方），那么我们就说A到B是协变的。这是类型系统中最常见和直观的一种关系，例如在面向对象编程中的继承就是协变的一种表现。</p><p>在TypeScript中，所有的类型都是自身的子类型（即每个类型到自身是协变的），并且<code>null</code>和<code>undefined</code>类型是所有类型的子类型。除此之外，接口和类也可以通过继承来形成协变关系。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  breed<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myDog<span class="token operator">:</span> Dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myAnimal<span class="token operator">:</span> Animal <span class="token operator">=</span> myDog<span class="token punctuation">;</span>  <span class="token comment">// OK，因为Dog是Animal的子类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中，我们可以将一个<code>Dog</code>对象赋值给一个<code>Animal</code>类型的变量，因为<code>Dog</code>到<code>Animal</code>是协变的。</p><p>在TypeScript中，泛型类型也是协变的。例如，如果类型A是类型B的子类型，那么<code>Array&lt;A&gt;</code>就是<code>Array&lt;B&gt;</code>的子类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> dogs<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Dog<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> animals<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Animal<span class="token operator">&gt;</span> <span class="token operator">=</span> dogs<span class="token punctuation">;</span>  <span class="token comment">// OK，因为Array&lt;Dog&gt;是Array&lt;Animal&gt;的子类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="逆变-contravariance" tabindex="-1"><a class="header-anchor" href="#逆变-contravariance" aria-hidden="true">#</a> 逆变（Contravariance）</h1><p>逆变是协变的反面。如果存在类型A和B，并且A是B的子类型，那么我们就可以说由B组成的某些复合类型是由A组成的相应复合类型的子类型。</p><p>这在函数参数中最常见。让我们来看一个例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span> breed<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token function-variable function">dogHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dog<span class="token operator">:</span> Dog<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>breed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">animalHandler</span><span class="token operator">:</span> <span class="token punctuation">(</span>animal<span class="token operator">:</span> Animal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">=</span> dogHandler<span class="token punctuation">;</span>  <span class="token comment">// Error! </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们不能将类型为<code>(dog: Dog) =&gt; void</code>的<code>dogHandler</code>赋值给类型为<code>(animal: Animal) =&gt; void</code>的<code>animalHandler</code>。因为如果我们传递一个<code>Animal</code>（并非所有的<code>Animal</code>都是<code>Dog</code>）给<code>animalHandler</code>，那么在执行<code>dogHandler</code>函数的时候，就可能会引用不存在的<code>breed</code>属性。因此，函数的参数类型是逆变的。</p><h2 id="逆变-类型的向上兼容性" tabindex="-1"><a class="header-anchor" href="#逆变-类型的向上兼容性" aria-hidden="true">#</a> 逆变：类型的向上兼容性</h2><p>逆变描述的是类型的“向上兼容性”。如果一个类型A可以被看作是另一个类型B的超类型（即B可以被安全地用在期望A的任何地方），那么我们就说A到B是逆变的。在函数参数类型的兼容性检查中，TypeScript使用了逆变。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> Animal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> animalHandler<span class="token operator">:</span> <span class="token function-variable function">Handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>animal<span class="token operator">:</span> Animal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dogHandler<span class="token operator">:</span> <span class="token function-variable function">Handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dog<span class="token operator">:</span> Dog<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// OK，因为Animal是Dog的超类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中，我们可以将一个处理\`</p><p>Dog<code>的函数赋值给一个处理</code>Animal<code>的函数类型的变量，因为</code>Animal<code>是</code>Dog<code>的超类型，所以</code>(dog: Dog) =&gt; void<code>类型是</code>(animal: Animal) =&gt; void\`类型的子类型。</p><p>这看起来可能有些反直觉，但实际上是为了保证类型安全。因为在执行<code>dogHandler</code>函数时，我们可以安全地传入一个<code>Animal</code>对象，而不需要担心它可能不是<code>Dog</code>类型。</p><h2 id="协变与逆变的平衡" tabindex="-1"><a class="header-anchor" href="#协变与逆变的平衡" aria-hidden="true">#</a> 协变与逆变的平衡</h2><p>协变和逆变在大多数情况下都可以提供合适的类型检查，但是它们并非完美无缺。在实际应用中，我们必须关注可能的边界情况，以避免运行时错误。在某些情况下，我们甚至需要主动破坏类型的协变或逆变，以获得更强的类型安全。例如，如果我们需要向一个<code>Dog[]</code>数组中添加<code>Animal</code>对象，我们可能需要将这个数组的类型声明为<code>Animal[]</code>，以防止添加不兼容的类型。</p><p>总的来说，协变和逆变是理解和应用TypeScript类型系统的重要工具，但我们必须在灵活性和类型安全之间找到合适的平衡。</p>`,31),t=[p];function c(l,i){return a(),s("div",null,t)}const u=n(o,[["render",c],["__file","协变和逆变.html.vue"]]);export{u as default};
