import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Footer from "../footer/footer";
import styles from "./styles";
import { C1, C2 } from "../colors";

const categories = [
  { title: "HORAIRE & ACCÈS",             icon: "map-pin",      keyName: "horaires",            pageName: "Infos"},
  { title: "SERVICES",                    icon: "suitcase",     keyName: "services",            pageName: "Services" },
  { title: "OBJETS TROUVÉS ET INTERDITS", icon: "info-circle",  keyName: "objets",              pageName: "Objets" },
  { title: "RESTAURANTS & BARS",          icon: "utensils",     keyName: "restaurants",         pageName: "Restaurant"},
];

const Plus = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentPlus}>
          <Text style={styles.plusTitle}>LIVE EVENTS</Text>
          <Text style={styles.textSousTitre}>10 - 11 juin</Text>
          <Text style={styles.textSousTitre}>Edition 2023</Text>
          <View style={styles.infosContainer}>
            <Text style={styles.textInfos}>INFOS PRATIQUES</Text>
            <View style={styles.separator} />
            {categories.map((category) => (
              <TouchableOpacity key={category.keyName} onPress={() => navigation.navigate(category.pageName)}>
                <View style={styles.sousText}>
                  <View style={styles.sousTextIcon}>
                    <FontAwesome5 style={styles.iconPlus} name={category.icon} size={20} color={C1} />
                  </View>
                  <Text style={styles.sousTextTitle}>{category.title}</Text>
                </View>
                <View style={styles.separator}/>
              </TouchableOpacity> 
            ))}
          </View>

          <TouchableOpacity style={styles.plusButton} onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.plusButtonText}>Nous Contacter</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Plus;