import { View, Text } from "react-native";
import React from "react";

import moment from "moment";
import "moment/locale/fr";
import styles from "./styles"

const InfoArtiste = ({ artiste, hmdebut, hmfin }) => (
  <View>
    <View style={styles.styleOrigineContainer}>
      <View style={styles.styleContainer}>
        <Text style={styles.style}>{artiste.acf.style_musical}</Text>
      </View>
      <View style={styles.styleOrigine}>
        <Text style={styles.style}>{artiste.acf.origine}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.info}>
        {moment(artiste.acf.date)
          .format("dddd D MMMM")
          .charAt(0)
          .toUpperCase() +
          moment(artiste.acf.date).format("dddd D MMMM").slice(1)}
      </Text>
      <Text style={styles.infos}>
        {hmdebut} - {hmfin}
      </Text>
      <Text style={styles.infos}>{artiste.acf.scene}</Text>
    </View>
  </View>
);

export default InfoArtiste;
