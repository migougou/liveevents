import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "./styles.js";

const DayButton = ({ label, date, selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.text} onPress={onPress}>
      <Text>{label}</Text>
      <Text style={selected ? styles.selectText : styles.select}>{date}</Text>
    </TouchableOpacity>
  );
};

export default DayButton;
