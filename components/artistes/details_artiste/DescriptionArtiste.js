import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./styles"

const DescriptionArtiste = ({ artiste }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>
          {artiste.acf.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default DescriptionArtiste;
