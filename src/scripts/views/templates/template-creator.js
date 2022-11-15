import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="main">
    <img class="resto__poster lazyload" src="${CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId}" alt="${resto.title}" />
    <div class="resto__info">
      <h2 class="resto__title">${resto.name}</h2>
      <h3>${resto.city} | ${resto.address} | ⭐️${resto.rating}</h3>
      <h4>Kategori</h4>
      <p>${resto.categories.map((category) => category.name).join(' | ')}</p>
      <h4>Menu Makanan</h4>
      <p>${resto.menus.foods.map((food) => food.name).join(' | ')}</p>
      <h4>Menu Minuman</h4>
      <p>${resto.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
    </div>
    </div>
    <div class="resto__overview">
      <h3>Deskripsi</h3>
      <p>${resto.description}</p>
    </div>
    <div class="resto__reviews">
      <h3>Review</h3>
    </div>
  </div>
`;

const createRestoItemTemplate = (resto) => `
    <article class="card" tabindex="0">
      <div class="imgBx">
        <img class="lazyload" src="${resto.pictureId ? CONFIG.SMALL_BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${resto.name}" />
      </div>
      <div class="content" tabindex="0">
        <h2 class="titleResto"><a href="/#/detail/${resto.id}">${resto.name}</a></h2>
        <h3>${resto.city}</h3>
        <div class="rate">
          <h4>⭐️ ${resto.rating}</h4>
        </div>
        <p>${resto.description}</p>
      </div>
    </article>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewItem = (resto) => `
${resto.customerReviews.map((review) => `
<div class="testimoni-box">
  <div class="box-top">
    <div class="profile">
      <div class="nama-reviewers">
        <strong>${review.name}</strong>
      </div>
    </div>
    <div class="date">
      <span>${review.date}</span>
    </div>
  </div>
<p>${review.review}</p>
</div>`).join('')}
`;

const FavRestoNotFound = () => `
<h3 class="FavNotFound">Favorite Resto Not Found</h3>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createReviewItem,
  FavRestoNotFound,
};
