import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Linking, useWindowDimensions, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import Footer from "../footer/footer";

const Contact = ({ navigation }) => {
  const email = "contact@liveevents.com";
  const windowDimensions = useWindowDimensions();
  const backgroundImageStyle = {
    width: windowDimensions.width,
    height: windowDimensions.height,
    resizeMode: "cover",
  };

  const handleGoBack = () => {
    navigation.navigate("Plus");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => handleGoBack()}>
              <Icon name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.textContact}>CONTACT</Text>
        </View>

        <Text>
          Envoyez-nous un mail pour toutes questions concernant le festival en
          cliquant sur le lien ci-dessous ou contactez-nous via nos réseaux
          sociaux.
        </Text>
        <Text
          style={styles.email}
          onPress={() => Linking.openURL(`mailto:${email}`)}
        >
          {email}
        </Text>
      </View>
      <View style={styles.backgroundContainer}>
        <Image
          source={require("../../images/festival4.jpg")}
          style={[styles.backgroundImage, backgroundImageStyle]}
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    marginBottom: 205,
  },
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 10,
    marginHorizontal: 40,
    borderRadius: 10,
    marginVertical: 120,
  },
  textContact: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  email: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 40,
    fontSize: 18,
  },
  backButtonContainer: {
    top: 25,
    right: 90,
  },
});