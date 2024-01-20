import React from 'react';
import { Button, Text, View } from 'react-native';
import { deleteInfoClient } from '../../utilities';

const EspaceClient = ({ infosClient, setInfosClient }) => {
  console.log(infosClient)
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