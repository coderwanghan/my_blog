(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{485:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[t("code",[s._v("loader")]),s._v("是webpack构建流程中非常重要的一部分，webpack的特点是一个"),t("code",[s._v("JavaScript打包工具")]),s._v("，默认只能处理"),t("code",[s._v("js")]),s._v("文件，而对于html、css、图片等非js模块是无法处理的，这时候就要loader了。")]),s._v(" "),t("h2",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),t("p",[s._v("loader是一个"),t("code",[s._v("转换器")]),s._v("，在webpack中一般是根据test匹配到对应的模块，然后调用配置的loader做资源的转换和处理，最终loader给到webpack的一定是一段"),t("code",[s._v("js脚本")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[s._v("#")]),s._v(" 分类")]),s._v(" "),t("p",[s._v("loader有四种：")]),s._v(" "),t("ol",[t("li",[s._v("前置loader（pre loader）")]),s._v(" "),t("li",[s._v("普通loader（normal loader）")]),s._v(" "),t("li",[s._v("后置loader（post loader）")]),s._v(" "),t("li",[s._v("行内loader（inline loader）")])]),s._v(" "),t("p",[s._v("可通过每条"),t("code",[s._v("rule")]),s._v("中的"),t("code",[s._v("enforce")]),s._v("属性配置前置、普通和后置loader，默认为普通loader。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module: {\n  rules: [\n    {\n      test: /\\.js$/,\n      use: ['pre-loader'],\n      enforce: 'pre',\n    },\n    {\n      test: /\\.js$/,\n      use: ['normal-loader'],\n    },\n    {\n      test: /\\.js$/,\n      use: ['post-loader'],\n      enforce: 'post',\n    },\n  ]\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("行内loader则是通过require或import的方式引入进行使用,比如"),t("code",[s._v("!inline-loader./index.css")]),s._v("，则表示用行内loader"),t("code",[s._v("inline-loader")]),s._v("处理index.css文件。同时用行内loader可以使用一些前缀：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("前缀")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("-!")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("不要前置和普通loader")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("!")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("不要普通loader")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("!!")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("不要前、后置和普通loader，只要行内loader")])])])]),s._v(" "),t("h2",{attrs:{id:"输入输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入输出"}},[s._v("#")]),s._v(" 输入输出")]),s._v(" "),t("p",[t("code",[s._v("loader")]),s._v("是一个函数，输入为string/buffer，其输入来源为源文件或上个loader的返回值，其输出为string/buffer，最后的loader的返回值是一段"),t("code",[s._v("js脚本")]),s._v("，并给到webpack。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" content "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'//loader'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("raw "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("将raw设置为true可接收到源文件的二进制buffer。")]),s._v(" "),t("h2",{attrs:{id:"执行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[s._v("#")]),s._v(" 执行流程")]),s._v(" "),t("p",[s._v("loader的执行分为两个阶段："),t("code",[s._v("pitch")]),s._v("和"),t("code",[s._v("normal")]),s._v("。")]),s._v(" "),t("p",[s._v("比如处理less文件，做了如下配置：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/\\.less$/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'less-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("最终的执行顺序为：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("style-loader pitch")])]),s._v(" "),t("li",[t("code",[s._v("css-loader pitch")])]),s._v(" "),t("li",[t("code",[s._v("less-loader pitch")])]),s._v(" "),t("li",[s._v("读取源文件")]),s._v(" "),t("li",[t("code",[s._v("less-loader normal")])]),s._v(" "),t("li",[t("code",[s._v("css-loader normal")])]),s._v(" "),t("li",[t("code",[s._v("style-loader normal")])])]),s._v(" "),t("p",[t("code",[s._v("pitch")]),s._v("阶段会先于"),t("code",[s._v("normal")]),s._v("阶段执行，如果"),t("code",[s._v("pitch")]),s._v("方法返回了内容，则会跳过"),t("code",[s._v("右侧loader的normal和pitch阶段")]),s._v("。")]),s._v(" "),t("p",[s._v("比如上述的"),t("code",[s._v("css-loader")]),s._v("的"),t("code",[s._v("pitch")]),s._v("方法如果返回了内容，则执行顺序变为：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("style-loader pitch")])]),s._v(" "),t("li",[t("code",[s._v("css-loader pitch")])]),s._v(" "),t("li",[t("code",[s._v("style-loader normal")])])]),s._v(" "),t("p",[t("code",[s._v("pitch")]),s._v("方法定义如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" content "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'normal'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// remainingRequest：当前loader之后的loader的request字符串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// precedingRequest：当前loader之前的loader的request字符串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// data：loader链中的共享数据，在normal中可通过this.data获取")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("pitch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("remainingRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" precedingRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("code",[s._v("loader")]),s._v("的叠加顺序：post(后置)+inline(内联)+normal(正常)+pre(前置)，其执行顺序为")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("post loader pitch")])]),s._v(" "),t("li",[t("code",[s._v("inline loader pitch")])]),s._v(" "),t("li",[t("code",[s._v("normal loader pitch")])]),s._v(" "),t("li",[t("code",[s._v("pre loader pitch")])]),s._v(" "),t("li",[s._v("读取源文件")]),s._v(" "),t("li",[t("code",[s._v("pre loader normal")])]),s._v(" "),t("li",[t("code",[s._v("normal loader normal")])]),s._v(" "),t("li",[t("code",[s._v("inline loader normal")])]),s._v(" "),t("li",[t("code",[s._v("post loader normal")])])]),s._v(" "),t("h2",{attrs:{id:"loader-runner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader-runner"}},[s._v("#")]),s._v(" loader-runner")]),s._v(" "),t("p",[s._v("webpack中"),t("code",[s._v("loader")]),s._v("是通过"),t("a",{attrs:{href:"https://github.com/webpack/loader-runner",target:"_blank",rel:"noopener noreferrer"}},[s._v("loader-runner"),t("OutboundLink")],1),s._v("来进行调用的。它在调用"),t("code",[s._v("loader")]),s._v("时提供了一些可供"),t("code",[s._v("loader")]),s._v("使用的上下文信息(loaderContext)：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("this.getOptions")]),s._v("：获取配置文件传给该loader的options")]),s._v(" "),t("li",[t("code",[s._v("this.callback")]),s._v("：调用此方法会将该"),t("code",[s._v("loader")]),s._v("的处理结果往下传")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("err")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Error "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("content")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Buffer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回本次转换中生成的sourcemap 比如babel-loader转化了js文件，需要返回sourcemap给webpack，要不然webpack生成sourcemap时定位不到最开始的源文件")]),s._v("\n  sourceMap"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" SourceMap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本次转换中生成的额外信息，可自定义。例如本次转换为源文件生成了AST，则可将该AST传给后面的loader，以免需要AST的loader去重复生成而降低性能。")]),s._v("\n  meta"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[s._v("this.async")]),s._v("：调用此函数返回"),t("code",[s._v("this.callback")]),s._v("，用来实现"),t("code",[s._v("异步loader")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("this.request")]),s._v("：request字符串")]),s._v(" "),t("li",[t("code",[s._v("this.loaders")]),s._v("：loader的调用链数组")]),s._v(" "),t("li",[t("code",[s._v("this.addDependency")]),s._v("：添加一个文件作为"),t("code",[s._v("loader")]),s._v("的依赖，如开启缓存，该文件发生变化会导致缓存失效，从而重新调用"),t("code",[s._v("loader")])]),s._v(" "),t("li",[t("code",[s._v("this.addContextDependency")]),s._v("：添加一个目录作为"),t("code",[s._v("loader")]),s._v("的依赖")]),s._v(" "),t("li",[t("code",[s._v("this.sourceMap")]),s._v("：可调用此方法查看是否要求生成"),t("code",[s._v("source map")])]),s._v(" "),t("li",[t("code",[s._v("emitFile")]),s._v("：输出一个文件")])])])}),[],!1,null,null,null);t.default=n.exports}}]);