(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{434:function(_,v,t){"use strict";t.r(v);var s=t(1),p=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("“在浏览器中，从输入URL到页面展示，这中间发生了什么？”这是一道经典的面试题，这道题设计网络、操作系统、Web等一系列的知识，可以综合考察面试者的知识掌握程度。")]),_._v(" "),v("p",[_._v("这里，先介绍一个概念："),v("strong",[_._v("用户发出请求URL请求到页面开始解析的这个过程，就叫做导航")]),_._v("。")]),_._v(" "),v("p",[_._v("这个问题可以分为以下阶段：")]),_._v(" "),v("h2",{attrs:{id:"用户输入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户输入"}},[_._v("#")]),_._v(" 用户输入")]),_._v(" "),v("p",[_._v("当用户在地址栏输入关键字时，地址栏会判断输入的关键字是搜索内容，还是请求的URL。")]),_._v(" "),v("ul",[v("li",[_._v("如果是搜索内容，地址栏则会使用浏览器的默认搜索引擎，来合成新的带搜索关键字的URL。")]),_._v(" "),v("li",[_._v("如果判断内容符合URL规则，那么地址栏会根据规则，把这段内容加上协议，合成完整的URL。")])]),_._v(" "),v("p",[_._v("当用户输入关键字并按下回车之后，这意味着当前页面即将被新的页面所替换，但在这之前，浏览器会触发beforeunload事件，beforeunload事件主要有两个作用，一是可以在退出当前页面前做一些清理工作，二是可以询问用户是否确认离开当前页面，比如当前页面可能还有未提交完成的表单等情况，因此用户可以通过beforeunload事件来取消导航，让浏览器不再执行任何后续工作。")]),_._v(" "),v("p",[_._v("如果当前页面没有监听beforeunload事件或者同意了继续后续流程，那么浏览器则会进入加载状态。此时浏览器标签页的loading图标闪动，但页面显示的仍然是之前打开的页面内容，并没有立即被新页面替换，要等到提交文档阶段，页面内容才会被替换。")]),_._v(" "),v("h2",{attrs:{id:"url请求过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#url请求过程"}},[_._v("#")]),_._v(" URL请求过程")]),_._v(" "),v("p",[_._v("接下来，就开始进行页面资源请求过程了。")]),_._v(" "),v("p",[_._v("浏览器进程会通过进程间通信（IPC）把URL请求包装成一个任务发送给网络进程，由网络进程向服务器发送请求，并将响应结果再通过进程间通信传递给浏览器主进程。")]),_._v(" "),v("p",[_._v("网络进程发送URL请求的过程：")]),_._v(" "),v("ol",[v("li",[_._v("查找本地缓存 如果有缓存则直接取缓存返回给浏览器进程，如果没有，则进入网络请求流程。")]),_._v(" "),v("li",[_._v("DNS解析，获取IP地址。")])]),_._v(" "),v("p",[_._v("DNS解析过程：")]),_._v(" "),v("p",[_._v("（1）查找本地浏览器的DNS缓存，如果查到了IP地址就停止解析，一般浏览器缓存的缓存时间限制比较大，一般只有1分钟，同时缓存容量也有限制；")]),_._v(" "),v("p",[_._v("（2）搜索系统自身的DNS缓存；")]),_._v(" "),v("p",[_._v("（3）找hosts文件；")]),_._v(" "),v("p",[_._v("（4）查找本地域名服务器，并采取迭代方式依次查找根域名服务器、COM顶级域名服务器、权限域名服务器等。")]),_._v(" "),v("p",[_._v("默认DNS发送数据是靠udp协议。")]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[_._v("如果协议是https，还需要建立TLS链接。")]),_._v(" "),v("li",[_._v("建立TCP连接。")])]),_._v(" "),v("p",[_._v("由于TCP是面向连接的通信协议，所以在数据传输之前需要建立好客户端与服务器之间的连接，也就是tcp"),v("strong",[_._v("三次握手")]),_._v("：")]),_._v(" "),v("img",{attrs:{src:_.$withBase("/browser/三次握手.png"),alt:"图片加载失败",title:"三次握手"}}),_._v(" "),v("p",[_._v("（1）客户端生成一个随机数seq，假设其值为t，并将标志位SYN设为1，将这些数据打包发给服务端后，客户端进入等待服务器确认的状态。")]),_._v(" "),v("p",[_._v("（2）服务端收到服务端发来的SYN=1的数据包后，知道这是在请求建立连接，于是服务器端将SYN与ACK均置为1，并将请求包中客户端发来的随机数t加1后赋值给ack，然后再生成一个服务端的随机数seq=k，完成这些操作后，服务器把这些数据打包再发回给客户端，作为对客户端建立连接请求的确认应答。")]),_._v(" "),v("p",[_._v("（3）客户端收到服务器端的确认应答后，检查数据包中ack的字段值是否为t+1，ACK是否等于1，如果正确的话就讲服务器发送过来的随机数加1（ack=k+1），将ACK=1的数据包再发送给服务器端以确认服务器端的应答，服务器端收到应答包后通过检查ack是否等于k+1来确认连接是否建立成功。")]),_._v(" "),v("p",[_._v("当用户关闭标签页或请求完成后，TCP连接会进行"),v("strong",[_._v("四次挥手")]),_._v("：")]),_._v(" "),v("img",{attrs:{src:_.$withBase("/browser/四次挥手.png"),alt:"图片加载失败",title:"四次挥手"}}),_._v(" "),v("p",[_._v("（1）由客户端向服务器发送FIN=M的指令，随后进入等待请求状态"),v("strong",[_._v("FIN_WAIT_1")]),_._v("，表明客户端已经没有向服务器发送的数据，但若服务器此时还有为完成的数据传递，可继续传递数据。")]),_._v(" "),v("p",[_._v("（2）服务端收到FIN报文后，会发送ack=M+1的确认报文，告诉客户端关闭请求已收到，但服务端可能还有未完成发送的数据，所以请客户端继续等待，此时服务器进行"),v("strong",[_._v("CLOSE_WAIT")]),_._v("状态。客户端收到ack=M+1的报文后，进行"),v("strong",[_._v("FIN_WAIT_2")]),_._v("状态。")]),_._v(" "),v("p",[_._v("（3）当服务端确认已完成所有的数据传递后，便发送带有FIN=N的报文给客户端，准备关闭连接，服务器进入状态"),v("strong",[_._v("LAST_ACK")]),_._v("。")]),_._v(" "),v("p",[_._v("（4）客户端收到FIN=N的报文后可进行关闭操作，但为保证数据的正确性，会回传给服务器端一个确认报文ack=N+1，同时服务器也在等待客户端的最终确认，如果服务器端没有收到报文则会进行重传，只有收到报文后才会真正断开连接,进入"),v("strong",[_._v("CLOSED")]),_._v("状态。而客户端在发送了确认报文之后，进入"),v("strong",[_._v("TIME_WAIT")]),_._v("状态，在等待2倍的"),v("strong",[_._v("MSL（Maximum segment Lifetime）")]),_._v("，没有收到服务器端任何信息则认为服务器端连接已关闭，也可关闭客户端信息。")]),_._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[_._v("构建请求头、请求行，请求体、并且把该域名附带的Cookie信息附加到请求头中，然后向服务器发送构建的请求信息。")]),_._v(" "),v("li",[_._v("处理响应数据（响应头、响应行、响应体）。")])]),_._v(" "),v("p",[_._v("（1）重定向：")]),_._v(" "),v("p",[_._v("接收到服务器返回的响应头之后，网络进程开始解析响应头，如果发现返回的状态码是301或302，说明服务器需要浏览器重定向到其它URL。这时候网络进程会从响应头的Location字段里面读取重定向的地址，然后再发起新的HTTP或者HTTPS请求，一切又重头开始了。")]),_._v(" "),v("p",[_._v("（2）响应数据类型处理")]),_._v(" "),v("p",[_._v("如果状态码是200，那么浏览器就要开始对响应的数据进行处理了。那接下来就有一个问题了，浏览器是如何知道返回的数据是什么类型的呢？是HTML、CSS还是JS文件呢？")]),_._v(" "),v("p",[_._v("响应头中有一个Content-Type，就是解决这个问题的。")]),_._v(" "),v("p",[_._v("如果Content-type字段的值是text/html，则通知浏览器进程准备渲染进程准备进行渲染，如果是js文件，则会在恰当时机交给js主线程去执行。如果其值为application/octet-stream，则表示返回的数据是"),v("strong",[_._v("字节流类型")]),_._v("的，浏览器会按照"),v("strong",[_._v("下载类型")]),_._v("来处理该请求。")]),_._v(" "),v("p",[_._v("如果服务器进行了压缩，还要根据content-encoding字段，进行解压缩。")]),_._v(" "),v("p",[_._v("（3）准备渲染进程")]),_._v(" "),v("p",[_._v("默认Chrome会为每个页面分配一个渲染进程。也就是说，每打开一个新页面，就会配套创建一个渲染进程。但是，如果在一个页面中打开了另一个属于"),v("strong",[_._v("同一站点")]),_._v("的页面，那么两个页面会共用一个渲染进程。")]),_._v(" "),v("p",[_._v("同一站点(same-site)：根域名、协议相同。")]),_._v(" "),v("p",[_._v("（4）提交文档")]),_._v(" "),v("p",[_._v("浏览器进程将网络进程接收到的HTML数据提交给渲染进程，这个过程叫"),v("strong",[_._v("提交文档")]),_._v("。具体过程如下：")]),_._v(" "),v("ul",[v("li",[_._v("浏览器接收到网络进程的响应头数据之后，便向渲染进程发起“提交文档”的消息；")]),_._v(" "),v("li",[_._v("渲染进程接收到消息之后，会和网络进程建立传输数据的“管道”；")]),_._v(" "),v("li",[_._v("等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程；")]),_._v(" "),v("li",[_._v("浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏URL、前进后退的历史状态，并更新Web页面。")])]),_._v(" "),v("p",[_._v("这也就解释了为什么在浏览器的地址栏里面输入了一个地址后，之前的页面并没有立马消息，而是要加载一会儿才会更新页面。")]),_._v(" "),v("p",[_._v("（5）渲染阶段")]),_._v(" "),v("p",[_._v("文档被提交之后，渲染进程便开始页面解析和子资源加载了，一旦页面生成完成，浏览器进程会发送一个消息给浏览器进程，浏览器进程接收到消息后，会停止标签图标上的加载动画，渲染结束。")])])}),[],!1,null,null,null);v.default=p.exports}}]);