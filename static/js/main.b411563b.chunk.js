(this["webpackJsonpbathtub-app"]=this["webpackJsonpbathtub-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),s=c.n(a),i=(c(12),c(5)),u=c(7),l=c(0),o=function(e){var t=e.waterLevel;return Object(l.jsx)("div",{className:"waterContainer",children:Object(u.a)(Array(t)).map((function(e,t){return Object(l.jsx)("div",{className:"water"},t)}))})},j=function(e){var t=e.waterLevel;return Object(l.jsx)("div",{className:"bathtub",children:Object(l.jsx)(o,{waterLevel:t})})};c(14);var b=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("off"),s=Object(i.a)(a,2),u=s[0],o=s[1],b=Object(n.useRef)(null);return Object(n.useEffect)((function(){return"off"===u?null:(b.current=setInterval((function(){"increase"===u&&c<5?r(c+1):"decrease"===u&&c>0?r(c-1):(o("off"),clearInterval(b.current))}),2e3),function(){return clearInterval(b.current)})}),[c,u]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{waterLevel:c}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsx)("button",{onClick:function(){c<5&&(o("increase"),setTimeout((function(){r(c+1)}),2e3))},children:"increaseWaterLevel"}),Object(l.jsx)("button",{onClick:function(){c>0&&(o("decrease"),setTimeout((function(){r(c-1)}),2e3))},children:"decreaseWaterLevel"})]}),Object(l.jsx)("div",{className:"counter",children:Object(l.jsxs)("h2",{children:["Water Counter: ",c]})})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b411563b.chunk.js.map