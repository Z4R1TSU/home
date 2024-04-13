---
category:
  - Cpp project
tag:
  - Cpp
  - CMake
---

# CMake

最近在做C++的项目，而vscode我这里因为一些环境的问题，不太能搞，所以用了cmake这个工具来实现项目的编译运行


## CMake的原理

这个图片很直观，我觉得很好。来自于[大丙](https://subingwen.cn/cmake/CMake-primer/index.html)老哥的博客。
![CMake Formula](https://subingwen.cn/cmake/CMake-primer/image-20230309130644912.png)

CMake的build需要我们先做一个CMakeLists.txt文件。我们结合我的实例来讲解。


## 所有文件在同一目录下

### 文件结构

这是我的项目情况  

```shell
╰─❯ tree
(base)
.
├── CMakeLists.txt
├── test.cpp        // 包含头文件的测试文件
├── threadpool.cpp  // 源文件
└── threadpool.h    // 头文件
```

大家可以看到，这是一个典型的所有文件都在同一目录下的情况，从最简单的讲起。

### CMakeLists.txt编写

下面是我的CmakeLists.txt的内容

```txt
# 设定CMake的最低版本要求
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
add_executable(test ${SOURCES})

# 如果ThreadPool类有相关的头文件路径或者要链接的库，用下面的命令指定
# target_include_directories(test PRIVATE path/to/headers)
# target_link_libraries(test PRIVATE library_name)
```

* 这里注意几点:  
  1. set的时候并不需要显式的添加头文件，比如这里的**threadpool.h**，cmake会自动查找源文件当中包含的头文件。但若有第三方库的头文件，则需要用`target_include_directories`命令手动添加
  2. 若源文件很多，比如还有1.c, 2.c...等着被包含，则可
        ```txt
        # 查找当前目录下的所有源文件，用这行替换set那行
        # 并将名称保存到 DIR_SRCS 变量
        aux_source_directory(. DIR_SRCS)

        # 指定生成目标
        add_executable(test ${DIR_SRCS})
        ```

### 构建和运行

在编写完文件后，我们来运行这个文件。(默认cmake已添加进环境变量)

```shell
# 在项目根目录下创建build文件夹
mkdir build && cd build
# 在根目录运行cmake
cmake ..
# build来编译项目
cmake --build .
# 若build目录已有可执行文件，则直接运行，完成运行
./test.exe
# 若没有，则查看是否有Makefile，有则运行后再运行上一步
make
```


## 文件分属不同文件夹下
// TODO