import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from "./styles.js";

const FilterCheckList = ({ title, subTitle1, data1, renderCheckbox1, subTitle2, data2, renderCheckbox2 }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle1}</Text>
      <FlatList
        data={data1}
        renderItem={renderCheckbox1}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.subTitle}>{subTitle2}</Text>
      <FlatList
        data={data2}
        renderItem={renderCheckbox2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FilterCheckList;
