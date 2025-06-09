import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Создаем экземпляр SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
  docClose: true,
  animationSpeed: 250,
});

const galleryContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

/**
 * Создает галерею изображений
 * @param {Array} images - массив объектов изображений
 */
export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img 
              src="${webformatURL}" 
              alt="${tags}" 
              class="gallery-image"
              loading="lazy"
            />
            <div class="info">
              <div class="info-item">
                <b>Likes</b>
                <span>${likes}</span>
              </div>
              <div class="info-item">
                <b>Views</b>
                <span>${views}</span>
              </div>
              <div class="info-item">
                <b>Comments</b>
                <span>${comments}</span>
              </div>
              <div class="info-item">
                <b>Downloads</b>
                <span>${downloads}</span>
              </div>
            </div>
          </a>
        </li>
      `;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

/**
 * Очищает галерею
 */
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

/**
 * Показывает лоадер
 */
export function showLoader() {
  loaderContainer.classList.remove('hidden');
}

/**
 * Скрывает лоадер
 */
export function hideLoader() {
  loaderContainer.classList.add('hidden');
}