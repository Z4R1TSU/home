import{_ as s,r as i,o as l,c as t,a as e,b as n,d,e as c}from"./app-Be7KFTk8.js";const r={},m=e("h1",{id:"cmake",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cmake"},[e("span",null,"CMake")])],-1),o=e("p",null,"最近在做C++的项目，而vscode我这里因为一些环境的问题，不太能搞，所以用了cmake这个工具来实现项目的编译运行",-1),p=e("h2",{id:"cmake的原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cmake的原理"},[e("span",null,"CMake的原理")])],-1),v={href:"https://subingwen.cn/cmake/CMake-primer/index.html",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://subingwen.cn/cmake/CMake-primer/image-20230309130644912.png",alt:"CMake Formula"},null,-1),b=c(`<p>CMake的build需要我们先做一个CMakeLists.txt文件。我们结合我的实例来讲解。</p><h2 id="所有文件在同一目录下" tabindex="-1"><a class="header-anchor" href="#所有文件在同一目录下"><span>所有文件在同一目录下</span></a></h2><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构"><span>文件结构</span></a></h3><p>这是我的项目情况</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>╰─❯ tree
<span class="token punctuation">(</span>base<span class="token punctuation">)</span>
<span class="token builtin class-name">.</span>
├── CMakeLists.txt
├── test.cpp        // 包含头文件的测试文件
├── threadpool.cpp  // 源文件
└── threadpool.h    // 头文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以看到，这是一个典型的所有文件都在同一目录下的情况，从最简单的讲起。</p><h3 id="cmakelists-txt编写" tabindex="-1"><a class="header-anchor" href="#cmakelists-txt编写"><span>CMakeLists.txt编写</span></a></h3><p>下面是我的CmakeLists.txt的内容</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code># 设定CMake的最低版本要求
cmake_minimum_required(VERSION 3.0)

# 设置项目名称
project(MyThreadPool)

# 设置C++标准
set(CMAKE_CXX_STANDARD 11)

# 添加所有源文件到变量SOURCE
set(SOURCES
    test.cpp
    threadpool.cpp
)

# 创建一个名为test的可执行文件
add_executable(test \${SOURCES})

# 如果ThreadPool类有相关的头文件路径或者要链接的库，用下面的命令指定
# target_include_directories(test PRIVATE path/to/headers)
# target_link_libraries(test PRIVATE library_name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里注意几点: <ol><li>set的时候并不需要显式的添加头文件，比如这里的<strong>threadpool.h</strong>，cmake会自动查找源文件当中包含的头文件。但若有第三方库的头文件，则需要用<code>target_include_directories</code>命令手动添加</li><li>若源文件很多，比如还有1.c, 2.c...等着被包含，则可<div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code># 查找当前目录下的所有源文件，用这行替换set那行
# 并将名称保存到 DIR_SRCS 变量
aux_source_directory(. DIR_SRCS)

# 指定生成目标
add_executable(test \${DIR_SRCS})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ul><h3 id="构建和运行" tabindex="-1"><a class="header-anchor" href="#构建和运行"><span>构建和运行</span></a></h3><p>在编写完文件后，我们来运行这个文件。(默认cmake已添加进环境变量)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在项目根目录下创建build文件夹</span>
<span class="token function">mkdir</span> build <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> build
<span class="token comment"># 在根目录运行cmake</span>
cmake <span class="token punctuation">..</span>
<span class="token comment"># build来编译项目</span>
cmake <span class="token parameter variable">--build</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 若build目录已有可执行文件，则直接运行，完成运行</span>
./test.exe
<span class="token comment"># 若没有，则查看是否有Makefile，有则运行后再运行上一步</span>
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件分属不同文件夹下" tabindex="-1"><a class="header-anchor" href="#文件分属不同文件夹下"><span>文件分属不同文件夹下</span></a></h2><p>// TODO</p>`,15);function h(k,_){const a=i("ExternalLinkIcon");return l(),t("div",null,[m,o,p,e("p",null,[n("这个图片很直观，我觉得很好。来自于"),e("a",v,[n("大丙"),d(a)]),n("老哥的博客。 "),u]),b])}const x=s(r,[["render",h],["__file","cmake.html.vue"]]),C=JSON.parse('{"path":"/posts/cmake.html","title":"CMake","lang":"en-US","frontmatter":{"category":["Cpp project"],"tag":["Cpp","CMake"]},"headers":[{"level":2,"title":"CMake的原理","slug":"cmake的原理","link":"#cmake的原理","children":[]},{"level":2,"title":"所有文件在同一目录下","slug":"所有文件在同一目录下","link":"#所有文件在同一目录下","children":[{"level":3,"title":"文件结构","slug":"文件结构","link":"#文件结构","children":[]},{"level":3,"title":"CMakeLists.txt编写","slug":"cmakelists-txt编写","link":"#cmakelists-txt编写","children":[]},{"level":3,"title":"构建和运行","slug":"构建和运行","link":"#构建和运行","children":[]}]},{"level":2,"title":"文件分属不同文件夹下","slug":"文件分属不同文件夹下","link":"#文件分属不同文件夹下","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"posts/cmake.md","excerpt":"\\n<p>最近在做C++的项目，而vscode我这里因为一些环境的问题，不太能搞，所以用了cmake这个工具来实现项目的编译运行</p>\\n<h2>CMake的原理</h2>\\n<p>这个图片很直观，我觉得很好。来自于<a href=\\"https://subingwen.cn/cmake/CMake-primer/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">大丙</a>老哥的博客。\\n<img src=\\"https://subingwen.cn/cmake/CMake-primer/image-20230309130644912.png\\" alt=\\"CMake Formula\\"></p>"}');export{x as comp,C as data};
