(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c(1),s=c.n(n),a=c(7),i=c.n(a),l=(c(14),c(2)),d=(c(15),function(){var t=Object(n.useState)(new Date),e=Object(l.a)(t,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){var t=setInterval((function(){return s(new Date)}),6e4);return function(){clearInterval(t)}})),Object(o.jsxs)("div",{className:"date-section",children:[Object(o.jsx)("p",{className:"date-info",children:c.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"2-digit"})}),Object(o.jsx)("p",{className:"time-info",children:c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})}),r=c(8),u=function(t){var e=t.setInputText,c=t.inputText,n=t.todos,s=t.setTodos,a=t.setStatus;return Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-top",children:[Object(o.jsx)("input",{value:c,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input",placeholder:"Add Task"}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),s([].concat(Object(r.a)(n),[{text:c,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-circle"})})]}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"completed",children:"Completed"}),Object(o.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},j=c(6),b=function(t){var e=t.text,c=t.todos,n=t.setTodos,s=t.todo;return Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("li",{className:"todo-item ".concat(s.completed?"completed":""),children:e}),Object(o.jsx)("button",{onClick:function(){n(c.map((function(t){return t.id===s.id?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){n(c.filter((function(t){return t.id!==s.id})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},f=function(t){var e=t.todos,c=t.setTodos,n=t.filtreredTodos;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(o.jsx)(b,{text:t.text,todos:e,setTodos:c,todo:t},t.id)}))})})};var m=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),r=i[0],j=i[1],b=Object(n.useState)("all"),m=Object(l.a)(b,2),O=m[0],p=m[1],x=Object(n.useState)([]),h=Object(l.a)(x,2),v=h[0],g=h[1];return Object(n.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));j(t)}}()}),[]),Object(n.useEffect)((function(){!function(){switch(O){case"completed":g(r.filter((function(t){return t.completed})));break;case"uncompleted":g(r.filter((function(t){return!t.completed})));break;default:g(r)}}();localStorage.setItem("todos",JSON.stringify(r))}),[r,O]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"ToDo"})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(d,{}),Object(o.jsx)(u,{inputText:c,todos:r,setTodos:j,setInputText:s,setStatus:p}),Object(o.jsx)(f,{todos:r,setTodos:j,filtreredTodos:v})]})]})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.bef40603.chunk.js.map