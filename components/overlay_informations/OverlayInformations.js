import React, { useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import { handleOpenDetailsInformations } from "../utilities.js"
import CarouselInformations from "./CarouselInformations";

import styles from "./styles";

const OverlayInformations = ({
  informationsBanales,
  informationsImportantes,
  overlayInfoLogic,
  setChoixInfo,
}) => {

  const navigation = useNavigation();

  const nombreInfoBanales = informationsBanales.length;
  const [indexInfoBanales, setIndexInfoBanales] = useState(0);
  const nombreInfoImportantes = informationsImportantes.length;
  const [indexInfoImportantes, setIndexInfoImportantes] = useState(0);

  const functionHandleOpenDetailsInformations = (state) =>
    handleOpenDetailsInformations(state, navigation, overlayInfoLogic, setChoixInfo);

  return (
    <View style={styles.fullOverlay}>
      <GestureHandlerRootView>
        <CarouselInformations
          infoSelected="Important"
          informationsImportantes={informationsImportantes}
          nombreInfoImportantes={nombreInfoImportantes}
          indexInfoImportantes={indexInfoImportantes}
          setIndexInfoImportantes={setIndexInfoImportantes}
          handleOpenDetailsInformations={functionHandleOpenDetailsInformations}
        />
        <CarouselInformations
          infoSelected="Banal"
          informationsBanales={informationsBanales}
          nombreInfoBanales={nombreInfoBanales}
          indexInfoBanales={indexInfoBanales}
          setIndexInfoBanales={setIndexInfoBanales}
          handleOpenDetailsInformations={functionHandleOpenDetailsInformations}
        />
      </GestureHandlerRootView>
    </View>
  );
};

export default OverlayInformations;
