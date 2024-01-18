import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { SearchBar, CheckBox } from "react-native-elements";

import { filtreArtistes, filtreJour, trieHeures, rechercheNomArtiste, stylesArrayFilter, sceneArrayFilter, inversionLogique } from "../../utilities.js"
import { C1, C2, C3, C4, C5, C6, C7 } from "../../colors";
import CarteArtiste from "../carte_artiste/CarteArtiste.js";

import IconToggleButton from "./IconToggleButton.js";
import DayButton from "./DayButton.js";
import FilterCheckList from "./FilterCheckList.js";
import styles from "./styles.js";


const Programmation = ({ artistes, navigation }) => {
  const [filterArtistes, setFilterArtistes] = useState([]);
  const [jour, setJour] = useState("samedi");
  const [filtre, setFiltre] = useState(false);
  const [recherche, setRecherche] = useState(false);
  const [rechercher, setRechercher] = useState("");
  const [stylesArray, setStylesArray] = useState([]);
  const [scenesArray, setScenesArray] = useState([]);

  useEffect(() => {
    let updatedArtistes = artistes;

    updatedArtistes = filtreJour(updatedArtistes, jour);
    updatedArtistes = trieHeures(updatedArtistes);
    updatedArtistes = rechercheNomArtiste(updatedArtistes, rechercher);
    updatedArtistes = filtreArtistes(updatedArtistes, scenesArray, stylesArray);

    setFilterArtistes(updatedArtistes);
  }, [jour, artistes, rechercher, scenesArray, stylesArray]);

  useEffect(() => {
    setStylesArray(stylesArrayFilter(artistes));
    setScenesArray(sceneArrayFilter(artistes));
  }, [artistes]);

  /**
   * Renvoie un composant CheckBox avec des propriétés définies en fonction des éléments de la liste.
   *
   * @param {array} array - Liste de données qui sont à filtrer.
   * @param {function} setArray - Fonction pour mettre à jour l'état de la liste.
   * @returns {function} Une fonction qui prend un objet item et renvoie un composant CheckBox.
   */
  const renderCheckbox = (array, setArray) => ({ item }) => (
    <View>
      <CheckBox
        title={item.style || item.scene}
        checked={item.selected}
        onPress={() => { inversionLogique(item.id, array, setArray) }}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxTitle}
        checkedIcon="music"
        checkedColor={C3}
        uncheckedIcon="music"
        uncheckedColor={C2}
        wrapperStyle={C1}
      />
    </View>
  );

  return (
    <View style={styles.root}>
      <View style={styles.topBar}>
        <IconToggleButton
          source={require("../../../icones/rechercher.png")}
          altSource={require("../../../icones/croix.png")}
          onPress={() => {
            setRecherche(!recherche);
            if (filtre) setFiltre(false);
          }}
          toggle={recherche}
        />
        <DayButton
          label="SAMEDI"
          date="01 Août"
          selected={jour === "samedi"}
          onPress={() => setJour("samedi")}
        />
        <DayButton
          label="DIMANCHE"
          date="02 Août"
          selected={jour === "dimanche"}
          onPress={() => setJour("dimanche")}
        />
        <IconToggleButton
          source={require("../../../icones/filtre.png")}
          altSource={require("../../../icones/croix.png")}
          onPress={() => {
            setFiltre(!filtre);
            if (recherche) setRecherche(false);
          }}
          toggle={filtre}
        />
      </View>
      {filtre ? (
        <FilterCheckList
          title1="Styles"
          data1={stylesArray}
          renderCheckbox1={renderCheckbox(stylesArray, setStylesArray)}
          title2="Scènes"
          data2={scenesArray}
          renderCheckbox2={renderCheckbox(scenesArray, setScenesArray)}
        />
      ) : (
        <View style={{ flex: 1 }}>
          {recherche && (
            <SearchBar
              placeholder="Nom de l'artiste"
              round
              value={rechercher}
              onChangeText={(text) => setRechercher(text)}
              onSubmitEditing={() => setRecherche(false)}
              onClear={() => setRecherche(false)}
              autoCorrect={false}
            />
          )}
          <FlatList
            data={filterArtistes}
            renderItem={({ item }) => (
              <CarteArtiste item={item} onPress={() => navigation.navigate("Details de l'artiste", { artiste: item })}/>
            )}
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
