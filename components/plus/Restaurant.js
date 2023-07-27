import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Footer from "../footer/footer";


const Logo = require("../../icones/concert.png");

const Restaurant = () => {
  const navigation = useNavigation();

  const handleContact = () => {
    navigation.navigate("Contact");
    // Logique à exécuter lors du clic sur le bouton "Nous Contacter"
    // Afficher une fenêtre modale de contact
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>RESTAURANTS & BARS</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <FontAwesome5
            name="drumstick-bite"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>Restaurants</Text>
        </View>
        <View style={styles.section}>
          <Ionicons name="beer" size={20} color="black" style={styles.icon} />
          <Text style={styles.sectionTitle}>Bars</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Nous Contacter" onPress={() => handleContact()} />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Restaurant;

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