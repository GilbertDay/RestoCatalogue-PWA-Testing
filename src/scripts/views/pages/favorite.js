import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate, FavRestoNotFound } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="restaurant">
      <h1 class="restaurant_label">Daftar Restaurant Yang Disukai</h1>
      <div class="catalog"></div>
    </div>
  `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    this.showFavoriteRestaurant(restos);
  },
  showFavoriteRestaurant(restos = []) {
    const restoContainer = document.querySelector('.catalog');
    const notFound = FavRestoNotFound();
    if (restos.length) {
      restos.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } else {
      restoContainer.innerHTML = notFound;
    }
  },
};

export default Like;
