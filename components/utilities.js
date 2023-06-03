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

    if(arrayStyles.every((info) => !info.selected)) {
      matchStyles = true;
    }

    if(arrayScenes.every((info) => !info.selected)) {
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
  return arrayArtistes.filter((artiste) => {
    const terms = artiste.acf;

    // Vérifie si les données artiste contiennent la date et correspondent au jour sélectionné
    const isSamedi = jour === "samedi" && terms.date === "20230610";
    const isDimanche = jour === "dimanche" && terms.date === "20230611";

    if (terms && terms.date && (isSamedi || isDimanche)) {
      return true;
    }

    return false;
  });
};

/**
 * Trie les artistes filtrés par jour en fonction de leur heure de début.
 * Si les heures sont les mêmes, les artistes sont triés par ordre alphabétique.
 *
 * @param {Array} filtreJourArtistes - La liste des artistes filtrés par jour.
 * @returns {Array} La liste des artistes triée par heure de début et ordre alphabétique.
 */
export const trieHeures = (filtreJourArtistes) => {
  return filtreJourArtistes.sort((a, b) => {
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
 * @param {Array} ordreArtistes - La liste des artistes triée par heure de début et ordre alphabétique.
 * @param {string} rechercher - Le terme de recherche utilisé pour filtrer les artistes.
 * @returns {Array} La liste des artistes filtrée en fonction du terme de recherche.
 */
export const rechercheNomArtiste = (ordreArtistes, rechercher) => {
  // Si le terme de recherche est vide, retourne la liste complète des artistes
  if (rechercher.length === 0) {
    return ordreArtistes;
  }

  const termeRecherche = removeAccents(rechercher).toLowerCase();

  return ordreArtistes.filter((artiste) => {
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
 * Crée un tableau d'objets contenant les programmation musicaux uniques et leur état de sélection.
 *
 * @param {Array} artistes - La liste des artistes avec leurs informations.
 * @returns {Array} La liste des programmation musicaux uniques formatée avec l'état de sélection.
 */
export const StylesArray = (artistes) => {
  const programmationMusicaux = [];

  // Itère sur chaque artiste pour extraire le style musical
  artistes.forEach((artiste) => {
    const styleMusical = artiste.acf.style_musical;
    if (styleMusical.length > 0) {
      // Trie et formate le style musical pour chaque artiste
      const styleMusicalTrie = styleMusical.split(",").map((s) => s.trim());
      styleMusicalTrie.forEach((style) => {
        const styleCapitalized = premiereLettreMajuscule(style);
        // Ajoute les programmation musicaux uniques au tableau
        if (!programmationMusicaux.includes(styleCapitalized)) {
          programmationMusicaux.push(styleCapitalized);
        }
      });
    }
  });

  // Trie le tableau de programmation musicaux par ordre alphabétique
  programmationMusicaux.sort();

  // Formate le tableau de programmation musicaux avec l'état de sélection
  const programmationMusicauxFormat = programmationMusicaux.map(
    (style, index) => ({
      id: index + 1,
      style: style,
      selected: false,
    })
  );

  return programmationMusicauxFormat;
};

/**
 * Crée un tableau d'objets contenant les scènes uniques et leur état de sélection.
 *
 * @returns {Array} La liste des scènes uniques formatée avec l'état de sélection.
 */
export const SceneArray = (artistes) => {
  const listeScenes = [];

  // Itère sur chaque artiste pour extraire les scènes
  artistes.forEach((trieScene) => {
    const sceneRequete = trieScene.acf.scene;

    // Vérifie si la scène n'est pas vide et n'a pas encore été ajoutée à la liste des scènes
    if (sceneRequete.length > 0 && !listeScenes.includes(sceneRequete)) {
      listeScenes.push(sceneRequete);
    }
  });

  // Trie le tableau de scènes par ordre alphabétique
  listeScenes.sort();

  // Formate le tableau de scènes avec l'état de sélection
  const formatscenes = listeScenes.map((scene, index) => ({
    id: index + 1,
    scene,
    selected: false,
  }));

  return formatscenes;
}
