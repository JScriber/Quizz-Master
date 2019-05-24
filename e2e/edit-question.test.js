module.exports = {
  "1) Informations correctes lors de l’édition de la question": function(
    browser
  ) {
    browser
      .url(`${browser.launchUrl}/question/edit/0`)

      //Given.
      .waitForElementVisible("body")
      .pause(4000)
      .setValue("input[name=title]", "De quel côté agit le JS classique ?")
      .setValue("input[name=goodAnswer]", "Côté client")
      .setValue("input[name=badAnswer1]", "Côté serveur")
      .setValue("input[name=badAnswer2]", "Côté base de données")
      .setValue("input[name=badAnswer3]", "Côté papier")
      .setValue("input[name=hint]", "Penser aux vues.")
      // When.
      .pause(4000)
      .useXpath() // Every selector now must be xpath.
      .click("//button[text()='Valider']")

      // Then.
      .assert.urlEquals(`${browser.launchUrl}/question`)
      .pause(4000)
      .end();
  },

  "2) Informations erronées lors de la modification": function(browser) {
    browser
      .url(`${browser.launchUrl}/question/edit/0`)

      //Given.
      .useCss()
      .waitForElementVisible("body")
      .pause(4000)
      .setValue("input[name=title]", "")
      // When.
      .useXpath() // Every selector now must be xpath.
      .pause(4000)
      .click("//button[text()='Valider']")

      // Then.
      .assert.urlEquals(`${browser.launchUrl}/question/0`)
      .pause(4000)
      .end();
  },
  "3) Multiplication de réponses (bonne et mauvaise)": function(browser) {
    browser
      .url(`${browser.launchUrl}/question/edit/0`)

      //Given.
      .useCss()
      .waitForElementVisible("body")
      .pause(4000)
      .setValue("input[name=goodAnswer]", "Côté jardin")
      // When.
      .useXpath() // Every selector now must be xpath.
      .pause(4000)
      .click("//button[text()='Valider']")

      // Then.
      .waitForElementVisible("#errors")
      .pause(4000)
      .end();
  },
  "4) Multiplication de mauvaises réponses": function(browser) {
    browser
      .url(`${browser.launchUrl}/question/edit/0`)

      //Given.
      .useCss()
      .waitForElementVisible("body")
      .pause(4000)
      .setValue("input[name=badAnswer2]", "Côté client")
      // When.
      .useXpath() // Every selector now must be xpath.
      .pause(4000)
      .click("//button[text()='Valider']")

      // Then.
      .waitForElementVisible("#errors")
      .pause(4000)
      .end();
  }
};
