import React, { useEffect, useState } from 'react';
import { Text, Button, View, ScrollView } from 'react-native';
import styles from './styles';

import { storeData, getData, cleanData, cleanAllData } from "../utilities.js"


const PanierTest = ({ productsData, setTest }) => {

  const [data, setData] = useState('')

  useEffect(() => {
    getData("key-test", setData); // Set data from  on component mount
  }, []);

  return (
    <View>
      <View>
        <Button title='Retour page panier' onPress={() => setTest(false)} />
      </View>
      <View style={styles.buttonCompte}>
        <Button title='Storing data' onPress={() => storeData(productsData, "key-test")} />
      </View>
      <View style={styles.buttonCompte}>
        <Button title='Reading Data' onPress={() => getData("key-test", setData)} />
      </View>
      <View style={styles.buttonCompte}>
        <Button title='Clean Data' onPress={() => cleanData("key-test")} />
      </View>
      <View style={styles.buttonCompte}>
        <Button title='Clean All Data' onPress={() => cleanAllData()} />
      </View>
      <ScrollView>
        <Text style={{ color: 'green' }} >{data.length}</Text>
        <Text style={{ color: 'red' }} >{productsData.length}</Text>
        <Text style={{ color: 'green' }}>{JSON.stringify(data)}</Text>
        <Text style={{ color: 'red' }}>{JSON.stringify(productsData)}</Text>
      </ScrollView>
    </View>
  );
};

export default PanierTest;