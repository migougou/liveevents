import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./styles"

const HeaderArtiste = ({ artiste, navigation }) => (
  <View>
    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>
    </View>
    <Image style={styles.format} source={{ uri: artiste.acf.imageurl }} />
    <Text style={styles.nomArtiste}>{artiste.acf.artiste}</Text>
  </View>
);

export default HeaderArtiste;
