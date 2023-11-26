import axios from 'axios';

const form = document.querySelector('.search-form');
const searchResultGallery = document.querySelector('.gallery');

function serviceSearch(searchText) {
  const params = new URLSearchParams({
    key: '37994120-fff0e4792a0f4f4675b43ad43',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return axios(`https://pixabay.com/api/?${params}`);
}

serviceSearch('dog')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  const searchData = form.elements['searchQuery'].value;
  console.log(searchData);
  serviceSearch(searchData).then(response => {
    const data = response.data.hits;
    console.log(data);
    if (!data.length) {
      console.log(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    searchResultGallery.innerHTML = renderSearchResult(data);
  });
}

function renderSearchResult(data) {
  return data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <div class="photo-card">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes ${likes}</b>
            </p>
            <p class="info-item">
              <b>Views ${views}</b>
            </p>
            <p class="info-item">
              <b>Comments ${comments}</b>
            </p>
            <p class="info-item">
              <b>Downloads ${downloads}</b>
            </p>
          </div>
        </div>
      `
    )
    .join('');
}
