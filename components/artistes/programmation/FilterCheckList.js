import React from 'react';
import { View, Text } from 'react-native';

import styles from "./styles.js";

const FilterCheckList = ({ title1, data1, renderCheckbox1, title2, data2, renderCheckbox2 }) => {
  return (
    <View>
      <Text style={styles.title}>{title1}</Text>
      <View style={styles.filterContainer}>
        {data1.map((item) => (<View key={item.id}>{renderCheckbox1({ item })}</View>))}
      </View>
      <Text style={styles.title}>{title2}</Text>
      <View style={styles.filterContainer}>
        {data2.map((item) => (<View key={item.id}>{renderCheckbox2({ item })}</View>))}
      </View>
    </View>
  );
};


export default FilterCheckList;
