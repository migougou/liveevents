import React from "react";
import { ScrollView, Text, View } from "react-native";


import styles from "./styles";
import FAQSection from './FAQSection';

const FAQ_DATA = [
  {
    title: 'Le Festival',
    questions: [
      ["Peut-on apporter ses boissons?", "Les bouteilles ne sont pas tolérées..."],
      ["Y a-t-il un âge autorisé pour venir à NationSound?", "NationSound est un festival ouvert..."],
    ]
  },
  {
    title: 'La Billeterie',
    questions: [
      ["Où puis-je acheter mon pass?", "Sur notre billetterie..."],
    ]
  },


  // C'est dynamique, donc on peut tout générer de cette manière
  // Peut-être passer ça dans en back-end ?
];

const FAQ = () => {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <Text style={styles.headerText}>Foire aux Questions</Text>
        {FAQ_DATA.map((section, index) => (
          <FAQSection key={index} section={section} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FAQ;
