import { ContactListAJ2Page } from './app.po';

describe('contact-list-aj2 App', function() {
  let page: ContactListAJ2Page;

  beforeEach(() => {
    page = new ContactListAJ2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
