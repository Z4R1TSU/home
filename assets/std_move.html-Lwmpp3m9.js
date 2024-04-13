import{_ as t,r as o,o as p,c as l,a as s,b as n,d as c,e as a}from"./app-Be7KFTk8.js";const i="/home/assets/std_move-xrOVG-Jw.png",r={},d=a(`<h1 id="std-move" tabindex="-1"><a class="header-anchor" href="#std-move"><span>std::move</span></a></h1><h3 id="左值和右值" tabindex="-1"><a class="header-anchor" href="#左值和右值"><span>左值和右值</span></a></h3><ol><li>左值: 赋值表达式结束后仍然存在的持久对象</li><li>右值: 赋值表达式用完即丢的临时对象</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 这里n是左值，1是右值，n在赋值完还会继续存在，但是1就会消失</span>
    <span class="token number">1</span> <span class="token operator">=</span> n<span class="token punctuation">;</span> <span class="token comment">// 这里就是一个错误的语法，值从右传递到左，1在分配后就会被移除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><blockquote><p>划重点: std::move就是一个右值引用</p></blockquote><h3 id="move的原理" tabindex="-1"><a class="header-anchor" href="#move的原理"><span>move的原理</span></a></h3><p>比如说我这里有一个class My，它的组成是这样的</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">My</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>string s<span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> v<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我分配了两个My类的instance分别为a和b，当我进行 <code>b = std::move(a)</code> 操作时候，实际的情况如下图所示</p>`,10),m=s("br",null,null,-1),u={href:"https://space.bilibili.com/312883756",target:"_blank",rel:"noopener noreferrer"},v=s("img",{src:i,alt:"https://www.bilibili.com/video/BV1vT411X7JA/?spm_id_from=333.337.search-card.all.click&vd_source=f53099189814dd887f4ab25638e07406"},null,-1),k=a('<p>这个图可以说是一目了然了。move直接让b指向了a的内容，同时也将a的内容全都如同右值那样直接舍弃和移除。</p><ul><li><p>外显的效果就是将a中的所有内容都迁移到了b当中</p></li><li><p>这不同于普通的copy，在copy完之后a还是有内容的，b只是保留得到了一个a的副本。</p></li></ul><p><strong>但是</strong>，需要提一点的是，在<code>std::move</code>当中还有一些特性...<br> 比如Small String Optimization(短字符串优化)，它会在你实际move之前先判断你要move的string长不长。如果长，那么我们就跟上面讲的一样，进行这种迁移，a本身的内容不会存在了；但如果这个string很短，我们就会直接对其进行拷贝。<br> (再扯一点，这也是为什么短字符串在stack中，而长字符串在heap上)</p><h3 id="move的优点" tabindex="-1"><a class="header-anchor" href="#move的优点"><span>move的优点</span></a></h3><p>最后来聊聊move有什么让我们不得不去用它的理由</p><ol><li>减少不必要的数据复制，使得性能开销一定程度的减小，从而达到提高性能的作用</li></ol><p><s>emmm可能我就只能列出这一项吧</s></p>',7);function h(b,_){const e=o("ExternalLinkIcon");return p(),l("div",null,[d,s("p",null,[n("我尽量把图片出处都搞清楚。"),m,n(" 这张来自B站UP"),s("a",u,[n("happyyang的百草园"),c(e)]),n("，很有实力的老哥。 "),v]),k])}const f=t(r,[["render",h],["__file","std_move.html.vue"]]),x=JSON.parse('{"path":"/posts/std_move.html","title":"std::move","lang":"en-US","frontmatter":{"category":["Cpp STL"],"tag":["Cpp"]},"headers":[{"level":3,"title":"左值和右值","slug":"左值和右值","link":"#左值和右值","children":[]},{"level":3,"title":"move的原理","slug":"move的原理","link":"#move的原理","children":[]},{"level":3,"title":"move的优点","slug":"move的优点","link":"#move的优点","children":[]}],"git":{"updatedTime":1712570980000,"contributors":[{"name":"Zari_Tsu","email":"zaritsu030907@gmail.com","commits":3}]},"filePathRelative":"posts/std_move.md","excerpt":"\\n<h3>左值和右值</h3>\\n<ol>\\n<li>左值: 赋值表达式结束后仍然存在的持久对象</li>\\n<li>右值: 赋值表达式用完即丢的临时对象</li>\\n</ol>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code>    <span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">;</span>\\n    n <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 这里n是左值，1是右值，n在赋值完还会继续存在，但是1就会消失</span>\\n    <span class=\\"token number\\">1</span> <span class=\\"token operator\\">=</span> n<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 这里就是一个错误的语法，值从右传递到左，1在分配后就会被移除</span>\\n</code></pre></div>"}');export{f as comp,x as data};
