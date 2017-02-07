import { GouinoteAngularV2Page } from './app.po';

describe('gouinote-angular-v2 App', function() {
  let page: GouinoteAngularV2Page;

  beforeEach(() => {
    page = new GouinoteAngularV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
