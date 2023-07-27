import React, { useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps"
import { View, Text, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import styles from "./styles";
//import Geolocation from "react-native-geolocation-service";
//import OpenSettings from "react-native-open-settings";


const WCIcon = require("../../icones/toilet-icon.png");
const sceneIcon = require("../../icones/scene.png");
const restaurantIcon = require("../../icones/restaurant.png");
const assistanceIcon = require("../../icones/secours.png");

const initialPin = { latitude: 48.859349, longitude: 2.233235 };

const Carte = ({ localisations }) => {
  const [allLocations, setAllLocations] = useState(localisations);

  const [legendState, setLegendState] = useState({
    scene: true,
    WC: true,
    assistance: true,
    restaurant: true,
  });

  const getIconImage = (typeLocalisation) => {
    var lowercaseTypeLocalisation = typeLocalisation.toLowerCase();

    if (lowercaseTypeLocalisation.includes("restaurant")) {
      return legendState.restaurant ? restaurantIcon : null;
    } else if (lowercaseTypeLocalisation.includes("toilettes")) {
      return legendState.WC ? WCIcon : null;
    } else if (lowercaseTypeLocalisation.includes("scène")) {
      return legendState.scene ? sceneIcon : null;
    } else if (lowercaseTypeLocalisation.includes("secours")) {
      return legendState.assistance ? assistanceIcon : null;
    }
  };



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
        {allLocations.map((localisation) => (
          <Marker
            key={localisation.id}
            coordinate={{
              latitude: Number(localisation.acf.latitude),
              longitude: Number(localisation.acf.longitude),
            }}
          >
            <Image
              source={getIconImage(localisation.acf.localisation)}
              style={styles.assistanceIcon}
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
          <Image source={WCIcon} style={styles.WCIcon} />
          <Text style={styles.textWC}>Toilettes</Text>
          <CheckBox
            checked={legendState.WC}
            onPress={() =>
              setLegendState((prevState) => ({
                ...prevState,
                WC: !prevState.WC,
              }))
            }
          />
        </View>
        <View style={styles.legendItem}>
          <Image source={assistanceIcon} style={styles.assistanceIcon} />
          <Text style={styles.textAssistance}>Secours</Text>
          <CheckBox
            checked={legendState.assistance}
            onPress={() =>
              setLegendState((prevState) => ({
                ...prevState,
                assistance: !prevState.assistance,
              }))
            }
          />
        </View>
        <View style={styles.legendItem}>
          <Image source={restaurantIcon} style={styles.restaurantIcon} />
          <Text style={styles.textRestaurant}>Restaurations</Text>
          <CheckBox
            checked={legendState.restaurant}
            onPress={() =>
              setLegendState((prevState) => ({
                ...prevState,
                restaurant: !prevState.restaurant,
              }))
            }
          />
        </View>
      </View>
    </View>

  );
};

export default Carte;
