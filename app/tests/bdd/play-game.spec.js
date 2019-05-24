// import { unit, given, when, then } from 'jest-bdd';
// import { expect } from 'jest';

// import QuestionManager from '../../services/question-manager.js';

// // Creation du scope.
// let scope = {};

// /** L’utilisateur répond avec la bonne réponse */
// unit(
//   given(`L’utilisateur est dans la partie, une question s’affiche.`, 
//   () => {

//     let hardness = 1;
//     let category = 'PHP';
//     let pseudo = 'Jeremy';

//     scope.game = new Game(pseudo, category, hardness);

//     scope.scoreBefore = scope.game.score;

//     scope.question = scope.game.getQuestion()

//     scope.goodAnswer = scope.question.goodAnswer;
//   },
//     when(` celui-ci répond avec la bonne réponse`, 
//     () => {

//         let result = scope.question.respond(scope.goodAnswer);
//         scope.game.addResult(result);
//         scope.scoreAfter = scope.game.score;
//     },
//       then(`Étant donné que la réponse est bonne, l’utilisateur est 
//       potentiellement crédité d’un point de bonus. Le résultat vient 
//       s’ajouter au score final du joueur. Ensuite s'affiche la page de 
//       la question suivante. S’il n’y a plus de question, afficher le 
//       score du joueur.`, 
//       () => {
//         expect(scope.scoreBefore).toBeLessThan(scope.scoreAfter);
//         scope = {};
//       })
//     )
//   )
// );

// /** L’utilisateur répond avec la mauvaise réponse */
// unit(
//     given(`L’utilisateur est dans la partie, une question s’affiche.`, 
//     () => {

//         let hardness = 1;
//         let category = 'PHP';
//         let pseudo = 'Jeremy';

//         scope.game = new Game(pseudo, category, hardness);

//         scope.scoreBefore = scope.game.score;

//         scope.question = scope.game.getQuestion()

//         scope.badAnswer = scope.question.badAnswer[0];
      
//     },
//       when(`celui-ci répond avec la mauvaise réponse. `, 
//       () => {
//         let result = scope.question.respond(scope.badAnswer);
//         scope.game.addResult(result);
//         scope.scoreAfter = scope.game.score;
//       },
//         then(` Étant donné que la réponse est mauvaise, l’utilisateur 
//         n’est pas crédité d’un point de bonus. Le résultat vient s’ajouter 
//         au score final du joueur. Ensuite s'affiche la page de la question 
//         suivante. S’il n’y a plus de question, afficher le score du joueur.
//         `, 
//         () => {
//             expect(scope.scoreAfter).toBeLessThan(scope.scoreBefore);
//             scope = {};
//         })
//       )
//     )
//   );

// /** L’utilisateur demande à connaître l’indice de la question */
// unit(
//     given(`L’utilisateur est dans la partie, une question s’affiche.`, 
//     () => {
      
//         let hardness = 1;
//         let category = 'PHP';
//         let pseudo = 'Jeremy';

//         scope.game = new Game(pseudo, category, hardness);
//         scope.question = scope.game.getQuestion();
//         scope.bonusBefore = scope.game.bonus;
        
//     },
//       when(` L’utilisateur clique sur le bouton indice, l’indice est 
//       disponible que si l’utilisateur à des points de bonus dans son 
//       compteur, et que celui-ci n’a pas déjà été révélé `, 
//       () => {

//         scope.hint = scope.question.getHint();
//         scope.game.useHint(scope.hint);
//         scope.bonusAfter = scope.game.bonus;
  
//       },
//         then(`L’indice est révélé à l’utilisateur, il peut donc en prendre 
//         connaissance. L’indice reste alors affiché à l’écran jusqu’au 
//         changement de question. Et l’utilisateur perd un point de bonus.
//         `, 
//         () => {

//             expect(scope.bonusBefore).GreaterThanOrEqual(scope.bonusAfter);
  
//           scope = {};
//         })
//       )
//     )
//   );

// /** L’utilisateur passe à une autre question. */
// unit(
//     given(`L’utilisateur est dans la partie, une question s’affiche.`, 
//     () => {

//         let hardness = 1;
//         let category = 'PHP';
//         let pseudo = 'Jeremy';

//         scope.game = new Game(pseudo, category, hardness);
//         scope.bonusBefore = scope.game.bonus;        
//         scope.question = scope.game.getQuestion();
        
//     },
//       when(`il clique sur le bouton “passer” pour changer de question. 
//       Si son nombre de points bonus le lui permet. Une nouvelle question 
//       s’affiche à l’écran `, 
//       () => {
//         scope.question = scope.game.getQuestion();
//         scope.bonusAfter = scope.game.bonus;
        
//       },
//         then(`La question précédente est passé, et une nouvelle question 
//         s’affiche. L’utilisateur perd un point de bonus.
//         `, 
//         () => {
//             expect(scope.bonusBefore).GreaterThanOrEqual(scope.bonusAfter);           
  
//           scope = {};
//         })
//       )
//     )
//   );

// /** L’utilisateur demande à supprimer une mauvaise réponse */
// unit(
//     given(`L’utilisateur est dans la partie, une question s’affiche.`, 
//     () => {
//         let hardness = 1;
//         let category = 'PHP';
//         let pseudo = 'Jeremy';

//         scope.game = new Game(pseudo, category, hardness);
//         scope.bonusBefore = scope.game.bonus;        
//         scope.question = scope.game.getQuestion();
//     },
//       when(`L’utilisateur clique sur le bouton “enlever mauvaise réponse” 
//       et une des mauvaise réponse disparaît de l’écran. `, 
//       () => {
//         scope.question = scope.question.deleteOneBadAnswer();
//         scope.game.useDeleteOneBadAnswer(scope.question);
//         scope.bonusAfter = scope.game.bonus;

//       },
//         then(`Supprimer une des fausses réponses, si et seulement cette 
//         option n’a pas été utilisée précédemment par l’utilisateur, et qu’il 
//         a assez de point bonus
//         `, 
//         () => {
//             expect(scope.bonusBefore).GreaterThanOrEqual(scope.bonusAfter);             
//             scope = {};
//         })
//       )
//     )
//   );

// /** Le temps accordé pour répondre à la question est écoulé */
// unit(
//     given(`L’utilisateur dispose de 20 secondes pour répondre à la question.`, 
//     () => {
//         let hardness = 1;
//         let category = 'PHP';
//         let pseudo = 'Jeremy';

//         scope.game = new Game(pseudo, category, hardness);
//         scope.scoreBefore = scope.game.score;        
//         scope.question = scope.game.getQuestion();
//     },
//       when(`20 secondes se sont écoulées.`, 
//       async () => {
          
//         await new Promise((resolve)=>{setTimeout(()=>{resolve();},20000);});
//         scope.scoreAfter = scope.game.score;
  
//       },
//         then(`Considérer la question comme fausse et passer à la question 
//         suivante. S’il n’y a plus de question, afficher le score du joueur.
//         `, 
//         () => {

//             expect(scope.scoreAfter).toBeLessThan(scope.scoreBefore);
//             scope = {};

//         })
//       )
//     )
//   );
