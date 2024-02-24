import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { deleteInfoClient } from '../../utilities';
import axios from 'axios';

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
    const commande = ordersData?.filter(order => infosClient?.commandes.includes(order.id));
    setCommandeClient(commande);
  }, [infosClient]);
  

  return (
    <View>
      <View>
        <Button title="se déconnecter" onPress={() => deleteInfoClient(setInfosClient)} />
      </View>
      <Text>Salut {infosClient.prenom} {infosClient.nom}</Text>
      <Text>Adresse : {infosClient.adresse}</Text>
      <Text>Code postal : {infosClient.codepostal}</Text>
      <Text>Ville : {infosClient.ville}</Text>
      <Text>Departement : {infosClient.departement}</Text>
      <Text>Pays : {infosClient.pays}</Text>
      <Text>Telephone : {infosClient.telephone}</Text>
      <Text>Email : {infosClient.email}</Text>
      {commandeClient?.map(commande => <Text key={commande.id}>Prix commande : {commande.total}</Text>)}
    </View>
  );
};

export default EspaceClient;