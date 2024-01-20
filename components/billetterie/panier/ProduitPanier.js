import React from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProduitPanier = ({ item, setPanierData }) => {
  const suppressionDuPanier = async (key, quantiteASupprimer) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      let panier = JSON.parse(jsonValue);
      const index = panier.findIndex((element) => element.id === item.id);
      if (index !== -1) {
        if (quantiteASupprimer < panier[index].quantite) {
          // S'il reste plus d'éléments que la quantité spécifiée, décrémentez simplement la quantité
          panier[index].quantite -= quantiteASupprimer;
        } else {
          // Si la quantité spécifiée est supérieure ou égale à la quantité dans le panier, supprimez complètement l'élément
          panier.splice(index, 1);
        }
        setPanierData(panier);
        // Stocker la valeur mise à jour dans AsyncStorage
        await AsyncStorage.setItem(key, JSON.stringify(panier));
      }
    } catch (e) {
      console.log("Erreur :" + e);
    }
  };

  return (
    <View style={styles.format}>
      <View style={styles.formatAdjust}>
        <Text style={styles.titre}>{item.name}</Text>
        <Text>{item.prix} €</Text>
        <Text>quantité : {item.quantite}</Text>
        <View style={styles.buttonDeleteContainer}>
          <Button title={'Supprimer'} color={"red"} onPress={() => suppressionDuPanier('panier', 1)} />
          <Button title={'Tout supprimer'} color={"red"} onPress={() => suppressionDuPanier('panier', item.quantite)} />
        </View>
      </View>
    </View>
  );
};

export default ProduitPanier;
