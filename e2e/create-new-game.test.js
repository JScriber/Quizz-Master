module.exports = {
  "1) L’utilisateur souhaite créer une nouvelle partie. Ses saisies sont correctes. ": function(
    browser
  ) {
    browser
      .url("http://localhost:8080/game/start")
      .waitForElementVisible("#containerNewGame", 1000)
      // Given.
      .setValue("input[name=name]", "jean")
      .setValue("input[name=difficulty]", "2")
      .setValue("input[name=categorie]", "PHP")
      .pause(4000)
      // When.
      .click("input[type=submit]")
      .pause(4000)
      // Then.
      .assert.urlEquals(
        "http://localhost:8080/game/start?name=jean&difficulty=2&categorie=PHP"
      )
      .pause(4000)
      .end();
  },
  "2) L’utilisateur souhaite créer une nouvelle partie. Ses saisies sont cependant incorrectes. ": function(
    browser
  ) {
    browser
      .url("http://localhost:8080/game/start")
      .waitForElementVisible("#containerNewGame", 1000)
      // Given.
      .setValue("input[name=name]", "")
      .setValue("input[name=difficulty]", "2")
      .setValue("input[name=categorie]", "PHP")
      .pause(4000)
      // When.
      .click("input[type=submit]")
      .pause(4000)
      // Then.
      .assert.urlEquals("http://localhost:8080/game/start")
      .pause(4000)
      .end();
  }
};
