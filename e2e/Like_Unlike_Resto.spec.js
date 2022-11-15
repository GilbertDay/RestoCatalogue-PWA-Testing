/* eslint-disable no-undef */

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/Favorite');
});

Scenario('Tidak ada Resto yang DiFavoritkan', ({ I }) => {
  I.waitForElement('.FavNotFound');
  I.see('Favorite Resto Not Found', '.FavNotFound');
});

Scenario('Menyukai Salah 1 Resto', async ({ I }) => {
  I.amOnPage('#/Favorite');
  I.waitForElement('.FavNotFound', 10);
  I.see('Favorite Resto Not Found', '.FavNotFound');
  I.amOnPage('/');
  I.waitForElement('.card', 10);
  I.seeElement('.card');
  I.moveCursorTo('.card');
  I.waitForElement('.titleResto a', 10);
  I.seeElement('.titleResto a');
  I.click(locate('.titleResto a').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/Favorite');
  I.seeElement('.card');
});

Scenario('Unliking one restaurant', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.card', 10);
  I.seeElement('.card');
  I.moveCursorTo('.card');
  I.waitForElement('.titleResto a', 10);
  I.seeElement('.titleResto a');
  I.click(locate('.titleResto a').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/Favorite');
  I.waitForElement('.card');
  I.seeElement('.card');
  I.moveCursorTo('.card');
  I.waitForElement('.titleResto a');
  I.seeElement('.titleResto a');
  I.click('.titleResto a');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/Favorite');
  I.waitForElement('.FavNotFound');
  I.see('Favorite Resto Not Found', '.FavNotFound');
});

Scenario('Melihat About Us', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#navigationDrawer', 10);
  I.seeElement('#navigationDrawer');
  I.waitForElement('#navigationDrawer ul li a', 10);
  I.seeElement('#navigationDrawer ul li a');
  I.click(locate('#navigationDrawer ul li a').last());
});
