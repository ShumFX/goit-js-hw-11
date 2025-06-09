import axios from 'axios';

const API_KEY = 'твій_ключ_сюди'; // 🔐 встав свій ключ від Pixabay
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Pixabay API error:', error);
    throw error;
  }
}
