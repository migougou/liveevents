import React from "react";
import { View, Text, Image, TouchableOpacity, Linking, ScrollView, SafeAreaView } from "react-native";

import styles from "./styles";
import Footer from "../footer/footer.js";


const wordpressPartenaires = require ("../../local_data/wordpressPartenaires.json")

const Partenaires = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nos partenaires</Text>
      </View>
      <ScrollView>
        <View style={styles.containerPartenaires}>
          {wordpressPartenaires.map((info, index) => (
            <TouchableOpacity style={styles.imgContainer} key={index} onPress={() => Linking.openURL(info.acf.sitepartenaire)}>
              <Image source={{ uri: info.acf.imageurl }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Partenaires;