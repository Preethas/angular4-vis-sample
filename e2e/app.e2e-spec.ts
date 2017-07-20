import { Angular4VisSamplePage } from './app.po';

describe('angular4-vis-sample App', () => {
  let page: Angular4VisSamplePage;

  beforeEach(() => {
    page = new Angular4VisSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
