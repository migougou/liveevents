import React from 'react';
import { Text, Button, View } from 'react-native';
import ProduitPanier from './ProduitPanier';
import { FlatList } from 'react-native';
import styles from '../styles';

const Panier = ({ panierData, setPanierData, testOrder, infosClient }) => {

  const validationPanier = () => {
    testOrder()
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={panierData}
        renderItem={({ item }) => <ProduitPanier item={item} setPanierData={setPanierData} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text>
            Aucun produit dans le panier.
          </Text>
        }
      />
      {infosClient && panierData && infosClient.id && <Button title="Valider le panier" onPress={() => validationPanier()} />}
    </View>
  );
};

export default Panier;