(()=>{"use strict";function t(t){const e=document.createElement(t.type);return function(t,e){void 0!==e&&t.setAttribute("id",e)}(e,t.id),function(t,e){void 0!==e&&t.setAttribute("class",e)}(e,t.cl),function(t,e){void 0!==e&&t.setAttribute("src",e)}(e,t.src),function(t,e){void 0!==e&&(t.textContent=e)}(e,t.textContent),function(t,e){void 0!==e&&t.addEventListener(e.type,e.callback)}(e,t.eventListener),function(t,e){void 0!==e&&t.setAttribute("href",e)}(e,t.href),t.parent.appendChild(e),e}function e(t){t.querySelectorAll("*").forEach((t=>{t.remove()}))}function n(t){["tab-home","tab-menu","tab-contact"].forEach((e=>{const n=document.getElementById(e);e===t?n.classList.contains("tab")&&n.classList.replace("tab","tab-highlight"):n.classList.contains("tab-highlight")&&n.classList.replace("tab-highlight","tab")}))}const a=function(){const e=document.getElementById("copy-container");t({type:"p",textContent:"Dudley’s Donuts is the passion project of two childhood friends who were reunited when their canine companions became friends at the local dog park. In 1999, they discovered another common interest: donuts.  With Shelly’s baking background and Becca’s business mindset, Dudley’s Donuts was founded at the turn of the century.",parent:e}),t({type:"p",textContent:"Why donuts? The team’s research uncovered that Warsaw, PA’s historic old market was seriously lacking in the baked goods department. The donut duo found an affordable storefront in the old police station - a perfect fit.",parent:e}),t({type:"img",cl:"body-img",src:"./img/donuts4.jpeg",parent:e})};!function(){const o=document.getElementById("content"),p=t({type:"div",id:"header",parent:o}),i=(t({type:"img",id:"header-img",src:"./img/donuts3.png",parent:p}),t({type:"h1",id:"title",textContent:"DUDLEY'S DONUTS",parent:p}),t({type:"div",id:"tab-container",parent:p})),c=t({type:"div",cl:"tab-highlight",id:"tab-home",eventListener:{type:"click",callback:()=>{e(document.getElementById("copy-container")),a(),n("tab-home")}},parent:i}),r=(t({type:"span",textContent:"home",parent:c}),t({type:"div",cl:"tab",id:"tab-menu",eventListener:{type:"click",callback:()=>{e(document.getElementById("copy-container")),function(){const e=document.getElementById("copy-container");t({type:"p",textContent:"MENU",parent:e}),t({type:"p",textContent:"All donuts $3.50",parent:e}),t({type:"h5",textContent:"Reese's Puff",parent:e}),t({type:"p",textContent:"Classic cake donut with chocolate frosting topped with Reese's Puffs cereal",parent:e}),t({type:"h5",textContent:"Pumpkin Spice Latte",parent:e}),t({type:"p",textContent:"Light yeast donut with a caramel cream sauce powdered with our unique pumpkin spice blend",parent:e}),t({type:"h5",textContent:"Wingdinger",parent:e}),t({type:"p",textContent:"Yeast donut with a dark chocolate frosting and a salted caramel center",parent:e}),t({type:"h5",textContent:"Biga Bear Claw",parent:e}),t({type:"p",textContent:"A beast of a treat! Your classic bear claw drizzled with a honey-orange frosting and topped with chopped almonds",parent:e}),t({type:"img",cl:"body-img",src:"./img/donuts5.jpg",parent:e})}(),n("tab-menu")}},parent:i})),s=(t({type:"span",textContent:"menu",parent:r}),t({type:"div",cl:"tab",id:"tab-contact",eventListener:{type:"click",callback:()=>{e(document.getElementById("copy-container")),function(){const e=document.getElementById("copy-container"),n=(t({type:"p",textContent:"CONTACT",parent:e}),t({type:"div",parent:e})),a=(t({type:"h3",textContent:"Dudley's Donuts",parent:n}),t({type:"p",textContent:"123 Fake Street",parent:n}),t({type:"p",textContent:"Faketown, PA 54321",parent:n}),t({type:"p",textContent:"(555) 555-5555",parent:n}),t({type:"div",parent:e}));t({type:"h3",textContent:"or send us a message here!",parent:a}),t({type:"label",textContent:"name",parent:a}),t({type:"input",textContent:"name",parent:a}),t({type:"label",textContent:"e-mail",parent:a}),t({type:"input",textContent:"e-mail",parent:a}),t({type:"label",textContent:"phone",parent:a}),t({type:"input",textContent:"phone",parent:a}),t({type:"label",textContent:"comments",parent:a}),t({type:"input",id:"comments-box",textContent:"comments",parent:a}),t({type:"img",cl:"body-img",src:"./img/map.png",parent:e})}(),n("tab-contact")}},parent:i})),d=(t({type:"span",textContent:"contact",parent:s}),t({type:"div",id:"main-content",parent:o}));t({type:"div",id:"copy-container",parent:d}),a()}()})();