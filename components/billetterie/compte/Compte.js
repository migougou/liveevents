import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';
import Connection from './Connection';
import Inscription from './Inscription';
import EspaceClient from './EspaceClient';
import { C1, C2, C3, C4, C5, C6, C7 } from "../../colors";

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
    <View style={styles.container}>
      {Object.keys(infosClient).length === 0 ? (
        <>
      <TouchableOpacity style={styles.buttonCompte} onPress={() => setConnection(true)}>
            <Text style={styles.textCompte}>se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCompte} onPress={() => setInscription(true)}>
            <Text style={styles.textCompte}>s'inscrire</Text>
          </TouchableOpacity>
        </>
      ) :
        <EspaceClient infosClient={infosClient} setInfosClient={setInfosClient} ordersData={ordersData} />}
    </View>
  );
};

export default Compte;