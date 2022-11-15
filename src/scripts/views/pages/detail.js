import UrlParser from '../../routes/url-parser';
import DataRestoSource from '../../data/data-resto';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createLikeRestoButtonTemplate, createRestoDetailTemplate, createReviewItem } from '../templates/template-creator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="testimoni-container"></div>
      <div id="likeButtonContainer"></div>
      
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DataRestoSource.getRestoDetail(url.id);
    const restoContainer = document.querySelector('#resto');
    const testimoniContainer = document.querySelector('#testimoni-container');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    testimoniContainer.innerHTML = createReviewItem(resto);
    likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
