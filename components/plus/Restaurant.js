import React, { useState } from "react";
import { Text, View, TouchableOpacity, Button, SafeAreaView, ScrollView  } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Footer from "../footer/Footer";
import styles from "./styles";

const wordpressPlus = require("../../local_data/wordpressPlus.json");

const sousCategoriesIcon = {
  'Restaurants': 'drumstick-bite',
  'Bars': 'beer',
};

const Restaurant = ({ navigation }) => {
  const restaurantTemporaire = [];

  wordpressPlus.forEach((info) => {
    const categoryInfo = info.acf.categories_infos;

    if (categoryInfo === "Restaurants et Bars") {
      restaurantTemporaire.push(info);
    }
  });

  const [isExpanded, setisExpanded] = useState(restaurantTemporaire.map(() => false));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Restaurants</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {restaurantTemporaire.map((info, index) => (
            <View key={index}>
              <View style={styles.section}>
                <FontAwesome5 name={sousCategoriesIcon[info.acf.sous_categories]} size={20} color="black" style={styles.icon} />
                <Text style={styles.sectionTitle}>{info.acf.sous_categories}</Text>
              </View>
              <View style={styles.contentText}>
                <Text>
                  {info.acf.texte_info}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contact")}>
          <Text style={styles.buttonText}>Nous Contacter</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
