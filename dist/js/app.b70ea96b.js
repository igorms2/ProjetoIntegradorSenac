(function(){"use strict";var e={1394:function(e,o,r){r.d(o,{db:function(){return s},j:function(){return u}});var n=r(223),t=r(1389),a=r(1884);const i={apiKey:"AIzaSyAtELtHfZZHt8XyWH16MtG-5eVer8OgDvM",authDomain:"projeto-integrador-5-aa99c.firebaseapp.com",projectId:"projeto-integrador-5-aa99c",storageBucket:"projeto-integrador-5-aa99c.firebasestorage.app",messagingSenderId:"1030088014740",appId:"1:1030088014740:web:46eb1368c8798a9601ad81",measurementId:{NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyAtELtHfZZHt8XyWH16MtG-5eVer8OgDvM",VUE_APP_FIREBASE_APP_ID:"1:1030088014740:web:46eb1368c8798a9601ad81",VUE_APP_FIREBASE_AUTH_DOMAIN:"projeto-integrador-5-aa99c.firebaseapp.com",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"1030088014740",VUE_APP_FIREBASE_PROJECT_ID:"projeto-integrador-5-aa99c",VUE_APP_FIREBASE_STORAGE_BUCKET:"projeto-integrador-5-aa99c.firebasestorage.app",BASE_URL:"/ProjetoIntegradorSenac/"}.VUE_APP_FIREBASE_MEASUREMENT_ID},c=(0,n.Wp)(i),u=(0,t.xI)(c),s=(0,a.aU)(c)},5944:function(e,o,r){var n=r(3751),t=r(641);const a={id:"app"};function i(e,o,r,n,i,c){const u=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",a,[(0,t.bF)(u)])}r(4114);var c=r(1394),u={data(){return{isAuthenticated:!1,isMorador:!1,isFuncionario:!1}},computed:{showNavbar(){return"/"!==this.$route.path&&"/login"!==this.$route.path&&"/cadastro"!==this.$route.path}},created(){c.j.onAuthStateChanged((e=>{e?(this.isAuthenticated=!0,this.isMorador=!e.email.endsWith("@condominio.com"),this.isFuncionario=e.email.endsWith("@condominio.com")):(this.isAuthenticated=!1,this.isMorador=!1,this.isFuncionario=!1)}))},methods:{async logout(){try{await c.j.signOut(),this.$router.push("/")}catch(e){alert("Erro ao fazer logout: "+e.message)}}}},s=r(6262);const d=(0,s.A)(u,[["render",i]]);var f=d,l=(r(8111),r(3579),r(5220)),m=r(1389),p=r(1884);const h=()=>r.e(105).then(r.bind(r,7105)),b=()=>r.e(103).then(r.bind(r,9103)),g=()=>r.e(181).then(r.bind(r,8181)),v=()=>r.e(461).then(r.bind(r,9461)),E=()=>r.e(697).then(r.bind(r,3697)),A=()=>r.e(704).then(r.bind(r,5704)),y=()=>r.e(215).then(r.bind(r,2215)),_=()=>r.e(955).then(r.bind(r,9955)),P=[{path:"/",name:"Home",component:h},{path:"/ProjetoIntegradorSenac/",name:"ProjetoIntegrador",component:h},{path:"/login",name:"Login",component:b},{path:"/cadastro",name:"Cadastro",component:g},{path:"/dashboard-morador",name:"DashboardMorador",component:v,meta:{requiresAuth:!0,role:"morador"}},{path:"/gerar-cartao",name:"GerarCartao",component:E},{path:"/loginfuncionario",name:"LoginFuncionario",component:A},{path:"/dashboardfuncionario",name:"DashboardFuncionario",component:y,meta:{requiresAuth:!0,role:"funcionario"}},{path:"/entrada-encomendas",name:"EntradaEncomendas",component:_,meta:{requiresAuth:!0,role:"admin"}}],S=(0,l.aE)({history:(0,l.LA)(),routes:P});async function j(e,o){try{if("admin@mail.com"===o.email)return!0;const r=await(0,p.x7)((0,p.H9)(c.db,"usuarios",o.uid));if(!r.exists())return console.log("Dados do usuário não encontrados. Criando novo documento..."),await(0,p.BN)((0,p.H9)(c.db,"usuarios",o.uid),{email:o.email,role:"morador"}),!0;const n=r.data();return console.log("Role do usuário:",n.role),console.log("Role necessária:",e.meta.role),!e.meta.role||n.role===e.meta.role||(alert("Você não tem permissão para acessar esta área."),!1)}catch(r){return console.error("Erro ao verificar permissões:",r.message),alert("Erro ao verificar permissões. Tente novamente mais tarde."),!1}}S.beforeEach((async(e,o,r)=>{const n=e.matched.some((e=>e.meta.requiresAuth));if(n){const n=(0,m.xI)(),t=n.currentUser;if(!t)return console.log("Usuário não autenticado. Redirecionando para /login."),void r("/login");const a=await j(e,t);if(!a)return console.log("Permissão negada. Redirecionando para /."),void r("/");"DashboardMorador"===o.name&&"DashboardMorador"!==e.name&&(await(0,m.CI)(n),console.log("Usuário deslogado ao sair do DashboardMorador.")),r()}else r()}));var I=S,w=r(4786),C=r(5151);function O(e){const{can:o,rules:r}=new C.sV(C.Tj);switch(e){case"morador":o("manage","DashboardMorador"),o("read","GerarCartao");break;case"funcionario":o("manage","DashboardFuncionario"),o("manage","GerarCartao");break;case"admin":o("manage","all");break;default:o("read","Home");break}return new C.Tj(r)}const k=(0,n.Ef)(f);k.use(I);let D=O({role:"guest"});function F(e){D.update(O({role:e}))}k.use(w.ul,D),k.config.globalProperties.$updateAbility=F,k.mount("#app")}},o={};function r(n){var t=o[n];if(void 0!==t)return t.exports;var a=o[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(o,n,t,a){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],t=e[d][1],a=e[d][2];for(var c=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var s=t();void 0!==s&&(o=s)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,t,a]}}(),function(){r.d=function(e,o){for(var n in o)r.o(o,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(o,n){return r.f[n](e,o),o}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{103:"0ed533e4",105:"be39e2bb",181:"2e87a719",215:"75b4d110",461:"954b4f64",697:"2388fb64",704:"01264ded",955:"24c7a74b"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{103:"d1df4810",105:"0cbd655c",181:"5186a5cb",215:"2b0db053",461:"95a16caa",697:"22e76f92",704:"4b9d2ba6",955:"4f1ee7eb"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="porta-facil:";r.l=function(n,t,a,i){if(e[n])e[n].push(t);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==o+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",o+a),c.src=n),e[n]=[t];var l=function(o,r){c.onerror=c.onload=null,clearTimeout(m);var t=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((function(e){return e(r)})),o)return o(r)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/ProjetoIntegradorSenac/"}(),function(){if("undefined"!==typeof document){var e=function(e,o,n,t,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc);var c=function(r){if(i.onerror=i.onload=null,"load"===r.type)t();else{var n=r&&r.type,c=r&&r.target&&r.target.href||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=n,u.request=c,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=c,i.href=o,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},o=function(e,o){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var t=r[n],a=t.getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(a===e||a===o))return t}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){t=i[n],a=t.getAttribute("data-href");if(a===e||a===o)return t}},n=function(n){return new Promise((function(t,a){var i=r.miniCssF(n),c=r.p+i;if(o(i,c))return t();e(n,c,null,t,a)}))},t={524:0};r.f.miniCss=function(e,o){var r={103:1,105:1,181:1,215:1,461:1,697:1,704:1,955:1};t[e]?o.push(t[e]):0!==t[e]&&r[e]&&o.push(t[e]=n(e).then((function(){t[e]=0}),(function(o){throw delete t[e],o})))}}}(),function(){var e={524:0};r.f.j=function(o,n){var t=r.o(e,o)?e[o]:void 0;if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(r,n){t=e[o]=[r,n]}));n.push(t[2]=a);var i=r.p+r.u(o),c=new Error,u=function(n){if(r.o(e,o)&&(t=e[o],0!==t&&(e[o]=void 0),t)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+o+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,t[1](c)}};r.l(i,u,"chunk-"+o,o)}},r.O.j=function(o){return 0===e[o]};var o=function(o,n){var t,a,i=n[0],c=n[1],u=n[2],s=0;if(i.some((function(o){return 0!==e[o]}))){for(t in c)r.o(c,t)&&(r.m[t]=c[t]);if(u)var d=u(r)}for(o&&o(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self["webpackChunkporta_facil"]=self["webpackChunkporta_facil"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(5944)}));n=r.O(n)})();
//# sourceMappingURL=app.b70ea96b.js.map