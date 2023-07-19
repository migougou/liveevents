import React, { useState } from 'react';

import { View, Button } from 'react-native';
import styles from './styles';
import Connection from './Connection';
import Inscription from './Inscription';

const Compte = ({ checkUserCredentials }) => {

  const [connection, setConnection] = useState(false)
  const [inscription, setInscription] = useState(false)

  if (connection) {
    return (
      <Connection setConnection={setConnection} />
    )
  }

  if (inscription) {
    return (
      <Inscription setInscription={setInscription} />
    )
  }

  return (
    <View>
      <View style={styles.buttonCompte}>
        <Button title="se connecter" onPress={() => setConnection(true)} />
      </View>
      <View style={styles.buttonCompte}>
        <Button title="s'inscrire" onPress={() => setInscription(true)} />
      </View>
    </View>
  );
};

export default Compte;