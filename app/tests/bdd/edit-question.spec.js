import {unit, given, when, then } from 'jest-bdd';

import Question from '../../entities/question.js';
import QuestionManager from '../../services/question-manager.js';

let scope = {};

unit(
  /** L’utilisateur souhaite modifier une question */
  given(`Étant donné que je souhaite répondre un quizz, j’ai besoin de
  répondre à des questions, cependant, il est possible que je souhaite
  modifier ces question`, () => {
    scope.manager = QuestionManager.instance(); // singleton

    const question = new Question();

    question.title = 'De quel côté agit le PHP ?';
    question.goodAnswer = new Answer('Côté serveur');
    question.answers = [
      question.goodAnswer,
      new Answer('Côté client'),
      new Answer('Côté jardin'),
      new Answer('PHP quoi ?')
    ];
    question.hint='Ce n’est pas côté client !';
    question.category='PHP';
    question.difficulty=1;

    scope.question = scope.manager.add(question);

  },
    when('L’utilisateur modifie plusieurs des informations', () => {
    scope.question.title="De quel côté agit le JS classique ?";
    scope.question.goodAnswer="Côté client";
    scope.question.answers = [
      scope.question.goodAnswer,
      new Answer("Côté serveur"),
      new Answer("Côté base de données"),
      new Answer("Côté papier"),
    ];
    scope.question.hint="Penser aux vues.";
    scope.question.category="JS";
    scope.question.difficulty=3;

    scope.manager.update(scope.question);

    },
      then(`La question est modifié et l’utilisateur est renvoyé sur 
      la liste des questions avec sa question`, () => {
        let question = scope.manager.get(scope.question.id);
        expect(question).toEqual(scope.question);
        scope = {};
      })
    )
  ),
);

unit(
  /** L’utilisateur à renseigner une mauvaise information lors de la modification */
  given(`Étant donné que je souhaite répondre un quizz, j’ai besoin de répondre 
  à des questions, cependant, il est possible que je souhaite modifier 
  ces questions et que je fasse des erreurs lors de la modification.`, () => {
    scope.manager = QuestionManager.instance(); // singleton

    const question = new Question();

    question.title = 'De quel côté agit le PHP ?';
    question.goodAnswer = new Answer('Côté serveur');
    question.answers = [
      question.goodAnswer,
      new Answer('Côté client'),
      new Answer('Côté jardin'),
      new Answer('PHP quoi ?')
    ];
    question.hint='Ce n’est pas côté client !';
    question.category='PHP';
    question.difficulty=1;

    scope.question = scope.manager.add(question);

  },
    when('L’utilisateur modifie plusieurs des informations', () => {
    scope.question.title="De quel côté agit le JS classique ?";
    scope.question.goodAnswer="Côté client";
    scope.question.answers = [
      scope.question.goodAnswer,
      new Answer("Côté serveur"),
      new Answer("Côté base de données"),
      new Answer("Côté papier"),
    ];
    scope.question.hint="Penser aux vues.";
    scope.question.category="JS";
    scope.question.difficulty=3;

    scope.manager.update(scope.question);

    },
      then(`La question est modifié et l’utilisateur est renvoyé sur 
      la liste des questions avec sa question`, () => {
        let question = scope.manager.get(scope.question.id);
        expect(question).toEqual(scope.question);
        scope = {};
      })
    )
  ),
);