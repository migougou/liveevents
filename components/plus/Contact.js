import React from "react";
import { Text, View, SafeAreaView, Linking, TouchableOpacity, ScrollView } from "react-native";
import { C1, C2, C3, C4, C5, C6, C7 } from "../colors.js";


import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Footer from "../footer/footer";
import styles from "./styles";



// TODO: Ne pas stocker en dur une adresse mail dans le front !
const email = "contact@liveevents.com";

const Contact = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContact}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={22} color={C3} />
          </TouchableOpacity>
          <Text style={styles.titleContact}>CONTACT</Text>
          <Text style={styles.textContact}>
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
