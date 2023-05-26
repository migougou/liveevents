import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";

import s_carte_artiste from "../styles/carteArtiste";

const CarteArtiste = ({ item }) => {
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
    <View style={s_carte_artiste.format}>
      <Image source={{ uri: item.acf.imageurl }} style={s_carte_artiste.icone} />
      <View style={s_carte_artiste.formatAdjust}>
        <Text>{nomTraite}</Text>
        <Text>
          {hmdebut} - {hmfin}
        </Text>
        <Text>
          {item.acf.scene} / {item.acf.style_musical}
        </Text>
      </View>
    </View>
  );
};

export default CarteArtiste;
