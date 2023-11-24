// excursion.js

import SlimSelect from 'slim-select';

export const selectExcurcion = new SlimSelect({
  select: '#excursionsSelect',
  placeholder: 'Select Options',
});

export function addExcursions(excursions) {
  const optionText = excursions.map(excursion => ({
    html: `
      <p class="excurcion-name">${excursion.name}</p>
      <p class="excurcion-price">${excursion.price}</p>`,
    text: excursion.name,
    value: excursion.price,
  }));

  selectExcurcion.setData(optionText);
}
