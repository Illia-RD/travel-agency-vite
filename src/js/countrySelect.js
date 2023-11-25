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
