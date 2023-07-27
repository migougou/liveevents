import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Footer from "../footer/footer";

const Logo = require("../../icones/concert.png");

const Plus = () => {
  const navigation = useNavigation();

  const handleContact = () => {
    navigation.navigate("Contact");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.textTitre}>LIVE EVENTS</Text>
        <Text>10 - 11 juin</Text>
        <Text>Edition 2023</Text>
        <View style={styles.contentMid}>
          <View style={styles.textContainer}>
            <Text style={styles.textInfos}>INFOS PRATIQUES</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Infos")}>
              <View style={styles.sousText}>
                <View style={styles.sousTextIcon}>
                  <FontAwesome name="map-pin" size={20} color="black" />
                </View>
                <Text style={styles.sousTextHoraire}>HORAIRE & ACCES</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => navigation.navigate("Services")}>
              <View style={styles.sousText}>
                <View style={styles.sousTextIcon}>
                  <FontAwesome name="suitcase" size={20} color="black" />
                </View>
                <Text style={styles.sousTextFS}>SERVICES</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => navigation.navigate("Objets")}>
              <View style={styles.sousText}>
                <View style={styles.sousTextIcon}>
                  <FontAwesome name="info" size={20} color="black" />
                </View>
                <Text style={styles.sousTextObjets}>
                  OBJETS TROUVES ET INTERDITS
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
              <View style={styles.sousText}>
                <View style={styles.sousTextIcon}>
                  <Ionicons name="restaurant" size={20} color="black" />
                </View>
                <Text style={styles.sousTextFS}>RESTAURANTS & BARS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <Button title="Nous Contacter" onPress={() => handleContact()} />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Plus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  contentMid: {
    fontWeight: "bold",
    backgroundColor: "red",
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 20,
  },
  textContainer: {
    padding: 10,
    flexDirection: "column",
    alignItems: "stretch",
  },
  textInfos: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  textTitre: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 100,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    marginTop: 40,
  },
  sousText: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "auto",
  },
  sousTextHoraire: {
    marginLeft: 24,
    fontSize: 16,
    paddingBottom: 10,
    height: 30,
  },
  sousTextObjets: {
    marginLeft: 28,
    fontSize: 16,
    paddingBottom: 10,
    height: 30,
  },
  sousTextFS: {
    marginLeft: 15,
    fontSize: 16,
    paddingBottom: 10,
    height: 30,
  },
  sousTextIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
});
