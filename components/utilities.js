import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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
  return arrayArtistes.filter(({ acf }) => acf.date === (jour === "samedi" ? "20230720" : "20230721"));
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
export const stylesArrayFilter = (artistes) => {
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
export const sceneArrayFilter = (artistes) => {
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

/**
 * Formate une date et une heure de concert en une valeur temporelle enregistrée en millisecondes depuis minuit, le 1er janvier 1970 UTC.
 * @param {string} date - La date du concert de l'artiste au format "AAAAMMJJ".
 * @param {string} time - L'heure du début du concert de l'artiste au format "HH:mm".
 * @returns {number} La valeur temporelle en millisecondes depuis minuit, le 1er janvier 1970 UTC.
 */
export const formatDate = (date, time) => {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  const formattedDate = `${year}-${month}-${day}T${time.slice(0, 5)}:00`;

  return new Date(formattedDate).getTime();
};

/**
 * Génère une chaîne de caractères avec une valeur et un mot, en prenant en compte si le mot doit être au pluriel ou au singulier.
 * @param {number} count - La valeur permettant de déterminer si le mot sera au pluriel ou au singulier.
 * @param {string} unit - Le mot concerné.
 * @param {string} suffix - Le suffixe à ajouter au mot au pluriel (par défaut: 's').
 * @returns {string} La chaîne de caractères résultante.
 */ 
export const pluralize = (count, unit, suffix = 's') => `${count} ${unit}${count > 1 ? suffix : ''}`;

/**
 * Filtre les artistes par scène et ne retourne que ceux dont les concerts ont lieu dans le futur.
 * @param {string} selectedScene - Le nom de la scène sélectionnée.
 * @param {Array} artistes - Le tableau contenant tous les artistes.
 * @returns {Array} Un tableau contenant uniquement les artistes qui se produisent sur la scène sélectionnée et dont les concerts ont lieu dans le futur.
 * @note Dans le cas de "Tous" (correspondant à ""), tous les artistes sont renvoyés
 */
export const filterArtistesByScene = (selectedScene, artistes) => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  const updatedArtistes = artistes.filter((artiste) => {
    const sceneArtiste = artiste.acf.scene;
    const eventDateTime = formatDate(artiste.acf.date, artiste.acf.hdebut);

    return selectedScene === "" || sceneArtiste === selectedScene && eventDateTime > currentTime;
  });

  return updatedArtistes;
}

/**
 * Trie le tableau d'artistes par date et heure de concert.
 * @param {Array} displayArray - Le tableau contenant les artistes à afficher.
 * @returns {Array} Le tableau d'artistes trié par date et heure de concert.
 */
export const trieArtistes = (displayArray) => {
  return displayArray.sort((a, b) => {
    const dateA = formatDate(a.acf.date, a.acf.hdebut);
    const dateB = formatDate(b.acf.date, b.acf.hdebut);
    return dateA - dateB;
  });
}
// Utilise AsyncStorage pour stocker une valeur liée à une clé dans les données en cache 
export const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("erreur :" + e)
  }
};

// Utilise AsyncStorage pour récupérer des données en cache liées à une clé dans une constante
export const getData = async (key, setData) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    setData(jsonValue != null ? JSON.parse(jsonValue) : '');
  } catch (e) {
    console.log("erreur :" + e);
  }
};

// Utilise AsyncStorage pour supprimer les données en cache liées à une clé
export const cleanData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("erreur: " + e);
  }
};

// Utilise AsyncStorage pour supprimer toutes les données en cache
export const cleanAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log("erreur: " + e);
  }
};


// Permet de tester si un identifant et mot de passe est bien dans la base de donnée
export const checkUserCredentials = (username, password) => {
  return axios
    .post('https://cchost.bmcorp.fr/LiveEvents/wp-json/api/v1/token', {
      username,
      password,
    })
    .then((response) => {
      console.log('Tu es connecté: ' + response);
    })
    .catch((error) => {
      console.log('Tu n\'es pas connecté: ' + error);
    });
};

/**
 * Formate une date au format "AAAAmmjj" en "jj Mois".
 * @param {string} dateString - La chaîne de date au format "AAAAmmjj".
 * @returns {string} La date formatée au format "jj Mois".
 */
export const setUpDate = (dateString) => {
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
    "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const monthIndex = parseInt(dateString.slice(4, 6)) - 1;
  const day = dateString.slice(6, 8);

  // Formatage de la date en "jj Mois"
  const formattedDate = `${parseInt(day)} ${months[monthIndex]}`;
  return formattedDate;
}

/**
 * Transforme une heure au format "HH:mm:ss" en une chaîne d'heure formatée "HHhmm".
 * @param {string} timeString - L'heure au format "HH:mm:ss".
 * @returns {string} L'heure formatée au format "HHhmm".
 */
export const setUpTime = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  const formattedTime = `${hours}h${minutes}`;
  return formattedTime;
};
