import { TestAotPage } from './app.po';

describe('test-aot App', function() {
  let page: TestAotPage;

  beforeEach(() => {
    page = new TestAotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
