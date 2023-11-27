import axios from 'axios';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const searchResultGallery = document.querySelector('.gallery');
let page = 1;
function serviceSearch(searchText, page = 1) {
  const params = new URLSearchParams({
    key: '37994120-fff0e4792a0f4f4675b43ad43',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 5,
    page,
  });
  return axios(`https://pixabay.com/api/?${params}`);
}

form.addEventListener('submit', onSubmitClick);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

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

function onLoadMoreBtnClick() {
  const searchData = form.elements['searchQuery'].value;
  serviceSearch(searchData, page + 1).then(response => {
    const data = response.data.hits;
    if (!data.length) {
      console.log('No more images to load.');
      return;
    }
    searchResultGallery.insertAdjacentHTML(
      'beforeend',
      renderSearchResult(data)
    );
  });
}

// function handlerLoadMore() {
//   page += 1;
//   serviceMovie(page).then((data) => {
//     elements.list.insertAdjacentHTML("beforeend", createMarkup(data.results));

//     if (data.page >= 500 || data.page >= data.total_pages) {
//       elements.btnLoad.classList.replace("load-more", "load-more-hidden");
//     }
//   });
// }
