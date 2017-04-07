import { TheworldPage } from './app.po';

describe('theworld App', () => {
  let page: TheworldPage;

  beforeEach(() => {
    page = new TheworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
