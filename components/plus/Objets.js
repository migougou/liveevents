import React, { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Footer from "../footer/footer";
import styles from "./styles.js";

const wordpressPlus = require("../../local_data/wordpressPlus.json");

const sousCategoriesIcon = {
  'Objets trouvés': 'box-open',
  'Objets interdits': 'ban',
};

const Objets = ({ navigation }) => {
  const objetsTemporaire = [];

  wordpressPlus.forEach((info) => {
    const categoryInfo = info.acf.categories_infos;

    if (categoryInfo === "Objets trouvés et interdits") { objetsTemporaire.push(info); }
  });

  const [isExpanded, setisExpanded] = useState(objetsTemporaire.map(() => false));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Objets trouvés et interdits</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {objetsTemporaire.map((info, index) => (
            <View key={index}>
              <View style={styles.section}>
                <FontAwesome5 name={sousCategoriesIcon[info.acf.sous_categories]} size={20} color="black" style={styles.icon} />
                <Text style={styles.sectionTitle}>{info.acf.sous_categories}</Text>
              </View>
              <View style={styles.contentText}>
                <Text style={styles.sectionText}>
                  {info.acf.texte_info}
                </Text>
                 {/* Ajouter l'image uniquement si la catégorie est "Objets interdits" */}
                 {info.acf.sous_categories === 'Objets interdits' && (
                  <Image source={require('../../images/objets-interdits.png')} style={styles.imageObjetsInt} />
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

export default Objets;
