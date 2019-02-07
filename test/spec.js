/* eslint-disable no-undef */
const chai = require(`chai`);
const expect = chai.expect;

describe(`Testing pikabu.ru`, () => {
  beforeEach(async function () {
    browser.get(`https://pikabu.ru/`);
  });

  it(`must have the title`, async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.be.equal(`Горячее`);
  });

  it(`all menu items must be visible`, async function () {
    const menuButton = $(`.fa.fa-bars`);
    browser.touchActions().tap(menuButton).perform();
    const menuItemsCount = await $$(`.title`).count();
    expect(menuItemsCount).to.be.equal(4);
  });

  it(`need to be logined for browsing "Мои сообщества"`, async function () {
    const menuButton = $(`.fa.fa-bars`);
    browser.touchActions().tap(menuButton).perform();
    const communitiesButton = element(by.linkText(`Сообщества`));
    browser.touchActions().tap(communitiesButton).perform();
    const myCommunitiesButton = element(by.linkText(`Мои сообщества`));
    browser.touchActions().tap(myCommunitiesButton).perform();
    const errorMessage = await $(`.no_items_msg`).getText();
    expect(errorMessage).to.be.equal(`Пожалуйста, авторизуйтесь или зарегистрируйтесь\nдля просмотра данной страницы`);
  });
});
