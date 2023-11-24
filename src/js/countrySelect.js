import { jsonData } from './jsonLoad';
import { select } from './slimSelect';
// // Ініціалізація Slim Select
// const select = new SlimSelect({
//   select: '#countrySelect',
//   placeholder: 'Виберіть країни',
// });
// function createOption() {
//   return select;

//   // Додавання опцій до випадаючого списку
// }

// document.addEventListener('DOMContentLoaded', createOption);
export function createSlimSelect(data) {
  let optionText = [];
  // Додаємо опції до випадаючого списку
  data.countries.map(country => {
    optionText.push({
      html: `
        <img class="country-flag" src="${country.flag}" alt="country.name" width="20" height="15">
        <p class="country-name">${country.name}</p>
        
      `,
      text: country.name,
      value: country.id,
      class: 'country-option',
      id: country.id,
    });
  });

  select.setData(optionText);
}

createSlimSelect(jsonData);
