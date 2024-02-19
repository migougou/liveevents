import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { deleteInfoClient, storeData } from '../../utilities';
import axios from 'axios';

const EspaceClient = ({ infosClient, setInfosClient, ordersData }) => {
  const [ordersClient, setOrdersClient] = useState(null)

  useEffect(() => {
    axios.get(`http://cchost.freeboxos.fr:5001/clients/${infosClient?.id}`)
    .then(response => {
      setInfosClient(response.data)
      storeData(response.data, "infosClient")
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
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
    </View>
  );
};

export default EspaceClient;