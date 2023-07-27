import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Footer from "../footer/footer";

const Logo = require("../../icones/concert.png");

const Infos = () => {
  const navigation = useNavigation();

  const handleContact = () => {
    navigation.navigate("Contact");
    // Logique à exécuter lors du clic sur le bouton "Nous Contacter"
    // Afficher une fenêtre modale de contact
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HORAIRE & ACCES</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <FontAwesome
            name="clock-o"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>Horaires</Text>
        </View>
        <View style={styles.section}>
          <FontAwesome
            name="map-pin"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>Accès</Text>
        </View>
        <View style={styles.section}>
          <FontAwesome5
            name="car-side"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>Transports</Text>
        </View>
        <View style={styles.section}>
          <MaterialCommunityIcons
            name="wheelchair-accessibility"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>Accessibilité</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Nous Contacter" onPress={() => handleContact()} />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Infos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    marginHorizontal: 100,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
});