import { unit, given, when, then } from 'jest-bdd';
import { QuestionManager } from '../../services/question-manager';

// Creation du scope.
const scope = {};

/** L’utilisateur souhaite supprimer une question. */
unit(
  given(`Étant donné que je suis sur la page de consultation des questions,
  j’ai accès à un bouton de suppression pour chaque entréeprésente dans le tableau.
  L’entrée “De quel côté agit le PHP ?” est présente dans la liste.`, async () => {
    scope.manager = QuestionManager.getInstance();

    scope.response = await scope.manager.save({
      title: 'De quel côté agit le PHP ?',
      goodAnswer: 'Côté serveur',
      badAnswer1: 'Côté client',
      badAnswer2: 'Côté jardin',
      badAnswer3: 'PHP quoi ?',
      hint: 'Ce n’est pas côté client !',
      category: 0,
      difficulty: 1
    });
  },
    when('L’utilisateur clique sur le bouton de suppression de l’entrée de la question : “De quel côté agit le PHP ?”', async () => {

      const question = (await scope.manager.get()).find(q => q.title === 'De quel côté agit le PHP ?');

      // Suppression de la question.
      scope.manager.deleteOne(question.id);
    },
      then(`Rafraichir la page listant toutes les questions.
      La question supprimée n’est pas censée apparaître, ainsi nous ne devrions pas retrouver : “De quel côté agit le PHP ?”`, async () => {

        expect((await scope.manager.get()).find(q => q.title === 'De quel côté agit le PHP ?')).toBeUndefined();
      })
    )
  )
);
