import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView } from "react-native";

import { trieArtistes, formatDate, filterArtistesByScene } from "../utilities";

import SceneButton from './SceneButton';
import ArtistCard from './ArtistCard';
import styles from "./styles"

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
        {scenesArray.map((artiste) => <ArtistCard key={artiste.id} artiste={artiste} navigation={navigation}/>)}
      </ScrollView>
    </View>
  );
};

export default React.memo(Accueil);