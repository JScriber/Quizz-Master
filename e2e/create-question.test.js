module.exports = {

  /**
   * L’utilisateur créé une question à partir de la liste des questions en entrant les champs suivants : 
      - Question : “De quel côté agit le PHP ?”
      - Bonne réponse :”Côté serveur”
      - Mauvaise réponse 1 : “Côté client”
      - Mauvaise réponse 2 :”Côté jardin”
      - Mauvaise réponse 3 :”PHP quoi ?”
      - Indice : “Ce n’est pas côté client !”
      - Catégorie: “PHP”
      - Difficulté: “1”
   */
  'Create question with all fields' : function (browser) {
    browser.url(`${browser.launchUrl}/question/create`)
      // Given.
      .waitForElementVisible('body')
      .setValue('input[name=title]', "De quel côté agit le PHP ?")
      .setValue('input[name=goodAnswer]', "Côté serveur")
      .setValue('input[name=badAnswer1]', "Côté client")
      .setValue('input[name=badAnswer2]', "Côté jardin")
      .setValue('input[name=badAnswer3]', "PHP quoi ?")
      .setValue('input[name=hint]', "Ce n’est pas côté client !")
      .click('select[id="category"] option[value="PHP"]')
      .click('select[id="difficulty"] option[value="1"]')

      // When.
      .click('button.submit')
      .pause(1000)

      // Then.
      .assert.urlEquals(`${browser.launchUrl}/question`)

      .end();
  },

  /**
   * L’utilisateur créé une question à partir de la liste des questions en rentrant les champs suivants : 
      - Question : “De quel côté agit le PHP ?”
      - Bonne réponse :”Côté serveur”
      - Mauvaise réponse 1 : “”
      - Mauvaise réponse 2 :””
      - Mauvaise réponse 3 :””
      - Indice : “Ce n’est pas côté client !”
      - Catégorie: “PHP”
      - Difficulté: “1”
   */
  'Create question with missing fields' : function (browser) {
    browser.url(`${browser.launchUrl}/question/create`)
      // Given.
      .waitForElementVisible('body')
      .setValue('input[name=title]', "De quel côté agit le PHP ?")
      .setValue('input[name=goodAnswer]', "Côté serveur")
      .setValue('input[name=badAnswer1]', "")
      .setValue('input[name=badAnswer2]', "")
      .setValue('input[name=badAnswer3]', "")
      .setValue('input[name=hint]', "Ce n’est pas côté client !")
      .click('select[id="category"] option[value="PHP"]')
      .click('select[id="difficulty"] option[value="1"]')

      // When.
      .click('button.submit')
      .pause(1000)

      // Then.
      .useXpath()
      .waitForElementVisible('//#errors/li[text()=\'Vous devez avoir du contenu pour les champs Mauvaise réponse 1 et  Mauvaise réponse 2 et  Mauvaise réponse 3\']')

      .end();
  },

  /**
   * L’utilisateur créé une question à partir de la liste des questions en rentrant les champs suivants : 
      - Question : “De quel côté agit le PHP ?”
      - Bonne réponse :”Côté serveur”
      - Mauvaise réponse 1 : “Côté serveur”
      - Mauvaise réponse 2 :”Côté jardin”
      - Mauvaise réponse 3 :”PHP quoi ?”
      - Indice : “Ce n’est pas côté client !”
      - Catégorie: “PHP”
      - Difficulté: “1”
   */
  'Create question with duplicated fields' : function (browser) {
    browser.url(`${browser.launchUrl}/question/create`)
      // Given.
      .waitForElementVisible('body')
      .setValue('input[name=title]', "De quel côté agit le PHP ?")
      .setValue('input[name=goodAnswer]', "Côté serveur")
      .setValue('input[name=badAnswer1]', "Côté serveur")
      .setValue('input[name=badAnswer2]', "Côté jardin")
      .setValue('input[name=badAnswer3]', "PHP quoi ?")
      .setValue('input[name=hint]', "Ce n’est pas côté client !")
      .click('select[id="category"] option[value="PHP"]')
      .click('select[id="difficulty"] option[value="1"]')

      // When.
      .click('button.submit')
      .pause(1000)

      // Then.
      .useXpath()
      .waitForElementVisible('//#errors/li[text()=\'Vous devez avoir du contenu différent pour les champs Bonne réponse et Mauvaise réponse 1\']')

      .end();
  }
};
