(this["webpackJsonpsaman-li-dash"]=this["webpackJsonpsaman-li-dash"]||[]).push([[45],{77:function(n,t,e){"use strict";e.r(t);var o=e(87),a=e(9),i=e(0),c=e(98),l=e(96),r=e(141),p=e(118),s=e(86),u=e.n(s),f=e(89),d=e(1),g=[52.242,21.017532],b=["fe4848","fe6c58","fe9068","feb478","fed686"],v=["2-12.5","12.6-16.8","16.9-20.9","21-25.9","26-plus"],O=[{lat:52.228956,lng:21.003799,title:"point 1"},{lat:52.258071,lng:20.986805,title:"point 2"},{lat:52.242728,lng:21.041565,title:"point 3"},{lat:52.234213,lng:21.029034,title:"point 4"},{lat:52.251661,lng:21.003456,title:"point 5"}],j=function(n){var t=n.map;return Object(i.useEffect)((function(){if(t){var n=u.a.control({position:"bottomright"}),e=[];n.onAdd=function(){var n=u.a.DomUtil.create("div","legend");return b.map((function(n,t){return e.push('\n            <div class="row">\n              <i style="background: #'.concat(n,'"></i>').concat(v[t],"\n            </div>\n          "))})),n.innerHTML=e.join(""),n},n.addTo(t)}}),[t]),null};function h(n){var t='\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">\n      <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>\n      <path fill="#'.concat(n,'" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>\n    </svg>');return new u.a.DivIcon({className:"test",html:t,iconSize:[40,40],iconAnchor:[12,24],popupAnchor:[7,-16]})}var m=function(n){return n.data.map((function(n,t){return Object(d.jsx)(c.a,{icon:h(b[t]),position:{lat:n.lat,lng:n.lng},children:Object(d.jsx)(l.a,{children:n.title})},t)}))};t.default=function(){var n=Object(i.useState)(null),t=Object(a.a)(n,2),e=t[0],c=t[1];return Object(d.jsxs)(r.a,{whenCreated:c,center:g,zoom:13,scrollWheelZoom:!1,children:[Object(d.jsx)(p.a,Object(o.a)({},f.a)),Object(d.jsx)(m,{data:O}),Object(d.jsx)(j,{map:e})]})}},89:function(n,t,e){"use strict";e(92);t.a={url:"http://localhost:8080/data/v3/{z}/{x}/{y}.pbf"}},96:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var o=e(101),a=e(86),i=e(0),c=Object(o.c)((function(n,t){return{instance:new a.Popup(n,t.overlayContainer),context:t}}),(function(n,t,e,o){var a=e.onClose,c=e.onOpen,l=e.position;Object(i.useEffect)((function(){var e=n.instance;function i(n){n.popup===e&&(e.update(),o(!0),null==c||c())}function r(n){n.popup===e&&(o(!1),null==a||a())}return t.map.on({popupopen:i,popupclose:r}),null==t.overlayContainer?(null!=l&&e.setLatLng(l),e.openOn(t.map)):t.overlayContainer.bindPopup(e),function(){var n;t.map.off({popupopen:i,popupclose:r}),null==(n=t.overlayContainer)||n.unbindPopup(),t.map.removeLayer(e)}}),[n,t,o,a,c,l])}))},98:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var o=e(87),a=e(91),i=e(101),c=e(86),l=["position"],r=Object(i.b)((function(n,t){var e=n.position,i=Object(a.a)(n,l),r=new c.Marker(e,i);return{instance:r,context:Object(o.a)(Object(o.a)({},t),{},{overlayContainer:r})}}),(function(n,t,e){t.position!==e.position&&n.setLatLng(t.position),null!=t.icon&&t.icon!==e.icon&&n.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==e.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==e.opacity&&n.setOpacity(t.opacity),null!=n.dragging&&t.draggable!==e.draggable&&(!0===t.draggable?n.dragging.enable():n.dragging.disable())}))}}]);
//# sourceMappingURL=svg-markers-width-legends-js.a19ae463.chunk.js.map