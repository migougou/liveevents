import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { C1, C2 } from "../../colors";

const HeaderArtiste = ({ artiste, navigation }) => (
  <View>
    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color={C1} />
      </TouchableOpacity>
    </View>
    <Image style={styles.format} source={{ uri: artiste.acf.imageurl }} />
    <Text style={styles.nomArtiste}>{artiste.acf.artiste}</Text>
  </View>
);

export default HeaderArtiste;
