if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const n=e=>r(e,c),f={module:{uri:c},exports:d,require:n};i[c]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(a(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/12/A/index.html",revision:"b659ec4ff7e85fbfae7eda59b9020452"},{url:"2023/03/13/B/index.html",revision:"22b0b48bdf351348b5489d87c658c3de"},{url:"404.html",revision:"bc7876f71b7ce52961c4afc13eee3dc2"},{url:"archives/2023/03/index.html",revision:"324591e6550e8c7fec043d68c6dace2d"},{url:"archives/2023/index.html",revision:"87c90dc5755bf94a5f98fa293346a4fd"},{url:"archives/index.html",revision:"92147dca395f928562574078f4fe38e7"},{url:"categories/index.html",revision:"0712e3c539ea7a29809d5e38f25528b7"},{url:"css/fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"css/fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"css/fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"css/fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"css/fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"css/images/banner.jpg",revision:"0394d7ba5b310b5037d2a139bef63fa4"},{url:"css/index.css",revision:"17b15ca5852fabe9b567d5df5e015da7"},{url:"css/style.css",revision:"41e3730632c80ad77c0e819c71e0006b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fancybox/jquery.fancybox.min.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"fancybox/jquery.fancybox.min.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"Gallery/index.html",revision:"d97368d51bf85e6b82b4c3af9c583486"},{url:"Gallery/marvel/index.html",revision:"d434e65e88df2909760726eaa52ec9d6"},{url:"Gallery/ohmygirl/index.html",revision:"905eabd084635f89aa901128546ae7d1"},{url:"Gallery/signal-r/index.html",revision:"5b47bf05e8edc73d0d9a94f0e5a8c49e"},{url:"Gallery/wallpaper/index.html",revision:"dc55a5c9d7bd981e166e4be9852e615b"},{url:"Gallery/よむ/index.html",revision:"242945c08990158acda11804b8c4de30"},{url:"Gallery/姝||AI Coser/index.html",revision:"a6ba93116a24c2df5f21410f6a6e2090"},{url:"Gallery/金宣亨/index.html",revision:"3d4638205c975341e5db15716d91bf92"},{url:"Gallery/雪/index.html",revision:"a935de8abe0d24b37e27dff901cda80e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/背景_星空.png",revision:"4b26032f70916b26e0eb79081f3bdf19"},{url:"index.html",revision:"8903a4d9c556a3e982783c913466abde"},{url:"js/jquery-3.4.1.min.js",revision:"220afd743d9e9643852e31a135a9f3ae"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/script.js",revision:"899039a2fd4a5c7a164d7ae5bfc78073"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"3d379e68098ccfc27b22faa46d4a5995"},{url:"movies/index.html",revision:"d6a428c60d44fcaa5e696c01900e8554"},{url:"music/index.html",revision:"777cb0c9c59c7e3dac1f46e9fa2d8455"},{url:"picture/index.html",revision:"a247cd7d6b5a9554cc784a2da54c8942"},{url:"tags/index.html",revision:"f3c9b8e30d8915a9f194dac93cc30233"},{url:"tmp/bet on me/头像(bet on me).png",revision:"04a1ef34f8dbaa93e4091fcb7b31e94e"}],{})}));
//# sourceMappingURL=service-worker.js.map
