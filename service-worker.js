if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let a={};const n=e=>r(e,f),d={module:{uri:f},exports:a,require:n};i[f]=Promise.all(c.map((e=>d[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/12/A/index.html",revision:"3167c596db3be04feba77e4dbc8d4a19"},{url:"2023/03/13/B/index.html",revision:"b181cd6d94efd583c811e3b43f0fc83b"},{url:"2023/03/14/C/index.html",revision:"a709a8727101d62b26df4edd509af2ec"},{url:"404.html",revision:"3b0c1bb403f61c80ef526f830f3eb159"},{url:"archives/2023/03/index.html",revision:"6a7a3c3a04211656198949fec85e124a"},{url:"archives/2023/index.html",revision:"3bc96f7970257b898643b8bce3524bba"},{url:"archives/index.html",revision:"74dd62c2efa014acdbc7bb8976239768"},{url:"categories/index.html",revision:"623c0d21ed01699b8fcc30692ff5b7ad"},{url:"css/fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"css/fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"css/fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"css/fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"css/fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"css/images/banner.jpg",revision:"0394d7ba5b310b5037d2a139bef63fa4"},{url:"css/index.css",revision:"17b15ca5852fabe9b567d5df5e015da7"},{url:"css/modify.css",revision:"8e10fc367078cc84dbd10d7b64520800"},{url:"css/style.css",revision:"41e3730632c80ad77c0e819c71e0006b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fancybox/jquery.fancybox.min.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"fancybox/jquery.fancybox.min.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"Gallery/index.html",revision:"049ab764e2c58248456a2a7889547d55"},{url:"Gallery/marvel/index.html",revision:"47f288796aed53b8bf1b1b2632c9a9ef"},{url:"Gallery/ohmygirl/index.html",revision:"880e92fbf20308135c795ddac472062c"},{url:"Gallery/signal-r/index.html",revision:"b175b23888873a1509850680d0d6c9ce"},{url:"Gallery/wallpaper/index.html",revision:"8a7e68e6319756f4a8a390b5a75a4c1c"},{url:"Gallery/よむ/index.html",revision:"9334f9b4c2a540f92da15b0adfd97e8c"},{url:"Gallery/中森明菜/index.html",revision:"b64b811d1c69c507f0a0fda79f696c40"},{url:"Gallery/姝||AI Coser/index.html",revision:"f7cb9465ce5c0e2791f3f3af2bc6e685"},{url:"Gallery/河北彩花/index.html",revision:"99ccb6d1cce7d2c96e217c2387fda8b4"},{url:"Gallery/金宣亨/index.html",revision:"291014f7a168b7a145d40b1f56e7b299"},{url:"Gallery/雪/index.html",revision:"c4828411399ff82b46cf3bb09fb71114"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/背景_星空.png",revision:"4b26032f70916b26e0eb79081f3bdf19"},{url:"index.html",revision:"6ac91a3454bdfb52df199e77f42ce577"},{url:"js/jquery-3.4.1.min.js",revision:"220afd743d9e9643852e31a135a9f3ae"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/script.js",revision:"899039a2fd4a5c7a164d7ae5bfc78073"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"b14fa9066344bc0495df523d76e35e2b"},{url:"movies/index.html",revision:"b6dbb4291f5d824bad9e727d61d65c24"},{url:"music/index.html",revision:"ae1ffac029facb96c1bfad79e3615bb7"},{url:"picture/index.html",revision:"fb9def44933f2e4e82bd59f17ecd57f8"},{url:"tags/index.html",revision:"3f6702bc436c127ebf9953ca40cd31c4"},{url:"tmp/bet on me/头像(bet on me).png",revision:"04a1ef34f8dbaa93e4091fcb7b31e94e"}],{})}));
//# sourceMappingURL=service-worker.js.map
