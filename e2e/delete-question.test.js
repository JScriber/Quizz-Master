module.exports = {
  "1) L’utilisateur souhaite supprimer une question. ": function(browser) {
    browser
      .url(`${browser.launchUrl}/question`)
      // Given.
      .waitForElementVisible("body")
      .useXpath() // Every selector now must be xpath.
      .waitForElementVisible("//td[text()='De quel côté agit le PHP ?']")
      .frameParent()
      // When.
      .pause(4000)
      .click("//button[text()='Delete']")
      .pause(4000)
      // Then.
      .assert.urlEquals("http://localhost:8080/question")
      .waitForElementNotPresent("//td[text()='De quel côté agit le PHP ?']")
      .pause(4000)
      .end();
  }
};
