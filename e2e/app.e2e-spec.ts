import { BlahMapPage } from './app.po';

describe('blah-map App', () => {
  let page: BlahMapPage;

  beforeEach(() => {
    page = new BlahMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
