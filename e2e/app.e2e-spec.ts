import { Ng2CliCartPage } from './app.po';

describe('ng2-cli-cart App', () => {
  let page: Ng2CliCartPage;

  beforeEach(() => {
    page = new Ng2CliCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
