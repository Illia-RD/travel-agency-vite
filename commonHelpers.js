import{S as u}from"./assets/vendor-17b356c5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}})();function l(t){return t.reduce((i,n)=>i+n,0)}const d=document.querySelector(".card");function g(t){d.innerHTML="",console.log(typeof t.flag),d.insertAdjacentHTML("beforeend",`
    <div class="info">
      <img srcset="${t.image}" alt="" />

      <h2>${t.name}</h2>
      <p>${t.description}</p>
      <div class="excursions">
        <h3>Екскурсії:</h3>
        <select id="excursionSelect" multiple></select>
      </div>

      <div class="price">
        <div class="ticet-price">
            <p>Вартість квитка</p>
            <p class="price-value" id="ticet-price" value="${t.ticketPrice}">${t.ticketPrice}</p>
        </div>
        <div class="excursion-price"  >
            <p>Вартість екскурсій</p>
            <p class="excursion-price-value" id="excursion-price" value="0">0</p>
        </div>
      </div>  
    </div>
    <div class="order-wrap">
        <button class="order-btn" type="button" id="create-order-btn">Замовити квиток</button>
    </div>
  `);const i=document.querySelector("#create-order-btn"),n=document.querySelector("#ticet-price"),o=document.querySelector("#excursion-price"),e=new u({select:"#excursionSelect",placeholder:"Виберіть країну",settings:{showSearch:!1,hideSelected:!0,placeholderText:"Оберіть екскурсію"},data:c(t.excursions),events:{afterChange:s}});function c(r){return r.map(a=>({html:`
        <p class="excursion-option-name">${a.name}</p>
        <p class="excursion-option-price">${a.price}</p>
      `,text:a.name,value:a.price}))}function s(){const r=e.getSelected();o.textContent=l(r)||0,o.setAttribute("value",l(r)||0)}i.addEventListener("click",()=>{let r={name:"",ticet:Number(n.getAttribute("value")),excursion:Number(o.getAttribute("value"))};alert(`Замовлено: ${r.name}
Ціна квитка: ${r.ticet}
Ціна екскурсій: ${r.excursion}
Загальна ціна: ${r.ticet+r.excursion}`)})}const f=[{id:10,name:"Франція",flag:"./public/vite-logo.png",description:"Країна кохання та світового мистецтва.",image:"./img/vite-logo.png",ticketPrice:800,excursions:[{name:"Парижський Тур",price:100},{name:"Луврська Галерея",price:120},{name:"Ейфелева Вежа",price:80}]},{id:11,name:"Японія",flag:"./img/vite-logo.png",description:"Країна високих технологій та традиційного чаю.",image:"./img/vite-logo.png",ticketPrice:1200,excursions:[{name:"Токійська Скайлайн",price:150},{name:"Кіотські сади",price:110},{name:"Фудзіяма",price:120}]},{id:12,name:"Італія",flag:"./img/vite-logo.png",description:"Країна хорошої їжі, мистецтва та древніх руїн.",image:"./img/vite-logo.png",ticketPrice:900,excursions:[{name:"Колізей в Римі",price:130},{name:"Флоренційська галерея",price:100},{name:"Венеціанські канали",price:90}]},{id:13,name:"Австралія",flag:"./img/vite-logo.png",description:"Країна екзотичної природи та унікальних тварин.",image:"./img/vite-logo.png",ticketPrice:1500,excursions:[{name:"Сіднейська опера",price:180},{name:"Великий бар'єрний риф",price:200},{name:"Айєрс Рок",price:160}]},{id:14,name:"Канада",flag:"./img/vite-logo.png",description:"Країна великих озер та приголомшливої природи.",image:"./img/vite-logo.png",ticketPrice:1100,excursions:[{name:"Ніагарські водоспади",price:150},{name:"Банфський національний парк",price:130},{name:"Торонто Скайлайн",price:120}]}],p={countries:f},v=new u({select:"#countrySelect",data:h(p),settings:{placeholderText:"Custom Placeholder Text"},events:{afterChange:m}});function h(t){return t.countries.map(i=>({html:`
      <svg
    width="30"
    xmlns="http://www.w3.org/2000/svg"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    image-rendering="optimizeQuality"
    fill-rule="evenodd"
    clip-rule="evenodd"
    viewBox="0 0 90.77 63.15"
  >
    <g fill-rule="nonzero">
      <path
        fill="#009246"
        d="M29.47 0v63.15H4.99C2.24 63.15 0 60.9 0 58.16V4.99C0 2.24 2.24 0 4.99 0h24.48z"
      />
      <path fill="#fff" d="M61.31 0v63.15H29.47V0z" />
      <path
        fill="#CE2B37"
        d="M61.31 63.15V0h24.48c2.74 0 4.98 2.24 4.98 4.99v53.17c0 2.74-2.24 4.99-4.98 4.99H61.31z"
      />
    </g>
  </svg>
      <p class="country-name">${i.name}</p>
    `,text:i.name,value:i.id}))}function m(){const t=v.getSelected()[0],i=p.countries.find(n=>n.id===t);i?g(i):console.log("Країну не знайдено.")}m();
//# sourceMappingURL=commonHelpers.js.map
