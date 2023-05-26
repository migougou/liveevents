import React, { useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View, StyleSheet, Text, Image } from "react-native";

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
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialPin,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01,
        }}
      >
        {toiletPins.map((toilet, index) => (
          <Marker key={index} coordinate={toilet}>
            <Image source={toiletIcon} style={styles.toiletIcon} />
            <Callout style={styles.callout}>
              <Text>Toilettes</Text>
            </Callout>
          </Marker>
        ))}
        {scenePins.map((scene, index) => (
          <Marker key={index} coordinate={scene}>
            <Image source={sceneIcon} style={styles.sceneIcon} />
            <Callout style={styles.callout}>
              <Text>Scene</Text>
            </Callout>
          </Marker>
        ))}
        {restauPins.map((restau, index) => (
          <Marker key={index} coordinate={restau}>
            <Image source={restauIcon} style={styles.restauIcon} />
            <Callout style={styles.calloutRestau}>
              <Text>Restauration</Text>
            </Callout>
          </Marker>
        ))}
        {secourPins.map((secour, index) => (
          <Marker key={index} coordinate={secour}>
            <Image source={secourIcon} style={styles.secourIcon} />
            <Callout style={styles.callout}>
              <Text>Secours</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.legend}>
        <Text style={styles.textLegendScene}>
          <Image source={sceneIcon} style={styles.sceneIconLegend} /> Scènes
        </Text>
        <Text style={styles.textLegend}>
          <Image source={toiletIcon} style={styles.toiletIcon} /> Toilettes
        </Text>
        <Text style={styles.textLegend}>
          <Image source={secourIcon} style={styles.secourIcon} /> Secours
        </Text>
        <Text style={styles.textLegend}>
          <Image source={restauIcon} style={styles.restauIcon} /> Restaurations
        </Text>
      </View>
    </View>
  );
};

export default Carte;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  legend: {
    position: "absolute",
    top: 10,
    left: 10,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "green",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  textLegend: {
    marginBottom: 5,
    fontSize: 16,
  },
  textLegendScene: {
    marginBottom: 5,
    fontSize: 16,
    marginStart: 0,
  },
  sceneIconLegend: {
    width: 20,
    height: 20,
  },
  toiletIcon: {
    width: 20,
    height: 20,
  },
  sceneIcon: {
    width: 30,
    height: 30,
  },
  restauIcon: {
    width: 20,
    height: 20,
  },
  secourIcon: {
    width: 20,
    height: 20,
  },
  callout: {
    width: 55,
    height: 20,
  },
  calloutRestau: {
    width: 85,
    height: 20,
  },
});
