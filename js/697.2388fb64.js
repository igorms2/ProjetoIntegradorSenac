(self["webpackChunkporta_facil"]=self["webpackChunkporta_facil"]||[]).push([[697],{4:function(t,e,n){"use strict";t.exports=n.p+"img/image.f88612ff.png"},157:function(t,e,n){const r=n(6886),o=n(9953),i=n(9899),a=n(8820),s=n(6421),u=n(7756),c=n(1332),l=n(7518),f=n(4764),d=n(1427),h=n(4565),g=n(208),p=n(9801);function m(t,e){const n=t.size,r=u.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}function w(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function y(t,e){const n=s.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}function E(t,e){const n=t.size,r=d.getEncodedBits(e);let o,i,a;for(let s=0;s<18;s++)o=Math.floor(s/3),i=s%3+n-8-3,a=1===(r>>s&1),t.set(o,i,a,!0),t.set(i,o,a,!0)}function v(t,e,n){const r=t.size,o=h.getEncodedBits(e,n);let i,a;for(i=0;i<15;i++)a=1===(o>>i&1),i<6?t.set(i,8,a,!0):i<8?t.set(i+1,8,a,!0):t.set(r-15+i,8,a,!0),i<8?t.set(8,r-i-1,a,!0):i<9?t.set(8,15-i-1+1,a,!0):t.set(8,15-i-1,a,!0);t.set(r-8,8,1,!0)}function b(t,e){const n=t.size;let r=-1,o=n-1,i=7,a=0;for(let s=n-1;s>0;s-=2){6===s&&s--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(o,s-n)){let r=!1;a<e.length&&(r=1===(e[a]>>>i&1)),t.set(o,s-n,r),i--,-1===i&&(a++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}}function C(t,e,n){const o=new i;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)}));const a=r.getSymbolTotalCodewords(t),s=l.getTotalCodewordsCount(t,e),u=8*(a-s);o.getLengthInBits()+4<=u&&o.put(0,4);while(o.getLengthInBits()%8!==0)o.putBit(0);const c=(u-o.getLengthInBits())/8;for(let r=0;r<c;r++)o.put(r%2?17:236,8);return N(o,t,e)}function N(t,e,n){const o=r.getSymbolTotalCodewords(e),i=l.getTotalCodewordsCount(e,n),a=o-i,s=l.getBlocksCount(e,n),u=o%s,c=s-u,d=Math.floor(o/s),h=Math.floor(a/s),g=h+1,p=d-h,m=new f(p);let w=0;const y=new Array(s),E=new Array(s);let v=0;const b=new Uint8Array(t.buffer);for(let r=0;r<s;r++){const t=r<c?h:g;y[r]=b.slice(w,w+t),E[r]=m.encode(y[r]),w+=t,v=Math.max(v,t)}const C=new Uint8Array(o);let N,A,B=0;for(N=0;N<v;N++)for(A=0;A<s;A++)N<y[A].length&&(C[B++]=y[A][N]);for(N=0;N<p;N++)for(A=0;A<s;A++)C[B++]=E[A][N];return C}function A(t,e,n,o){let i;if(Array.isArray(t))i=p.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=p.rawSplit(t);r=d.getBestVersionForData(e,n)}i=p.fromString(t,r||40)}}const s=d.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<s)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+s+".\n")}else e=s;const u=C(e,n,i),l=r.getSymbolSize(e),f=new a(l);return m(f,e),w(f),y(f,e),v(f,n,0),e>=7&&E(f,e),b(f,u),isNaN(o)&&(o=c.getBestMask(f,v.bind(null,f,n))),c.applyMask(o,f),v(f,n,o),{modules:f,version:e,errorCorrectionLevel:n,maskPattern:o,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,i,a=o.M;return"undefined"!==typeof e&&(a=o.from(e.errorCorrectionLevel,o.M),n=d.from(e.version),i=c.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),A(t,n,a,i)}},208:function(t,e,n){const r=n(1878),o=n(7044);function i(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return i(t)}catch(r){return n}}},1332:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};function r(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,i=0,a=null,s=null;for(let u=0;u<e;u++){o=i=0,a=s=null;for(let c=0;c<e;c++){let e=t.get(u,c);e===a?o++:(o>=5&&(r+=n.N1+(o-5)),a=e,o=1),e=t.get(c,u),e===s?i++:(i>=5&&(r+=n.N1+(i-5)),s=e,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n.N2},e.getPenaltyN3=function(t){const e=t.size;let r=0,o=0,i=0;for(let n=0;n<e;n++){o=i=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(n,a),a>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(a,n),a>=10&&(1488===i||93===i)&&r++}return r*n.N3},e.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];const o=Math.abs(Math.ceil(100*e/r/5)-10);return o*n.N4},e.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let a=0;a<r;a++){n(a),e.applyMask(a,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),r<i&&(i=r,o=a)}return o}},1333:function(t){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},1427:function(t,e,n){const r=n(6886),o=n(7518),i=n(9953),a=n(208),s=n(1878),u=7973,c=r.getBCHDigit(u);function l(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}function f(t,e){return a.getCharCountIndicator(t,e)+4}function d(t,e){let n=0;return t.forEach((function(t){const r=f(t.mode,e);n+=r+t.getBitsLength()})),n}function h(t,n){for(let r=1;r<=40;r++){const o=d(t,r);if(o<=e.getCapacity(r,n,a.MIXED))return r}}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!s.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=a.BYTE);const i=r.getSymbolTotalCodewords(t),u=o.getTotalCodewordsCount(t,e),c=8*(i-u);if(n===a.MIXED)return c;const l=c-f(n,t);switch(n){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,e){let n;const r=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return h(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return l(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(r.getBCHDigit(e)-c>=0)e^=u<<r.getBCHDigit(e)-c;return t<<12|e}},1433:function(t,e,n){const r=n(208),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*o.indexOf(this.data[e]);n+=o.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},1878:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},2726:function(t,e){function n(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,i=n.modules.data,a=e.getScale(o,r),s=Math.floor((o+2*r.margin)*a),u=r.margin*a,c=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let l=4*(e*s+n),f=r.color.light;if(e>=u&&n>=u&&e<s-u&&n<s-u){const t=Math.floor((e-u)/a),r=Math.floor((n-u)/a);f=c[i[t*o+r]?1:0]}t[l++]=f.r,t[l++]=f.g,t[l++]=f.b,t[l]=f.a}}},2731:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)n[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)n[e]=n[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},3697:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var r=n(641),o=n(33),i=n(6776);const a={class:"gerar-cartao"},s={class:"cartao",id:"cartao-identidade"},u={class:"conteudo"},c={class:"foto-container"},l=["src"],f={class:"dados"},d={class:"qr-container"};function h(t,e,n,h,g,p){const m=(0,r.g2)("vue-qrcode");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("div",s,[e[7]||(e[7]=(0,r.Lk)("div",{class:"cabecalho"},[(0,r.Lk)("h2",null,"IDENTIDADE"),(0,r.Lk)("img",{src:i,alt:"Logo",class:"logo"})],-1)),(0,r.Lk)("div",u,[(0,r.Lk)("div",c,[(0,r.Lk)("img",{src:p.fotoMorador,alt:"Foto do Morador",class:"foto"},null,8,l)]),(0,r.Lk)("div",f,[(0,r.Lk)("p",null,[e[2]||(e[2]=(0,r.Lk)("strong",null,"Nome:",-1)),(0,r.eW)(" "+(0,o.v_)(g.morador.nome),1)]),(0,r.Lk)("p",null,[e[3]||(e[3]=(0,r.Lk)("strong",null,"Email:",-1)),(0,r.eW)(" "+(0,o.v_)(g.morador.email),1)]),(0,r.Lk)("p",null,[e[4]||(e[4]=(0,r.Lk)("strong",null,"Endereço:",-1)),(0,r.eW)(" "+(0,o.v_)(g.morador.endereco),1)]),(0,r.Lk)("p",null,[e[5]||(e[5]=(0,r.Lk)("strong",null,"CPF:",-1)),(0,r.eW)(" "+(0,o.v_)(g.morador.cpf),1)]),(0,r.Lk)("p",null,[e[6]||(e[6]=(0,r.Lk)("strong",null,"RG:",-1)),(0,r.eW)(" "+(0,o.v_)(g.morador.rg),1)])]),(0,r.Lk)("div",d,[(0,r.bF)(m,{value:g.qrCodeData,options:{width:100},class:"qr-code"},null,8,["value"])])])]),(0,r.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>p.imprimirCartao&&p.imprimirCartao(...t)),class:"btn-imprimir"},"Imprimir Cartão"),(0,r.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>p.voltarParaDashboard&&p.voltarParaDashboard(...t)),class:"btn-voltar"},"Voltar para o Dashboard")])}n(4114);var g=n(7583),p=n(953),m=Object.defineProperty,w=Object.defineProperties,y=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,C=(t,e,n)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))v.call(e,n)&&C(t,n,e[n]);if(E)for(var n of E(e))b.call(e,n)&&C(t,n,e[n]);return t},A=(t,e)=>w(t,y(e)),B=(t,e)=>{var n={};for(var r in t)v.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&E)for(var r of E(t))e.indexOf(r)<0&&b.call(t,r)&&(n[r]=t[r]);return n};const I=["low","medium","quartile","high","L","M","Q","H"],M=[0,1,2,3,4,5,6,7],P=["alphanumeric","numeric","kanji","byte"],L=["image/png","image/jpeg","image/webp"],T=40;var R=(0,r.pM)({props:{version:{type:Number,validator:t=>t===Number.parseInt(String(t),10)&&t>=1&&t<=T},errorCorrectionLevel:{type:String,validator:t=>I.includes(t)},maskPattern:{type:Number,validator:t=>M.includes(t)},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:t=>["dark","light"].every((e=>["string","undefined"].includes(typeof t[e]))),required:!0},type:{type:String,validator:t=>L.includes(t),required:!0},quality:{type:Number,validator:t=>t===Number.parseFloat(String(t))&&t>=0&&t<=1,required:!1},value:{type:[String,Array],required:!0,validator(t){return"string"===typeof t||t.every((t=>"string"===typeof t.data&&"mode"in t&&t.mode&&P.includes(t.mode)))}}},setup(t,{attrs:e,emit:n}){const o=(0,p.KR)(),i=()=>{const e=t,{quality:r,value:i}=e,a=B(e,["quality","value"]);g.toDataURL(i,Object.assign(a,null==r||{renderOptions:{quality:r}})).then((t=>{o.value=t,n("change",t)})).catch((t=>n("error",t)))};return(0,r.wB)(t,i,{immediate:!0}),()=>(0,r.h)("img",A(N({},e),{src:o.value}))}}),k=n(1884),x=n(1394),S={components:{VueQrcode:R},data(){return{morador:{nome:"",email:"",endereco:"",cpf:"",rg:"",foto:""},qrCodeData:"",placeholderFoto:n(4)}},computed:{fotoMorador(){return this.morador.foto?this.morador.foto:this.placeholderFoto}},methods:{imprimirCartao(){window.print()},voltarParaDashboard(){this.$router.push("/dashboard-morador")}},async created(){const t=x.j.currentUser;if(t)try{const e=await(0,k.x7)((0,k.H9)(x.db,"usuarios",t.uid));e.exists()?(this.morador=e.data(),this.qrCodeData=JSON.stringify({moradorId:t.uid,nome:this.morador.nome,email:this.morador.email})):alert("Dados do morador não encontrados.")}catch(e){console.error("Erro ao buscar dados do morador:",e.message),alert("Erro ao carregar os dados do morador. Tente novamente.")}else alert("Você precisa estar logado para acessar esta página."),this.$router.push("/login")}},U=n(6262);const D=(0,U.A)(S,[["render",h],["__scopeId","data-v-6fd38a8c"]]);var _=D},4357:function(t,e,n){const r=n(208);function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},t.exports=o},4565:function(t,e,n){const r=n(6886),o=1335,i=21522,a=r.getBCHDigit(o);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let s=n<<10;while(r.getBCHDigit(s)-a>=0)s^=o<<r.getBCHDigit(s)-a;return(n<<10|s)^i}},4713:function(t,e,n){const r=n(2731);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)n[o+i]^=r.mul(t[o],e[i]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let i=0;i<e.length;i++)n[i]^=r.mul(e[i],t);let o=0;while(o<n.length&&0===n[o])o++;n=n.slice(o)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let o=0;o<t;o++)n=e.mul(n,new Uint8Array([1,r.exp(o)]));return n}},4764:function(t,e,n){const r=n(4713);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n},t.exports=o},4861:function(t,e,n){const r=n(208),o=n(6886);function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=o.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},5822:function(t,e,n){const r=n(208);function o(t){this.mode=r.BYTE,this.data="string"===typeof t?(new TextEncoder).encode(t):new Uint8Array(t)}o.getBitsLength=function(t){return 8*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=o},6320:function(t){"use strict";var e={single_source_shortest_paths:function(t,n,r){var o={},i={};i[n]=0;var a,s,u,c,l,f,d,h,g,p=e.PriorityQueue.make();p.push(n,0);while(!p.empty())for(u in a=p.pop(),s=a.value,c=a.cost,l=t[s]||{},l)l.hasOwnProperty(u)&&(f=l[u],d=c+f,h=i[u],g="undefined"===typeof i[u],(g||h>d)&&(i[u]=d,p.push(u,d),o[u]=s));if("undefined"!==typeof r&&"undefined"===typeof i[r]){var m=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(m)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],r=e;while(r)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,n,r){var o=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var n,r=e.PriorityQueue,o={};for(n in t=t||{},r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},6421:function(t,e,n){const r=n(6886).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7];for(let r=1;r<e-1;r++)i[r]=i[r-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)0===e&&0===t||0===e&&t===o-1||e===o-1&&0===t||n.push([r[e],r[t]]);return n}},6756:function(t,e,n){const r=n(2726);function o(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function i(t,e,n){let r=t+e;return"undefined"!==typeof n&&(r+=" "+n),r}function a(t,e,n){let r="",o=0,a=!1,s=0;for(let u=0;u<t.length;u++){const c=Math.floor(u%e),l=Math.floor(u/e);c||a||(a=!0),t[u]?(s++,u>0&&c>0&&t[u-1]||(r+=a?i("M",c+n,.5+l+n):i("m",o,0),o=0,a=!1),c+1<e&&t[u+1]||(r+=i("h",s),s=0)):o++}return r}e.render=function(t,e,n){const i=r.getOptions(e),s=t.modules.size,u=t.modules.data,c=s+2*i.margin,l=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",f="<path "+o(i.color.dark,"stroke")+' d="'+a(u,s,i.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',h=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+h+d+' shape-rendering="crispEdges">'+l+f+"</svg>\n";return"function"===typeof n&&n(null,g),g}},6776:function(t,e,n){"use strict";t.exports=n.p+"img/logo_porta_f_cil_bonito_e_moderno_nas-removebg-preview.f19ea4cb.png"},6886:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},7044:function(t,e){const n="[0-9]+",r="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(r,"g");const a=new RegExp("^"+o+"$"),s=new RegExp("^"+n+"$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return a.test(t)},e.testNumeric=function(t){return s.test(t)},e.testAlphanumeric=function(t){return u.test(t)}},7518:function(t,e,n){const r=n(9953),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},7583:function(t,e,n){const r=n(1333),o=n(157),i=n(7899),a=n(6756);function s(t,e,n,i,a){const s=[].slice.call(arguments,1),u=s.length,c="function"===typeof s[u-1];if(!c&&!r())throw new Error("Callback required as last argument");if(!c){if(u<1)throw new Error("Too few arguments provided");return 1===u?(n=e,e=i=void 0):2!==u||e.getContext||(i=n,n=e,e=void 0),new Promise((function(r,a){try{const a=o.create(n,i);r(t(a,e,i))}catch(s){a(s)}}))}if(u<2)throw new Error("Too few arguments provided");2===u?(a=n,n=e,e=i=void 0):3===u&&(e.getContext&&"undefined"===typeof a?(a=i,i=void 0):(a=i,i=n,n=e,e=void 0));try{const r=o.create(n,i);a(null,t(r,e,i))}catch(l){a(l)}}e.create=o.create,e.toCanvas=s.bind(null,i.render),e.toDataURL=s.bind(null,i.renderToDataURL),e.toString=s.bind(null,(function(t,e,n){return a.render(t,n)}))},7756:function(t,e,n){const r=n(6886).getSymbolSize,o=7;e.getPositions=function(t){const e=r(t);return[[0,0],[e-o,0],[0,e-o]]}},7899:function(t,e,n){const r=n(2726);function o(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let a=n,s=e;"undefined"!==typeof a||e&&e.getContext||(a=e,e=void 0),e||(s=i()),a=r.getOptions(a);const u=r.getImageWidth(t.modules.size,a),c=s.getContext("2d"),l=c.createImageData(u,u);return r.qrToImageData(l.data,t,a),o(c,s,u),c.putImageData(l,0,0),s},e.renderToDataURL=function(t,n,r){let o=r;"undefined"!==typeof o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=e.render(t,n,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}},8820:function(t){function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},9801:function(t,e,n){const r=n(208),o=n(4357),i=n(1433),a=n(5822),s=n(4861),u=n(7044),c=n(6886),l=n(6320);function f(t){return unescape(encodeURIComponent(t)).length}function d(t,e,n){const r=[];let o;while(null!==(o=t.exec(n)))r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function h(t){const e=d(u.NUMERIC,r.NUMERIC,t),n=d(u.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,i;c.isKanjiModeEnabled()?(o=d(u.BYTE,r.BYTE,t),i=d(u.KANJI,r.KANJI,t)):(o=d(u.BYTE_KANJI,r.BYTE,t),i=[]);const a=e.concat(n,o,i);return a.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return s.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function p(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function m(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:f(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:f(o.data)}])}}return e}function w(t,e){const n={},o={start:{}};let i=["start"];for(let a=0;a<t.length;a++){const s=t[a],u=[];for(let t=0;t<s.length;t++){const c=s[t],l=""+a+t;u.push(l),n[l]={node:c,lastCount:0},o[l]={};for(let t=0;t<i.length;t++){const a=i[t];n[a]&&n[a].node.mode===c.mode?(o[a][l]=g(n[a].lastCount+c.length,c.mode)-g(n[a].lastCount,c.mode),n[a].lastCount+=c.length):(n[a]&&(n[a].lastCount=c.length),o[a][l]=g(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,e))}}i=u}for(let r=0;r<i.length;r++)o[i[r]].end=0;return{map:o,table:n}}function y(t,e){let n;const u=r.getBestModeForData(t);if(n=r.from(e,u),n!==r.BYTE&&n.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(u));switch(n!==r.KANJI||c.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new s(t);case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(y(e,null)):e.data&&t.push(y(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const r=h(t,c.isKanjiModeEnabled()),o=m(r),i=w(o,n),a=l.find_path(i.map,"start","end"),s=[];for(let e=1;e<a.length-1;e++)s.push(i.table[a[e]].node);return e.fromArray(p(s))},e.rawSplit=function(t){return e.fromArray(h(t,c.isKanjiModeEnabled()))}},9899:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},9953:function(t,e){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(o){return r}}}}]);
//# sourceMappingURL=697.2388fb64.js.map