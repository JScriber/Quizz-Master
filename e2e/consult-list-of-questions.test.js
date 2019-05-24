module.exports = {
  "1) L’utilisateur est dans le menu il clique sur “éditeur de question” ": function(
    browser
  ) {
    browser
      .url(`${browser.launchUrl}/menu`)
      // Given.
      .waitForElementVisible("body")
      // When.
      .useXpath() // Every selector now must be xpath.
      .pause(4000)
      .click("//a[text()='Editer les questions']")
      // Then.
      .assert.urlEquals(`${browser.launchUrl}/question`)
      .pause(4000)
      .waitForElementVisible("//td[text()='De quel côté agit le PHP ?']")
      .waitForElementVisible(
        "//td[text()='Le monde des affaires est-il instable ?']"
      )
      .pause(4000)
      .end();
  }
};
