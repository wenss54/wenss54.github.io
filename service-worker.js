if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const a=e=>r(e,n),l={module:{uri:n},exports:f,require:a};i[n]=Promise.all(s.map((e=>l[e]||a(e)))).then((e=>(c(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/12/A/index.html",revision:"b659ec4ff7e85fbfae7eda59b9020452"},{url:"2023/03/13/B/index.html",revision:"22b0b48bdf351348b5489d87c658c3de"},{url:"404.html",revision:"4845eeb81b379c1c5ed674239c4f0c2e"},{url:"archives/2023/03/index.html",revision:"6020a181966f4d8b0f62b4f063c4eb13"},{url:"archives/2023/index.html",revision:"3c9d24e7d07e482ab00faf853e72de44"},{url:"archives/index.html",revision:"5b06859257f204ede944696f4b189c16"},{url:"categories/index.html",revision:"792846abfc8e6d3a0b8f18a4c2fa2dc4"},{url:"css/fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"css/fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"css/fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"css/fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"css/fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"css/images/banner.jpg",revision:"0394d7ba5b310b5037d2a139bef63fa4"},{url:"css/index.css",revision:"17b15ca5852fabe9b567d5df5e015da7"},{url:"css/style.css",revision:"41e3730632c80ad77c0e819c71e0006b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fancybox/jquery.fancybox.min.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"fancybox/jquery.fancybox.min.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"Gallery/index.html",revision:"04e943f0768ccb7280697c2f4f6bf372"},{url:"Gallery/marvel/index.html",revision:"2e095eba732424b2cf848edaee522bde"},{url:"Gallery/ohmygirl/index.html",revision:"83614f9687f8b0ef4f2cef2d6761d269"},{url:"Gallery/signal-r/index.html",revision:"4bbd46c92fe994fdb4dc4437854bf614"},{url:"Gallery/wallpaper/index.html",revision:"604bed99e255a53b7c6548866e999930"},{url:"Gallery/よむ/index.html",revision:"e436e962d6f312c171dfd41bebb5bc85"},{url:"Gallery/姝||AI Coser/index.html",revision:"39b931f87b67b0bb4ac104bbbe92944b"},{url:"Gallery/金宣亨/index.html",revision:"78e018c2767cc9adb958511e132ae75e"},{url:"Gallery/雪/index.html",revision:"54968c5645be7e6e58285429404a1c49"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/背景_星空.png",revision:"4b26032f70916b26e0eb79081f3bdf19"},{url:"index.html",revision:"1427bffe52c5e3d4c04380e9e9e111da"},{url:"js/jquery-3.4.1.min.js",revision:"220afd743d9e9643852e31a135a9f3ae"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/script.js",revision:"899039a2fd4a5c7a164d7ae5bfc78073"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"95c069e7645174779c5f38ad388696b3"},{url:"movies/index.html",revision:"964a275e29709a0b53b74af9284eeadd"},{url:"music/index.html",revision:"6bc3d2d1680a276a440f81a2d081ee75"},{url:"music/index/头像(bet on me).png",revision:"04a1ef34f8dbaa93e4091fcb7b31e94e"},{url:"picture/index.html",revision:"287885be690ddc0a0e6aefcc0f6c6c11"},{url:"tags/index.html",revision:"54f825c53fbc555111ee588179aa7624"}],{})}));
//# sourceMappingURL=service-worker.js.map
