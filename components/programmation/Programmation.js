import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { CheckBox, SearchBar } from "react-native-elements";
import CarteArtiste from "../carte_artiste/CarteArtiste";
import { filtreArtistes, filtreJour, trieHeures, rechercheNomArtiste, programmationMusicauxArray, SceneArray } from "../utilities.js"

import styles from "./styles.js";

const Programmation = ({ artistes }) => {
  const [filterArtistes, setFilterArtistes] = useState([]);
  const [jour, setJour] = useState("samedi");
  const [filtre, setFiltre] = useState(false);
  const [recherche, setRecherche] = useState(false);
  const [rechercher, setRechercher] = useState("");
  const [stylesArray, setListeprogrammationMusicauxArray] = useState([]);
  const [listeScenesArray, setListeScenesArray] = useState([]);

  useEffect(() => {
    let updatedArtistes = artistes;

    updatedArtistes = filtreArtistes(updatedArtistes, listeScenesArray, stylesArray);
    updatedArtistes = filtreJour(updatedArtistes, jour);
    updatedArtistes = trieHeures(updatedArtistes);
    updatedArtistes = rechercheNomArtiste(updatedArtistes, rechercher);
    setFilterArtistes(updatedArtistes);
  }, [jour, artistes, rechercher, listeScenesArray, stylesArray]);

  useEffect(() => {
    setListeprogrammationMusicauxArray(programmationMusicauxArray(artistes));
    setListeScenesArray(SceneArray(artistes));
}, [artistes]);

  /**
   * Permet de changer le mot logique pour savoir quel filtre est séléctionné.
   *
   * @param {int} id - Id correspondant à la checkbox cochée.
   * @param {array} array - Liste de données qui sont à filtrer.
   * @returns {string} La liste triée.
   */
  function inversionLogiqueprogrammationMusicaux(id, array) {
    const arraySelected = array === stylesArray ? 0 : 1;
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
            data={stylesArray}
            renderItem={({ item }) => (
              <View>
                <CheckBox
                  title={item.style}
                  checked={item.selected}
                  onPress={() => {
                    inversionLogiqueprogrammationMusicaux(
                      item.id,
                      stylesArray
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
