// slimSelect.js

import SlimSelect from 'slim-select';
import { renderTicetCard } from './ticetCard';
import { jsonData } from './jsonLoad';

const select = new SlimSelect({
  select: '#countrySelect',
  placeholder: 'Виберіть країни',
  data: [
    // Опції тут, як раніше
  ],
  events: {
    afterChange: newVal => {
      const selectedOption = select.getSelected();
      handleSelectChange(selectedOption);
    },
  },
});
