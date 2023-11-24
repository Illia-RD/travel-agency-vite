// import { addExcursions } from './excursion';
import { jsonData } from './jsonLoad';
import { select } from './slimSelect';
const card = document.querySelector('.card');

const renderTicetCard = (data, selectedId) => {
  //   console.log('------------\n', selectedId, '\n-----', data.countries);
  const countryInf = data.countries.find(country => country.id === selectedId);
  const { image, name, description, ticketPrice, excursions, id } = countryInf;

  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }
  const excursionsInf = excursions.map(
    excursion =>
      `
         <li class="excursion-item">
            <p class="excursion-text">${excursion.name}</p>
            <p class="${excursion.price}</p>
        </li>
        `
  );
  console.log(excursionsInf);
  const layout = `<img class="image" src="${image}" alt="${name}" width="300" />
    <div class="info">
      <h2>${name}</h2>
      <p>${description}</p>
      <div class="excursions">
        <h3>Екскурсії:</h3>
      <ul class="excursion-list">
         ${excursionsInf.join('')}
        </ul>
      </div>
      <div class="price">
        <p>${ticketPrice}</p>
      </div>
      <div class="order-wrap">
      <button class="order-btn" type="button">Замовити квиток</button>
    </div>
    </div>`;

  return layout;
};
export function handleSelectChange() {
  // Отримати вибрану опцію
  const selectedOption = select.getSelected();

  // Перевірити, чи є вибрана опція
  if (selectedOption) {
    // Отримати id вибраної опції
    const selectedId = selectedOption[0];

    // Знайти відповідну картку в масиві країн за id
    // console.log(typeof select.getSelected()[0]);
    const selectedCountry = jsonData.countries.find(
      country => country.id === selectedId
    );

    // Перевірити, чи знайдена країна
    if (selectedCountry) {
      // Вивести інформацію про країну
      card.insertAdjacentHTML(
        'beforeend',
        renderTicetCard(jsonData, selectedId)
      );
      //   console.log('Знайдена країна:', selectedCountry);
    } else {
      console.log('Країну не знайдено.');
    }
  } else {
    console.log('Не вибрана жодна опція.');
  }
}

// Додати подію на зміну вибору у Slim Select
