import { Angular2WeatherPage } from './app.po';

describe('angular2-weather App', function() {
  let page: Angular2WeatherPage;

  beforeEach(() => {
    page = new Angular2WeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
