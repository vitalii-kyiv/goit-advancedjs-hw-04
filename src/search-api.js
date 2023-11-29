import axios from 'axios';

export async function serviceSearch(searchText, page = 1) {
  const params = new URLSearchParams({
    key: '37994120-fff0e4792a0f4f4675b43ad43',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
    page,
  });
  const response = await axios(`https://pixabay.com/api/?${params}`);
  return response.data;
}
