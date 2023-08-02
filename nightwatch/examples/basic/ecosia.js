describe('Ecosia.org Demo', function() {
  before(browser => browser.navigateTo('https://www.ecosia.org/'));
  this.retries(2);
  this.suiteRetries(2);

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .waitForElementVisible('button[data-test-id="cookie-notice-accept"]')
      .assert.visible('button[data-test-id="cookie-notice-accept"]')
      .click('button[data-test-id="cookie-notice-accept"]')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch js')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.textContains('.layout__content', 'Nightwatch.js');
  });

  after(browser => browser.end());
});
