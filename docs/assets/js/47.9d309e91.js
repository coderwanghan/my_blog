(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{547:function(_,v,t){"use strict";t.r(v);var a=t(5),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"前端组件化发展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端组件化发展"}},[_._v("#")]),_._v(" 前端组件化发展")]),_._v(" "),t("ul",[t("li",[_._v("早期对公共的js、css文件的抽离封装")]),_._v(" "),t("li",[_._v("根据业务逻辑来进行抽离，比如公共的页面头部、尾部等")]),_._v(" "),t("li",[_._v("以JQUI、easyUI、mini_UI以及ExtJS为代表的DOM封装——表现炫酷，但维护性差")]),_._v(" "),t("li",[_._v("前端MVVM模式的兴起，Vue、React、Angular三大框架的组件化思想——一切皆组件")])]),_._v(" "),t("h2",{attrs:{id:"组件封装的好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件封装的好处"}},[_._v("#")]),_._v(" 组件封装的好处")]),_._v(" "),t("ol",[t("li",[_._v("复用，提高开发效率")]),_._v(" "),t("li",[_._v("降低系统各个功能的耦合性，解耦(第三方库)，提高功能内部的聚合性")]),_._v(" "),t("li",[_._v("降低颗粒度，可维护性高")]),_._v(" "),t("li",[_._v("方便统一修改(UI 风格、交互方式等)")])]),_._v(" "),t("h2",{attrs:{id:"组件封装的难点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件封装的难点"}},[_._v("#")]),_._v(" 组件封装的难点")]),_._v(" "),t("ol",[t("li",[_._v("同步性和个性化的处理")]),_._v(" "),t("li",[_._v("组件之间的数据共享")]),_._v(" "),t("li",[_._v("组件之间的时间传递")]),_._v(" "),t("li",[_._v("开发人员的抽象能力、编码能力，使用规范问题")])]),_._v(" "),t("h2",{attrs:{id:"组件抽象的基本原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件抽象的基本原则"}},[_._v("#")]),_._v(" 组件抽象的基本原则")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("单一性")])])]),_._v(" "),t("p",[_._v("单一性要求组件具备高内聚、低耦合的特性，只需做好一件事情，避免与其它组件产生依赖关系。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("复用性/通用性/扩展性")])])]),_._v(" "),t("p",[_._v("设计组件时，要充分考虑复用性、通用性和扩展性，适用范围广，同时也可以预留出一些供扩展的接口，可以改变组件的内部逻辑，提供个性化扩展。")]),_._v(" "),t("p",[_._v("这里还有两种情况：")]),_._v(" "),t("ol",[t("li",[_._v("可以在不同的项目之间使用的组件，称为基础组件/业务组件/公共组件.")]),_._v(" "),t("li",[_._v("在项目内部使用，仅在当前场景下作为一个独立的模块抽取出来的组件，可以称之为项目组件。")])]),_._v(" "),t("p",[_._v("公共组件和项目组件的侧重点不同，公共组件更看重其通用性，通过一个组件满足不同项目中相似的使用场景，而项目组件更多的是处理当前业务中的特殊场景，可能是页面拆解后的不同模块，也可能是不同操作的弹框，这种组件往往不适合直接嫁接到其它模块或项目中。所以对于一个组件来说，没不要为了追求通用性而使其很难维护。")]),_._v(" "),t("h2",{attrs:{id:"分离处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分离处理"}},[_._v("#")]),_._v(" 分离处理")]),_._v(" "),t("p",[_._v("抽离组件时最好将业务层和视图层进行分离，视图层负责页面展示样式和交互，而业务层主要负责处理业务逻辑，比如接口调用，格式化数据等。其好处在于职责分离、提高组件性能。")]),_._v(" "),t("h2",{attrs:{id:"组件的封装思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件的封装思路"}},[_._v("#")]),_._v(" 组件的封装思路")]),_._v(" "),t("ol",[t("li",[_._v("看封装的是公共组件还是项目组件，配置抽离")]),_._v(" "),t("li",[_._v("该暴露哪些接口-可扩展性和灵活性")]),_._v(" "),t("li",[_._v("封装的组件内部颗粒度不宜过大，合理拆分")])]),_._v(" "),t("h2",{attrs:{id:"如何保证组件的可靠性和可用性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何保证组件的可靠性和可用性"}},[_._v("#")]),_._v(" 如何保证组件的可靠性和可用性")]),_._v(" "),t("ol",[t("li",[_._v("功能测试和单元测试")]),_._v(" "),t("li",[_._v("编写详细易懂的 README 文档")])])])}),[],!1,null,null,null);v.default=s.exports}}]);