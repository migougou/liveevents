import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from "./styles.js";

const DayButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity style={[styles.dayButton, selected ? styles.selectedDayButton : {}]} onPress={onPress}>
      <Text style={[styles.dayButtonText, selected ? styles.selectedDayButtonText : {}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DayButton;
