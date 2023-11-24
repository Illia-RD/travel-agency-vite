import SlimSelect from 'slim-select';
// // Ініціалізація Slim Select
// const select = new SlimSelect({
//   select: '#countrySelect',
//   placeholder: 'Виберіть країни',
// });
// function createOption() {
//   return select;

//   // Додавання опцій до випадаючого списку
// }
const select = new SlimSelect({
  select: '#countrySelect', // Змініть ідентифікатор відповідно до вашого HTML
  placeholder: 'Виберіть країну',
});
// document.addEventListener('DOMContentLoaded', createOption);
function createSlimSelect(jsonData) {
  console.log(jsonData.countries);
  let optionText = [];
  // Додаємо опції до випадаючого списку
  jsonData.countries.map(country => {
    optionText.push({
      html: `
        <img class="country-flag" src="${country.flag}" alt="country.name" width="20" height="15">
        <p class="country-name">${country.name}</p>
        
      `,
      text: country.name,
      value: country.ticketPrice,
      class: 'country-option',
      id: country.id,
    });
    console.log(optionText);

    // select.setData(optionText);
  });
  console.log('--------', optionText);
  select.setData(optionText);
}

function handleSelectChange() {
  // Отримати вибрану опцію
  const selectedOption = select.selected();

  // Перевірити, чи є вибрана опція
  if (selectedOption) {
    // Отримати id вибраної опції
    const selectedId = selectedOption.value;

    // Знайти відповідну картку в масиві країн за id
    const selectedCountry = countries.find(
      country => country.id === selectedId
    );

    // Перевірити, чи знайдена країна
    if (selectedCountry) {
      // Вивести інформацію про країну
      console.log('Знайдена країна:', selectedCountry);
    } else {
      console.log('Країну не знайдено.');
    }
  } else {
    console.log('Не вибрана жодна опція.');
  }
}

// Додати подію на зміну вибору у Slim Select
// select.on('change', handleSelectChange);

// Завантажуємо дані з JSON файлу
fetch('../json/tickets.json')
  .then(response => response.json())
  .then(data => {
    // Викликаємо функцію приймання даних з JSON
    createSlimSelect(data);
  })
  .catch(error => console.error('Помилка завантаження JSON:', error));
