// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Створюємо екземпляр SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Функція створення галереї
export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${img.likes}</p>
          <p><b>Views:</b> ${img.views}</p>
          <p><b>Comments:</b> ${img.comments}</p>
          <p><b>Downloads:</b> ${img.downloads}</p>
        </div>
      </li>
    `
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);

  // Оновлення SimpleLightbox після додавання елементів
  lightbox.refresh();
}

// Очищення галереї
export function clearGallery() {
  galleryList.innerHTML = '';
}

// Показуємо loader
export function showLoader() {
  loader.classList.remove('is-hidden');
}

// Приховкуємо loader
export function hideLoader() {
  loader.classList.add('is-hidden');
}
