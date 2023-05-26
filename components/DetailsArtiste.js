import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import "moment/locale/fr";
import {} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import s_details_artistes from "../styles/detailsArtiste"

moment.locale("fr");


const DetailsArtiste = ({ artiste }) => {
  if (typeof artiste !== "undefined") {
    const hmdebut = artiste.acf.hdebut.slice(0, 5);
    const hmfin = artiste.acf.hfin.slice(0, 5);

    return (
      <ScrollView>
        <View>
          <View style={s_details_artistes.backButtonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Image style={s_details_artistes.format} source={{ uri: artiste.acf.imageurl }} />
          <View style={s_details_artistes.nomArtiste}>
            <Text style={s_details_artistes.sizeArtiste}>{artiste.acf.artiste}</Text>
          </View>
          <View style={s_details_artistes.styleOrigineContainer}>
            <View style={s_details_artistes.styleContainer}>
              <Text style={s_details_artistes.style}>{artiste.acf.style_musical}</Text>
            </View>
            <View style={s_details_artistes.styleOrigine}>
              <Text style={s_details_artistes.style}>{artiste.acf.origine}</Text>
            </View>
          </View>
          <View>
            <Text style={s_details_artistes.info}>
              {moment(artiste.acf.date)
                .format("dddd D MMMM")
                .charAt(0)
                .toUpperCase() +
                moment(artiste.acf.date).format("dddd D MMMM").slice(1)}
            </Text>
            <Text style={s_details_artistes.infos}>
              {hmdebut} - {hmfin}
            </Text>
            <Text style={s_details_artistes.infos}>{artiste.acf.scene}</Text>
          </View>
          <View style={s_details_artistes.localiserContainer}>
            <TouchableOpacity style={s_details_artistes.button} onPress={() => {}}>
              <Text style={s_details_artistes.buttonText}>LOCALISER</Text>
            </TouchableOpacity>
          </View>
          <View style={s_details_artistes.descriptionContainer}>
            <Text style={s_details_artistes.descriptionStyle}>
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
