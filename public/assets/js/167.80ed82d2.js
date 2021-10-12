(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{668:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"javascript中对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript中对象"}},[s._v("#")]),s._v(" javascript中对象")]),s._v(" "),a("p",[s._v("javascript是一门"),a("strong",[s._v("基于对象")]),s._v("（"),a("strong",[s._v("Object-Based")]),s._v("）的语言，javascript中的大部分内容都是由对象构成的，比如object、function、Array等都是对象，其本质是"),a("strong",[s._v("一组组属性和值组成的集合")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"为什么js不是一门面向对象的语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么js不是一门面向对象的语言"}},[s._v("#")]),s._v(" 为什么js不是一门面向对象的语言？")]),s._v(" "),a("ul",[a("li",[s._v("面向对象的语言天生就支持"),a("strong",[s._v("封装")]),s._v("，"),a("strong",[s._v("继承")]),s._v("，"),a("strong",[s._v("多态")]),s._v("，而js中没有直接提供多态的支持。")]),s._v(" "),a("li",[s._v("js的继承方式和面向对象语言的继承方式有很大的差别。面向对象语言对继承做了充分的支持，提供了如public、protected、friend、interface等大量关键字，众多的关键字使得它们的继承变得异常复杂和繁琐，而js实现继承则显得格外简单清爽。"),a("strong",[s._v("只是在对象中添加了一个称为原型的私有属性，把继承的对象通过原型链关联起来，就实现了继承，我们把这种继承方式称为原型链继承。")])])]),s._v(" "),a("h3",{attrs:{id:"js对象使用广泛的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js对象使用广泛的原因"}},[s._v("#")]),s._v(" js对象使用广泛的原因")]),s._v(" "),a("p",[s._v("对象的属性值可以是"),a("strong",[s._v("原始类型")]),s._v("，"),a("strong",[s._v("对象类型")]),s._v("和"),a("strong",[s._v("函数类型")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"函数的本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的本质"}},[s._v("#")]),s._v(" 函数的本质")]),s._v(" "),a("ol",[a("li",[s._v("可以被调用，函数也可以自调用，自执行的匿名函数也被称为IIFE（立即调用函数表达式）")])]),s._v(" "),a("blockquote",[a("p",[s._v("函数可调用的原因：函数除了拥有常用类型的属性值之外，还拥有两个隐藏属性，分别是name属性和code属性。匿名函数的name值为anonymous，code值表示函数代码，以字符串的形式存储在内存中，函数调用时取出code值解释执行。")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("函数是一等公民\n在js中函数一种特殊的对象，函数可以赋值给变量，可以作为函数参数，可以做成函数的返回值，**如果某个编程语言的函数，可以和这个语言的数据类型做同样的事情，我们就把这个语言中的函数称为一等公民。**支持函数是一等公民的语言，可以让语言代码逻辑更加清晰，代码更加简洁。\n但是由于函数的可调用性，使得函数可赋值、可传参和可作为返回值等特性变得有一点麻烦，这是为什么呢？\n我们知道，在执行js函数的过程中，为了实现变量的查找，v8会维护一个作用域链，如果函数中使用了某个变量，而函数内部又没有这个变量，这时候v8就会沿着作用域链去外部的作用域查找该变量，具体流程如下图所示：\n"),a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s.$withBase("/js/v8/查找变量.jpg"),alt:"图片加载失败"}})]),s._v("\n从图中可以看出，当函数内部引用了外部变量时，使用这个函数赋值、传参或作为返回值，你需要保证函数内部引用的外部变量时确定存在的，这就是函数作为一等公民麻烦的地方，因为虚拟机还要处理函数引用的外部变量。我们来看一段简单的代码：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          number"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n          console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" bar\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mybar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mybar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("我们定义了一个foo函数，其内部声明了一个bar函数，并将其作为foo函数的返回值，bar函数内部引用了foo中的函数变量number，当调用foo函数后，会返回bar函数。\n所谓“函数是一等公民”就体现在，如果函数返回bar函数给外部，那么即使foo函数被销毁了，其中的number变量也不能被销毁，因为bar函数引用了该变量。\n我们把这种外部变量和函数绑定起来的技术成为"),a("strong",[s._v("闭包")]),s._v("。\n另外基于函数是一等公民，我们可以轻松使用JavaScript来实现目前比较流行的"),a("strong",[s._v("函数式编程")]),s._v("。")])])}),[],!1,null,null,null);t.default=r.exports}}]);