import SlimSelect from 'slim-select';
import { handleSelectChange } from './ticetCard';

export const select = new SlimSelect({
  select: '#countrySelect',
  placeholder: 'Виберіть країну',
  events: { afterChange: handleSelectChange },
});
export const selectExcurcion = new SlimSelect({
  select: '#excursionsSelect',
  placeholder: 'Select Options',
  // onChange: () => {
  //   // Обчислити та вивести загальну ціну при зміні вибору
  //   const totalPrice = calculateTotalPrice(select.selected(), jsonData);
  //   document.getElementById('totalPrice').textContent = totalPrice;
  // },
});
