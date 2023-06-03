import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

import styles from "./styles.js"

const Partenaires = ({ partenaires }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Ils nous font confiance</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.partenairesContainer}>
            {partenaires.map((partenaire, index) => (
              <TouchableOpacity
                style={styles.imgContainer}
                key={index}
                onPress={() => Linking.openURL(partenaire.acf.sitepartenaire)}
              >
                <Image
                  source={{ uri: partenaire.acf.imageurl }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Partenaires;