//jsonLoad
async function loadJsonFile(filePath) {
  try {
    const response = await fetch(filePath);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Помилка завантаження файлу JSON:', error);
  }
}

export const jsonData = loadJsonFile('../json/tickets.json');
