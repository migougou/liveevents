import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";

import { trieArtistes, filterArtistesByScene } from "../utilities";

import SceneButton from './SceneButton';
import ArtistCard from './ArtistCard';
import styles from "./styles"

const windowWidth = Dimensions.get('window').width;

const Accueil = ({ artistes, navigation }) => {
  const [scenesArray, setScenesArray] = useState(artistes);
  const [selectedScene, setSelectedScene] = useState("Tous");

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

  const SceneArray = useCallback((selectedSceneName) => {
    let updatedArtistes = filterArtistesByScene(selectedSceneName === "Tous" ? "" : selectedSceneName, artistes);

    updatedArtistes = trieArtistes(updatedArtistes);
    setScenesArray(updatedArtistes);
    setSelectedScene(selectedSceneName);
  }, [artistes]);

  const imageSources = [
    require('../../images/festival6.jpg'),
    require('../../images/festival5.jpg'),
    require('../../images/festival.jpg'),
    require('../../images/festival3.jpg'),
    require('../../images/festival2.jpg'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        if(newIndex < imageSources.length) {
          scrollViewRef.current.scrollTo({ x: windowWidth * newIndex, animated: true });
          return newIndex;
        } else {
          scrollViewRef.current.scrollTo({ x: 0, animated: true });
          return 0;
        }
      });
    }, 3000); // Change l'image toutes les 3 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle quand le composant est démonté
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ScrollView
          horizontal
          pagingEnabled // Active le défilement par page pour un défilement fluide
          ref={scrollViewRef} // Utilise la référence ici
          showsHorizontalScrollIndicator={false} // Cache la barre de défilement horizontale
          style={styles.backgroundImage}
        >
         {imageSources.map((source, index) => (
          <Image key={index} source={source} style={styles.festivalImage} />
        ))}
        </ScrollView>
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
        {scenesArray.map((artiste) => <ArtistCard key={artiste.id} artiste={artiste} navigation={navigation} />)}
      </ScrollView>
    </View>
  );
};

export default React.memo(Accueil);