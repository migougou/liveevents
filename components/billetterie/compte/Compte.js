import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles';
import Connection from './Connection';
import Inscription from './Inscription';
import EspaceClient from './EspaceClient';

const Compte = ({ setInfosClient, infosClient, ordersData }) => {

  const [connection, setConnection] = useState(false)
  const [inscription, setInscription] = useState(false)

  if (connection) {
    return (
      <Connection setConnection={setConnection} setInfosClient={setInfosClient} />
    )
  }

  if (inscription) {
    return (
      <Inscription setInscription={setInscription} setInfosClient={setInfosClient} />
    )
  }

  return (
    <View>
      {Object.keys(infosClient).length === 0 ? (
        <>
          <View style={styles.buttonCompte}>
            <Button title="se connecter" onPress={() => setConnection(true)} />
          </View>
          <View style={styles.buttonCompte}>
            <Button title="s'inscrire" onPress={() => setInscription(true)} />
          </View>
        </>
      ) :
        <EspaceClient infosClient={infosClient} setInfosClient={setInfosClient} ordersData={ordersData} />}
    </View>
  );
};

export default Compte;