import { unit, given, when, then } from 'jest-bdd';

import QuestionManager from '../../services/question-manager.js';

// Creation du scope.
let scope = {};

/** L’utilisateur répond avec la bonne réponse */
unit(
  given(`L’utilisateur est dans la partie, une question s’affiche.`, 
  () => {
    
  },
    when(` celui-ci répond avec la bonne réponse`, 
    () => {

    },
      then(`Étant donné que la réponse est bonne, l’utilisateur est 
      potentiellement crédité d’un point de bonus. Le résultat vient 
      s’ajouter au score final du joueur. Ensuite s'affiche la page de 
      la question suivante. S’il n’y a plus de question, afficher le 
      score du joueur.`, 
      () => {

        scope = {};
      })
    )
  )
);

/** L’utilisateur répond avec la mauvaise réponse */
unit(
    given(`L’utilisateur est dans la partie, une question s’affiche.`, 
    () => {
      
    },
      when(`celui-ci répond avec la mauvaise réponse. `, 
      () => {
  
      },
        then(` Étant donné que la réponse est mauvaise, l’utilisateur 
        n’est pas crédité d’un point de bonus. Le résultat vient s’ajouter 
        au score final du joueur. Ensuite s'affiche la page de la question 
        suivante. S’il n’y a plus de question, afficher le score du joueur.
        `, 
        () => {
  
          scope = {};
        })
      )
    )
  );

/** L’utilisateur demande à connaître l’indice de la question */
unit(
    given(`L’utilisateur est dans la partie, une question s’affiche.`, 
    () => {
      
    },
      when(` L’utilisateur clique sur le bouton indice, l’indice est 
      disponible que si l’utilisateur à des points de bonus dans son 
      compteur, et que celui-ci n’a pas déjà été révélé `, 
      () => {
  
      },
        then(`L’indice est révélé à l’utilisateur, il peut donc en prendre 
        connaissance. L’indice reste alors affiché à l’écran jusqu’au 
        changement de question. Et l’utilisateur perd un point de bonus.
        `, 
        () => {
  
          scope = {};
        })
      )
    )
  );

/** L’utilisateur passe à une autre question. */
unit(
    given(`L’utilisateur est dans la partie, une question s’affiche.`, 
    () => {
      
    },
      when(`il clique sur le bouton “passer” pour changer de question. 
      Si son nombre de points bonus le lui permet. Une nouvelle question 
      s’affiche à l’écran `, 
      () => {
  
      },
        then(`La question précédente est passé, et une nouvelle question 
        s’affiche. L’utilisateur perd un point de bonus.
        `, 
        () => {
  
          scope = {};
        })
      )
    )
  );

/** L’utilisateur demande à supprimer une mauvaise réponse */
unit(
    given(`L’utilisateur est dans la partie, une question s’affiche.`, 
    () => {
      
    },
      when(`L’utilisateur clique sur le bouton “enlever mauvaise réponse” 
      et une des mauvaise réponse disparaît de l’écran. `, 
      () => {
  
      },
        then(`Supprimer une des fausses réponses, si et seulement cette 
        option n’a pas été utilisée précédemment par l’utilisateur, et qu’il 
        a assez de point bonus
        `, 
        () => {
  
          scope = {};
        })
      )
    )
  );

/** Le temps accordé pour répondre à la question est écoulé */
unit(
    given(`L’utilisateur dispose de 20 secondes pour répondre à la question.`, 
    () => {
      
    },
      when(`20 secondes se sont écoulées.`, 
      () => {
  
      },
        then(`Considérer la question comme fausse et passer à la question 
        suivante. S’il n’y a plus de question, afficher le score du joueur.
        `, 
        () => {
  
          scope = {};
        })
      )
    )
  );