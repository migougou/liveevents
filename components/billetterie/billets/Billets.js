import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import CarteBillet from './CarteBillet';
import styles from '../styles';

const Billets = ({ productsData, setPanierData }) => {

  const [reversedData, setReversedData] = useState(productsData)

  useEffect(() => {
    if (productsData) { setReversedData([...productsData].reverse()) }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={reversedData}
        renderItem={({ item }) => <CarteBillet item={item} setPanierData={setPanierData} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text>
            Aucun billet à vendre.
          </Text>
        }
      />
    </View>
  );
};

export default Billets;