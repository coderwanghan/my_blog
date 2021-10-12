(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{664:function(v,a,t){"use strict";t.r(a);var s=t(5),_=Object(s.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"学习v8前-我对v8的了解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习v8前-我对v8的了解"}},[v._v("#")]),v._v(" 学习V8前，我对V8的了解：")]),v._v(" "),t("ol",[t("li",[v._v("V8是一个Google研发的javascript引擎。")]),v._v(" "),t("li",[v._v("V8能帮助我们执行js代码，然后返回结果给我们。")]),v._v(" "),t("li",[v._v("V8相对于我们是一个“黑盒”，也有点像反向代理，我们把js代码放在浏览器中运行，浏览器会将它交给V8，然后拿到执行结果后返回给我们，如果我们不去了解，根本不知道V8的存在。")])]),v._v(" "),t("h3",{attrs:{id:"什么是v8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是v8"}},[v._v("#")]),v._v(" 什么是V8?")]),v._v(" "),t("p",[v._v("V8是Javascript虚拟机的一种，我们可以简单地把JavaScript虚拟机理解成一个程序，它能将人类能够理解的"),t("strong",[v._v("编程语言JavaScript")]),v._v("，翻译成机器能够理解的机器语言，如下图所示：\n"),t("img",{attrs:{src:v.$withBase("/js/v8/javascript引擎.jpg"),alt:"图片加载失败"}})]),v._v(" "),t("p",[v._v("目前市面上有很多种javascript引擎，比如SpiderMonkey、V8、JavaScriptCore等，其中，由Google开发的开源项目V8是目前使用最广泛的JavaScript虚拟机。")]),v._v(" "),t("h3",{attrs:{id:"为什么要学习v8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习v8"}},[v._v("#")]),v._v(" 为什么要学习V8？")]),v._v(" "),t("ul",[t("li",[v._v("如果只是单纯地使用Javascript和调用Web API，并不了解虚拟机内部是怎么工作的，在项目中遇到的一些问题可能找不到解决的途径，如项目的内存占用过高，页面响应速度过慢，又或者使用Node.js的时候导致任务被阻塞等问题，这都与V8的基本运行机制有关。如果熟悉V8的工作机制，就有系统性的思路来解决这些问题。")]),v._v(" "),t("li",[v._v("V8的主要功能，就是结合JavaScript的语言特性和本质来编译执行它，通过学习V8，能更加深入地理解JavaScript的语言本质和设计思想，这些思想就像是更加高级的工具，你掌握了它，就可以提升你的语言使用和架构设计水平。")])]),v._v(" "),t("h3",{attrs:{id:"v8是如何执行一段javascript代码的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8是如何执行一段javascript代码的"}},[v._v("#")]),v._v(" v8是如何执行一段javascript代码的？")]),v._v(" "),t("p",[v._v("其主要核心流程就是两步：编译和执行，先将javascript代码编译成低级的中间代码或者二进制机器代码，然后再执行编译后的代码。\n")]),t("div",{staticClass:"img-box"},[t("img",{attrs:{src:v.$withBase("/js/v8/v8转化为中间代码.png"),alt:"图片加载失败"}})]),v._v("\nV8虚拟机通过模拟真实计算机的CPU、堆栈、寄存器和指令系统等各种功能来实现代码的执行。执行javascript代码时，你不需要担心不同操作系统和不同体系结果计算机的差异，只需要按照虚拟机的规范写好代码就可以了。"),t("p"),v._v(" "),t("h3",{attrs:{id:"高级代码为什么需要先编译再执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级代码为什么需要先编译再执行"}},[v._v("#")]),v._v(" 高级代码为什么需要先编译再执行")]),v._v(" "),t("p",[v._v("CPU只能识别二进制的指令，比如指令“1000100111011000”，这条指令的意思是将一个寄存器中的数据移动到另外一个寄存器中，当我们给CPU发出这个指令，处理器就会按照指令去执行相关操作。\n为了完成复杂的任务，工程师给CPU定义了一大堆指令，我们把这一大推指令成为"),t("strong",[v._v("指令集（Instructions）")]),v._v("，也就是"),t("strong",[v._v("机器语言")]),v._v("。\nCPU只能执行机器代码，而机器代码是难以阅读和记忆的，于是我们将二进制指令转化为人类可以识别和记忆的符号，这就是"),t("strong",[v._v("汇编指令集")]),v._v("。")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("1000100111011000  机器指令\nmov ax,bx         汇编指令\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br")])]),t("p",[v._v("CPU是不能直接执行汇编指令的，所以你如果写了一段汇编指令，你还需要一个汇编编译器，其作用就是把汇编代码编译成机器代码。\n虽然汇编语言做了一层抽象，减少了程序员理解机器语言的复杂度，但它依旧是复杂且繁琐的，即使你写了一个简单的功能，也需要写大量的汇编代码，这主要是因为：")]),v._v(" "),t("ul",[t("li",[v._v("不同的CPU有不同的指令集，需要为每种架构的CPU编写特定的汇编代码。")]),v._v(" "),t("li",[v._v("编写汇编代码时，你还需要了解和处理器架构相关的硬件知识，比如你需要使用寄存器、内存和操作CPU等。大部分程序员在编写业务代码的时候，并不想过多去理会处理器架构相关的细节。\n因此我们需要一种屏蔽了计算机架构细节，能适应多种不同CPU架构的语言，能让程序员专心处理业务逻辑的语言，于是诸如C、C++、Java、C#、Python、Javascript这样的“高级语言”就应运而生了。\n计算机执行高级语言的两种方式：")]),v._v(" "),t("li",[v._v("解释执行：源代码通过解析器编译成中间代码，再由解释器解释执行中间代码输出结果")]),v._v(" "),t("li",[v._v("编译执行：先将源代码转化成中间代码，然后通过编译器把中间代码编译成机器代码")])]),v._v(" "),t("h3",{attrs:{id:"v8是如何执行js代码的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8是如何执行js代码的"}},[v._v("#")]),v._v(" v8是如何执行js代码的")]),v._v(" "),t("p",[v._v("解释执行的启动速度快，但执行速度慢，编译执行的启动速度慢，但执行速度慢，所以v8就采取了一种权衡策略，采用混合编译执行和解释执行的方式，这种技术称为"),t("strong",[v._v("即时编译JIT（Just In Time）")]),v._v("。V8编译流水线如下图所示：\n"),t("img",{attrs:{src:v.$withBase("/js/v8/v8编译流水线.jpg"),alt:"图片加载失败"}})]),v._v(" "),t("p",[v._v("v8启动执行javascript代码之前，需要准备一些基础环境：")]),v._v(" "),t("ul",[t("li",[v._v("全局执行上下文：包含执行过程中的全局信息，比如一些内置函数、全局变量等")]),v._v(" "),t("li",[v._v("全局作用域: 包含了一些全局变量，在执行过程中的所有数据都需要放在内存中")]),v._v(" "),t("li",[v._v("v8采用了经典的堆和栈管理模式，所以需要初始化堆栈结构")]),v._v(" "),t("li",[v._v("消息循环系统，包括消息驱动器和消息队列，它如同v8的心脏，不断接受消息并决策如何处理消息。")])]),v._v(" "),t("p",[v._v("准备好基础环境之后，就可以向v8提交要执行的javascript代码了。")]),v._v(" "),t("ol",[t("li",[v._v("生成抽象语法树 (AST)。对于v8来说，源代码就是一堆字符串，v8不能直接理解这段字符串的含义，它需要结构化这段字符串。(结构化是指信息经过分析后可分解成多个互相关联的组成部分，各组成部分间有明确的的层次结构，方便使用和维护，并有一定的操作规范。)")]),v._v(" "),t("li",[v._v("在生成 AST 的同时，V8 还会生成相关的作用域")]),v._v(" "),t("li",[v._v("有了AST和作用域之后，就可以生成字节码了，字节码是介于ast和机器代码的中间代码。字节码与特定类型的机器代码无关，解释器可以直接执行字节码，或者利用编译器将其编译成机器代码再执行。")]),v._v(" "),t("li",[v._v("解释器按顺序执行字节码，输出结果。")])]),v._v(" "),t("blockquote",[t("p",[v._v("v8会监控解释器的执行状态，在解释执行字节码的过程中，如果发现某一块代码重复多次执行，那么v8会把这段代码标记为"),t("strong",[v._v("热点代码(HotSpot)")]),v._v("，并将这段代码丢给优化编译器，优化编译器会在后台把这段字节码编译成二进制代码，提高执行效率。")])]),v._v(" "),t("blockquote",[t("p",[v._v("不过，javascript是一门非常灵活的动态语言，对象的属性和结构是可以在运行时动态更改的，而经过优化编译器优化的代码只能针对某种固定的结构，一旦在执行过程中，对象的结构和属性被更改了，那经过优化编译器优化的二进制代码也就无效了，这时候编译器会进行反优化操作，经过反优化的代码，下次执行时就会回退到解释器解释执行。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);