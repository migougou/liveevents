import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import moment from "moment";
import "moment/locale/fr";
import {} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles"

moment.locale("fr");


const DetailsArtiste = ({ artiste }) => {
  if (typeof artiste !== "undefined") {
    const hmdebut = artiste.acf.hdebut.slice(0, 5);
    const hmfin = artiste.acf.hfin.slice(0, 5);

    return (
      <ScrollView>
        <View>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Image style={styles.format} source={{ uri: artiste.acf.imageurl }} />
          <View style={styles.nomArtiste}>
            <Text style={styles.sizeArtiste}>{artiste.acf.artiste}</Text>
          </View>
          <View style={styles.styleOrigineContainer}>
            <View style={styles.styleContainer}>
              <Text style={styles.style}>{artiste.acf.style_musical}</Text>
            </View>
            <View style={styles.styleOrigine}>
              <Text style={styles.style}>{artiste.acf.origine}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.info}>
              {moment(artiste.acf.date)
                .format("dddd D MMMM")
                .charAt(0)
                .toUpperCase() +
                moment(artiste.acf.date).format("dddd D MMMM").slice(1)}
            </Text>
            <Text style={styles.infos}>
              {hmdebut} - {hmfin}
            </Text>
            <Text style={styles.infos}>{artiste.acf.scene}</Text>
          </View>
          <View style={styles.localiserContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>LOCALISER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionStyle}>
              {artiste.acf.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return null;
  }
};

export default DetailsArtiste;
