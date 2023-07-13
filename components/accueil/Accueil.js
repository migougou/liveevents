import { useState, useEffect } from "react";
import { View, ImageBackground, ScrollView, Text, TouchableOpacity } from "react-native";

import { trieArtistes, formatDate } from "../utilities";
import Countdown from "./Countdown";
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
              {scenes.map((scene) => (
                <TouchableOpacity
                  key={scene.name}
                  onPress={() => SceneArray(scene.scene)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>{scene.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ImageBackground>
        <ScrollView horizontal>
          {sortedDisplayArray.map((artiste) => (
            <View key={artiste.id} style={styles.card}>
              <ImageBackground source={{ uri: artiste.acf.imageurl }} style={styles.image}>
                <View style={styles.overlay}>
                  <Text style={styles.timer}>
                    <Countdown date={artiste.acf.date} time={artiste.acf.hdebut}/>
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.artist}>{artiste.acf.artiste}</Text>
                  <Text style={styles.infoCarte}>{artiste.acf.scene}</Text>
                  <Text style={styles.infoCarte}>
                    {artiste.acf.date.slice(6, 8)} Juin
                  </Text>
                  <Text style={styles.infoCarte}>
                    {artiste.acf.hdebut.slice(0, 5)} - {artiste.acf.hfin.slice(0, 5)}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
        <View style={styles.boxInformation}>
          <Text style={styles.informationTitle}>
            Informations
          </Text>
          <Text style={styles.informationText}>
            Retrouvez la liste des artistes ainsi que les horaires et les
            différentes scènes dans la rubrique programmation.
          </Text>
          <Text style={styles.informationText}>
            Une carte est également disponible pour retrouver l'emplacement des
            scènes, restaurants etc ...
          </Text>
        </View>
      </ScrollView>
    </View>
  );  
};

export default Accueil;