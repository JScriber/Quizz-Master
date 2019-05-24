// module.exports = {
//   "step one: navigate to google": function(browser) {
//     browser
//       .url("https://www.google.com")
//       .waitForElementVisible("body", 1000)
//       .setValue("input[type=text]", "nightwatch")
//       .waitForElementVisible("input[name=btnK]", 1000);
//   },

//   "step two: click input": function(browser) {
//     browser
//       .click("input[name=btnK]")
//       .pause(1000)
//       .assert.containsText("#main", "Night Watch")
//       .end();
//   }
// };
this.createNewGame = function(browser) {
  browser
    .url("http://localhost:8080/game/start")
    // .waitForElementVisible("body", 1000)
    // .setValue('input[type=text]', 'nightwatch')
    // .waitForElementVisible('input[name=btnK]', 1000)
    // .click('input[name=btnK]')
    .pause(10000)
    // .assert.containsText('#main', 'The Night Watch')
    .end();
};
