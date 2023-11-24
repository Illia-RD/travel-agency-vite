// ticetCard.js

export function renderTicetCard(data, selectedId) {
  const countryInf = data.countries.find(country => country.id == selectedId);

  if (!countryInf) {
    console.log('Країну не знайдено.');
    return '';
  }

  const { image, name, description, ticketPrice, excursions, id } = countryInf;

  const layout = `
    <img class="image" src="${image}" alt="${name}" width="300" />
    <div class="info">
      <h2>${name}</h2>
      <p>${description}</p>
      <div class="excursions">
        <h3>Екскурсії:</h3>
        <select id="excursionsSelect" multiple></select>
      </div>
      <div class="price">
        <p>${ticketPrice}</p>
      </div>
      <div class="order-wrap">
        <button class="order-btn" type="button">Замовити квиток</button>
      </div>
    </div>`;

  return layout;
}
