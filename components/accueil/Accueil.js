import { useState, useEffect } from "react";
import { View, ImageBackground, ScrollView, Text } from "react-native";

import { trieArtistes, formatDate } from "../utilities";
import SceneButton from './SceneButton';
import ArtistCard from './ArtistCard';
import styles from "./styles"


const Accueil = ({ artistes }) => {
  const [scenesArray, setScenesArray] = useState(artistes);
  const [displayArray, setDisplayArray] = useState(scenesArray);
  const [isAllSelected, setIsAllSelected] = useState(true);

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

  function SceneArray(selectedScene) {
    const updatedArtistes = filterArtistesByScene(selectedScene, artistes);
    const sortedArtistes = trieArtistes(updatedArtistes);
    setScenesArray(sortedArtistes);
    setIsAllSelected(selectedScene === "");
  }

  function filterArtistesByScene(selectedScene, artistes) {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
  
    const updatedArtistes = artistes.filter((artiste) => {
      const sceneArtiste = artiste.acf.scene;
      const eventDateTime = formatDate(artiste.acf.date, artiste.acf.hdebut);
  
      return selectedScene === "" || sceneArtiste === selectedScene && eventDateTime > currentTime;
    });
  
    return updatedArtistes;
  }  

  const sortedDisplayArray = displayArray.sort((a, b) => {
    const dateA = formatDate(a.acf.date, a.acf.hdebut);
    const dateB = formatDate(b.acf.date, b.acf.hdebut);
    return dateA - dateB;
  });

  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <ImageBackground source={require("../../images/festival.jpg")}>
          <View>
            <Text style={styles.titleText}> Nation Sounds </Text>
          </View>
          <View>
            <Text style={styles.scenesText}> Scènes </Text>
            <View style={styles.scenesView}>
              {scenes.map((scene) => <SceneButton key={scene.name} scene={scene} onClick={SceneArray} />)}
            </View>
          </View>
        </ImageBackground>
        <ScrollView horizontal>
          {sortedDisplayArray.map((artiste) => <ArtistCard key={artiste.id} artiste={artiste} />)}
        </ScrollView>
      </ScrollView>
    </View>
  );  
};

export default Accueil;