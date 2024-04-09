import React from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";
import Carousel from "react-native-reanimated-carousel";
import moment from "moment";


import { handleOpenDetails, compteurPage } from "../utilities.js"

import styles from "./styles";


const screenWidth = Dimensions.get("window").width;
const autoPlayIntervalTime = 5000;
const scrollAnimationDurationTime = 2000;

const CarouselInformations = ({
  infoSelected,
  informationsBanales,
  nombreInfoBanales,
  indexInfoBanales,
  setIndexInfoBanales,
  informationsImportantes,
  nombreInfoImportantes,
  indexInfoImportantes,
  setIndexInfoImportantes,
  handleOpenDetailsInformations
}) => {


  const nombreInfoSelected = infoSelected === "Important" ? nombreInfoImportantes : nombreInfoBanales;
  const indexInfoSelected = infoSelected === "Important" ? indexInfoImportantes : indexInfoBanales;
  const informationsSelected = infoSelected === "Important" ? informationsImportantes : informationsBanales;

  // TODO: Le render d'un composant doit être unique !
  if (nombreInfoSelected === 0) {
    return (
      <View style={[styles.infoCarousel, styles[`carousel${infoSelected}`]]}>
        <Text style={styles.titreTextCarousel}>Pas d'information importante</Text>
      </View>
    );
  };

  return (
    <View style={styles[`carousel${infoSelected}`]}>
      <Carousel
        loop
        mode={nombreInfoSelected > 1 ? "parallax" : "default"}
        width={screenWidth}
        height={screenWidth / 2}
        autoPlay={nombreInfoSelected > 1}
        autoPlayInterval={autoPlayIntervalTime}
        scrollAnimationDuration={scrollAnimationDurationTime}
        onSnapToItem={(index) => compteurPage(infoSelected, setIndexInfoImportantes, setIndexInfoBanales, index)}
        data={informationsSelected}
        renderItem={({ item, index }) => (
          <View key={index} style={[styles.infoCarousel, infoSelected === "Important" ? styles.infoImportant : styles.infoBanale]}>
            <Text style={styles.titreTextCarousel}>
              Information {infoSelected.toLowerCase()}e n°{index + 1}
            </Text>
            <Text style={styles.textCarousel}>
              {moment(item.acf.momentdepublication).format("DD/MM/YYYY HH:mm")}
            </Text>
            <Text style={styles.textCarouselMessage}>
              {item.acf.messagecourt}
            </Text>
            <TouchableOpacity
              onPress={() => handleOpenDetails(infoSelected, handleOpenDetailsInformations)}
              style={styles[`button${infoSelected}`]}
            >
              <Text style={styles.buttonText}>Plus d'informations</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {nombreInfoSelected > 1 && (
        <View style={styles.paginationDot}>
          <PaginationDot
            activeDotColor={"black"}
            curPage={indexInfoSelected}
            maxPage={nombreInfoSelected}
          />
        </View>
      )}
    </View>
  );
};

export default CarouselInformations;