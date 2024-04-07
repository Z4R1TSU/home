---
category:
  - C++ STL
tag:
  - C++
---

# 对象生存期与资源管理

> 引: c++不像Java或是Python拥有自动的回收处理机制

这篇来讲讲cpp当中的智能指针，正如引子讲的那样，c或c类语言基本都没一种自动的回收机制，这也是出现什么野指针、空悬指针、内存泄漏等等tricky bug的原因。

在c当中确确实实就只能通过很小心翼翼的设计才能避免这个问题，但是在c++当中引入的RAII可以一定程度的解决这个问题。

先推荐一篇[Microsoft的官方文档](https://learn.microsoft.com/zh-cn/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170)，讲的非常好

### 对象生存期

那么什么是一个对象的生存期呢？举两个例子你就懂了

1. 在这个例子当中，i在for loop结束之后仍然存在
    ```cpp
    int i;
    for (i = 0; i < 9; i ++) {
        // do something
    }
    ```
2. 在这个例子当中，i在for循环结束后便不复存在
    ```cpp
    for (int i = 0; i < 9; i ++) {
        // do something
    }
    ```