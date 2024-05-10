<template><div><h1 id="虚函数" tabindex="-1"><a class="header-anchor" href="#虚函数"><span>虚函数</span></a></h1>
<blockquote>
<p>虚函数是实现多态的一种方式，它允许派生类对基类中同名函数的重新定义，从而使得派生类对象在运行时调用基类中同名函数时，调用的是派生类中重新定义的函数。</p>
</blockquote>
<h3 id="虚函数的本质" tabindex="-1"><a class="header-anchor" href="#虚函数的本质"><span>虚函数的本质</span></a></h3>
<ol>
<li>
<p>虚函数表(virtual table)：存放所有类的虚函数的地址的一个数组，每个类都有一个虚函数表。</p>
</li>
<li>
<p>虚函数指针(virtual function pointer)：指向虚函数表中某个虚函数的指针。</p>
</li>
<li>
<p>虚函数调用：当调用虚函数时，实际上是调用虚函数指针指向的函数。</p>
</li>
</ol>
<h3 id="虚函数的存放位置" tabindex="-1"><a class="header-anchor" href="#虚函数的存放位置"><span>虚函数的存放位置</span></a></h3>
<blockquote>
<p>存放在全局数据区的只读数据区(read-only data section)</p>
</blockquote>
<ol>
<li>
<p>全局虚函数表(global virtual table)：存放所有类的虚函数的地址，每个类都有一个全局虚函数表。</p>
</li>
<li>
<p>每个类的虚函数表(virtual table)：存放该类的虚函数的地址，每个类都有一个虚函数表。</p>
</li>
</ol>
<h3 id="虚函数创建的情况" tabindex="-1"><a class="header-anchor" href="#虚函数创建的情况"><span>虚函数创建的情况</span></a></h3>
<blockquote>
<p>在编译期</p>
</blockquote>
<ol>
<li>
<p>编译器发现virtual关键字</p>
</li>
<li>
<p>虚函数表(virtual table)的创建</p>
</li>
<li>
<p>编译器生成虚函数的调用代码</p>
</li>
</ol>
<h3 id="虚函数的调用方式" tabindex="-1"><a class="header-anchor" href="#虚函数的调用方式"><span>虚函数的调用方式</span></a></h3>
<ol>
<li>
<p>静态绑定(static binding)：在编译期确定调用哪个虚函数，调用的是虚函数表中的函数地址。</p>
</li>
<li>
<p>动态绑定(dynamic binding)：在运行期确定调用哪个虚函数，调用的是虚函数指针指向的函数。</p>
</li>
</ol>
<h3 id="我的总结" tabindex="-1"><a class="header-anchor" href="#我的总结"><span>我的总结</span></a></h3>
<p>虚函数其实在类当中隐式地增加了一个成员函数，用来指向虚函数表所在的一个指针，这个指针指向了虚函数表中存放的虚函数的地址。</p>
<p>在带有virtual关键词的类A，在构造期间，会将虚函数表的地址存放在类的全局数据区，在运行期间，会将这个地址赋值给虚函数指针。假设这时候有一个类B派生于A类，那么在B的构造函数中，B会生成一个成员变量指向自己的虚函数表，然后B的成员函数会时不时地更换指向，一会指向A的虚函数表，一会指向B的虚函数表。</p>
<p>虚函数的灵魂是虚函数表，它在编译期间就已经确定了，运行期间才会确定调用哪个虚函数。</p>
<ul>
<li>因此**构造函数(constructor)**不可以是虚函数，因为构造函数是在对象创建的时候调用的，而虚函数表是在编译期间就已经确定了，运行期间才会确定调用哪个虚函数。</li>
<li>析构函数(destructor)可以是虚函数，因为析构函数是在对象销毁的时候调用的，而虚函数表是在编译期间就已经确定了，运行期间才会确定调用哪个虚函数。</li>
</ul>
</div></template>


