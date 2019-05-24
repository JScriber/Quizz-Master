module.exports = {
  "1) L’utilisateur entre toutes les données nécessaires à la création de la question": function(
    browser
  ) {
    browser
      .url(`${browser.launchUrl}/question/new`)
      // Given.
      .waitForElementVisible("body")
      .setValue("input[name=title]", "De quel côté agit le PHP ?")
      .setValue("input[name=goodAnswer]", "Côté serveur")
      .setValue("input[name=badAnswer1]", "Côté client")
      .setValue("input[name=badAnswer2]", "Côté jardin")
      .setValue("input[name=badAnswer3]", "PHP quoi ?")
      .setValue("input[name=hint]", "Ce n’est pas côté client !")

      // When.
      .useXpath() // Every selector now must be xpath.
      .pause(4000)
      .click("//button[text()='Valider']")
      .pause(4000)

      // Then.
      .assert.urlEquals(`${browser.launchUrl}/question`)

      .end();
  },
  "2) L’utilisateur n’entre pas toutes les données.": function(browser) {
    browser
      .url(`${browser.launchUrl}/question/new`)
      // Given.
      .useCss()
      .waitForElementVisible("body")
      .setValue("input[name=title]", "De quel côté agit le PHP ?")
      .setValue("input[name=goodAnswer]", "Côté serveur")
      .setValue("input[name=badAnswer1]", "")
      .setValue("input[name=badAnswer2]", "")
      .setValue("input[name=badAnswer3]", "")
      .setValue("input[name=hint]", "Ce n’est pas côté client !")

      // When.
      .useXpath() // Every selector now must be xpath.
      .pause(4000)
      .click("//button[text()='Valider']")
      .pause(4000)

      // Then.
      .assert.urlEquals(`${browser.launchUrl}/question/new`)

      .end();
  },
  "3) L’utilisateur entre des données identiques dans plusieurs champ de réponse": function(
    browser
  ) {
    browser
      .url(`${browser.launchUrl}/question/new`)
      // Given.
      .useCss()
      .waitForElementVisible("body")
      .setValue("input[name=title]", "De quel côté agit le PHP ?")
      .setValue("input[name=goodAnswer]", "Côté serveur")
      .setValue("input[name=badAnswer1]", "Côté serveur")
      .setValue("input[name=badAnswer2]", "Côté jardin")
      .setValue("input[name=badAnswer3]", "PHP quoi ?")
      .setValue("input[name=hint]", "Ce n’est pas côté client !")

      // When.
      .useXpath() // Every selector now must be xpath.
      .pause(4000)
      .click("//button[text()='Valider']")
      .pause(4000)

      // Then.
      .useCss()
      .waitForElementVisible("#errors")

      .end();
  }
};
