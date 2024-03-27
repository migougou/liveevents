import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { C1, C2, C3 } from "../../colors";
import { FontAwesome5 } from "@expo/vector-icons";

const HeaderArtiste = ({ artiste, navigation }) => (
  <View>
    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="chevron-left" size={30} color={C3} />
      </TouchableOpacity>
    </View>
    <Image style={styles.format} source={{ uri: artiste.acf.imageurl }} />
    <Text style={styles.nomArtiste}>{artiste.acf.artiste}</Text>
  </View>
);

export default HeaderArtiste;
