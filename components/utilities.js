/**
 * Filtre les artistes en fonction des filtres séléctionnés (programmation musicaux et scènes)
 *
 * @param {Array} arrayArtistes - La liste des artistes à filtrer.
 * @param {Array} arrayScenes - La liste des scènes.
 * @param {Array} arrayStyles - La liste des styles.
 * @returns {Array} La liste des artistes filtrée en fonction des filtres.
 */
export const filtreArtistes = (arrayArtistes, arrayScenes, arrayStyles) => {
  // Si aucun filtre n'est sélectionné, retourne le tableau original d'artistes
  if (
    arrayScenes.every((info) => !info.selected) &&
    arrayStyles.every((info) => !info.selected)
  ) {
    return arrayArtistes;
  }

  // On filtre les artistes en fonction des scènes et styles sélectionnés
  let filteredArtistes = arrayArtistes.filter((artiste) => {

    let matchStyles = arrayStyles.some((styleInfo) => {
      return styleInfo.selected && artiste.acf.style_musical === styleInfo.style;
    });

    let matchScenes = arrayScenes.some((sceneInfo) => {
      return sceneInfo.selected && sceneInfo.scene === artiste.acf.scene;
    });

    if (arrayStyles.every((info) => !info.selected)) {
      matchStyles = true;
    }

    if (arrayScenes.every((info) => !info.selected)) {
      matchScenes = true;
    }

    return matchStyles && matchScenes;
  });

  return filteredArtistes;
};




/**
 * Filtre les artistes en fonction du jour sélectionné (samedi ou dimanche).
 *
 * @param {Array} arrayArtistes - La liste des artistes à filtrer.
 * @param {string} jour - Le jour sélectionné ("samedi" ou "dimanche").
 * @returns {Array} La liste des artistes filtrée en fonction du jour sélectionné.
 */
export const filtreJour = (arrayArtistes, jour) => {
  return arrayArtistes.filter(({ acf }) => acf.date === (jour === "samedi" ? "20230610" : "20230611"));
};


/**
 * Trie les artistes filtrés par jour en fonction de leur heure de début.
 * Si les heures sont les mêmes, les artistes sont triés par ordre alphabétique.
 *
 * @param {Array} arrayArtistes - La liste des artistes à filtrer.
 * @returns {Array} La liste des artistes triée par heure de début et ordre alphabétique.
 */
export const trieHeures = (arrayArtistes) => {
  return arrayArtistes.sort((a, b) => {
    // Convertir les heures de début en entier pour les comparer
    const aHour = parseInt(a.acf.hdebut.replace(":", ""));
    const bHour = parseInt(b.acf.hdebut.replace(":", ""));

    // Si les heures sont les mêmes, trier par ordre alphabétique
    if (aHour === bHour) {
      return a.title.rendered.localeCompare(b.title.rendered);
    }

    // Trier les artistes par heure de début
    return aHour - bHour;
  });
};

/**
 * Filtre la liste des artistes en fonction d'un terme de recherche.
 * Si le terme de recherche est vide, retourne la liste complète des artistes.
 *
 * @param {Array} arrayArtistes - La liste des artistes à filtrer.
 * @param {string} rechercher - La recherche effectuée pour filtrer les artistes.
 * @returns {Array} La liste des artistes filtrée en fonction du terme de recherche.
 */
export const rechercheNomArtiste = (arrayArtistes, rechercher) => {
  // Si le terme de recherche est vide, retourne la liste complète des artistes
  if (rechercher.length === 0) {
    return arrayArtistes;
  }

  const termeRecherche = removeAccents(rechercher).toLowerCase();

  return arrayArtistes.filter((artiste) => {
    const nom = removeAccents(artiste.acf.artiste).toLowerCase();
    return nom.includes(termeRecherche);
  });
};

/**
 * Supprime les accents d'une chaîne de caractères.
 *
 * @param {string} string - La chaîne de caractères dont les accents doivent être supprimés.
 * @returns {string} La chaîne de caractères sans accents.
 */
