import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import styles from './styles';
import PanierTest from './PanierTest';
import ProduitPanier from './ProduitPanier';
import { FlatList } from 'react-native';
import { useEffect } from 'react';
import { getData } from '../utilities';

const Panier = ({ productsData, panierData, setPanierData }) => {

  const [test, setTest] = useState(false)
  const [getPanier, setGetPanier] = useState('')

  useEffect(() => {
    getData('panier', setGetPanier)
  }, [panierData])

  if (test) {
    return (
      <PanierTest productsData={productsData} setTest={setTest} />
    )
  }

  return (
    <View>
      <View>
        <Button title='Test AsyncStorage' onPress={() => setTest(true)} />
      </View>
      <FlatList
        data={getPanier}
        renderItem={({ item }) => <ProduitPanier item={item} setPanierData={setPanierData} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text>
            Aucun produit dans le panier.
          </Text>
        }
      />
    </View>
  );
};

export default Panier;