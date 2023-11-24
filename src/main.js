// import './js/slimSelect';
// import './js/excursion';
// import './js/ticetCard';
// import './js/countrySelect';
// Імпорт необхідних модулів і функцій
import SlimSelect from 'slim-select';
import { jsonData } from './js/jsonLoad';

// Отримання потрібних елементів з DOM
const card = document.querySelector('.card');
// const excursionsSelect = document.getElementById('selectExcurcion');

// Створення випадаючого списку Slim Select
const countrySelect = new SlimSelect({
  select: '#countrySelect',
  placeholder: 'Виберіть країну',
  data: countryInf(jsonData),
  events: {
    afterChange: handleCountryChange,
  },
});

function countryInf(data) {
  return data.countries.map(country => ({
    html: `
      <img class="country-flag" src="${country.flag}" alt="${country.name}" width="20" height="15">
      <p class="country-name">${country.name}</p>
    `,
    text: country.name,
    value: country.id,
  }));
}

// Оновлена функція для обробки змін у випадаючому списку країн
function handleCountryChange(data) {
  console.log(jsonData);
  const selectedCountryId = countrySelect.getSelected()[0];

  const selectedCountry = jsonData.countries.find(
    country => country.id === selectedCountryId
  );

  if (selectedCountry) {
    renderTicketCard(selectedCountry);
  } else {
    console.log('Країну не знайдено.');
  }
  return;
}

// Функція для рендерингу карточки квитка
function renderTicketCard(country) {
  // Очистити контент карточки
  card.innerHTML = '';

  // Додати зображення країни
  card.insertAdjacentHTML(
    'beforeend',
    `<img class="image" src="${country.image}" alt="${country.name}" width="300" />`
  );

  // Додати інформацію про країну
  card.insertAdjacentHTML(
    'beforeend',
    `
    <div class="info">
      <h2>${country.name}</h2>
      <p>${country.description}</p>
      <div class="excursions">
        <h3>Екскурсії:</h3>
        <select id="excurcionSelect" multiple></select>
      </div>
      <div class="price">
        <p>${country.ticketPrice}</p>
      </div>
      <div class="order-wrap">
        <button class="order-btn" type="button" onclick="handleOrderBtnClick('${country.name}', ${country.ticketPrice})">Замовити квиток</button>
      </div>
    </div>
  `
  );
  const excurcionSelect = new SlimSelect({
    select: '#excurcionSelect',
    placeholder: 'Виберіть країну',
    data: addExcursionsData(jsonData),
    events: {
      afterChange: handleCountryChange,
    },
  });
  // Додати екскурсії до випадаючого списку
  //   console.log('-------', country.excursions);
  //   addExcursionsToSelect(country.excursions);
}

// Функція для додавання екскурсій до випадаючого списку
function addExcursionsData(excursions) {
  //   excurcionSelect.setData();
  //const optionText = excursions.map(excursion => ({
  //     html: `
  //       <p class="excurcion-name">${excursion.name}</p>
  //       <p class="excurcion-price">${excursion.price}</p>
  //     `,
  //     text: excursion.name,
  //     value: excursion.price,
  //   }));
  //   console.log(optionText);
  //   //   excurcionSelect.setData(optionText);
  //   console.log('-----++++++', excursions);
  //   const optionText = excursions.map(excursion => ({
  //     html: `
  //       <p class="excurcion-name">${excursion.name}</p>
  //       <p class="excurcion-price">${excursion.price}</p>
  //     `,
  //     text: excursion.name,
  //     value: excursion.price,
  //   }));
  //   console.log(optionText);
  //   excursionsSelect.setData(optionText);
}

// Функція для обробки натискання на кнопку "Замовити квиток"
function handleOrderBtnClick(countryName, ticketPrice) {
  const selectedExcursions = excursionsSelect.getSelected();
  let totalExcursionPrice = 0;

  // Обчислити загальну вартість екскурсій
  selectedExcursions.forEach(price => {
    totalExcursionPrice += price;
  });

  // Обчислити загальну вартість замовлення
  const totalPrice = ticketPrice + totalExcursionPrice;

  // Вивести інформацію про замовлення
  alert(
    `Замовлено: ${countryName}\nЦіна квитка: ${ticketPrice}\nЦіна екскурсій: ${totalExcursionPrice}\nЗагальна ціна: ${totalPrice}`
  );
}
