import { D3WorldPopulationPage } from './app.po';

describe('d3-world-population App', () => {
  let page: D3WorldPopulationPage;

  beforeEach(() => {
    page = new D3WorldPopulationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
