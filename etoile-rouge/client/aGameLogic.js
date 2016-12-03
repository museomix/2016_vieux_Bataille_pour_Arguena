/*
videoPlaying: false,
videoUrl: true,
videoText: "Met le forum ou le temple sur la premiere case",
planUrl: "roman-mosaic.gif",
textTitle: "1ere ere - Ascension de Titus",
textText: ""

videoText: "",
textTitle: "",
textText: ""

States.erasNumber = [1, 2, 3, 4];
States.erasBuildings = [
  'curie',
  'temple',
  'curie-plus',
  'atelier',
  'thermes',
  'taverne',
  'boucherie',
];

 */

GameStates = {
  home: {
    buildings: [],
    videoText: "Bats-toi pour Aregenua",
    videoUrl: "videos/titus.gif",
    textTitle: "IIè siècle - Croissance",
    textText: "Aregenua est en plein développement: quel bâtiment faites-vous construire ?",
    planUrl: "plans/home_calque.png",
  },
  "404": {
    buildings: [false, false, false, false],
    videoUrl: "videos/404_video.mp4",
    videoText: "Ce mouvement n'est pas autorisé ! Seriez-vous en train de tromper les romains, Titus Sollemnis ?",
    textTitle: "Enlevez tous les bâtiments et recommencez",
    textText: "..",
  },
  "0": {
    buildings: ["curie"],
    videoText: "Bravo ! Un bâtiment politique et public amplifie le pouvoir de la ville.",
    textTitle: "Début IIIè siècle - Apogée",
    textText: "Aregenua entre dans une période d'apogée, quel bâtiment l'accompagnera ?",
  },
  "1": {
    buildings: ["thermes"],
    videoText: "Le choix des thermes est un choix stratégique pour attirer la bienveillance des habitants.",
    textTitle: "Début IIIè siècle - Apogée",
    textText: "Aregenua entre dans une période d'apogée, quel bâtiment l'accompagnera ?",
  },
  "2": {
    buildings: [false],
    videoText: "Dommage, ce n'est pas le bon choix stratégique, essayez encore !",
    textTitle: "Retourne au IIè siècle",
    textText: "En tentant un autre bâtiment, plus politique",
  },
  "10": {
    buildings: ["thermes", "temple"],
    videoText: "C'est une bonne idée pour installer le pouvoir religieux mais la ville continuera-t-elle à s'étendre ? ",
    textTitle: "Fin du IIIè siècle",
    textText: "Aregenua perd son statut de capitale de cité à la fin du IIIe siècle… Réussirez-vous à répondre à cette crise ?",
  },
  "11": {
    buildings: ["thermes", "curie"],
    videoText: "C'est une bonne idée d'installer le pouvoir politique, mais la ville continuera-t-elle à s'étendre ? ",
    textTitle: "Fin du IIIè siècle",
    textText: "Aregenua perd son statut de capitale de cité à la fin du IIIe siècle… Réussirez-vous à répondre à cette crise ?",
  },
  "12": {
    buildings: ["thermes", false],
    videoText: "Dommage, cela ne suffit pas pour développer la ville, essayez encore.",
    textTitle: "Retournez au début du IIIè siècle",
    textText: "..",
  },
  "00": {
    buildings: ["curie", "atelier"],
    videoText: "C'est une bonne idée pour développer l'artisanat, mais la ville continuera-t-elle à s'étendre ?",
    textTitle: "Fin du IIIè siècle",
    textText: "Aregenua perd son statut de capitale de cité à la fin du IIIe siècle… Réussirez-vous à répondre à cette crise ?",
  },
  "01": {
    buildings: ["curie", "curie-plus"],
    videoText: "C'est une bonne idée pour accroître le pouvoir politique, mais la ville continuera-t-elle à s'étendre ?",
    textTitle: "Fin du IIIè siècle",
    textText: "Aregenua perd son statut de capitale de cité à la fin du IIIe siècle… Réussirez-vous à répondre à cette crise ?",
  },
  "02": {
    buildings: ["curie", false],
    videoText: "Dommage, cela ne suffit pas pour développer la ville, essayez encore.",
    textTitle: "Retournez au début du IIIè siècle",
    textText: "..",
  },
  "102": {
    buildings: ["thermes", "temple", false],
    videoText: "Vous n'avez pas opéré les bons choix au IIème et au début du IIIème siècle. Retentez votre chance au début du jeu avec de nouveaux bâtiments…",
    textTitle: "Retournez dans le passé !",
    textText: "..",
  },
  "112": {
    buildings: ["thermes", "curie", false],
    videoText: "Vous n'avez pas opéré les bons choix au IIème et au début du IIIème siècle. Retentez votre chance au début du jeu avec de nouveaux bâtiments…",
    textTitle: "Retournez dans le passé !",
    textText: "..",
  },
  "010": {
    buildings: ["curie", "curie-plus", "temple"],
    videoText: "Pourquoi pas essayer le religieux quand la ville perd son statut politique…",
    textTitle: "IVè siècle",
    textText: "Aregenua s'éteint peu à peu au IVe siècle et il faut s'adapter à son époque. Quel aménagement allez-vous faire ?",
  },
  "011": {
    buildings: ["curie", "curie-plus", "atelier"],
    videoText: "C'est une bonne idée de développer l'artisanat quand la ville perd son statut politique",
    textTitle: "IVè siècle",
    textText: "Aregenua s'éteint peu à peu au IVe siècle et il faut s'adapter à son époque. Quel aménagement allez-vous faire ?",
  },
  "012": {
    buildings: ["curie", "curie-plus", false],
    videoText: "Dommage, ce bâtiment ne permet pas d'enrayer le déclin de la ville… Essayez encore…",
    textTitle: "Retournez dans le passé !",
    textText: "..",
  },
  "000": {
    buildings: ["curie", "atelier", "taverne"],
    videoText: "Se noyer dans l'alcool alors que la ville perd de son prestige peut être une solution…",
    textTitle: "IVè siècle",
    textText: "Aregenua s'éteint peu à peu au IVe siècle et il faut s'adapter à son époque. Quel aménagement allez-vous faire ?",
  },
  "001": {
    buildings: ["curie", "atelier", "thermes"],
    videoText: "Le soin du corps et de l'esprit est une bonne piste alors que la ville perd son statut politique…",
    textTitle: "IVè siècle",
    textText: "Aregenua s'éteint peu à peu au IVe siècle et il faut s'adapter à son époque. Quel aménagement allez-vous faire ?",
  },
  "002": {
    buildings: ["curie", "atelier", false],
    videoText: "Dommage, ce bâtiment ne permet pas d'enrayer le déclin de la ville… Essayez encore…",
    textTitle: "Fin du IIIè siècle",
    textText: "Aregenua s'éteint peu à peu au IVe siècle et il faut s'adapter à son époque. Quel aménagement allez-vous faire ?",
  },
  "0102": {
    buildings: ["curie", "curie-plus", "temple", false],
    videoText: "Vous n'avez pas opéré les bons choix à l'étape précédente. Si vous souhaitez réussir,  recommencez à l'étape précédente…",
    textTitle: "Retournez dans le passé !",
    textText: "..",
  },
  "0002": {
    buildings: ["curie", "atelier", "taverne", false],
    videoText: "Vous n'avez pas opéré les bons choix au début du IIIème siècle. Si vous souhaitez réussir,  recommencez au début du IIIème siècle en changeant de bâtiments…",
    textTitle: "Retournez au début du IIIème siècle",
    textText: "..",
  },
  "0012": {
    buildings: ["curie", "atelier", "thermes", false],
    videoText: "Vous n'avez pas opéré les bons choix au début du IIIème siècle. Si vous souhaitez réussir,  recommencez au début du IIIème siècle en changeant de bâtiments…",
    textTitle: "Retournez au début du IIIème siècle",
    textText: "..",
  },
  "0110": {
    buildings: ["curie", "curie-plus", "atelier", "boucherie"],
    videoText: "Bravo, vous vous êtes adapté aux défis posés à Aregenua. Vous avez rempli votre mission, Titus Sennius Sollemnis !",
    textTitle: "Vous avez gagné ! Pour quel futur ?",
    textText: "Aregenua s'est peu à peu éteinte après le IVème siècle et a laissé la place à un village et à des terres agricoles.",
  },
  "0112": {
    buildings: ["curie", "curie-plus", "atelier", false],
    videoText: "Dommage, ce bâtiment ne permet pas d'enrayer le déclin de la ville… Essayez encore…",
    textTitle: "Retournez dans le passé !",
    textText: "..",
  },
};

