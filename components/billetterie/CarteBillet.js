import React from 'react';
import { Button, Image, Text } from 'react-native';
import { View } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CarteBillet = ({ item, setPanierData }) => {

  const removePTags = (description) => {
    return description.replace(/<p>/, '').replace(/<\/p>/, '');
  };

  const ajoutAuPanier = async (key) => {
    try {
      ajoutProduit = {
        id: item.id,
        prix: item.price,
        name: item.name,
        quantite: 1,
      }
      const jsonValue = await AsyncStorage.getItem(key);
      let panier = JSON.parse(jsonValue);
      if (!panier) {
        // Si le panier est null ou non défini, initialiser le panier comme un tableau vide
        panier = [];
      }
      const index = panier.findIndex(item => item.id === ajoutProduit.id)
      if (-1 !== index) {
        panier[index] = { ...panier[index], quantite: panier[index].quantite + 1 }
      } else {
        panier.push(ajoutProduit)
      }
      setPanierData(jsonValue)
      // Stocker la valeur mise à jour dans AsyncStorage
      await AsyncStorage.setItem(key, JSON.stringify(panier));
    } catch (e) {
      console.log("Erreur :" + e);
    }
  }

  const descriptionFormate = removePTags(item.description);
  return (
    <View style={styles.format}>
      <Image source={{ uri: item.images[0].src }} style={styles.icone} />
      <View style={styles.formatAdjust}>
        <Text style={styles.titre}>{item.name}</Text>
        <Text>{descriptionFormate}</Text>
        <View style={styles.button}>
          <Text>{item.price} €</Text>
          <Button title={'Ajouter au panier'} color={"#A416BB"} onPress={() => ajoutAuPanier('panier')} />
        </View>
      </View>
    </View>
  );
};

export default CarteBillet;