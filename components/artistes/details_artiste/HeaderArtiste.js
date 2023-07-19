import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
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
