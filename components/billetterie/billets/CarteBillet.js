import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import styles from '../styles';
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
        image: url
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
      setPanierData(panier)
      // Stocker la valeur mise à jour dans AsyncStorage
      await AsyncStorage.setItem(key, JSON.stringify(panier));
    } catch (e) {
      console.log("Erreur :" + e);
    }
  }

  const url = item?.images[0]?.src.replace('localhost', 'cchost.bmcorp.fr')

  const descriptionFormate = removePTags(item.description);
  return (
    <View style={styles.format}>
      <Image source={{ uri: url }} style={styles.icone} />
      <View style={styles.formatAdjustBillet}>
        <Text style={styles.titre}>{item.name}</Text>
        <Text style={styles.text}>{descriptionFormate}</Text>
        <View style={styles.button}>
          <Text>{item.price} €</Text>
          <TouchableOpacity style={styles.buttonBillets}  onPress={() => ajoutAuPanier('panier')}>
            <Text style={styles.textCompte}>Ajouter au panier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarteBillet;