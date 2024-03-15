import React from "react";
import { ScrollView, Text, View } from "react-native";


import styles from "./styles";
import FAQSection from './FAQSection';

// Handle FAQ Generation
// TODO: Passer la gestion des données de la FAQ dans le back-end ?
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
];

const FAQ = () => {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <Text style={styles.headerText}>Foire Aux Questions</Text>
        <View style={styles.faqContainer}>
        {FAQ_DATA.map((section, index) => (
          <FAQSection key={index} section={section} />
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQ;
