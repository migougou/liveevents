import { View, Text } from "react-native";
import React from "react";

import { setUpDate, setUpTime } from "../../utilities";

import styles from "./styles"

const InfoArtiste = ({ artiste, hmdebut, hmfin }) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.info}>Catégorie : {artiste.acf.style_musical}</Text>
        <Text style={styles.info}>Pays : {artiste.acf.origine}</Text>
      </View>
      <Text style={styles.centerInfo}>Concert le {setUpDate(artiste.acf.date)} de {setUpTime(hmdebut)} à {setUpTime(hmfin)} sur la scène {artiste.acf.scene}</Text>
    </View>
  </View>
);

export default InfoArtiste;
