import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { CheckBox, SearchBar } from "react-native-elements";
import CarteArtiste from "../carte_artiste/CarteArtiste";

import styles from "./styles.js";

const SaturdayDate = "20230610";
const SundayDate = "20230611";

const Programmation = ({ artistes }) => {
  const [filterArtistes, setFilterArtistes] = useState([]);
  const [jour, setJour] = useState("samedi");
  const [filtre, setFiltre] = useState(false);
  const [recherche, setRecherche] = useState(false);
  const [rechercher, setRechercher] = useState("");
  const [listeprogrammationMusicauxArray, setListeprogrammationMusicauxArray] = useState([]);
  const [listeScenesArray, setListeScenesArray] = useState([]);

  useEffect(() => {
    let updatedArtistes = artistes;

    updatedArtistes = filtres(updatedArtistes, listeScenesArray);
    updatedArtistes = filtres(updatedArtistes, listeprogrammationMusicauxArray);
    updatedArtistes = filtreJour(updatedArtistes, jour);
    updatedArtistes = trieJour(updatedArtistes);
    updatedArtistes = rechercheNomArtiste(updatedArtistes, rechercher);
    setFilterArtistes(updatedArtistes);
  }, [jour, artistes, rechercher, listeScenesArray, listeprogrammationMusicauxArray]);

  useEffect(() => {
    programmationMusicauxArray(artistes);
    SceneArray();
  }, [artistes]);

  /**
   * Filtre les artistes en fonction des filtres séléctionnés (programmation musicaux et scènes)
   *
   * @param {Array} arrayArtistes - La liste des artistes à filtrer.
   * @param {Array} arrayFiltre - La liste des filtres.
   * @returns {Array} La liste des artistes filtrée en fonction des filtres.
   */
  function filtres(arrayArtistes, arrayFiltre) {
    let listes = [];
    arrayFiltre.forEach((arrayInfo) => {
      // Compare les éléments séléctionnés du filtre scènes avec les artistes
      if (arrayInfo.scene !== undefined) {
        let liste = arrayArtistes.filter((artiste) => {
          return arrayInfo.selected && arrayInfo.scene === artiste.acf.scene;
        });
        listes.push(liste);
      }
      // Compare les éléments séléctionnés du filtre programmationmusicaux avec les artistes
      else if (arrayInfo.style !== undefined) {
        let liste = arrayArtistes.filter((artiste) => {
          return (
            arrayInfo.selected && arrayInfo.style === artiste.acf.style_musical
          );
        });
        listes.push(liste);
      }
    });

    let resultList = listes.flat();

    // Si aucun filtre n'est sélectionné, retourne le tableau original d'artistes
    if (arrayFiltre.every((info) => !info.selected)) {
      return arrayArtistes;
    }

    // Si aucun résultat n'est trouvé, retourne un tableau vide
    if (resultList.length === 0) {
      return [];
    } else {
      return resultList;
    }
  }

  /**
   * Filtre les artistes en fonction du jour sélectionné (samedi ou dimanche).
   *
   * @param {Array} array - La liste des artistes à filtrer.
   * @param {string} jour - Le jour sélectionné ("samedi" ou "dimanche").
   * @returns {Array} La liste des artistes filtrée en fonction du jour sélectionné.
   */
  function filtreJour(array, jour) {
    return array.filter((artiste) => {
      const terms = artiste.acf;

      // Vérifie si les données artiste contiennent la date et correspondent au jour sélectionné
      const isSamedi = jour === "samedi" && terms.date === SaturdayDate;
      const isDimanche = jour === "dimanche" && terms.date === SundayDate;

      if (terms && terms.date && (isSamedi || isDimanche)) {
        return true;
      }

      return false;
    });
  }

  /**
   * Trie les artistes filtrés par jour en fonction de leur heure de début.
   * Si les heures sont les mêmes, les artistes sont triés par ordre alphabétique.
   *
   * @param {Array} filtreJourArtistes - La liste des artistes filtrés par jour.
   * @returns {Array} La liste des artistes triée par heure de début et ordre alphabétique.
   */
  function trieJour(filtreJourArtistes) {
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
  }

  /**
   * Filtre la liste des artistes en fonction d'un terme de recherche.
   * Si le terme de recherche est vide, retourne la liste complète des artistes.
   *
   * @param {Array} ordreArtistes - La liste des artistes triée par heure de début et ordre alphabétique.
   * @param {string} rechercher - Le terme de recherche utilisé pour filtrer les artistes.
   * @returns {Array} La liste des artistes filtrée en fonction du terme de recherche.
   */
  function rechercheNomArtiste(ordreArtistes, rechercher) {
    // Si le terme de recherche est vide, retourne la liste complète des artistes
    if (rechercher.length === 0) {
      return ordreArtistes;
    }

    const termeRecherche = removeAccents(rechercher).toLowerCase();

    return ordreArtistes.filter((artiste) => {
      const nom = removeAccents(artiste.acf.artiste).toLowerCase();
      return nom.includes(termeRecherche);
    });
  }

  /**
   * Crée un tableau d'objets contenant les programmation musicaux uniques et leur état de sélection.
   *
   * @param {Array} artistes - La liste des artistes avec leurs informations.
   * @returns {Array} La liste des programmation musicaux uniques formatée avec l'état de sélection.
   */
  function programmationMusicauxArray(artistes) {
    const programmationMusicaux = [];

    // Itère sur chaque artiste pour extraire les programmation musicaux
    artistes.forEach((artiste) => {
      const styleMusicalRequete = artiste.acf.style_musical;
      if (styleMusicalRequete.length > 0) {
        // Trie et formate les programmation musicaux pour chaque artiste
        const styleMusicalTrie = styleMusicalRequete
          .split(",")
          .map((s) => s.trim());
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
    const programmationMusicauxFormat = programmationMusicaux.map((style, index) => ({
      id: index + 1,
      style: style,
      selected: false,
    }));

    return setListeprogrammationMusicauxArray(programmationMusicauxFormat);
  }

  /**
   * Met la première lettre d'une chaîne de caractères en majuscule et le reste en minuscules.
   *
   * @param {string} text - La chaîne de caractères à formater.
   * @returns {string} La chaîne de caractères formatée avec la première lettre en majuscule.
   */
  function premiereLettreMajuscule(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  /**
   * Crée un tableau d'objets contenant les scènes uniques et leur état de sélection.
   *
   * @returns {Array} La liste des scènes uniques formatée avec l'état de sélection.
   */
  function SceneArray() {
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

    return setListeScenesArray(formatscenes);
  }

  /**
   * Supprime les accents d'une chaîne de caractères.
   *
   * @param {string} str - La chaîne de caractères dont les accents doivent être supprimés.
   * @returns {string} La chaîne de caractères sans accents.
   */
  function removeAccents(str) {
    if (!str || typeof str !== "string") return str;
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /**
   * Permet de changer le mot logique pour savoir quel filtre est séléctionné.
   *
   * @param {int} id - Id correspondant à la checkbox cochée.
   * @param {array} array - Liste de données qui sont à filtrer.
   * @returns {string} La liste triée.
   */
  function inversionLogiqueprogrammationMusicaux(id, array) {
    const arraySelected = array === listeprogrammationMusicauxArray ? 0 : 1;
    const inversion = array.map((liste) =>
      liste.id === id ? { ...liste, selected: !liste.selected } : liste
    );
    if (arraySelected === 0) {
      setListeprogrammationMusicauxArray(inversion);
    } else {
      setListeScenesArray(inversion);
    }
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            setRecherche(!recherche);
          }}
        >
          <Image
            source={require("../../icones/rechercher.png")}
            style={styles.icone}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => {
            setJour("samedi");
          }}
        >
          <Text>SAMEDI</Text>
          <Text style={jour === "samedi" ? styles.selectText : styles.select}>
            10 Juin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => {
            setJour("dimanche");
          }}
        >
          <Text>DIMANCHE</Text>
          <Text style={jour === "dimanche" ? styles.selectText : styles.select}>
            11 Juin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFiltre(!filtre);
          }}
        >
          {filtre ? (
            <Image
              source={require("../../icones/croix.png")}
              style={styles.icone}
            />
          ) : (
            <Image
              source={require("../../icones/filtre.png")}
              style={styles.icone}
            />
          )}
        </TouchableOpacity>
      </View>
      {filtre ? (
        <View>
          <Text style={styles.title}>Filtres</Text>
          <Text style={styles.subTitle}>programmation musicaux</Text>
          <FlatList
            data={listeprogrammationMusicauxArray}
            renderItem={({ item }) => (
              <View>
                <CheckBox
                  title={item.style}
                  checked={item.selected}
                  onPress={() => {
                    inversionLogiqueprogrammationMusicaux(
                      item.id,
                      listeprogrammationMusicauxArray
                    );
                  }}
                  style={styles.checkbox}
                  checkedIcon="music"
                  checkedColor="#6DBD38"
                  uncheckedIcon="music"
                  uncheckedColor="#CACACA"
                  containerStyle=""
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.subTitle}>Scènes</Text>
          <FlatList
            data={listeScenesArray}
            renderItem={({ item }) => (
              <View>
                <CheckBox
                  title={item.scene}
                  checked={item.selected}
                  onPress={() => {
                    inversionLogiqueprogrammationMusicaux(item.id, listeScenesArray);
                  }}
                  style={styles.checkbox}
                  checkedIcon="music"
                  checkedColor="#6DBD38"
                  uncheckedIcon="music"
                  uncheckedColor="#CACACA"
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View>
          {recherche ? (
            <SearchBar
              placeholder="Rechercher ..."
              lightTheme
              round
              value={rechercher}
              onChangeText={(text) => setRechercher(text)}
              onSubmitEditing={() => setRecherche(false)}
              onClear={() => setRecherche(false)}
              autoCorrect={false}
            />
          ) : null}
          <FlatList
            data={filterArtistes}
            renderItem={({ item }) => <CarteArtiste item={item} />}
            keyExtractor={(item) => item.id}
            style={styles.list}
            ListEmptyComponent={
              <Text>
                Aucun artiste ne correspond à ce ou ces critères de filtre.
              </Text>
            }
          />
        </View>
      )}
    </View>
  );
};

export default Programmation;
