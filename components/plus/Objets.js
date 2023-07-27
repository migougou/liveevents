import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import Footer from "../footer/footer";

const Logo = require("../../icones/concert.png");

const Objets = () => {
  const navigation = useNavigation();

  const handleContact = () => {
    navigation.navigate("Contact");
    // Logique à exécuter lors du clic sur le bouton "Nous Contacter"
    // Afficher une fenêtre modale de contact
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>OBJETS TROUVES & INTERDITS</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Entypo name="dropbox" size={20} color="black" style={styles.icon} />
          <Text style={styles.sectionTitle}>Objets trouvés</Text>
        </View>
        <View style={styles.section}>
          <MaterialIcons
            name="do-not-disturb"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>Objets interdits</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Nous Contacter" onPress={() => handleContact()} />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Objets;

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