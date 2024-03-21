import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import { setUpTime } from '../../utilities';
import styles from "./styles";

const CarteArtiste = ({ item, onPress }) => {
  const hmdebut = item.acf.hdebut.slice(0, 5);
  const hmfin = item.acf.hfin.slice(0, 5);
  const scene = item.acf.scene;
  const style_musical = item.acf.style_musical;
  const [nom, setNom] = useState(item.acf.artiste);

  return (
    <TouchableOpacity onPress={onPress} style={styles.format}>
      <Image source={{ uri: item.acf.imageurl }} style={styles.icone} />
      <View style={styles.formatAdjust}>
        <Text style={styles.text}>{nom}</Text>
        <Text style={styles.text}>De {setUpTime(hmdebut)} à {setUpTime(hmfin)}</Text>
        <Text style={styles.text}>Scène {scene} || Style {style_musical}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarteArtiste;
