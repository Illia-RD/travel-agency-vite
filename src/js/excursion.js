// import { selectExcurcion } from './slimSelect';

// export function addExcursions(excursions) {
//   console.log(excursions);
//   let optionText = [];

//   excursions.map(excursion => {
//     optionText.push({
//       html: `<p class="excurcion-name">${excursion.name}</p>
//         <p class="excurcion-price">${excursion.price}</p>`,
//       text: excursion.name,
//       value: excursion.price,
//     });
//   });
//   console.log(optionText);
//   selectExcurcion.setData(optionText);

//   // Оновити дані Slim Select
// }

// document.addEventListener('DOMContentLoaded', async () => {
//   // Шлях до файлу JSON (замініть на свій)
//   const jsonFilePath = 'path/to/your/json/file.json';

//   // Завантаження файлу JSON
//   const response = await fetch(jsonFilePath);
//   const jsonData = await response.json();

//   if (validateJson(jsonData)) {
//     // Отримати посилання на елемент випадаючого списку

//     // Додати опції до випадаючого списку
//     addOptionsToSelect(selectExcurcion, jsonData);
//   } else {
//     console.error('Неправильний формат JSON.');
//   }
// });

// function validateJson(jsonData) {
//   // Додайте необхідну логіку для перевірки формату JSON
//   return Array.isArray(jsonData);
// }

// function calculateTotalPrice(selectedOptions, jsonData) {
//   // Розрахунок загальної ціни на основі вибраних опцій
//   let totalPrice = 0;

//   selectedOptions.forEach(optionValue => {
//     // Додати ціну кожної вибраної опції
//     totalPrice += parseInt(optionValue, 10);
//   });

//   return totalPrice;
// }
