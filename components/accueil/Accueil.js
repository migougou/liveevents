import { useState, useEffect } from "react";
import { View, ImageBackground, ScrollView, Text } from "react-native";

import { trieArtistes, formatDate, filterArtistesByScene } from "../utilities";
import SceneButton from './SceneButton';
import ArtistCard from './ArtistCard';
import styles from "./styles"


const Accueil = ({ artistes }) => {
  const [scenesArray, setScenesArray] = useState(artistes);
  const [displayArray, setDisplayArray] = useState(scenesArray);
  const [isAllSelected, setIsAllSelected] = useState(true);
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

  function SceneArray(selectedScene) {
    let updatedArtistes = filterArtistesByScene(selectedScene, artistes);
    updatedArtistes = trieArtistes(updatedArtistes);
    setScenesArray(updatedArtistes);
    setIsAllSelected(selectedScene === "");
  }

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