Identifiers = {};
console.log(Object.keys(GameStates));
Object.keys(GameStates).forEach(function(gameStateKey) {
  const gameState = GameStates[gameStateKey];
  console.log(gameStateKey, gameState);
  const key = gameState.buildings.join("");
  Identifiers[key] = gameStateKey;
});

getGameState = function({
  lastState,
  previousState
}) {
  if (lastState.eras) {
    const newEras = lastState.eras;
    console.log(newEras);
    const newBuildings = [];
    newEras.forEach(newEra => {
      newBuildings[parseInt(newEra.number)] = newEra.building || "xxx"; //false = nothing at first
    });
    const previousEraId = _.initial(newBuildings).join("");
    console.log("pEraId", previousEraId);
    const newEraId = newBuildings.join("");
    console.log("newEraId", newEraId);
    if (newEraId === "") {
      return {
        newState: GameStates.home, 
        newStateKey: "home"
      };
    }

    else if (previousEraId === "" || Identifiers[previousEraId]) {
      if (Identifiers[newEraId]) {
        return {
          newState: _.extend(GameStates[Identifiers[newEraId]], {
            videoUrl: `videos/${Identifiers[newEraId]}_video.mp4`,
            planUrl: `plans/${Identifiers[newEraId]}_calque.png`
          }),
          newStateKey: Identifiers[newEraId],
        };
      } else {
        const errorKey = previousEraId+"false";
        return {
          newState: _.extend(GameStates[Identifiers[errorKey]], {
            videoUrl: `videos/${Identifiers[errorKey]}_video.mp4`,
            planUrl: `plans/${Identifiers[errorKey]}_calque.png`
          }),
          newStateKey: Identifiers[errorKey],
        };
      }
    }

    else {
      return {
        newState: GameStates["404"],
        newStateKey: "404",
      };
    }
  }
  return {};
}
