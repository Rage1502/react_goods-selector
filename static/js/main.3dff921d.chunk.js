(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(5),l=c(6),r=c(8),o=c(7),i=c(1),d=(c(13),c(14),c(2)),u=c.n(d),b=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selected:"Jam"},e.handleSelect=function(t){e.setState({selected:t})},e.handleClear=function(){e.setState({selected:""})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selected;return Object(b.jsxs)("main",{className:"section container",children:[t?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){e.setState({selected:null})}})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:h.map((function(c){var n=t===c;return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":n}),children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":u()({AddButton:!n},{RemoveButton:n}),type:"button",className:u()("button",{"is-info":n}),onClick:function(){return n?e.handleClear():e.handleSelect(c)},children:n?"-":"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.Component);s.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3dff921d.chunk.js.map