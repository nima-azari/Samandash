(this["webpackJsonpsaman-li-dash"]=this["webpackJsonpsaman-li-dash"]||[]).push([[27],{100:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s}));var r=e(9),u=e(0),c=e.n(u),i=e(16),o=e(93);function a(t){function n(n,e){var r=t(n).current,i=r.instance,a=r.context;return Object(u.useImperativeHandle)(e,(function(){return i})),null==n.children?null:c.a.createElement(o.c,{value:a},n.children)}return Object(u.forwardRef)(n)}function f(t){function n(n,e){var c=Object(u.useState)(!1),o=Object(r.a)(c,2),a=o[0],f=o[1],s=t(n,f).current.instance;Object(u.useImperativeHandle)(e,(function(){return s})),Object(u.useEffect)((function(){a&&s.update()}),[s,a,n.children]);var b=s._contentNode;return b?Object(i.createPortal)(n.children,b):null}return Object(u.forwardRef)(n)}function s(t){function n(n,e){var r=t(n).current.instance;return Object(u.useImperativeHandle)(e,(function(){return r})),null}return Object(u.forwardRef)(n)}},101:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return l})),e.d(n,"e",(function(){return O}));var r=e(100),u=e(104),c=e(106),i=e(97),o=e(105),a=e(102);function f(t){var n=Object(c.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(u.a)(n);return Object(r.c)(e)}function s(t,n){var e=Object(c.a)(t,n),u=Object(i.a)(e);return Object(r.a)(u)}function b(t,n){var e=Object(c.a)(t),u=Object(o.a)(e,n);return Object(r.b)(u)}function l(t,n){var e=Object(c.a)(t,n),u=Object(a.a)(e);return Object(r.a)(u)}function O(t,n){var e=Object(c.a)(t,n),u=Object(i.a)(e);return Object(r.c)(u)}},102:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),u=e(93),c=e(95),i=e(97),o=e(94);function a(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,u=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(u),e.current=u}}),[t,n])}function f(t){return function(n){var e=Object(u.d)(),r=t(Object(o.a)(n,e),e);return Object(c.a)(r.current,n.eventHandlers),Object(i.b)(r.current,e),a(r.current,n),r}}},103:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return i}));var r=e(93),u=e(0);function c(){return Object(r.d)().map}function i(t,n){var e=c();return Object(u.useEffect)((function(){return e.on(t,n),function(){e.off(t,n)}}),[e,t,n]),e}},104:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0),u=e(93);function c(t){return function(n){var e=Object(u.d)(),c=t(n,e),i=c.current.instance,o=Object(r.useRef)(n.position),a=n.position;return Object(r.useEffect)((function(){return i.addTo(e.map),function(){i.remove()}}),[e.map,i]),Object(r.useEffect)((function(){null!=a&&a!==o.current&&(i.setPosition(a),o.current=a)}),[i,a]),c}}},105:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(99),u=e(93),c=e(95),i=e(94);function o(t,n){return function(e,o){var a=Object(u.d)(),f=t(Object(i.a)(e,a),a);return Object(r.a)(a.map,e.attribution),Object(c.a)(f.current,e.eventHandlers),n(f.current,a,e,o),f}}},106:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0);function u(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,u){var c=Object(r.useRef)(t(e,u)),i=Object(r.useRef)(e),o=c.current.instance;return Object(r.useEffect)((function(){i.current!==e&&(n(o,e,i.current),i.current=e)}),[o,e,u]),c}}},109:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(86);function u(t,n,e){n.bounds instanceof r.LatLngBounds&&n.bounds!==e.bounds&&t.setBounds(n.bounds),null!=n.opacity&&n.opacity!==e.opacity&&t.setOpacity(n.opacity),null!=n.zIndex&&n.zIndex!==e.zIndex&&t.setZIndex(n.zIndex)}},136:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e(87),u=e(91),c=e(101),i=e(109),o=e(86),a=["bounds","url"],f=Object(c.b)((function(t,n){var e=t.bounds,c=t.url,i=Object(u.a)(t,a),f=new o.ImageOverlay(c,e,i);return{instance:f,context:Object(r.a)(Object(r.a)({},n),{},{overlayContainer:f})}}),(function(t,n,e){Object(i.a)(t,n,e),n.url!==e.url&&t.setUrl(n.url)}))},64:function(t,n,e){"use strict";e.r(n);var r=e(86),u=e(103),c=e(136),i=e(141),o=e(1),a=[[50,50],[847,1280]],f=function(){return Object(u.a)().fitBounds(a),Object(o.jsx)(c.a,{bounds:a,url:"https://tomik23.github.io/leaflet-examples/static/factory_UML.png",transparent:!0})};n.default=function(){return Object(o.jsx)(i.a,{crs:r.CRS.Simple,maxZoom:1,minZoom:-4,scrollWheelZoom:!1,children:Object(o.jsx)(f,{})})}},87:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return c}))},94:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(87);function u(t,n){var e,u=null!==(e=t.pane)&&void 0!==e?e:n.pane;return u?Object(r.a)(Object(r.a)({},t),{},{pane:u}):t}},95:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0);function u(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},97:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return f}));var r=e(0),u=e(99),c=e(93),i=e(95),o=e(94);function a(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layerContainer)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function f(t){return function(n){var e=Object(c.d)(),r=t(Object(o.a)(n,e),e);return Object(u.a)(e.map,n.attribution),Object(i.a)(r.current,n.eventHandlers),a(r.current,e),r}}},99:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0);function u(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}}}]);
//# sourceMappingURL=image-instead-of-map-js.b5d3063c.chunk.js.map