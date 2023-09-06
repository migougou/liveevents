import React from "react";
import { Text, View, SafeAreaView, Linking, TouchableOpacity, ScrollView } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Footer from "../footer/footer";
import styles from "./styles";

const email = "contact@liveevents.com";

const Contact = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContact}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.titleContact}>CONTACT</Text>
          <Text>
            Envoyez-nous un mail pour toutes questions concernant le festival en
            cliquant sur le lien ci-dessous ou contactez-nous via nos réseaux
            sociaux.
          </Text>
          <Text style={styles.email} onPress={() => Linking.openURL(`mailto:${email}`)}>{email}</Text>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;
