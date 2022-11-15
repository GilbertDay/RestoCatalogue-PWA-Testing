/* eslint-disable spaced-comment */
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorit from '../views/pages/favorite';

const routes = {
  '/': Home, //default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorit,
};

export default routes;
