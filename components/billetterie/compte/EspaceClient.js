import React, { useEffect, useState } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { deleteInfoClient } from '../../utilities';
import axios from 'axios';
import styles from '../styles';

const EspaceClient = ({ infosClient, setInfosClient, ordersData }) => {
  const [commandeClient, setCommandeClient] = useState([])

  useEffect(() => {
    axios.get(`http://cchost.freeboxos.fr:5001/clients/${infosClient?.id}`)
      .then(response => {
        setInfosClient(response.data)
        storeData(data, "infosClient")
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log('ordersData', ordersData)
  console.log('infosClient', infosClient)
  console.log('commandeClient', commandeClient)

  useEffect(() => {
    const commande = ordersData?.filter(order => infosClient?.commandes?.includes(order.id));
    setCommandeClient(commande);
  }, [infosClient]);

  return (
    <View>
      <TouchableOpacity style={styles.buttonCompte} onPress={() => deleteInfoClient(setInfosClient)}>
        <Text style={styles.textCompte}>Déconnecter</Text>
      </TouchableOpacity>
      <Text style={styles.textClient}>Bienvenue {infosClient.prenom} {infosClient.nom}</Text>
      <View style={styles.faqContainer}>
        <Text style={styles.textInfoClient}>Adresse : {infosClient.adresse}</Text>
        <Text style={styles.textInfoClient}>Code postal : {infosClient.codepostal}</Text>
        <Text style={styles.textInfoClient}>Ville : {infosClient.ville}</Text>
        <Text style={styles.textInfoClient}>Département : {infosClient.departement}</Text>
        <Text style={styles.textInfoClient}>Pays : {infosClient.pays}</Text>
        <Text style={styles.textInfoClient}>Téléphone : {infosClient.telephone}</Text>
        <Text style={styles.textInfoClient}>Email : {infosClient.email}</Text>
      </View>
      {commandeClient?.map(commande => <Text key={commande.id} >Prix commande : {commande.total}</Text>)}
      <TouchableOpacity style={styles.buttonCompte} onPress={() => deleteInfoClient(setInfosClient)}>
        <Text style={styles.textCompte}>Déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EspaceClient;