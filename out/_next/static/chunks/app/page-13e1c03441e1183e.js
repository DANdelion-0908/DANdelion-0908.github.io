(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2016:function(e,t,n){Promise.resolve().then(n.bind(n,2328)),Promise.resolve().then(n.t.bind(n,8518,23)),Promise.resolve().then(n.t.bind(n,8173,23))},2328:function(e,t,n){"use strict";n.d(t,{default:function(){return p}});var o=n(7437),s=n(2265),c=n(8197),a=n.n(c),_=n(3032),r=n.n(_),u=e=>{let{operators:t}=e;return(0,o.jsx)("div",{className:r().screen,children:t.map((e,t)=>(0,o.jsx)("h1",{className:r().operators,children:e},t))})},l=n(9898),i=n.n(l),d=e=>{let{symbol:t,handleButtonPress:n}=e;return(0,o.jsx)("div",{onClick:()=>n(t),className:"".concat(i().Button," \n        ").concat(0===t?i().ZeroButton:""," \n        ").concat("="===t?i().EqualButton:"","\n        ").concat("C"===t?i().MiscButton:""),children:t})},p=()=>{let[e,t]=(0,s.useState)([0]),[n,c]=(0,s.useState)(),[_,r]=(0,s.useState)(),[l,i]=(0,s.useState)(!1);function p(){let o;let s=parseFloat(e.join(""));switch(_){case"+":o=n+s;break;case"-":o=n-s;break;case"*":o=n*s;break;case"/":o=n/s}o<0||o>999999999||!o?(t(["ERROR"]),c(null),r(null)):(t([o]),c(o),r()),i(!0)}let B=n=>{if(("number"==typeof n||"."===n)&&e.length<9)0===e[0]&&1===e.length?"."===n?t(e=>[...e,n]):t([n]):(l?"."!==n||e.includes(".")?t([n]):t(e=>[...e,n]):"."!==n||e.includes(".")?"."!==n&&t(e=>[...e,n]):t(e=>[...e,n]),i(!1));else switch(n){case"C":t([0]),c(null),r(null),i(!1);break;case"Del":e.length>1?t(e=>e.slice(0,-1)):t([0]);break;case"+":case"-":case"*":case"/":_?p():(i(!1),c(parseFloat(e.join(""))),t([0]),r(n)),r(n);break;case"+/-":t(e=>["-",...e]);case"=":_&&p()}};return(0,o.jsxs)("div",{className:a().Body,children:[(0,o.jsx)(u,{operators:e}),(0,o.jsx)("div",{className:a().Buttons,children:["C","Del","+/-","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="].map((e,t)=>(0,o.jsx)(d,{symbol:e,handleButtonPress:B},t))})]})}},8197:function(e){e.exports={Body:"Body_Body__7HpZq",Buttons:"Body_Buttons__xlBL3"}},9898:function(e){e.exports={Button:"Button_Button__cU1vY",ZeroButton:"Button_ZeroButton__u_WN2",EqualButton:"Button_EqualButton__hLpy_",MiscButton:"Button_MiscButton__Wd2bi"}},8518:function(e){e.exports={main:"page_main__nw1Wk",description:"page_description__lvaOp",code:"page_code__9AfUJ",grid:"page_grid__JZ9Cz",card:"page_card__Cf__u",center:"page_center__NcdcW",logo:"page_logo__ikIZE",content:"page_content___38fW",vercelLogo:"page_vercelLogo__YYFl1",rotate:"page_rotate__xIioM"}},3032:function(e){e.exports={screen:"Screen_screen__JnC8U",operators:"Screen_operators__oB_El"}}},function(e){e.O(0,[875,173,971,23,744],function(){return e(e.s=2016)}),_N_E=e.O()}]);