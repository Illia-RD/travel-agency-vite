import SlimSelect from 'slim-select';
import { calculateSum } from './calculateSum';

// Отримання елементу карточки
const card = document.querySelector('.card');

// Функція для генерації карточки квитка
export function createTicketCard(country) {
  // Очищення контенту карточки
  card.innerHTML = '';
  console.log(typeof country.flag);
  // Додавання HTML-структури з інформацією про країну
  card.insertAdjacentHTML(
    'beforeend',
    `
    <div class="info">
      <img class="image" src="/src/img/vite-logo.png" alt="${country.name}" width="300" />
      <h2>${country.name}</h2>
      <p>${country.description}</p>
      <div class="excursions">
        <h3>Екскурсії:</h3>
        <select id="excursionSelect" multiple></select>
      </div>

      <div class="price">
        <div class="ticet-price">
            <p>Вартість квитка</p>
            <p class="price-value" id="ticet-price" value="${country.ticketPrice}">${country.ticketPrice}</p>
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
  `
  );

  // Отримання елементів для подальших операцій
  const orderBtn = document.querySelector('#create-order-btn');
  const ticetPrice = document.querySelector('#ticet-price');
  const excursionPrice = document.querySelector('#excursion-price');

  // Ініціалізація випадаючого списку екскурсій
  const excursionSelect = new SlimSelect({
    select: '#excursionSelect',
    placeholder: 'Виберіть країну',
    settings: {
      showSearch: false,
      hideSelected: true,
      placeholderText: 'Оберіть екскурсію',
    },
    data: addExcursionsData(country.excursions),
    events: {
      afterChange: handleExcursionChange,
    },
  });

  // Функція для генерації даних для випадаючого списку екскурсій
  function addExcursionsData(excursions) {
    const excursionData = excursions.map(excursion => ({
      html: `
        <p class="excursion-option-name">${excursion.name}</p>
        <p class="excursion-option-price">${excursion.price}</p>
      `,
      text: excursion.name,
      value: excursion.price,
    }));
    return excursionData;
  }

  // Обробник зміни вибраних екскурсій
  function handleExcursionChange() {
    const selectedExcursions = excursionSelect.getSelected();

    excursionPrice.textContent = calculateSum(selectedExcursions) || 0;
    excursionPrice.setAttribute('value', calculateSum(selectedExcursions) || 0);
  }

  // Обробник натискання на кнопку "Замовити квиток"
  orderBtn.addEventListener('click', () => {
    let alertContent = {
      name: '',
      ticet: Number(ticetPrice.getAttribute('value')),
      excursion: Number(excursionPrice.getAttribute('value')),
    };
    alert(
      `Замовлено: ${alertContent.name}\nЦіна квитка: ${
        alertContent.ticet
      }\nЦіна екскурсій: ${alertContent.excursion}\nЗагальна ціна: ${
        alertContent.ticet + alertContent.excursion
      }`
    );
  });
}
