import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

import s_partenaires from "./styles.js"

const Partenaires = ({ partenaires }) => {
  return (
    <View style={s_partenaires.container}>
      <View style={s_partenaires.content}>
        <Text style={s_partenaires.title}>Ils nous font confiance</Text>
        <ScrollView contentContainerStyle={s_partenaires.scrollContainer}>
          <View style={s_partenaires.partenairesContainer}>
            {partenaires.map((partenaire, index) => (
              <TouchableOpacity
                style={s_partenaires.imgContainer}
                key={index}
                onPress={() => Linking.openURL(partenaire.acf.sitepartenaire)}
              >
                <Image
                  source={{ uri: partenaire.acf.imageurl }}
                  style={s_partenaires.image}
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