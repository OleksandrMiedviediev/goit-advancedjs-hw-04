import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/common.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

let currentQuery = '';
let page = 1;

const showEndOfResultsMessage = () => {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
  });
};

const loadImages = async (isLoadMore = false) => {
  if (isLoadMore) {
    hideLoadMoreButton();
  } else {
    clearGallery();
    hideLoadMoreButton();
  }

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    if (!data.hits.length) {
      if (!isLoadMore) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return;
    }

    createGallery(data.hits);

    if (page * 15 < data.totalHits) {
      showLoadMoreButton();
    } else {
      showEndOfResultsMessage();
    }

    if (isLoadMore) {
      const card = document.querySelector('.gallery-item');
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  currentQuery = query;
  page = 1;
  loadImages();
});

loadMoreButton.addEventListener('click', () => {
  page += 1;
  loadImages(true);
});
