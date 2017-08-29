import { AngPreloaderPage } from './app.po';

describe('ang-preloader App', () => {
  let page: AngPreloaderPage;

  beforeEach(() => {
    page = new AngPreloaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
