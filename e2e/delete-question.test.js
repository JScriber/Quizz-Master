module.exports = {

  /**
   * Accès à un bouton de suppression pour chaque entrée présente dans le tableau.
   * L’entrée “De quel côté agit le PHP ?” est présente dans la liste.
   */
  'GIVEN' : function (browser) {
    browser.url(`${browser.launchUrl}/question`)
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
