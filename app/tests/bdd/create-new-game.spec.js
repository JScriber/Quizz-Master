// import { unit, given, when, then } from "jest-bdd";
// import Game from "../../entities/game.js";
// import GameManager from "../../services/game-manager.js";
// import expect from "jest";
// // création du scope
// let scope = {};
// /** L’utilisateur souhaite créer une nouvelle partie. Ses saisies sont correctes. */
// unit(
//   given(
//     `L’utilisateur entre les informations suivantes.`,
//     () => {
//       scope.manager = GameManager.instance(); //singleton

//       let pseudo = "Jeremy";
//       let category = "PHP";
//       let difficulty = 2;
      
//       scope.game = new Game(pseudo,category,difficulty);
//     },
//     when(
//       "Il clique sur le bouton de validation",
//       () => {
//         scope.manager.add(scope.game);
//       },
//       then(
//         `Toute les informations sont remplis, l’utilisateur est redirigé vers la première page du quiz`,
//         () => {
//           const name = scope.game.nameUser;
//           const difficulty = scope.game.difficulty;
//           const category = scope.game.category;
//           expect(name).not.toBeNull();
//           expect(difficulty).not.toBeNull();
//           expect(category).not.toBeNull();
//           // réinitialisation du scope
//           scope = {};
//         }
//       )
//     )
//   )
// );
// /** L’utilisateur souhaite créer une nouvelle partie. Ses saisies sont cependant incorrectes. */
// unit(
//   given(
//     `L’utilisateur entre les informations suivantes.`,
//     () => {
//       scope.manager = GameManager.instance(); //singleton

//       const game = new Game();

//       game.nameUser = "";
//       game.difficulty = 2;
//       game.category = "PHP";
//       scope.game = game;
//     },
//     when(
//       "Il clique sur le bouton de validation",
//       () => {
//         scope.result = scope.manager.add(scope.game);
//       },
//       then(
//         `Il manque des informations, l’utilisateur reste sur la page le message suivant s’affiche: 
//         “ Vous devez remplir le champ Nom d’utilisateur”`,
//         () => {
//           expect(scope.result.errors).toBeDefined();

//           scope = {};
//         }
//       )
//     )
//   )
// );
