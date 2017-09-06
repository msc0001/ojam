import { OjamappPage } from './app.po';

describe('ojamapp App', () => {
  let page: OjamappPage;

  beforeEach(() => {
    page = new OjamappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
