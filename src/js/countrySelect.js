import SlimSelect from 'slim-select';
import { createTicketCard } from './ticetCard';
import jsonData from '../json/tickets.json';
// Ініціалізація випадаючого списку країн
const countrySelect = new SlimSelect({
  select: '#countrySelect',
  data: countryInf(jsonData),
  settings: { placeholderText: 'Custom Placeholder Text' },
  events: {
    afterChange: handleCountryChange,
  },
});

// Функція для генерації даних для випадаючого списку країн
function countryInf(data) {
  return data.countries.map(country => ({
    html: `
      <img class="country-flag" src="${country.flag}" alt="${country.name}" width="50" height="20" >
      <p class="country-name">${country.name}</p>
    `,
    text: country.name,
    value: country.id,
  }));
}

// Обробник зміни вибраної країни
function handleCountryChange() {
  const selectedCountryId = countrySelect.getSelected()[0];

  const selectedCountry = jsonData.countries.find(
    country => country.id === selectedCountryId
  );

  if (selectedCountry) {
    createTicketCard(selectedCountry);
  } else {
    console.log('Країну не знайдено.');
  }
}

// Виклик функції для ініціалізації з дефолтною країною
handleCountryChange();
