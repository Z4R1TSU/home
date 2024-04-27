import{_ as i,r as l,o as t,c as d,a as e,b as n,d as a,e as c}from"./app-BSbwKVVv.js";const r={},m=e("h1",{id:"cmake",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cmake"},[e("span",null,"CMake")])],-1),v={href:"https://www.bilibili.com/video/BV1mJ4m1n7Z6/?spm_id_from=333.999.0.0&vd_source=f53099189814dd887f4ab25638e07406",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"最近在做C++的项目，而vscode我这里因为一些环境的问题，不太能搞，所以用了cmake这个工具来实现项目的编译运行",-1),o=e("h2",{id:"cmake的原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cmake的原理"},[e("span",null,"CMake的原理")])],-1),p={href:"https://subingwen.cn/cmake/CMake-primer/index.html",target:"_blank",rel:"noopener noreferrer"},b=e("img",{src:"https://subingwen.cn/cmake/CMake-primer/image-20230309130644912.png",alt:"CMake Formula"},null,-1),h=c(`<p>CMake的build需要我们先做一个CMakeLists.txt文件。我们结合我的实例来讲解。</p><h2 id="所有文件在同一目录下" tabindex="-1"><a class="header-anchor" href="#所有文件在同一目录下"><span>所有文件在同一目录下</span></a></h2><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构"><span>文件结构</span></a></h3><p>这是我的项目情况</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>╰─❯ tree
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意每次修改文件后，都需要重新<code>make</code>一遍更新</p></blockquote><h2 id="文件分属不同文件夹下" tabindex="-1"><a class="header-anchor" href="#文件分属不同文件夹下"><span>文件分属不同文件夹下</span></a></h2><h3 id="文件结构-1" tabindex="-1"><a class="header-anchor" href="#文件结构-1"><span>文件结构</span></a></h3><p>这是项目情况:</p><p>head文件夹当中存储了头文件</p><p>src文件夹是源文件</p><p>test文件夹当中是测试文件</p><p>我们的目标是运行test.cpp，使之成为一个可执行文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>╰─❯ tree <span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
├── CMakeLists.txt
├── <span class="token function">head</span>
│   └── print_hello.h
├── src
│   └── print_hello.cpp
└── <span class="token builtin class-name">test</span>
    └── test.cpp

<span class="token number">4</span> directories, <span class="token number">4</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cmakelists-txt编写-1" tabindex="-1"><a class="header-anchor" href="#cmakelists-txt编写-1"><span>CMakeLists.txt编写</span></a></h3><p>我们现在项目根目录下创建<code>CMakeLists.txt</code>文件</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code># 设置CMake的最低版本要求
cmake_minimum_required(VERSION 3.10)

# 设置项目名称
project(MyProject)

# 将头文件目录添加到编译器的头文件搜索路径
include_directories(head)

# 添加src目录作为子目录，src目录下应有CMakeLists.txt为源文件提供构建规则
add_subdirectory(src)

# 指定生成可执行文件的名字和相关的源文件
add_executable(test_executable test/test.cpp)

# 将可执行文件与源文件目录下生成的库进行链接
target_link_libraries(test_executable source_lib)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在src目录下也创建一个<code>CMakeLists.txt</code>文件</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code># 添加库名称和源文件
add_library(source_lib print_hello.cpp)

# 为了确保库可以找到头文件，将头文件目录包含进来
target_include_directories(source_lib PUBLIC ../head)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就跟可以进行cmake编译啦！</p>`,28);function k(_,x){const s=l("ExternalLinkIcon");return t(),d("div",null,[m,e("p",null,[n("我的"),e("a",v,[n("视频讲解"),a(s)])]),u,o,e("p",null,[n("这个图片很直观，我觉得很好。来自于"),e("a",p,[n("大丙"),a(s)]),n("老哥的博客。 "),b]),h])}const C=i(r,[["render",k],["__file","cmake.html.vue"]]),f=JSON.parse('{"path":"/posts/cmake.html","title":"CMake","lang":"en-US","frontmatter":{"category":["Cpp project"],"tag":["Cpp","CMake"]},"headers":[{"level":2,"title":"CMake的原理","slug":"cmake的原理","link":"#cmake的原理","children":[]},{"level":2,"title":"所有文件在同一目录下","slug":"所有文件在同一目录下","link":"#所有文件在同一目录下","children":[{"level":3,"title":"文件结构","slug":"文件结构","link":"#文件结构","children":[]},{"level":3,"title":"CMakeLists.txt编写","slug":"cmakelists-txt编写","link":"#cmakelists-txt编写","children":[]},{"level":3,"title":"构建和运行","slug":"构建和运行","link":"#构建和运行","children":[]}]},{"level":2,"title":"文件分属不同文件夹下","slug":"文件分属不同文件夹下","link":"#文件分属不同文件夹下","children":[{"level":3,"title":"文件结构","slug":"文件结构-1","link":"#文件结构-1","children":[]},{"level":3,"title":"CMakeLists.txt编写","slug":"cmakelists-txt编写-1","link":"#cmakelists-txt编写-1","children":[]}]}],"git":{"updatedTime":1713408444000,"contributors":[{"name":"Zari_Tsu","email":"zaritsu030907@gmail.com","commits":2}]},"filePathRelative":"posts/cmake.md","excerpt":"\\n<p>我的<a href=\\"https://www.bilibili.com/video/BV1mJ4m1n7Z6/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">视频讲解</a></p>\\n<p>最近在做C++的项目，而vscode我这里因为一些环境的问题，不太能搞，所以用了cmake这个工具来实现项目的编译运行</p>\\n<h2>CMake的原理</h2>\\n<p>这个图片很直观，我觉得很好。来自于<a href=\\"https://subingwen.cn/cmake/CMake-primer/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">大丙</a>老哥的博客。\\n<img src=\\"https://subingwen.cn/cmake/CMake-primer/image-20230309130644912.png\\" alt=\\"CMake Formula\\"></p>"}');export{C as comp,f as data};
