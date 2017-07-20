import { AngularCliBaselinePage } from './app.po';

describe('angular-cli-baseline App', function() {
  let page: AngularCliBaselinePage;

  beforeEach(() => {
    page = new AngularCliBaselinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