function removeAccents(string) {
  if (!string || typeof string !== "string") {
    return string;
  }

  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Met la première lettre d'une chaîne de caractères en majuscule et le reste en minuscules.
 *
 * @param {string} string - La chaîne de caractères à formater.
 * @returns {string} La chaîne de caractères formatée avec la première lettre en majuscule.
 */
export const premiereLettreMajuscule = (string) => {
  if (!string || typeof string !== "string") {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * Crée un tableau d'objets contenant les styles et leur état de sélection.
 *
 * @param {Array} artistes - La liste des artistes avec leurs informations.
 * @returns {Array} La liste des styles formatée avec l'état de sélection.
 */
export const StylesArray = (artistes) => {
  const Styles = [];

  // Itère sur chaque artiste pour extraire le style musical
  artistes.forEach(({ acf }) => {
    let style = acf.style_musical;

    if (style.length > 0) {
      // Trie et formate le style pour chaque artiste
      style = style.split(",").map((s) => s.trim());
      style.forEach((style) => {
        style = premiereLettreMajuscule(style);
        // Ajoute les styles uniques au tableau
        if (!Styles.includes(premiereLettreMajuscule(style))) {
          Styles.push(style);
        }
      });
    }
  });

  // Trie le tableau de styles par ordre alphabétique
  Styles.sort();

  const StylesFormat = Styles.map(
    (style, index) => ({
      id: index + 1,
      style: style,
      selected: false,
    })
  );

  return StylesFormat;
};

/**
 * Crée un tableau d'objets contenant les scènes et leur état de sélection.
 *
 * @returns {Array} La liste des scènes formatée avec l'état de sélection.
 */
export const SceneArray = (artistes) => {
  const Scenes = [];

  // Itère sur chaque artiste pour extraire les scènes
  artistes.forEach(({ acf }) => {
    const scene = acf.scene;

    // Vérifie si la scène n'est pas vide et n'a pas encore été ajoutée à la liste des scènes
    if (scene.length > 0 && !Scenes.includes(scene)) {
      Scenes.push(scene);
    }
  });

  // Trie le tableau de scènes par ordre alphabétique
  Scenes.sort();

  // Formate le tableau de scènes avec l'état de sélection
  const formatscenes = Scenes.map((scene, index) => ({
    id: index + 1,
    scene,
    selected: false,
  }));

  return formatscenes;
}

/**
 * Charge dans la constante handleOpenDetailsInformations une valeur qui va permettre d'afficher les informations importantes ou banales.
 *
 * @param {string} infoSelected - string correspondant aux types d'informations à afficher.
 * @param {const} handleOpenDetailsInformations - Constante qui permet d'ouvrir la page information sélectionnée.
 * @returns {function} Une fonction permet de naviguer vers la page DetailsInformations en donnant le type d'information à afficher et en fermant l'overlay.
 */
export const handleOpenDetails = (infoSelected, handleOpenDetailsInformations) => {
  const infoType = infoSelected === 'Important' ? 'important' : 'Banal';
  handleOpenDetailsInformations(infoType);
};

/**
* Permet de naviguer vers la page DetailsInformations en donnant le type d'information à afficher et en fermant l'overlay.
*
* @param {string} state - mot correspondant au type d'information.
* @param navigation - Permet de d'afficher une page sans passer par le Navigator.
* @param {function} overlayInfoLogic - Ferme l'overlay d'informations.
* @param {const} setChoixInfo - Constante qui permet de savoir quelles informations afficher quand on ouvre DetailsInformations.
 * @returns {function} Plusieurs fonctions, une qui ouvre la page DetailsInformations, l'autre qui ferme l'overlay et le dernier qui donne l'état de l'information qu'on va afficher.
*/
export const handleOpenDetailsInformations = (state, navigation, overlayInfoLogic, setChoixInfo) => {
  navigation.navigate("DetailsInformations");
  overlayInfoLogic();
  setChoixInfo(state);
};

/**
 * Charge en fonction d'un string la valeur de la page affichée.
 *
 * @param {string} infoSelected - string correspondant aux types d'informations à afficher.
 * @param {const} setIndexInfoImportantes - Constante qui est chargée avec la valeur de la page importante sélectionnée dans le carrousel.
 * @param {const} setIndexInfoBanales - Constante qui est chargée avec la valeur de la page banale sélectionnée dans le carrousel.
 * @param {Number} index - Numéro de la page sélectionnée.
 * @returns {Number} Valeur de la page actuel dans la constante correspondant au carrousel.
 */
export const compteurPage = (infoSelected, setIndexInfoImportantes, setIndexInfoBanales, index) => {
  const setIndexInfo = infoSelected === "Important" ? setIndexInfoImportantes : setIndexInfoBanales;
  setIndexInfo(index);
};

/**
 * Permet de changer l'état de sélection de l'élément dans la liste.
 *
 * @param {int} id - Id correspondant à la checkbox cochée.
 * @param {array} array - Liste de données qui sont à filtrer.
 * @param {function} setArray - Fonction pour mettre à jour l'état de la liste.
 */
export function inversionLogique(id, array, setArray) {
  const inversion = array.map((liste) =>
    liste.id === id ? { ...liste, selected: !liste.selected } : liste
  );
  setArray(inversion);
}