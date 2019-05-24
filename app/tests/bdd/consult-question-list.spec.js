import { unit, given, when, then } from 'jest-bdd';
import { QuestionManager } from '../../services/question-manager';

// Creation du scope.
let scope = {};

/** L’utilisateur est dans le menu il clique sur “éditeur de question” */
unit(
  given(`Il y a deux questions présentent en base de données, “De quel côté 
  agit le PHP ? ” et “A quoi sert le CSS dans une application web ?”`, 
  () => {
    scope.manager = QuestionManager.getInstance();
  },
    when(`L’utilisateur clique sur éditeur de questions dans le menu`, 
    async () => {
      scope.questions = await scope.manager.get();
    },
      then(`Il est redirigé vers la liste des questions, “De quel côté agit 
      le PHP ? ” et “ A quoi sert le CSS dans une application web ?”, il a à 
      disposition les boutons “editer”, “supprimer” pour chaque entrée du 
      tableau. Également un bouton “Créer une question” se situe en haut de 
      la page`, 
      () => {
        expect(scope.questions).toBeDefined();
        expect(scope.questions.length).toBeGreaterThan(1);

        expect(scope.questions[0].title).toEqual('De quel côté agit le PHP ?');
        expect(scope.questions[1].title).toEqual('A quoi sert le CSS dans une application web ?');

        scope = {};
      })
    )
  )
);

