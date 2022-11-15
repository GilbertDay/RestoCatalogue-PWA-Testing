import DataRestoSource from '../../data/data-resto';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-jumbotron></hero-jumbotron>
    <div class="restaurant">
      <h1 class="restaurant_label">Daftar Restaurant</h1>
      <div class="catalog"></div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await DataRestoSource.getAllResto();
    const restoContainer = document.querySelector('.catalog');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
