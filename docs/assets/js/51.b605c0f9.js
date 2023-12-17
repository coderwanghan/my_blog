(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{467:function(v,_,e){"use strict";e.r(_);var l=e(1),n=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("webpack的编译流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),v._v(" "),_("ol",[_("li",[v._v("初始化参数：从配置文件和Shell语句中读取并合并参数，得出最终的配置对象；")]),v._v(" "),_("li",[v._v("开始编译：用上一步得到的参数初始化"),_("code",[v._v("Compiler")]),v._v("对象，加载所有配置的插件，执行对象的"),_("code",[v._v("run")]),v._v("方法开始执行编译；")]),v._v(" "),_("li",[v._v("确定入口，根据配置中的"),_("code",[v._v("entry")]),v._v("找出所有的入口文件；")]),v._v(" "),_("li",[v._v("编译模块：从入口模块出发，调用所有配置的"),_("code",[v._v("Loader")]),v._v("对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),v._v(" "),_("li",[v._v("完成模块编译：在经过第4步使用"),_("code",[v._v("Loader")]),v._v("编译完所有的模块后，得到了每个模块被编译后的最终内容以及它们的依赖关系；")]),v._v(" "),_("li",[v._v("输出资源：根据入口和模块的依赖关系，组装成一个个包含多个模块的"),_("code",[v._v("Chunk")]),v._v("，再把每个"),_("code",[v._v("Chunk")]),v._v("转换成一个单独的文件加入到输出列表，这一步是可以修改输出内容的最后机会；")]),v._v(" "),_("li",[v._v("写入文件：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),v._v(" "),_("p",[v._v("在以上过程中，webpack会在特定的时间点广播出特定的事件（发布），插件可以去监听自己感兴趣的事件（订阅），等到事件被webpack触发后执行相应的逻辑，比如改变webpack的运行结果。")]),v._v(" "),_("h2",{attrs:{id:"module、chunk、bundle的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#module、chunk、bundle的区别"}},[v._v("#")]),v._v(" module、chunk、bundle的区别")]),v._v(" "),_("ul",[_("li",[v._v("module：各个源码文件，webpack中一切皆模块")]),v._v(" "),_("li",[v._v("chunk：多模块合并成的，如entry、import()、splitChunk")]),v._v(" "),_("li",[v._v("bundle：最终的输出文件")])])])}),[],!1,null,null,null);_.default=n.exports}}]);