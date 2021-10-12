(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{607:function(t,s,a){"use strict";a.r(s);var e=a(5),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"path-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-key"}},[t._v("#")]),t._v(" path-key "),a("a",{attrs:{href:"https://travis-ci.org/sindresorhus/path-key",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/sindresorhus/path-key.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Get the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"}},[t._v("PATH"),a("OutboundLink")],1),t._v(" environment variable key cross-platform")])]),t._v(" "),a("p",[t._v("It's usually "),a("code",[t._v("PATH")]),t._v(", but on Windows it can be any casing like "),a("code",[t._v("Path")]),t._v("...")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install path-key\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pathKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path-key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pathKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 'PATH'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/usr/local/bin:/usr/bin:/bin'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"pathkey-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pathkey-options"}},[t._v("#")]),t._v(" pathKey(options?)")]),t._v(" "),a("h4",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("object")])]),t._v(" "),a("h5",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" env")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("object")]),a("br"),t._v("\nDefault: "),a("a",{attrs:{href:"https://nodejs.org/api/process.html#process_process_env",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("process.env")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Use a custom environment variables object.")]),t._v(" "),a("h4",{attrs:{id:"platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform"}},[t._v("#")]),t._v(" platform")]),t._v(" "),a("p",[t._v("Type: "),a("code",[t._v("string")]),a("br"),t._v("\nDefault: "),a("a",{attrs:{href:"https://nodejs.org/api/process.html#process_process_platform",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("process.platform")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Get the PATH key for a specific platform.")]),t._v(" "),a("hr"),t._v(" "),a("div",{attrs:{align:"center"}},[a("b",[a("a",{attrs:{href:"https://tidelift.com/subscription/pkg/npm-path-key?utm_source=npm-path-key&utm_medium=referral&utm_campaign=readme"}},[t._v("Get professional support for this package with a Tidelift subscription")])]),t._v(" "),a("br"),t._v(" "),a("sub",[t._v("\n\t\tTidelift helps make open source sustainable for maintainers while giving companies"),a("br"),t._v("assurances about security, maintenance, and licensing for their dependencies.\n\t")])])])}),[],!1,null,null,null);s.default=r.exports}}]);