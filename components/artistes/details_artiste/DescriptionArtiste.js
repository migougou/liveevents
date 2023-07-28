import React, { useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./styles"

const DescriptionArtiste = ({ artiste }) => {
  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current.scrollToEnd({ animated: true });
  }

  return (
    <View style={styles.container}>
      <View style={styles.localiserContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>LOCALISER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chevronContainer} onPress={scrollToBottom}>
          <Ionicons name="chevron-down" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.descriptionContainer} ref={scrollRef}>
        <Text style={styles.descriptionStyle}>
          {artiste.acf.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default DescriptionArtiste;
