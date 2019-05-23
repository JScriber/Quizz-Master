import { unit, given, when, then } from 'jest-bdd';

import Question from '../../entities/question.js';
import QuestionManager from '../../services/question-manager.js';

// Creation du scope.
const scope = {};

/** L’utilisateur souhaite supprimer une question. */
unit(
  given(`Étant donné que je suis sur la page de consultation des questions,
  j’ai accès à un bouton de suppression pour chaque entréeprésente dans le tableau.
  L’entrée “De quel côté agit le PHP ?” est présente dans la liste.`, () => {
    scope.manager = QuestionManager.instance();

    // Créé la question.
    const question = new Question();
    question.title = 'De quel côté agit le PHP ?';

    // Persiste la question.
    scope.question = scope.manager.add(question);
  },
    when('L’utilisateur clique sur le bouton de suppression de l’entrée de la question : “De quel côté agit le PHP ?”', () => {

      // Suppression de la question.
      scope.manager.delete(scope.question.id);
    },
      then(`Rafraichir la page listant toutes les questions.
      La question supprimée n’est pas censée apparaître, ainsi nous ne devrions pas retrouver : “De quel côté agit le PHP ?”`, () => {
        
        expect(scope.manager.getAll().find(e => e.title === scope.question.title)).toBeUndefined();
      })
    )
  )
);
