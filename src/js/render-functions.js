import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const galleryMarkup = images
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
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="image-info">
            <p><b>Likes</b><span>${likes}</span></p>
            <p><b>Views</b><span>${views}</span></p>
            <p><b>Comments</b><span>${comments}</span></p>
            <p><b>Downloads</b><span>${downloads}</span></p>
          </div>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.add('is-visible');
};

export const hideLoader = () => {
  loader.classList.remove('is-visible');
};

export const showLoadMoreButton = () => {
  loadMoreButton.classList.add('is-visible');
};

export const hideLoadMoreButton = () => {
  loadMoreButton.classList.remove('is-visible');
};
