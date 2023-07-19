import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';
import { Text } from 'react-native';

const Inscription = ({ setInscription }) => {
  return (
    <View>
      <View style={styles.buttonCompte}>
        <Button title="retour" onPress={() => setInscription(false)} />
      </View>
      <Text>S'inscrire</Text>
    </View>
  );
};

export default Inscription;