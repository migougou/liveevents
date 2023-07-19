import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles"

const HeaderArtiste = ({ artiste, navigation }) => (
  <View>
    <Image style={styles.format} source={{ uri: artiste.acf.imageurl }} />
    <View style={styles.nomArtiste}>
      <Text style={styles.sizeArtiste}>{artiste.acf.artiste}</Text>
    </View>
  </View>
);

export default HeaderArtiste;

/*
import Icon from "react-native-vector-icons/FontAwesome";

    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={20} color="white" />
      </TouchableOpacity>
    </View>
*/
