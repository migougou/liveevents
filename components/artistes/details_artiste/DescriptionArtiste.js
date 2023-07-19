import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles"

const DescriptionArtiste = ({ artiste }) => (
  <View>
    <View style={styles.localiserContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>LOCALISER</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionStyle}>
        {artiste.acf.description}
      </Text>
    </View>
  </View>
);

export default DescriptionArtiste;
