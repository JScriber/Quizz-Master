module.exports = {

  /**
   * Accès à un bouton de suppression pour chaque entrée présente dans le tableau.
   * L’entrée “De quel côté agit le PHP ?” est présente dans la liste.
   */
  'delete question' : function (browser) {
    browser.url(`${browser.launchUrl}/question`)
      // Given.
      .waitForElementVisible('body')
      .useXpath() // Every selector now must be xpath.
      .waitForElementVisible('//tr[text()=\'De quel côté agit le PHP ?\']')
      .frame('td')
      .useCss()
      // When.
      .click('button.delete')
      .pause(2000)
      .useXpath()
      // Then.
      .expect.element('//tr[text()=\'De quel côté agit le PHP ?\']').to.be.not.visible

      .end();
  }
};
