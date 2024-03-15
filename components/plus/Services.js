import React, { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView  } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Footer from "../footer/footer";
import styles from "./styles.js";

const wordpressPlus = require("../../local_data/wordpressPlus.json");

const sousCategoriesIcon = {
  'Casiers': 'expeditedssl',
  'Recharge mobile' : 'mobile-alt',
  "Retrait d'argent": 'credit-card',
  'Toilettes': 'toilet',
  'Secours' : 'ambulance',
  'Merchandising' : 'tshirt',

};

const Services = ({ navigation }) => {
  const servicesTemporaire = [];

  wordpressPlus.forEach((info) => {
    const categoryInfo = info.acf.categories_infos;

    if (categoryInfo === "Services") { servicesTemporaire.push(info); }
  });

  const [isExpanded, setisExpanded] = useState(servicesTemporaire.map(() => false));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SERVICES</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {servicesTemporaire.map((info, index) => (
            <View key={index}>
              <View style={styles.section}>
                <FontAwesome5 name={sousCategoriesIcon[info.acf.sous_categories]} size={20} color="black" style={styles.icon} />
                <Text style={styles.sectionTitle}>{info.acf.sous_categories}</Text>
              </View>
              <View style={styles.contentText}>
                <Text>
                  {isExpanded[index] ? info.acf.texte_info : info.acf.texte_info.slice(0, 150) + (info.acf.texte_info.length > 150 ? "..." : "")}
                </Text>
                {info.acf.texte_info.length > 150 && (
                  <Text
                    style={styles.voirPlus}
                    onPress={() => {
                      const cloneIsExpanded = [...isExpanded];
                      cloneIsExpanded[index] = !cloneIsExpanded[index];
                      setisExpanded(cloneIsExpanded);
                    }}
                  >
                    {isExpanded[index] ? "Voir moins" : "Voir plus"}
                  </Text>
                )}
              </View>
            </View>
          ))
          }
        </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.buttonText}>Nous Contacter</Text>
          </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

