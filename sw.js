if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-6bde622a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/images/avatar.jpg",revision:"39b4ee8f51f27284b043b2bf42335a5b"},{url:"assets/images/favicon/android-chrome-192x192.png",revision:"06e993cc78c963cbbd04573a37dff20e"},{url:"assets/images/favicon/android-chrome-512x512.png",revision:"b3d8cdafbcd1f88712d657b512bcbc08"},{url:"assets/images/favicon/apple-touch-icon.png",revision:"ad7b86ab713d06bf57ebccbd9c06951f"},{url:"assets/images/favicon/favicon-16x16.png",revision:"c4c7bdea796991573fd0391d957e1f6b"},{url:"assets/images/favicon/favicon-32x32.png",revision:"d06dd6a79592eadb6a3305631363d79b"},{url:"assets/images/favicon/favicon.ico",revision:"d756a2be4b420cb7aaf2fe3bb4925cdc"},{url:"assets/stylesheets/base.css",revision:"0bb2621fa50f6950057a6e7e66e77d66"},{url:"assets/stylesheets/font-awesome-all.min.css",revision:"26386564b5cf1594be24059af1cd0db9"},{url:"index.html",revision:"8d361d0fe8ce1dc90a425d8933064245"}],{})}));
//# sourceMappingURL=sw.js.map
