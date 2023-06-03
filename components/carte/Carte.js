import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View, Text, Image } from "react-native";
import { CheckBox } from "react-native-elements";

import styles from "./styles"

const toiletIcon = require("../../icones/toilet-icon.png");
const sceneIcon = require("../../icones/scene.png");
const restauIcon = require("../../icones/restaurant.png");
const secourIcon = require("../../icones/secours.png");

const initialPin = { latitude: 48.859349, longitude: 2.233235 };

const Carte = ({ localisations }) => {
  const [toutesLocalisations, setToutesLocalisations] = useState(localisations);

  const [legendState, setLegendState] = useState({
    scene: true,
    toilet: true,
    secour: true,
    restau: true,
  });

  const getIconImage = (typeLocalisation) => {
    var lowercaseTypeLocalisation = typeLocalisation.toLowerCase();

    if (lowercaseTypeLocalisation.includes("restaurant")) {
      return legendState.restau ? restauIcon : null;
    } else if (lowercaseTypeLocalisation.includes("toilettes")) {
      return legendState.toilet ? toiletIcon : null;
    } else if (lowercaseTypeLocalisation.includes("scène")) {
      return legendState.scene ? sceneIcon : null;
    } else if (lowercaseTypeLocalisation.includes("secours")) {
      return legendState.secour ? secourIcon : null;
    }
  };

  useEffect(() => {
    const trieLocalisations = localisations.map((localisation) => {});
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialPin,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01,
        }}
      >
        {toutesLocalisations.map((localisation) => (
          <Marker
            key={localisation.id}
            coordinate={{
              latitude: Number(localisation.acf.latitude),
              longitude: Number(localisation.acf.longitude),
            }}
          >
            <Image
              source={getIconImage(localisation.acf.localisation)}
              style={styles.secourIcon}
            />
            <Callout style={styles.callout}>
              <Text>{localisation.acf.localisation}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <Image source={sceneIcon} style={styles.sceneIconLegend} />
          <Text style={styles.textScene}>Scènes</Text>
          <CheckBox
            checked={legendState.scene}
            onPress={() =>
              setLegendState((prevState) => ({
                ...prevState,
                scene: !prevState.scene,
              }))
            }
          />
        </View>
        <View style={styles.legendItem}>
          <Image source={toiletIcon} style={styles.toiletIcon} />
          <Text style={styles.textToilet}>Toilettes</Text>
          <CheckBox
            checked={legendState.toilet}
            onPress={() =>
              setLegendState((prevState) => ({
                ...prevState,
                toilet: !prevState.toilet,
              }))
            }
          />
        </View>
        <View style={styles.legendItem}>
          <Image source={secourIcon} style={styles.secourIcon} />
          <Text style={styles.textSecour}>Secours</Text>
          <CheckBox
            checked={legendState.secour}
            onPress={() =>
              setLegendState((prevState) => ({
                ...prevState,
                secour: !prevState.secour,
              }))
            }
          />
        </View>
        <View style={styles.legendItem}>
          <Image source={restauIcon} style={styles.restauIcon} />
          <Text style={styles.textRestau}>Restaurations</Text>
          <CheckBox
            checked={legendState.restau}
            onPress={() =>
              setLegendState((prevState) => ({
                ...prevState,
                restau: !prevState.restau,
              }))
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Carte;
