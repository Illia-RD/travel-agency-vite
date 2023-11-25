import{S as d}from"./assets/vendor-17b356c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=r(e);fetch(e.href,c)}})();function l(i){return i.reduce((t,r)=>t+r,0)}const u=document.querySelector(".card");function g(i){u.innerHTML="",console.log(typeof i.flag),u.insertAdjacentHTML("beforeend",`
    <div class="info">
      <img class="image" src="/src/img/vite-logo.png" alt="${i.name}" width="300" />
      <h2>${i.name}</h2>
      <p>${i.description}</p>
      <div class="excursions">
        <h3>Екскурсії:</h3>
        <select id="excursionSelect" multiple></select>
      </div>

      <div class="price">
        <div class="ticet-price">
            <p>Вартість квитка</p>
            <p class="price-value" id="ticet-price" value="${i.ticketPrice}">${i.ticketPrice}</p>
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
  `);const t=document.querySelector("#create-order-btn"),r=document.querySelector("#ticet-price"),o=document.querySelector("#excursion-price"),e=new d({select:"#excursionSelect",placeholder:"Виберіть країну",settings:{showSearch:!1,hideSelected:!0,placeholderText:"Оберіть екскурсію"},data:c(i.excursions),events:{afterChange:s}});function c(n){return n.map(a=>({html:`
        <p class="excursion-option-name">${a.name}</p>
        <p class="excursion-option-price">${a.price}</p>
      `,text:a.name,value:a.price}))}function s(){const n=e.getSelected();o.textContent=l(n)||0,o.setAttribute("value",l(n)||0)}t.addEventListener("click",()=>{let n={name:"",ticet:Number(r.getAttribute("value")),excursion:Number(o.getAttribute("value"))};alert(`Замовлено: ${n.name}
Ціна квитка: ${n.ticet}
Ціна екскурсій: ${n.excursion}
Загальна ціна: ${n.ticet+n.excursion}`)})}const f=[{id:10,name:"Франція",flag:"./img/vite-logo.png",description:"Країна кохання та світового мистецтва.",image:"./img/vite-logo.png",ticketPrice:800,excursions:[{name:"Парижський Тур",price:100},{name:"Луврська Галерея",price:120},{name:"Ейфелева Вежа",price:80}]},{id:11,name:"Японія",flag:"./img/vite-logo.png",description:"Країна високих технологій та традиційного чаю.",image:"./img/vite-logo.png",ticketPrice:1200,excursions:[{name:"Токійська Скайлайн",price:150},{name:"Кіотські сади",price:110},{name:"Фудзіяма",price:120}]},{id:12,name:"Італія",flag:"./img/vite-logo.png",description:"Країна хорошої їжі, мистецтва та древніх руїн.",image:"./img/vite-logo.png",ticketPrice:900,excursions:[{name:"Колізей в Римі",price:130},{name:"Флоренційська галерея",price:100},{name:"Венеціанські канали",price:90}]},{id:13,name:"Австралія",flag:"./img/vite-logo.png",description:"Країна екзотичної природи та унікальних тварин.",image:"./img/vite-logo.png",ticketPrice:1500,excursions:[{name:"Сіднейська опера",price:180},{name:"Великий бар'єрний риф",price:200},{name:"Айєрс Рок",price:160}]},{id:14,name:"Канада",flag:"./img/vite-logo.png",description:"Країна великих озер та приголомшливої природи.",image:"./img/vite-logo.png",ticketPrice:1100,excursions:[{name:"Ніагарські водоспади",price:150},{name:"Банфський національний парк",price:130},{name:"Торонто Скайлайн",price:120}]}],p={countries:f},v=new d({select:"#countrySelect",data:h(p),settings:{placeholderText:"Custom Placeholder Text"},events:{afterChange:m}});function h(i){return i.countries.map(t=>({html:`
      <img class="country-flag" src="${t.flag}" alt="${t.name}" width="50" height="20" >
      <p class="country-name">${t.name}</p>
    `,text:t.name,value:t.id}))}function m(){const i=v.getSelected()[0],t=p.countries.find(r=>r.id===i);t?g(t):console.log("Країну не знайдено.")}m();
//# sourceMappingURL=commonHelpers.js.map
