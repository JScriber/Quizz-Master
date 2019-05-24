module.exports = {

  /**
    Étant donné que je souhaite répondre un quizz, j’ai besoin de répondre à des questions, cependant, il est possible que je souhaite modifier ces questions. Données utilisées : 
      - Question : “De quel côté agit le PHP ?”
      - Bonne réponse :”Côté serveur”
      - Mauvaise réponse 1 : “ Côté client”
      - Mauvaise réponse 2 :”Côté jardin”
      - Mauvaise réponse 3 :”PHP quoi ?”
      - Indice : “Ce n’est pas côté client !”
      - Catégorie: “PHP”
      - Difficulté: “1”
      - Les catégories disponibles sont les suivantes: PHP, JS, et WebMarketing.
      - Les difficultés disponibles sont les suivantes: 1, 2, et 3.
   */
  'Correct update of a question' : function (browser) {
    browser.url(`${browser.launchUrl}/question/edit/1`)

      /*
        When. L’utilisateur modifie plusieurs des informations suivantes : 
          Intitulé. Changé en “De quel côté agit le JS classique ?”;
          Bonne réponse. Changé en “Côté client”;
          Mauvaises réponses. Changé en : 
          “Côté serveur” ;
          “Côté base de données” ;
          “Côté papier”.
          Indice. Changé en “Penser aux vues.” ;
          Catégorie. Changé en “JS” ;
          Difficulté. Changé à 3.
        et qu’il clique sur le bouton de confirmation.
      */
      .waitForElementVisible('body')
      .setValue('input[name=title]', "De quel côté agit le JS classique ?")
      .setValue('input[name=goodAnswer]', "Côté client")
      .setValue('input[name=badAnswer1]', "Côté serveur")
      .setValue('input[name=badAnswer2]', "Côté base de données")
      .setValue('input[name=badAnswer3]', "Côté papier")
      .setValue('input[name=hint]', "Penser aux vues.")
      .click('select[id="category"] option[value="JS"]')
      .click('select[id="difficulty"] option[value="3"]')

      // When.
      .click('button.submit')
      .pause(1000)

      // Then.
      .assert.urlEquals(`${browser.launchUrl}/question`)

      .end();
  }
};
