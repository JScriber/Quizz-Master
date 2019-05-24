import { unit, given, when, then } from 'jest-bdd';
import { QuestionManager } from '../../services/question-manager';

// Creation du scope.
let scope = {};

/** L’utilisateur entre toutes les données nécessaires à la création de la question. */
unit(
  given(`L’utilisateur créé une question à partir de la liste des questions en entrant les champs suivants : 
  - Question : “De quel côté agit le PHP ?”
  - Bonne réponse :”Côté serveur”
  - Mauvaise réponse 1 : “ Côté client”
  - Mauvaise réponse 2 :”Côté jardin”
  - Mauvaise réponse 3 :”PHP quoi ?”
  - Indice : “Ce n’est pas côté client !”
  - Catégorie: “PHP”
  - Difficulté: “1”
  `, () => {
    scope.manager = QuestionManager.getInstance();
  },
    when('L’utilisateur clique sur le bouton de confirmation.', async () => {

      scope.title = 'De quel côté agit le PHP ?';

      scope.response = await scope.manager.save({
        title: scope.title,
        goodAnswer: 'Côté serveur',
        badAnswer1: 'Côté client',
        badAnswer2: 'Côté jardin',
        badAnswer3: 'PHP quoi ?',
        hint: 'Ce n’est pas côté client !',
        category: 0,
        difficulty: 1
      });
    },
      then(`La question est créée.`, () => {

        // A une réponse.
        expect(scope.response).toBeTruthy();

        // Aucune erreur n'est relevée.
        expect(scope.response.success).toBeTruthy();

        // L'element a bien été inséré en base.
        expect(scope.manager.get().find(e => e.title === scope.title)).toBeDefined();

        // Reinitialisation du scope.
        scope = {};
      })
    )
  )
);


/** L’utilisateur n’entre pas toutes les données. */
unit(
  given(`L’utilisateur créé une question à partir de la liste des questions en rentrant les champs suivants : 
  - Question : “De quel côté agit le PHP ?”
  - Bonne réponse :”Côté serveur”
  - Mauvaise réponse 1 : “”
  - Mauvaise réponse 2 :””
  - Mauvaise réponse 3 :””
  - Indice : “Ce n’est pas côté client !”
  - Catégorie: “PHP”
  - Difficulté: “1”
  `, () => {
    scope.manager = QuestionManager.getInstance();
  },
    when('L’utilisateur clique sur le bouton de confirmation.', async () => {

      scope.title = 'De quel côté agit le PHP ?';

      scope.response = await scope.manager.save({
        title: scope.title,
        goodAnswer: 'Côté serveur',
        badAnswer1: '',
        badAnswer2: '',
        badAnswer3: '',
        hint: 'Ce n’est pas côté client !',
        category: 0,
        difficulty: 1
      });
    },
      then(`L’utilisateur reste sur la même page, un message lui indique qu’il doit remplir les champs:
      “Vous devez avoir du contenu pour les champs Mauvaise réponse 1 et  Mauvaise réponse 2 et  Mauvaise réponse 3 ”.`, () => {

        // Des erreurs ont été relevées.
        expect(scope.response.success).toBeTruthy();

        // Doit contenir un message.
        expect(scope.response.errors[0]).toBe(
          'Vous devez renseigner tous les champs.'
        );

        // L'element n'a pas été créé par erreur.
        expect(scope.manager.getAll().find(e => e.title === scope.title)).toBeUndefined();

        // Reinitialisation du scope.
        scope = {};
      })
    )
  )
);


/** L’utilisateur entre des données identiques dans plusieurs champs de réponse. */
unit(
  given(`L’utilisateur créé une question à partir de la liste des questions en rentrant les champs suivants : 
  - Question : “De quel côté agit le PHP ?”
  - Bonne réponse :”Côté serveur”
  - Mauvaise réponse 1 : “Côté serveur”
  - Mauvaise réponse 2 :”Côté jardin”
  - Mauvaise réponse 3 :”PHP quoi ?”
  - Indice : “Ce n’est pas côté client !”
  - Catégorie: “PHP”
  - Difficulté: “1”
  `, () => {
    scope.manager = QuestionManager.getInstance();
  },
    when('L’utilisateur clique sur le bouton de confirmation.', async () => {

      scope.title = 'De quel côté agit le PHP ?';

      scope.response = await scope.manager.save({
        title: scope.title,
        goodAnswer: 'Côté serveur',
        badAnswers: [
          'Côté serveur',
          'Côté jardin',
          'PHP quoi ?'
        ],
        hint: 'Ce n’est pas côté client !',
        category: 'PHP',
        difficulty: 1
      });
    },
      then(`L’utilisateur reste sur la même page un message lui indique qu’il doit remplir les champs de réponse avec du contenu différent:
      “Vous devez avoir du contenu différent pour les champs Bonne réponse et Mauvaise réponse 1”`, () => {

        // Des erreurs ont été relevées.
        expect(scope.response.errors).toBeDefined();

        // Doit contenir un message.
        expect(scope.response.errors[0]).toBe(
          'Vous devez avoir du contenu différent pour les champs Bonne réponse et Mauvaise réponse 1'
        );

        // L'element n'a pas été créé par erreur.
        expect(scope.manager.getAll().find(e => e.title === scope.title)).toBeUndefined();

        // Reinitialisation du scope.
        scope = {};
      })
    )
  )
);
