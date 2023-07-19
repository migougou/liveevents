import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import styles from './styles';

const ProduitPanier = ({ item, setPanierData }) => {
  return (
    <View style={styles.format}>
      <View style={styles.formatAdjust}>
        <Text style={styles.titre}>{item.name}</Text>
        <Text>{item.prix} €</Text>
        <Text>quantité : {item.quantite}</Text>
      </View>
    </View>
  );
};

export default ProduitPanier;