import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from "./styles.js";

const IconToggleButton = ({ source, altSource, onPress, toggle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={toggle ? altSource : source} style={styles.icone} />
    </TouchableOpacity>
  );
};

export default IconToggleButton;
