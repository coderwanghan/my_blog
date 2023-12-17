(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{457:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("vscode安装插件vim")]),s._v(" "),t("h2",{attrs:{id:"insert-插入-模式和normal-正常-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insert-插入-模式和normal-正常-模式"}},[s._v("#")]),s._v(" insert（插入）模式和normal（正常）模式")]),s._v(" "),t("p",[s._v("默认情况下，启动 vim 就会进入"),t("strong",[s._v("normal模式")])]),s._v(" "),t("ul",[t("li",[s._v("进入"),t("code",[s._v("insert")]),s._v("模式：按i和a都能进入insert（插入）模式，区别在于i是在光标前插入，a是在光标后插入")]),s._v(" "),t("li",[s._v("退出insert模式\n"),t("ul",[t("li",[t("code",[s._v("esc")])]),s._v(" "),t("li",[s._v("组合键："),t("code",[s._v("ctrl + [")])])])])]),s._v(" "),t("h2",{attrs:{id:"终端如何退出vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终端如何退出vim"}},[s._v("#")]),s._v(" 终端如何退出vim")]),s._v(" "),t("ul",[t("li",[s._v(":wq 退出并保存")]),s._v(" "),t("li",[s._v(":q 退出不保存")])]),s._v(" "),t("h2",{attrs:{id:"基本移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本移动"}},[s._v("#")]),s._v(" 基本移动")]),s._v(" "),t("p",[s._v("上：k\n下：j\n左：h\n右：l")]),s._v(" "),t("h2",{attrs:{id:"行操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行操作"}},[s._v("#")]),s._v(" 行操作")]),s._v(" "),t("p",[s._v("移动：")]),s._v(" "),t("ul",[t("li",[s._v("行首\n"),t("ul",[t("li",[s._v("0")]),s._v(" "),t("li",[s._v("^：到本行第一个不是blank字符的位置（blank：空格、tab、换行、回车等）")])])]),s._v(" "),t("li",[s._v("行尾\n"),t("ul",[t("li",[s._v("$")]),s._v(" "),t("li",[s._v("g_：到本行最后一个不是blank字符的位置")])])])]),s._v(" "),t("p",[s._v("改键：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vscode settings.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把H改成^，L改成g+_")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vim.normalModeKeyBindings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"H"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"after"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"L"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"after"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"g"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("插入：")]),s._v(" "),t("ul",[t("li",[s._v("行首：I")]),s._v(" "),t("li",[s._v("行尾：A")]),s._v(" "),t("li",[s._v("行前：O")]),s._v(" "),t("li",[s._v("行后：o")])]),s._v(" "),t("h2",{attrs:{id:"复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[s._v("#")]),s._v(" 复制")]),s._v(" "),t("ul",[t("li",[s._v("y：复制文本")]),s._v(" "),t("li",[s._v("yy：复制当前行")]),s._v(" "),t("li",[s._v("yiw: 复制（yank）当前单词；")]),s._v(" "),t("li",[s._v("yw: 复制从当前光标的位置到下一个单词的开头；")]),s._v(" "),t("li",[s._v("yb: 复制从当前光标的位置到上一个单词的末尾；")]),s._v(" "),t("li",[s._v("yy: 复制整行（包括换行符）；")]),s._v(" "),t("li",[s._v("4yy: 复制4行（包括换行符）；")]),s._v(" "),t("li",[s._v("y$: 复制从当前光标的位置到行尾。")])]),s._v(" "),t("h2",{attrs:{id:"剪切"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#剪切"}},[s._v("#")]),s._v(" 剪切")]),s._v(" "),t("ul",[t("li",[s._v("d：删除文本，但是它也会同时被复制到了你的剪切板中")]),s._v(" "),t("li",[s._v("diw: 删除（剪切）当前单词；")]),s._v(" "),t("li",[s._v("dw: 删除（剪切）从光标的位置到下一个单词的开头；")]),s._v(" "),t("li",[s._v("db: 删除（剪切）从贯标的位置到上一个单词的末尾；")]),s._v(" "),t("li",[s._v("dd: 删除（剪切）一张行（包括换行符）；")]),s._v(" "),t("li",[s._v("4dd: 删除（剪切）4行（包括换行符）；")]),s._v(" "),t("li",[s._v("d$: 删除（剪切）从光标的位置到当前行的末尾；")]),s._v(" "),t("li",[s._v("d^: 删除（剪切）从光标的位置到当前行的开头。")])]),s._v(" "),t("h2",{attrs:{id:"粘贴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#粘贴"}},[s._v("#")]),s._v(" 粘贴")]),s._v(" "),t("ul",[t("li",[s._v("小写p：在光标后粘贴")]),s._v(" "),t("li",[s._v("大写P：在光标前粘贴")])]),s._v(" "),t("blockquote",[t("p",[s._v("在按 P 之前键入一个数字，可以多次粘贴同一文本。假设您键入 4p，相同的文本将粘贴4次。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);