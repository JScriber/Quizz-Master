import {unit, given, when, then } from 'jest-bdd';
import { QuestionManager } from '../../services/question-manager';

let scope = {};

/** L’utilisateur fournit des informations correctes lors de l’édition de la question. */
unit(
  
  given(`Étant donné que je souhaite répondre un quizz, j’ai besoin de
  répondre à des questions, cependant, il est possible que je souhaite
  modifier ces question`, async () => {

    scope.manager = QuestionManager.getInstance();

    scope.question = await scope.manager.save({
      title:'De quel côté agit le PHP ?',
      goodAnswer: 'Côté serveur',
      badAnswer1: 'Côté client',
      badAnswer2: 'Côté jardin',
      badAnswer3: 'PHP quoi ?',
      hint: 'Ce n’est pas côté client !',
      category: 0,
      difficulty: 1
    });
  },
    when('L’utilisateur modifie plusieurs des informations', async () => {
      scope.question.object = {
        title:'De quel côté agit le JS classique ?',
        goodAnswer: 'Côté client',
        badAnswer1: 'Côté serveur',
        badAnswer2: 'Côté base de données',
        badAnswer3: 'Côté papier',
        hint: 'Penser aux vues',
        category: 'JS',
        difficulty: 3
      };

      await scope.manager.save(scope.question.object);
    },
      then(`La question est modifié et l’utilisateur est renvoyé sur 
      la liste des questions avec sa question`, () => {

        expect(scope.question.object).toEqual(scope.manager.get(scope.question.object.id))

        scope = {};
      })
    )
  ),
);


/**  L’utilisateur fournit des informations incorrectes lors de l’édition de la question. */
unit(
  given(`Étant donné que je souhaite répondre un quizz, j’ai besoin de répondre 
  à des questions, cependant, il est possible que je souhaite modifier 
  ces questions et que je fasse des erreurs lors de la modification.`, async () => {

    scope.manager = QuestionManager.getInstance();

    scope.question = await scope.manager.save({
      title:'De quel côté agit le PHP ?',
      goodAnswer: 'Côté serveur',
      badAnswer1: 'Côté client',
      badAnswer2: 'Côté jardin',
      badAnswer3: 'PHP quoi ?',
      hint: 'Ce n’est pas côté client !',
      category: 0,
      difficulty: 1
    });
  },
    when('L’utilisateur modifie une valeur avec une chaine vide', async () => {
      scope.question.object={
        goodAnswer: ''
      };

      scope.response = await scope.manager.save(scope.question.object);
    },
      then(`ester sur la page, et lui indiquer les raisons pour lesquelles 
      son action est invalide. Le message : “Le champs ne peut pas être 
      vide.” s’affiche pour avertir l’utilisateur`, () => {

        expect(scope.response.errors).toBeDefined();

        scope = {};
      })
    )
  ),
);

/** L’utilisateur multiplie les réponses. Sa bonne réponse duplique une mauvaise réponse. */

unit(
  
  given(`Étant donné que l’utilisateur peut modifier une question, 
  il est possible que les réponses viennent se multiplier lors de 
  l’édition.`, async () => {
    scope.manager = QuestionManager.getInstance();

    scope.question = await scope.manager.save({
      title:'De quel côté agit le PHP ?',
      goodAnswer: 'Côté serveur',
      badAnswer1: 'Côté client',
      badAnswer2: 'Côté jardin',
      badAnswer3: 'PHP quoi ?',
      hint: 'Ce n’est pas côté client !',
      category: 0,
      difficulty: 1
    });
  },
    when(`L’utilisateur change le contenu de la bonne 
    réponse avec le meme contenu d'une mauvaise réponse`, async () => {
      scope.question.object.goodAnswer = 'Côté client';
      scope.response = await scope.manager.save(scope.question.object);
    },
      then(`Vu que la bonne réponse duplique une mauvaise réponse, 
      rester sur la page, et lui indiquer les raisons pour lesquelles 
      son action est invalide. Le message : “Les réponses se dupliquent.” 
      s’affiche pour avertir l’utilisateur`, () => {

        expect(scope.response.errors).toBeDefined();

        scope = {};
      })
    )
  ),
);

/** L’utilisateur multiplie les réponses. Ses mauvaises réponses se multiplient mutuellement */
unit(
  
  given(` Étant donné que l’utilisateur peut modifier une question, il est 
  possible que les réponses viennent se multiplier lors de l’édition. 
  Données utilisées.`, async () => {
    scope.manager = QuestionManager.getInstance();

    scope.question = await scope.manager.save({
      title:'De quel côté agit le PHP ?',
      goodAnswer: 'Côté serveur',
      badAnswer1: 'Côté client',
      badAnswer2: 'Côté jardin',
      badAnswer3: 'PHP quoi ?',
      hint: 'Ce n’est pas côté client !',
      category: 0,
      difficulty: 1
    });
  },
    when(`L’utilisateur change le contenu de la deuxième mauvaise réponse 
    avec le meme label qu'une autre mauvaise réponse`, async () => {

      scope.response = await scope.manager.save(scope.question.object);
    },
      then(`Vu que la mauvaise réponse duplique une autre mauvaise réponse,
       rester sur la page, et lui indiquer les raisons pour lesquelles son 
       action est invalide. Le message : “Les réponses se dupliquent.” 
       s’affiche pour avertir l’utilisateur`, () => {

        expect(scope.response.errors).toBeDefined();

        scope = {};
      })
    )
  ),
);
