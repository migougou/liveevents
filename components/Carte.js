import MapView, { Marker, Callout } from "react-native-maps";
import { View, Text, Image } from "react-native";

import s_carte from "../styles/carte.js"

const toiletIcon = require("../icones/toilet-icon.png");
const sceneIcon = require("../icones/scene.png");
const restauIcon = require("../icones/restaurant.png");
const secourIcon = require("../icones/secours.png");

const initialPin = { latitude: 48.859349, longitude: 2.233235 };

const toiletPins = [
  { latitude: 48.861774, longitude: 2.235063 },
  { latitude: 48.861027, longitude: 2.233894 },
  { latitude: 48.857011, longitude: 2.231603 },
  { latitude: 48.856446, longitude: 2.233706 },
  { latitude: 48.8567, longitude: 2.235015 },
  { latitude: 48.858987, longitude: 2.235873 },
];

const scenePins = [
  { latitude: 48.861624, longitude: 2.234115 },
  { latitude: 48.860198, longitude: 2.23552 },
  { latitude: 48.855684, longitude: 2.233374 },
  { latitude: 48.855991, longitude: 2.231615 },
  { latitude: 48.856094, longitude: 2.235477 },
];

const restauPins = [
  { latitude: 48.857266, longitude: 2.232859 },
  { latitude: 48.857229, longitude: 2.23496 },
  { latitude: 48.858739, longitude: 2.23394 },
  { latitude: 48.860018, longitude: 2.234124 },
  { latitude: 48.85802, longitude: 2.236077 },
];

const secourPins = [
  { latitude: 48.85568, longitude: 2.233895 },
  { latitude: 48.857148, longitude: 2.233267 },
  { latitude: 48.858726, longitude: 2.235278 },
  { latitude: 48.860384, longitude: 2.234119 },
  { latitude: 48.861175, longitude: 2.235605 },
];

const Carte = () => {
  return (
    <View style={s_carte.container}>
      <MapView
        style={s_carte.map}
        initialRegion={{
          ...initialPin,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01,
        }}
      >
        {toiletPins.map((toilet, index) => (
          <Marker key={index} coordinate={toilet}>
            <Image source={toiletIcon} style={s_carte.toiletIcon} />
            <Callout style={s_carte.callout}>
              <Text>Toilettes</Text>
            </Callout>
          </Marker>
        ))}
        {scenePins.map((scene, index) => (
          <Marker key={index} coordinate={scene}>
            <Image source={sceneIcon} style={s_carte.sceneIcon} />
            <Callout style={s_carte.callout}>
              <Text>Scene</Text>
            </Callout>
          </Marker>
        ))}
        {restauPins.map((restau, index) => (
          <Marker key={index} coordinate={restau}>
            <Image source={restauIcon} style={s_carte.restauIcon} />
            <Callout style={s_carte.calloutRestau}>
              <Text>Restauration</Text>
            </Callout>
          </Marker>
        ))}
        {secourPins.map((secour, index) => (
          <Marker key={index} coordinate={secour}>
            <Image source={secourIcon} style={s_carte.secourIcon} />
            <Callout style={s_carte.callout}>
              <Text>Secours</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={s_carte.legend}>
        <Text style={s_carte.textLegendScene}>
          <Image source={sceneIcon} style={s_carte.sceneIconLegend} /> Scènes
        </Text>
        <Text style={s_carte.textLegend}>
          <Image source={toiletIcon} style={s_carte.toiletIcon} /> Toilettes
        </Text>
        <Text style={s_carte.textLegend}>
          <Image source={secourIcon} style={s_carte.secourIcon} /> Secours
        </Text>
        <Text style={s_carte.textLegend}>
          <Image source={restauIcon} style={s_carte.restauIcon} /> Restaurations
        </Text>
      </View>
    </View>
  );
};

export default Carte;
