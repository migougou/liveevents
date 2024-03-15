import React, { useMemo } from "react";
import { ScrollView } from "react-native";

import DescriptionArtiste from "./DescriptionArtiste";
import HeaderArtiste from "./HeaderArtiste";
import InfoArtiste from "./InfoArtiste";

const DetailsArtiste = ({ route, navigation }) => {
  const { artiste } = route.params;

  if (!artiste) { return null; }

  const { acf: { hdebut, hfin } } = artiste;
  const hmdebut = useMemo(() => hdebut.slice(0, 5), [hdebut]);
  const hmfin = useMemo(() => hfin.slice(0, 5), [hfin]);

  return (
    <ScrollView>
      <HeaderArtiste artiste={artiste} navigation={navigation}/>
      <InfoArtiste artiste={artiste} hmdebut={hmdebut} hmfin={hmfin} />
      <DescriptionArtiste artiste={artiste} />
    </ScrollView>
  );
};

export default DetailsArtiste;