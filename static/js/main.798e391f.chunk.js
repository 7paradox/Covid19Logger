(this.webpackJsonpreactsocial=this.webpackJsonpreactsocial||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"success":true,"data":{"summary":{"total":0,"confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0,"confirmedButLocationUnidentified":0},"regional":[{"loc":"Andhra Pradesh","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Bihar","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Chhattisgarh","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Delhi","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Goa","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Gujarat","confirmedCasesIndian":0,"confirmedCasesForeign":1,"discharged":0,"deaths":0},{"loc":"Haryana","confirmedCasesIndian":0,"confirmedCasesForeign":140,"discharged":0,"deaths":0},{"loc":"Himachal Pradesh","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Karnataka","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Kerala","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Madhya Pradesh","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Maharashtra","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Manipur","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Mizoram","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Odisha","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Puducherry","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Punjab","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Rajasthan","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Tamil Nadu","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Telengana","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Chandigarh","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Jammu and Kashmir","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Ladakh","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"Uttar Pradesh","confirmedCasesIndian":0,"confirmedCasesForeign":1,"discharged":0,"deaths":0},{"loc":"Uttarakhand","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0},{"loc":"West Bengal","confirmedCasesIndian":0,"confirmedCasesForeign":0,"discharged":0,"deaths":0}]},"lastRefreshed":"0","lastOriginUpdate":"0"}')},28:function(e,a,t){},45:function(e,a,t){e.exports=t(77)},50:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),l=t.n(o),s=(t(50),t(6)),i=t(37),c=t.n(i),d=(t(28),t(13)),m=t(38),u=(t(51),t(79)),h=t(40),g=t(86),f=t(83),b=t(87),E=t(80);var y=function(e){var a=e.obj,t=e.action,o=Object(d.a)({},a.name,a.value),l=Object(n.useState)(o),i=Object(s.a)(l,2),c=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(u.a,null,r.a.createElement(h.a,null,r.a.createElement(f.a.Label,null,a.display_name)),r.a.createElement(h.a,null,r.a.createElement(f.a.Group,{controlId:"formBasicRangeCustom",style:{margin:"100"}},r.a.createElement(f.a.Control,{type:"range",custom:!0,name:a.name,value:c[a.name],onChange:function(e){m(Object(d.a)({},e.target.name,e.target.value)),t(e.target.name,e.target.value)}}))),r.a.createElement(h.a,null,c[a.name]))))},v=t(12),C=t.n(v),p=t(41),I=t.n(p),w=function(e){var a=e.param,t={RunnyNose:a.runnyNose,DryCough:a.dryCough,Fever:a.fever,BreathingDiffculty:a.breathingDiffculty,Tiredness:a.tiredness,SoreThroat:a.soreThroat,Bodyache:a.bodyAche,date:a.date},o={type:"bar",data:{labels:["Runny Nose","Dry Cough","Fever","Breathing Diffculty","Tiredness","Sorethroat","Bodyache"],datasets:[{label:t.date,data:[t.RunnyNose,t.DryCough,t.Fever,t.BreathingDiffculty,t.Tiredness,t.SoreThroat,t.Bodyache],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 55, 64, 0.2)","rgba(255,155,89,0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255,155,89,1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0,min:0,max:100}}]}}},l=Object(n.useRef)(null),i=Object(n.useState)(null),c=Object(s.a)(i,2),d=(c[0],c[1]);return Object(n.useEffect)((function(){if(l&&l.current){var e=new I.a(l.current,o);d(e)}}),[l]),r.a.createElement("div",null,r.a.createElement("canvas",{ref:l}))};var F=function(){var e,a=new Date,t=Object(n.useContext)(A);console.log("first"),console.log(t);var o=Object(n.useState)([]),l=Object(s.a)(o,2),i=l[0],c=l[1],v=Object(n.useState)(!0),p=Object(s.a)(v,2),I=p[0],F=p[1],O=Object(n.useState)({}),S=Object(s.a)(O,2),j=S[0],k=S[1],D=function(e,a){k(Object(m.a)({},j,Object(d.a)({},e,a)))},T=JSON.parse(localStorage.getItem("loginDetails"));return Object(n.useEffect)((function(){F(!I)}),[t]),Object(n.useEffect)((function(){console.log("history"+i),console.log("info "),console.log(t),C.a.post("https://covid19logger.azurewebsites.net/getsymptoms",T).then((function(e){console.log("axios "),console.log(e),"204"==e.status||"500"==e.status?console.log("error"+e.status):(c(e.data),console.log(e.data),console.log("flag"+I))}))}),[!I]),r.a.createElement("div",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{md:"auto"},r.a.createElement(g.a,{border:"primary",bg:"light",style:{borderRadius:25,borderWidth:2,alignItems:"center",padding:5}},r.a.createElement("img",{width:"65",src:t.picture}),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"User Profile"),"Name : ",t.name,r.a.createElement("br",null),"Email : ",t.email)))),r.a.createElement("br",null),r.a.createElement(g.a,{bg:"light",border:"info",style:{borderRadius:25,borderWidth:2}},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"Symptoms"),r.a.createElement(f.a,{onSubmit:function(e){e.preventDefault();JSON.stringify(j);var t=localStorage.getItem("loginDetails");console.log(t);var n=a;console.log(n),C.a.post("https://covid19logger.azurewebsites.net/usersymptoms",{sym:j,user:JSON.parse(t),date:n}).then((function(e){console.log(e),c([]),F(!I)}))}},[{value:0,display_name:"Dry Cough",name:"Dry_Cough"},{value:0,display_name:"Fever",name:"Fever"},{value:0,display_name:"Runny Nose",name:"Runny_Nose"},{value:0,display_name:"Breathing Diffculty",name:"Breathing_Diffculty"},{value:0,display_name:"Tiredness",name:"Tiredness"},{value:0,display_name:"Sore Throat",name:"Sore_throat"},{value:0,display_name:"Body Ache",name:"Body_ache"}].map((function(e){return r.a.createElement(y,{obj:e,action:D})})),r.a.createElement(b.a,{variant:"info",type:"Submit",value:"submit"},"Submit")))),r.a.createElement("br",null),r.a.createElement(g.a,{bg:"light",border:"warning",style:{borderRadius:25,borderWidth:2}},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"History"),r.a.createElement(u.a,{xs:!0,lg:"2"},null!==(e=i.date)&&void 0!==e?e:i.map((function(e,a){return r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Body,null,r.a.createElement(w,{param:e}))))})))))):r.a.createElement(E.a,{animation:"grow"}))},O=t(85);var S=function(e){var a=e.head,t=e.body,n=e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a.Toggle,{as:g.a.Header,style:{width:"100%"},eventKey:n},a),r.a.createElement(O.a.Collapse,{eventKey:n},r.a.createElement(g.a.Body,null,t)))};var j=function(){var e=Object(n.useContext)(A);return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{border:"info",bg:"light",style:{borderRadius:25,borderWidth:2}},r.a.createElement(g.a.Title,null,"Sources and Important Links"),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{md:"auto"},r.a.createElement(g.a,{border:"warning",style:{borderRadius:25,borderWidth:2}},r.a.createElement(g.a.Body,{bodycolor:"#2F4F4F"},r.a.createElement(g.a.Title,null,r.a.createElement("a",{href:"https://www.who.int/",target:"_blank",style:{color:"#800020"}},"WHO Website")),r.a.createElement(g.a.Text,null)))),r.a.createElement(h.a,{md:"auto"},r.a.createElement(g.a,{border:"primary",style:{borderRadius:25,borderWidth:2}},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,r.a.createElement("a",{href:"https://www.mygov.in/covid-19/?cbps=1",target:"_blank",style:{color:"#800020"}},"Indian Government")),r.a.createElement(g.a.Text,null)))),r.a.createElement(h.a,{md:"auto"},r.a.createElement(g.a,{border:"success",style:{borderRadius:25,borderWidth:2}},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,r.a.createElement("a",{href:"https://github.com/amodm/api-covid19-in",target:"_blank",style:{color:"#800020"}},"GitHub Repo")),r.a.createElement(g.a.Text,null)))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{border:"info",bg:"light",style:{borderRadius:25,borderWidth:2}},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"FAQ"),r.a.createElement(g.a.Text,null,r.a.createElement(O.a,{defaultActiveKey:"0"},[{head:"What is Novel Coronavirus?",body:"A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.\n    A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is not the same as a COVID-19 diagnosis. Patients with COVID-19 will be evaluated and cared for differently than patients with common coronavirus diagnosis."},{head:"Can humans become infected with a novel coronavirus of animal source?",body:"Detailed investigations found that SARS-CoV was transmitted from civet cats to humans in China in 2002 and MERS-CoV from dromedary camels to humans in Saudi Arabia in 2012. Several known coronaviruses are circulating in animals that have not yet infected humans. As surveillance improves around the world, more coronaviruses are likely to be identified."},{head:"What are the symptoms of someone infected with a coronavirus?",body:"It depends on the virus, but common signs include respiratory symptoms, fever, cough, shortness of breath, and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death."},{head:"Is there a vaccine for a novel coronavirus?",body:"When a disease is new, there is no vaccine until one is developed. It can take a number of years for a new vaccine to be developed."},{head:"What can I do to protect myself?",body:"Detailed investigations found that SARS-CoV was transmitted from civet cats to humans in China in 2002 and MERS-CoV from dromedary camels to humans in Saudi Arabia in 2012. Several known coronaviruses are circulating in animals that have not yet infected humans. As surveillance improves around the world, more coronaviruses are likely to be identified."},{head:"How long is the incubation period?",body:"The \u201cincubation period\u201d means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available."}].map((function(e,a){return r.a.createElement(g.a,{style:{width:"100%"},border:"secondary",key:a},r.a.createElement(S,{head:e.head,body:e.body,index:a}))})))))))},k=t(25),D=t(81);var T=function(e){var a=e.regional;return r.a.createElement(D.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"State"),r.a.createElement("th",{style:{color:"orange"}},"Confirmed(Indian)"),r.a.createElement("th",{style:{color:"#218abf"}},"Confirmed(Foreign)"),r.a.createElement("th",{style:{color:"green"}},"Recovered"),r.a.createElement("th",{style:{color:"red"}},"Death"))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.loc),r.a.createElement("td",{style:{color:"orange"}},e.confirmedCasesIndian),r.a.createElement("td",{style:{color:"#218abf"}},e.confirmedCasesForeign),r.a.createElement("td",{style:{color:"green"}},e.discharged),r.a.createElement("td",{style:{color:"red"}},e.deaths))}))))};var B=function(e){var a=e.name,t=e.value,n=e.headcolor,o=e.bodycolor;return r.a.createElement(g.a,{className:"text-center",style:{color:"white"}},r.a.createElement(g.a.Header,{style:{width:"100%",background:n}},a),r.a.createElement(g.a.Body,{style:{width:"100%",background:o}},t))};var R=function(){var e=k.data,a=k.data.regional,t=Object(n.useState)(e),o=Object(s.a)(t,2),l=o[0],i=o[1],c=Object(n.useState)(a),d=Object(s.a)(c,2),m=d[0],g=d[1];return Object(n.useEffect)((function(){C.a.get("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){i(e.data.data.summary),g(e.data.data.regional)}))}),[]),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(u.a,null,r.a.createElement(h.a,null,r.a.createElement(B,{name:"Total",value:l.total,headcolor:"#052282",bodycolor:"#193fbd"})),r.a.createElement(h.a,null,r.a.createElement(B,{name:"Confirmed(Indian)",value:l.confirmedCasesIndian,headcolor:"#a85705",bodycolor:"#e67b10"})),r.a.createElement(h.a,null,r.a.createElement(B,{name:"Confirmed(Foreign)",value:l.confirmedCasesForeign,headcolor:"#02567a",bodycolor:"#138dc2"})),r.a.createElement(h.a,null,r.a.createElement(B,{name:"Recovered",value:l.discharged,headcolor:"#0e9104",bodycolor:"#25ba1a"})),r.a.createElement(h.a,null,r.a.createElement(B,{name:"Deaths",value:l.deaths,headcolor:"#9c030b",bodycolor:"#cc101a"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{regional:m}))},N=t(9),W=t(84),x=t(82),A=r.a.createContext();var _=function(){var e={isLoggedin:!1,userID:"",name:"",email:"",picture:""},a=Object(n.useState)(JSON.parse(localStorage.getItem("loginDetails"))),t=Object(s.a)(a,2),o=t[0],l=t[1];return Object(n.useEffect)((function(){console.log("useeff "),null!==o&&!1!==o.isLoggedin&&localStorage.setItem("loginDetails",JSON.stringify(o))}),[o]),r.a.createElement("div",null,r.a.createElement(W.a,{className:"justify-content-between",bg:"dark",expand:"lg"},r.a.createElement(N.a,{to:"about"},"About"),r.a.createElement(N.a,{to:""},"All India Status"),null!==o&&o.isLoggedin?[r.a.createElement(N.a,{to:"user"},"Profile"),r.a.createElement(N.a,{to:""},r.a.createElement("button",{onClick:function(){l(e),localStorage.removeItem("loginDetails"),window.FB.logout()}},"Logout"))]:"",r.a.createElement(N.a,{style:{display:null!==o&&!1!==o.isLoggedin?"none":"block"},to:"user"},r.a.createElement(c.a,{appId:"844646109387146",autoLoad:!1,fields:"name,email,picture",callback:function(e){console.log(e),"unknown"===e.status||"not_authorized"===e.status?console.log("error "+e.status):l({isLoggedin:!0,userID:e.userID,name:e.name,email:e.email,picture:e.picture.data.url})},cssClass:"my-facebook-button-class",icon:"fa-facebook"}))),r.a.createElement(A.Provider,{value:o},r.a.createElement(x.a,null,r.a.createElement(N.b,null,r.a.createElement(F,{path:"user"}),r.a.createElement(j,{path:"about"}),r.a.createElement(R,{path:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.b,null,r.a.createElement(_,{path:"Covid19Logger/*"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.798e391f.chunk.js.map