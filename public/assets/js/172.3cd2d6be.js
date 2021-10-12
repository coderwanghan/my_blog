(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{673:function(t,_,v){"use strict";v.r(_);var s=v(5),e=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("先看一个HTTP常见的状态行信息：")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OK")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("其中HTTP是协议名，1.1是版本号，OK是原因短语，其中的200就是"),v("strong",[t._v("状态码（Status Code）。")])]),t._v(" "),v("h2",{attrs:{id:"状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),v("p",[t._v("HTTP的状态码是一个十进制数字，表示服务器对请求的处理结果。")]),t._v(" "),v("p",[t._v("虽然RFC标准里规定的状态码是三位数，但如果从000一直按顺序开始编下去，灵活性和扩展性很差，所以状态码也被设计成有一定格式。状态码被分成了五类，第一位表示分类，0-99不用，所以状态码的可用范围就缩小为100~599了。")]),t._v(" "),v("ul",[v("li",[t._v("1xx：提示信息，表示目前是协议处理的中间状态，还需要后续的操作；")]),t._v(" "),v("li",[t._v("2xx：成功，报文已经收到并被正确处理；")]),t._v(" "),v("li",[t._v("3xx：重定向，资源位置发生变动，需要客户端重新发送请求；")]),t._v(" "),v("li",[t._v("4xx：客户端错误，请求报文有误，服务器无法处理；")]),t._v(" "),v("li",[t._v("5xx：服务器错误，服务器在处理请求时内部发生了错误。")])]),t._v(" "),v("p",[t._v("在客户端和服务器端使用HTTP通信的时候，两方都应正确理解和应用这些状态码，服务器不要返回400、500这种含糊不清的状态码，而客户端应根据状态码调整请求报文，以达到预期结果。")]),t._v(" "),v("p",[t._v("目前RFC标准共有41个状态码，但状态码也跟请求方法一样，允许自行扩展。")]),t._v(" "),v("h2",{attrs:{id:"_1xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[t._v("#")]),t._v(" 1xx")]),t._v(" "),v("p",[t._v("1xx类状态码属于提示信息，是协议处理的中间状态，实际能用到的地方不多，见的比较多的是“ "),v("strong",[t._v("101 Switching Protocols")]),t._v(" ”，客户端使用Upgrade头字段，要求在HTTP协议的基础上改成其他的协议继续通信，比如WebSocket。如果服务器端也同意，可以回复状态码101，之后就不采用HTTP进行通信了。")]),t._v(" "),v("h2",{attrs:{id:"_2xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[t._v("#")]),t._v(" 2xx")]),t._v(" "),v("p",[t._v("2xx类状态码表示服务器收到并成功处理了客户端的请求。")]),t._v(" "),v("p",[v("strong",[t._v("200 OK")]),t._v("：成功处理请求。")]),t._v(" "),v("p",[v("strong",[t._v("204 No Content")]),t._v("：含义与200相同，但响应头后没有body数据。")]),t._v(" "),v("p",[v("strong",[t._v("206 Partial Content")]),t._v("：表示“范围请求”，表示客户端要请求部分资源，是实现断点续传和分片上传功能的基础。状态码206通常是伴随着头字段“"),v("strong",[t._v("Content-Range")]),t._v("”，表示响应报文里body数据的具体范围，供客户端确认。比如“Content-Range：bytes 0-99/2000”，意思是本次获取总计2000个字节里的前100个字节。")]),t._v(" "),v("h2",{attrs:{id:"_3xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[t._v("#")]),t._v(" 3xx")]),t._v(" "),v("p",[t._v("3xx类状态码的含义是重定向，表示服务器资源发生位置变化，客户端必须用新的URI重新发起请求获取资源。")]),t._v(" "),v("p",[v("strong",[t._v("301 Moved Permanently")]),t._v("：永久重定向。通过是网站进行迁移，域名发生了变化，当用户访问源地址的URI的时候就可以使用301状态码。同时浏览器会对其进行缓存优化，下次进入会直接指向新地址。比如HTTP升级成了HTTPS。")]),t._v(" "),v("p",[v("strong",[t._v("302 Moved Temporarily")]),t._v("：临时重定向。表示请求的资源还在，但需要暂时用另一个URI来代替。将服务器资源临时重定向到另一个地址，比如网站需要短时间的维护，此时需要让用户访问的时候转跳到另一个页面，等网站维护结束了，用户就可以正常访问，这时候就可以使用302状态码。")]),t._v(" "),v("p",[t._v("301和302都会在响应头里使用"),v("strong",[t._v("Location")]),t._v("字段指明后续要跳转的URI。")]),t._v(" "),v("p",[v("strong",[t._v("304 Not Modified")]),t._v("：用于If-Modified-Since等条件请求，表示资源未修改，用于缓存控制。它不具有通常的跳转含义，但可以理解成“重定向到已缓存的文件”，即缓存重定向。")]),t._v(" "),v("h2",{attrs:{id:"_4xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[t._v("#")]),t._v(" 4xx")]),t._v(" "),v("p",[t._v("4xx类状态码表示客户端错误，通常是请求报文有误。")]),t._v(" "),v("p",[v("strong",[t._v("400 Bad Request")]),t._v("：400是一个很笼统的状态码，只是告诉客户端请求报文有错误，没说具体是什么错误，可能是url、请求头、请求体、请求方法等的错误。")]),t._v(" "),v("p",[v("strong",[t._v("403 Forbidden")]),t._v("：服务器禁止访问资源，可能是当前角色权限不够，或者信息敏感、法律禁止等。")]),t._v(" "),v("p",[v("strong",[t._v("404 Not Found")]),t._v("：请求的资源在服务器上找不到。")]),t._v(" "),v("p",[v("strong",[t._v("405 Method Not Allowed")]),t._v("：不允许使用当前的请求方法请求此资源。")]),t._v(" "),v("p",[v("strong",[t._v("406 Not Acceptable")]),t._v("：资源无法满足客户端请求的条件，比如请求中文但只有英文。")]),t._v(" "),v("p",[v("strong",[t._v("408 Request Timeout")]),t._v("：请求超时，服务器等待了过长的时间。")]),t._v(" "),v("p",[v("strong",[t._v("409 Conflict")]),t._v("：多个请求发生了冲突，可以理解为多线程并发时的竞态。")]),t._v(" "),v("p",[v("strong",[t._v("413 Request Entity Too Large")]),t._v("：请求报文里的body太大。")]),t._v(" "),v("p",[v("strong",[t._v("414 Request-URI Too Large")]),t._v("：请求行里的URI太大。")]),t._v(" "),v("p",[v("strong",[t._v("429 Too Many Requests")]),t._v("：客户端发送了太多的请求，通常是由于服务器的限连策略。")]),t._v(" "),v("p",[v("strong",[t._v("431 Request Header Fields Too Large")]),t._v("：请求头某个字段或总体太大。")]),t._v(" "),v("h2",{attrs:{id:"_5xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[t._v("#")]),t._v(" 5xx")]),t._v(" "),v("p",[t._v("5xx类状态码表示服务器端错误，就是服务器处理请求的时候出现了异常，是服务端的错误码。")]),t._v(" "),v("p",[v("strong",[t._v("500 Internal Server Error")]),t._v("：跟400一样，是一个很笼统的状态码，告诉客户端服务器这边处理出错了，但具体什么错误我们不知道。这有好有坏，好处是保护服务器内部的详细信息，防止被黑客窥探攻击，坏处是不利于调试。")]),t._v(" "),v("p",[v("strong",[t._v("501 Not Implemented")]),t._v("：表示客户端请求的功能还不支持。这个状态码比500稍“温和”一些：告诉你现在不支持，但具体什么时候支持就不好说了。")]),t._v(" "),v("p",[v("strong",[t._v("502 Bad Gateway")]),t._v("：通常是服务器作为网管或者代理时返回的错误码，表示服务器自身工作正常，访问后端服务器时发生了错误，但具体的错误原因我们不得而知。")]),t._v(" "),v("p",[v("strong",[t._v("503 Service Unavailable")]),t._v("：表示服务器当前很忙，暂时无法响应服务。503是一个“临时”的状态，可能过几秒后服务器就不那么忙了，可以继续提供服务，所以503的响应报文里通常还会有一个“"),v("strong",[t._v("Retry-After")]),t._v("”字段，告诉客户端在多久以后可以再次尝试请求。")])])}),[],!1,null,null,null);_.default=e.exports}}]);