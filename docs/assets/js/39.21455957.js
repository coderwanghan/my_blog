(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{453:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Socket：一套网络编程API，利用它可以建立网络连接（socket编程）。")]),t._v(" "),e("h2",{attrs:{id:"http-vs-websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-vs-websocket"}},[t._v("#")]),t._v(" HTTP vs WebSocket")]),t._v(" "),e("p",[t._v("HTTP请求的特点：通信只能由客户端发起。所以，早期很多网站为了实现推送技术，所用的技术都是轮询。")]),t._v(" "),e("ul",[e("li",[t._v("轮询：是指由浏览器每隔一段时间（如每秒）向服务器发出HTTP请求，然后服务器返回最新的数据给客户端")]),t._v(" "),e("li",[t._v("为了能更好的节省服务器资源和带宽，并且能够更实时地进行通讯，HTML5规范中出现了WebSocket协议。")])]),t._v(" "),e("ol",[e("li",[t._v("WebSocket和HTTP属于平级关系，都是应用层协议。")])]),t._v(" "),e("ul",[e("li",[t._v("TCP本身就是支持全双工通信")]),t._v(" "),e("li",[t._v("但是HTTP的请求、应答模式限制了TCP全双工的能力")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("WebSocket使用80（ws://）、443（wss://）端口，可以绕过大多数防火墙的限制。")])]),t._v(" "),e("li",[e("p",[t._v("与HTTP不同的是，WebSocket需要先建立连接（应用层的连接）。")])])]),t._v(" "),e("ul",[e("li",[t._v("这就使得WebSocket成为一种有状态的协议，之后通信时可以省略部分状态信息。")]),t._v(" "),e("li",[t._v("而HTTP请求可能需要在每个请求都额外携带状态信息（如含有身份信息的Cookie）")])]),t._v(" "),e("h2",{attrs:{id:"websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),e("p",[t._v("WebSocket是基于TCP的"),e("strong",[t._v("全双工")]),t._v("通讯的应用层协议。")]),t._v(" "),e("p",[t._v("全双工：即客户端、服务器任何一方都可以主动发消息给对方。")]),t._v(" "),e("p",[t._v("应用场景：社交订阅、股票基金报价、体育实况更新、多媒体聊天、多玩家游戏等。")]),t._v(" "),e("h2",{attrs:{id:"websocket-建立连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket-建立连接"}},[t._v("#")]),t._v(" WebSocket——建立连接")]),t._v(" "),e("p",[t._v("WebSocket需要借助HTTP协议来建立连接（也叫做握手,HandShake）")]),t._v(" "),e("ul",[e("li",[t._v("由客户端（浏览器）主动发出握手请求")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chat "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Host")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Upgrade")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" websocket\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Upgrade\nSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("WebSocket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dGhlIHNhbXBsZSBub25jZQ"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Origin")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\nSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("WebSocket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" chat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" superchat\nSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("WebSocket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Version"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v(" Switching Protocols\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Upgrade")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" websocket\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Upgrade\nSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("WebSocket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Accept"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" s3pPLMBiTxaQ9kYGzzhZRbK"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("xOo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("WebSocket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" chat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("strong",[t._v("Connection")]),t._v("必须设置Upgrade，表示客户端希望连接升级")]),t._v(" "),e("p",[e("strong",[t._v("Upgrade")]),t._v("必须设置为webSocket，表示希望升级到WebSocket协议")]),t._v(" "),e("p",[e("strong",[t._v("Sec-WebSocket-Version")]),t._v("表示支持的WebSocket版本，RFC 6455要求使用的版本是13。")]),t._v(" "),e("p",[e("strong",[t._v("Sec-WebSocket-Key")]),t._v("是客户端生成的随机字符串，比如例子中的dGhlIHNhbXBsZSBub25jZQ==")]),t._v(" "),e("p",[t._v("服务器接收到客户端的Sec-WebSocket-Key后，会进行以下操作：")]),t._v(" "),e("ol",[e("li",[t._v("Sec-WebSocket-Key加上一个固定的值"),e("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc4122",target:"_blank",rel:"noopener noreferrer"}},[t._v("GUID"),e("OutboundLink")],1),t._v("值（258EAFA5-E914-47DA-95CA-C5AB0DC85B11），变成dGhlIHNhbXBsZSBub25jZQ==258EAFA5-E914-47DA-95CA-C5AB0DC85B11")]),t._v(" "),e("li",[t._v("将1的结果进行"),e("a",{attrs:{href:"http://encode.chahuo.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SHA-1摘要计算"),e("OutboundLink")],1),t._v("，得到结果b37a4f2cc0624f1690f64606cf385945b2bec4ea")]),t._v(" "),e("li",[t._v("将2的结果进行"),e("a",{attrs:{href:"https://base64.guru/converter/encode/hex",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hex To Base64编码"),e("OutboundLink")],1),t._v("，得到结果s3pPLMBiTxaQ9kYGzzhZRbK+xOo=")]),t._v(" "),e("li",[t._v("将3的结果作为"),e("strong",[t._v("Sec-WebSocket-Accept")]),t._v("响应头的值，返回给客户端")])]),t._v(" "),e("p",[t._v("如此操作，可以尽量避免普通HTTP请求被误认为WebSocket协议（仅靠Connection和Upgrade是不够的）。")]),t._v(" "),e("h2",{attrs:{id:"websocket-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket-使用"}},[t._v("#")]),t._v(" WebSocket——使用")]),t._v(" "),e("p",[t._v("W3C标准化了一套WebSocket API，可以直接使用JS调用。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ws "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSocket")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wss://example.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);