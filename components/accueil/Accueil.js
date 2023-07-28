import React, { useState, useEffect, useCallback } from "react";
import { View, ImageBackground, ScrollView, Text, TouchableOpacity } from "react-native";

import { trieArtistes, formatDate, filterArtistesByScene } from "../utilities";

import SceneButton from './SceneButton';
import ArtistCard from './ArtistCard';
import styles from "./styles"

const image = require("../../images/festival.jpg")

const Accueil = ({ artistes, navigation }) => {
  const [scenesArray, setScenesArray] = useState(artistes);
  const [displayArray, setDisplayArray] = useState(scenesArray);
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [selectedScene, setSelectedScene] = useState("Tous");

  const sortedDisplayArray = trieArtistes(displayArray);
  const scenes = [
    { name: "Tous", scene: "" },
    { name: "Beta", scene: "Scène Beta" },
    { name: "Epsilon", scene: "Scène Epsilon" },
    { name: "Delta", scene: "Scène Delta" },
    { name: "Alpha", scene: "Scène Alpha" },
    { name: "Gamma", scene: "Scène Gamma" },
  ];

  useEffect(() => {
    setScenesArray(artistes);
  }, [artistes]);

  useEffect(() => {
    if (scenesArray.length >= 0) {
      setDisplayArray(isAllSelected ? scenesArray : scenesArray.slice(0, 3));
    }
  }, [scenesArray, isAllSelected]);

  useEffect(() => {
    if (isAllSelected) {
      return
    }

    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentTime = currentDate.getTime();

      if (displayArray.length > 0) {
        const eventDateTime = formatDate(displayArray[0].acf.date, displayArray[0].acf.hdebut);
        if (currentTime > eventDateTime) {
          setScenesArray((oldArray) => {
            const newArray = [...oldArray];
            newArray.shift();
            return newArray;
          });
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [displayArray, scenesArray]);

  const SceneArray = useCallback((selectedSceneName) => {
    let updatedArtistes = filterArtistesByScene(selectedSceneName === "Tous" ? "" : selectedSceneName, artistes);
    updatedArtistes = trieArtistes(updatedArtistes);
    setScenesArray(updatedArtistes);
    setIsAllSelected(selectedSceneName === "Tous");

    setSelectedScene(selectedSceneName);
  }, [artistes]);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.scenesButton}>
          {scenes.map((scene) => (
            <SceneButton
              key={scene.name}
              scene={scene}
              isSelected={scene.name === selectedScene}
              onClick={SceneArray} 
            />
          ))}
        </View>
      </View>
      <ScrollView horizontal>
        {sortedDisplayArray.map((artiste) => <ArtistCard key={artiste.id} artiste={artiste} navigation={navigation}/>)}
      </ScrollView>
    </View>
  );  
};

export default React.memo(Accueil);

/*
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titleText}> Nation Sounds </Text>
      </ImageBackground>
*/