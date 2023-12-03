import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { serviceSearch } from './search-api';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const searchResultGallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmitClick);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
searchResultGallery.addEventListener('click', function (evt) {
  evt.preventDefault();
});

async function onSubmitClick(evt) {
  evt.preventDefault();
  const searchData = form.elements['searchQuery'].value.trim();
  if (!searchData) {
    iziToast.error({
      closeOnEscape: true,
      closeOnClick: true,
      backgroundColor: 'tomato',
      messageColor: 'white',
      position: 'topRight',
      messageSize: '16',
      maxWidth: 500,
      message: `Input is empty! Print something.`,
    });
    searchResultGallery.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    return;
  }
  try {
    const response = await serviceSearch(searchData);
    loadMoreBtn.style.display = 'block';
    const data = response.hits;

    if (!data.length) {
      loadMoreBtn.style.display = 'none';
      iziToast.error({
        closeOnEscape: true,
        closeOnClick: true,
        backgroundColor: 'tomato',
        messageColor: 'white',
        position: 'topRight',
        messageSize: '16',
        maxWidth: 500,
        message: `Sorry, there are no images matching your search query. Please try again.`,
      });
      searchResultGallery.innerHTML = '';
    } else {
      if (response.totalHits / 40 <= page) {
        iziToast.error({
          closeOnEscape: true,
          closeOnClick: true,
          backgroundColor: 'tomato',
          messageColor: 'white',
          position: 'topRight',
          messageSize: '16',
          maxWidth: 500,
          message: `We're sorry, but you've reached the end of search results.`,
        });
        loadMoreBtn.style.display = 'none';
        searchResultGallery.innerHTML = renderSearchResult(data);
        return;
      }
      searchResultGallery.innerHTML = renderSearchResult(data);
      iziToast.success({
        closeOnEscape: true,
        closeOnClick: true,
        messageSize: '16',
        maxWidth: 500,
        position: 'topRight',
        message: `Hooray! We found ${response.totalHits} images.`,
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

let page = 1;

async function onLoadMoreBtnClick() {
  const searchData = form.elements['searchQuery'].value.trim();
  try {
    const response = await serviceSearch(searchData, page + 1);
    page += 1;
    const data = response.hits;
    console.log(typeof response.totalHits);
    console.log(page);
    if (response.totalHits / 40 <= page) {
      iziToast.error({
        closeOnEscape: true,
        closeOnClick: true,
        backgroundColor: 'tomato',
        messageColor: 'white',
        position: 'topRight',
        messageSize: '16',
        maxWidth: 500,
        message: `We're sorry, but you've reached the end of search results.`,
      });
      loadMoreBtn.style.display = 'none';
      searchResultGallery.insertAdjacentHTML(
        'beforeend',
        renderSearchResult(data)
      );
      return;
    }
    searchResultGallery.insertAdjacentHTML(
      'beforeend',
      renderSearchResult(data)
    );
  } catch (error) {
    console.error('Error:', error);
  }
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
        <a class="no-link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
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

imgLink.addEventListener('click', function (event) {
  event.preventDefault();
});
// SimpleLightbox не працює, є помилка при імпорті. Нажаль виправити не вийшло, розумію, що не обовязковий функціонал, але якщо зможеш дати фідбек - буду дуже вдячний.
const lightbox = new SimpleLightbox('.gallery a', {});
