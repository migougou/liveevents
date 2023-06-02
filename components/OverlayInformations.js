import React, { useState } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import PaginationDot from "react-native-animated-pagination-dot";
import moment from "moment";
import { useNavigation } from "@react-navigation/core";

const { width: screenWidth } = Dimensions.get("window");
const autoPlayIntervalTime = 5000;
const scrollAnimationDurationTime = 2000;

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

  const handleOpenDetailsInformations = (state) => {
    navigation.navigate("DetailsInformations");
    overlayInfoLogic();
    setChoixInfo(state);
  };

  return (
    <View style={styles.fullOverlay}>
      <GestureHandlerRootView>
        {nombreInfoImportantes > 0 ? (
          <View style={styles.carouselImportant}>
            <Carousel
              loop
              mode={nombreInfoImportantes > 1 ? "parallax" : "default"}
              width={screenWidth}
              height={screenWidth / 2}
              autoPlay={nombreInfoImportantes > 1}
              autoPlayInterval={autoPlayIntervalTime}
              scrollAnimationDuration={scrollAnimationDurationTime}
              onSnapToItem={(index) => setIndexInfoImportantes(index)}
              data={informationsImportantes}
              renderItem={({ item, index }) => (
                <View key={index} style={styles.infoCarousel}>
                  <Text style={styles.titreTextCarousel}>
                    Information importante n°{index + 1}
                  </Text>
                  <Text style={styles.textCarousel}>
                    {moment(item.acf.momentdepublication).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  </Text>
                  <Text style={styles.textCarouselMessage}>
                    {item.acf.messagecourt}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleOpenDetailsInformations("important")}
                    style={[styles.button, { backgroundColor: "#E24444" }]}
                  >
                    <Text style={styles.buttonText}>Plus d'informations</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            {nombreInfoImportantes > 1 ? (
              <View style={styles.paginationDot}>
                <PaginationDot
                  activeDotColor={"black"}
                  curPage={indexInfoImportantes}
                  maxPage={nombreInfoImportantes}
                />
              </View>
            ) : null}
          </View>
        ) : (
          <View style={[styles.infoCarousel, styles.carouselImportant]}>
            <Text style={styles.titreTextCarousel}>
              Pas d'information importante
            </Text>
          </View>
        )}
        {nombreInfoBanales > 0 ? (
          <View View style={styles.carouselBanale}>
            <Carousel
              loop
              mode={nombreInfoBanales > 1 ? "parallax" : "default"}
              width={screenWidth}
              height={screenWidth / 2}
              autoPlay={nombreInfoBanales > 1}
              autoPlayInterval={autoPlayIntervalTime}
              scrollAnimationDuration={scrollAnimationDurationTime}
              onSnapToItem={(index) => setIndexInfoBanales(index)}
              data={informationsBanales}
              renderItem={({ item, index }) => (
                <View key={index} style={styles.infoCarousel}>
                  <Text style={styles.titreTextCarousel}>
                    Information banale n°{index + 1}
                  </Text>
                  <Text style={styles.textCarousel}>
                    {moment(item.acf.momentdepublication).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  </Text>
                  <Text style={styles.textCarouselMessage}>
                    {item.acf.messagecourt}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleOpenDetailsInformations("banale")}
                    style={[styles.button, { backgroundColor: "#33CCFF" }]}
                  >
                    <Text style={styles.buttonText}>Plus d'informations</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            {nombreInfoBanales > 1 ? (
              <View style={styles.paginationDot}>
                <PaginationDot
                  activeDotColor={"black"}
                  curPage={indexInfoBanales}
                  maxPage={nombreInfoBanales}
                />
              </View>
            ) : null}
          </View>
        ) : (
          <View style={[styles.infoCarousel, styles.carouselBanale]}>
            <Text style={styles.titreTextCarousel}>
              Pas d'information banale
            </Text>
          </View>
        )}
      </GestureHandlerRootView>
    </View>
  );
};

export default OverlayInformations;

const styles = StyleSheet.create({
  fullOverlay: {
    width: screenWidth,
    margin: -10,
  },
  infoCarousel: {
    height: screenWidth / 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
  titreTextCarousel: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "900",
  },
  textCarousel: {
    fontSize: 18,
  },
  textCarouselMessage: {
    fontSize: 18,
    height: 90,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  carouselBanale: {
    backgroundColor: "#33CCFF",
  },
  carouselImportant: {
    backgroundColor: "#E24444",
  },
  paginationDot: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
