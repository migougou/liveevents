import React, { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import styles from "./styles";

const CarteArtiste = ({ item, onPress }) => {
  const hmdebut = item.acf.hdebut.slice(0, 5);
  const hmfin = item.acf.hfin.slice(0, 5);
  const [nomTraite, setNomTraite] = useState(item.title.rendered);

  // quand on fait une requete, les apostrophes deviennent des &rsquo; qui ne sont pas retransforme en apostrophes, on le fait donc ici
  useEffect(() => {
    const apostropheNom = () => {
      const nomArtiste = nomTraite;
      if (nomArtiste.includes("&rsquo;")) {
        return nomArtiste.replace(/&rsquo;/g, "'");
      }
      return nomArtiste;
    };
    setNomTraite(apostropheNom);
  }, [item]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.format}>
      <Image source={{ uri: item.acf.imageurl }} style={styles.icone} />
      <View style={styles.formatAdjust}>
        <Text>{nomTraite}</Text>
        <Text>
          {hmdebut} - {hmfin}
        </Text>
        <Text>
          {item.acf.scene} / {item.acf.style_musical}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CarteArtiste;
