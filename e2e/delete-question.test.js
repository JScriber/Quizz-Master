module.exports = {
  "1) L’utilisateur souhaite supprimer une question. ": function(browser) {
    browser
      .url(`${browser.launchUrl}/question`)
      // Given.
      .waitForElementVisible("body")
      .useXpath() // Every selector now must be xpath.
      .waitForElementVisible("//td[text()='Est-ce que vous aimez le PHP ?']")
      .frameParent()
      // When.
      .click("//button[text()='Delete']")
      .pause(2000)
      // Then.
      .assert.urlEquals("http://localhost:8080/POST")

      
      // .expect.element("//td[text()='Est-ce que vous aimez le PHP ?']")
      // .to.be.not.visible
      .end();
  }
};
