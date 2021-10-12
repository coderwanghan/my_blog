(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{638:function(e,t,r){"use strict";r.r(t);var a=r(5),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"uri-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uri-js"}},[e._v("#")]),e._v(" URI.js")]),e._v(" "),r("p",[e._v("URI.js is an "),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc3986.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 3986"),r("OutboundLink")],1),e._v(" compliant, scheme extendable URI parsing/validating/resolving library for all JavaScript environments (browsers, Node.js, etc).\nIt is also compliant with the IRI ("),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc3987.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 3987"),r("OutboundLink")],1),e._v("), IDNA ("),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc5890.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 5890"),r("OutboundLink")],1),e._v("), IPv6 Address ("),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc5952.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 5952"),r("OutboundLink")],1),e._v("), IPv6 Zone Identifier ("),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc6874.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 6874"),r("OutboundLink")],1),e._v(") specifications.")]),e._v(" "),r("p",[e._v("URI.js has an extensive test suite, and works in all (Node.js, web) environments. It weighs in at 6.4kb (gzipped, 17kb deflated).")]),e._v(" "),r("h2",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),r("h3",{attrs:{id:"parsing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parsing"}},[e._v("#")]),e._v(" Parsing")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.parse("uri://user:pass@example.com:123/one/two.three?q1=a1&q2=a2#body");\n//returns:\n//{\n//  scheme : "uri",\n//  userinfo : "user:pass",\n//  host : "example.com",\n//  port : 123,\n//  path : "/one/two.three",\n//  query : "q1=a1&q2=a2",\n//  fragment : "body"\n//}\n')])])]),r("h3",{attrs:{id:"serializing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serializing"}},[e._v("#")]),e._v(" Serializing")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.serialize({scheme : "http", host : "example.com", fragment : "footer"}) === "http://example.com/#footer"\n')])])]),r("h3",{attrs:{id:"resolving"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resolving"}},[e._v("#")]),e._v(" Resolving")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.resolve("uri://a/b/c/d?q", "../../g") === "uri://a/g"\n')])])]),r("h3",{attrs:{id:"normalizing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#normalizing"}},[e._v("#")]),e._v(" Normalizing")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.normalize("HTTP://ABC.com:80/%7Esmith/home.html") === "http://abc.com/~smith/home.html"\n')])])]),r("h3",{attrs:{id:"comparison"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.equal("example://a/b/c/%7Bfoo%7D", "eXAMPLE://a/./b/../b/%63/%7bfoo%7d") === true\n')])])]),r("h3",{attrs:{id:"ip-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ip-support"}},[e._v("#")]),e._v(" IP Support")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('//IPv4 normalization\nURI.normalize("//192.068.001.000") === "//192.68.1.0"\n\n//IPv6 normalization\nURI.normalize("//[2001:0:0DB8::0:0001]") === "//[2001:0:db8::1]"\n\n//IPv6 zone identifier support\nURI.parse("//[2001:db8::7%25en1]");\n//returns:\n//{\n//  host : "2001:db8::7%en1"\n//}\n')])])]),r("h3",{attrs:{id:"iri-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iri-support"}},[e._v("#")]),e._v(" IRI Support")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('//convert IRI to URI\nURI.serialize(URI.parse("http://examplé.org/rosé")) === "http://xn--exampl-gva.org/ros%C3%A9"\n//convert URI to IRI\nURI.serialize(URI.parse("http://xn--exampl-gva.org/ros%C3%A9"), {iri:true}) === "http://examplé.org/rosé"\n')])])]),r("h3",{attrs:{id:"options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),r("p",[e._v("All of the above functions can accept an additional options argument that is an object that can contain one or more of the following properties:")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("scheme")]),e._v(" (string)")]),e._v(" "),r("p",[e._v("Indicates the scheme that the URI should be treated as, overriding the URI's normal scheme parsing behavior.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("reference")]),e._v(" (string)")]),e._v(" "),r("p",[e._v("If set to "),r("code",[e._v('"suffix"')]),e._v(", it indicates that the URI is in the suffix format, and the validator will use the option's "),r("code",[e._v("scheme")]),e._v(" property to determine the URI's scheme.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("tolerant")]),e._v(" (boolean, false)")]),e._v(" "),r("p",[e._v("If set to "),r("code",[e._v("true")]),e._v(", the parser will relax URI resolving rules.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("absolutePath")]),e._v(" (boolean, false)")]),e._v(" "),r("p",[e._v("If set to "),r("code",[e._v("true")]),e._v(", the serializer will not resolve a relative "),r("code",[e._v("path")]),e._v(" component.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("iri")]),e._v(" (boolean, false)")]),e._v(" "),r("p",[e._v("If set to "),r("code",[e._v("true")]),e._v(", the serializer will unescape non-ASCII characters as per "),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc3987.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 3987"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("unicodeSupport")]),e._v(" (boolean, false)")]),e._v(" "),r("p",[e._v("If set to "),r("code",[e._v("true")]),e._v(", the parser will unescape non-ASCII characters in the parsed output as per "),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc3987.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 3987"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("domainHost")]),e._v(" (boolean, false)")]),e._v(" "),r("p",[e._v("If set to "),r("code",[e._v("true")]),e._v(", the library will treat the "),r("code",[e._v("host")]),e._v(" component as a domain name, and convert IDNs (International Domain Names) as per "),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc5891.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 5891"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("h2",{attrs:{id:"scheme-extendable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheme-extendable"}},[e._v("#")]),e._v(" Scheme Extendable")]),e._v(" "),r("p",[e._v("URI.js supports inserting custom "),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/URI_scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("scheme"),r("OutboundLink")],1),e._v(" dependent processing rules. Currently, URI.js has built in support for the following schemes:")]),e._v(" "),r("ul",[r("li",[e._v("http ["),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc2616.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 2616"),r("OutboundLink")],1),e._v("]")]),e._v(" "),r("li",[e._v("https ["),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc2818.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 2818"),r("OutboundLink")],1),e._v("]")]),e._v(" "),r("li",[e._v("ws ["),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc6455.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 6455"),r("OutboundLink")],1),e._v("]")]),e._v(" "),r("li",[e._v("wss ["),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc6455.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 6455"),r("OutboundLink")],1),e._v("]")]),e._v(" "),r("li",[e._v("mailto ["),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc6068.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 6068"),r("OutboundLink")],1),e._v("]")]),e._v(" "),r("li",[e._v("urn ["),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc2141.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 2141"),r("OutboundLink")],1),e._v("]")]),e._v(" "),r("li",[e._v("urn:uuid ["),r("a",{attrs:{href:"http://www.ietf.org/rfc/rfc4122.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 4122"),r("OutboundLink")],1),e._v("]")])]),e._v(" "),r("h3",{attrs:{id:"http-https-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-https-support"}},[e._v("#")]),e._v(" HTTP/HTTPS Support")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.equal("HTTP://ABC.COM:80", "http://abc.com/") === true\nURI.equal("https://abc.com", "HTTPS://ABC.COM:443/") === true\n')])])]),r("h3",{attrs:{id:"ws-wss-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ws-wss-support"}},[e._v("#")]),e._v(" WS/WSS Support")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.parse("wss://example.com/foo?bar=baz");\n//returns:\n//{\n//\tscheme : "wss",\n//\thost: "example.com",\n//\tresourceName: "/foo?bar=baz",\n//\tsecure: true,\n//}\n\nURI.equal("WS://ABC.COM:80/chat#one", "ws://abc.com/chat") === true\n')])])]),r("h3",{attrs:{id:"mailto-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mailto-support"}},[e._v("#")]),e._v(" Mailto Support")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.parse("mailto:alpha@example.com,bravo@example.com?subject=SUBSCRIBE&body=Sign%20me%20up!");\n//returns:\n//{\n//\tscheme : "mailto",\n//\tto : ["alpha@example.com", "bravo@example.com"],\n//\tsubject : "SUBSCRIBE",\n//\tbody : "Sign me up!"\n//}\n\nURI.serialize({\n\tscheme : "mailto",\n\tto : ["alpha@example.com"],\n\tsubject : "REMOVE",\n\tbody : "Please remove me",\n\theaders : {\n\t\tcc : "charlie@example.com"\n\t}\n}) === "mailto:alpha@example.com?cc=charlie@example.com&subject=REMOVE&body=Please%20remove%20me"\n')])])]),r("h3",{attrs:{id:"urn-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#urn-support"}},[e._v("#")]),e._v(" URN Support")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.parse("urn:example:foo");\n//returns:\n//{\n//\tscheme : "urn",\n//\tnid : "example",\n//\tnss : "foo",\n//}\n')])])]),r("h4",{attrs:{id:"urn-uuid-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#urn-uuid-support"}},[e._v("#")]),e._v(" URN UUID Support")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('URI.parse("urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6");\n//returns:\n//{\n//\tscheme : "urn",\n//\tnid : "uuid",\n//\tuuid : "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n//}\n')])])]),r("h2",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("p",[e._v("To load in a browser, use the following tag:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('<script type="text/javascript" src="uri-js/dist/es5/uri.all.min.js"><\/script>\n')])])]),r("p",[e._v("To load in a CommonJS/Module environment, first install with npm/yarn by running on the command line:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("npm install uri-js\n# OR\nyarn add uri-js\n")])])]),r("p",[e._v("Then, in your code, load it using:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('const URI = require("uri-js");\n')])])]),r("p",[e._v("If you are writing your code in ES6+ (ESNEXT) or TypeScript, you would load it using:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('import * as URI from "uri-js";\n')])])]),r("p",[e._v("Or you can load just what you need using named exports:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('import { parse, serialize, resolve, resolveComponents, normalize, equal, removeDotSegments, pctEncChar, pctDecChars, escapeComponent, unescapeComponent } from "uri-js";\n')])])]),r("h2",{attrs:{id:"breaking-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),r("h3",{attrs:{id:"breaking-changes-from-3-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes-from-3-x"}},[e._v("#")]),e._v(" Breaking changes from 3.x")]),e._v(" "),r("p",[e._v("URN parsing has been completely changed to better align with the specification. Scheme is now always "),r("code",[e._v("urn")]),e._v(", but has two new properties: "),r("code",[e._v("nid")]),e._v(" which contains the Namspace Identifier, and "),r("code",[e._v("nss")]),e._v(" which contains the Namespace Specific String. The "),r("code",[e._v("nss")]),e._v(" property will be removed by higher order scheme handlers, such as the UUID URN scheme handler.")]),e._v(" "),r("p",[e._v("The UUID of a URN can now be found in the "),r("code",[e._v("uuid")]),e._v(" property.")]),e._v(" "),r("h3",{attrs:{id:"breaking-changes-from-2-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes-from-2-x"}},[e._v("#")]),e._v(" Breaking changes from 2.x")]),e._v(" "),r("p",[e._v("URI validation has been removed as it was slow, exposed a vulnerabilty, and was generally not useful.")]),e._v(" "),r("h3",{attrs:{id:"breaking-changes-from-1-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes-from-1-x"}},[e._v("#")]),e._v(" Breaking changes from 1.x")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("errors")]),e._v(" array on parsed components is now an "),r("code",[e._v("error")]),e._v(" string.")])])}),[],!1,null,null,null);t.default=s.exports}}]);