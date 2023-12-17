(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{486:function(t,_,v){"use strict";v.r(_);var i=v(1),l=Object(i.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-get和post的请求的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-get和post的请求的区别"}},[t._v("#")]),t._v(" 1. GET和POST的请求的区别")]),t._v(" "),_("ul",[_("li",[t._v("幂等性：GET是从服务器获取资源，没有副作用，而post则是创建资源，如果发多次会多次创建资源")]),t._v(" "),_("li",[t._v("缓存：GET请求会被浏览器主动缓存，而POST不会")]),t._v(" "),_("li",[t._v("安全性：GET请求参数拼接在URL上，相对不安全，而且浏览器会对URL长度有限制，而POST请求则放在请求体中，相对更安全，而且请求体大小无限制")])]),t._v(" "),_("h2",{attrs:{id:"_2-post和put请求的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-post和put请求的区别"}},[t._v("#")]),t._v(" 2. POST和PUT请求的区别")]),t._v(" "),_("ul",[_("li",[t._v("post一般为创建资源，而put为修改资源")]),t._v(" "),_("li",[t._v("post HTTP1.0 PUT HTTP1.1")])]),t._v(" "),_("h2",{attrs:{id:"_3-常见的http请求头和响应头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见的http请求头和响应头"}},[t._v("#")]),t._v(" 3. 常见的HTTP请求头和响应头")]),t._v(" "),_("p",[t._v("请求头：")]),t._v(" "),_("ul",[_("li",[t._v("Accept")]),t._v(" "),_("li",[t._v("Accept-encoding")]),t._v(" "),_("li",[t._v("Accept-language")]),t._v(" "),_("li",[t._v("Host")]),t._v(" "),_("li",[t._v("referer")]),t._v(" "),_("li",[t._v("connection")]),t._v(" "),_("li",[t._v("use-agent")]),t._v(" "),_("li",[t._v("if-no-match")]),t._v(" "),_("li",[t._v("if-modify-since")]),t._v(" "),_("li",[t._v("Accept-range")]),t._v(" "),_("li",[t._v("set-cookie")]),t._v(" "),_("li",[t._v("expires")])]),t._v(" "),_("p",[t._v("响应头")]),t._v(" "),_("ul",[_("li",[t._v("content-encoding")]),t._v(" "),_("li",[t._v("content-range")]),t._v(" "),_("li",[t._v("content-type")]),t._v(" "),_("li",[t._v("content-length")]),t._v(" "),_("li",[t._v("cookie")]),t._v(" "),_("li",[t._v("server")])]),t._v(" "),_("p",[t._v("通用：")]),t._v(" "),_("ul",[_("li",[t._v("Date")]),t._v(" "),_("li",[t._v("connection")])]),t._v(" "),_("h2",{attrs:{id:"_4-常见的http请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-常见的http请求方法"}},[t._v("#")]),t._v(" 4.常见的HTTP请求方法")]),t._v(" "),_("ul",[_("li",[t._v("get 获取资源")]),t._v(" "),_("li",[t._v("post 创建资源")]),t._v(" "),_("li",[t._v("put 修改资源")]),t._v(" "),_("li",[t._v("delete 删除资源")]),t._v(" "),_("li",[t._v("HEAD 判断资源是否存在 无响应体")]),t._v(" "),_("li",[t._v("options 预检请求 获取资源支持的请求 或者跨域的安全请求")]),t._v(" "),_("li",[t._v("trace获取路径")])]),t._v(" "),_("h2",{attrs:{id:"_5-http-1-0-和-http-1-1-之间有哪些区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-1-0-和-http-1-1-之间有哪些区别"}},[t._v("#")]),t._v(" 5. HTTP 1.0 和 HTTP 1.1 之间有哪些区别")]),t._v(" "),_("ul",[_("li",[t._v("http1.0 默认使用非持久连接，而 http1.1 默认使用持久连接")]),t._v(" "),_("li",[t._v("缓存cache-control 条件请求")]),t._v(" "),_("li",[t._v("host虚拟主机")]),t._v(" "),_("li",[t._v("content-range范围请求")]),t._v(" "),_("li",[t._v("请求方法PUT、HEAD、OPTIONS")])]),t._v(" "),_("h2",{attrs:{id:"_6-http-1-1-和-http-2-0-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-http-1-1-和-http-2-0-的区别"}},[t._v("#")]),t._v(" 6.HTTP 1.1 和 HTTP 2.0 的区别")]),t._v(" "),_("ul",[_("li",[t._v("HTTP2.0是二进制协议，HTTP1.1发送的是文本或者ASCII码")]),t._v(" "),_("li",[t._v("多路复用、头部压缩、服务端推送、请求资源的优先级")]),t._v(" "),_("li",[t._v("安全性")])]),t._v(" "),_("h2",{attrs:{id:"_7-http和https协议的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-http和https协议的区别"}},[t._v("#")]),t._v(" 7. HTTP和HTTPS协议的区别")]),t._v(" "),_("ul",[_("li",[t._v("明文传输 加密传输")]),t._v(" "),_("li",[t._v("在tcp上新增了TLS层")]),t._v(" "),_("li",[t._v("数字证书 需要一定的费用")]),t._v(" "),_("li",[t._v("端口")])])])}),[],!1,null,null,null);_.default=l.exports}}]);