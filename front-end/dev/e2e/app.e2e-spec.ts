import { browser } from 'protractor';

describe('angular-cli App', () => {
  beforeEach(() => {
    //
  });

  it('should display default title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Angular Default');
  });
});
