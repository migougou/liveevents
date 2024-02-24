import React, { useState } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { checkUserCredentials, storeInfoClient } from '../../utilities';

const Connection = ({ setConnection, setInfosClient }) => {

  const [motDePasse, setMotDePasse] = useState('');
  const [email, setEmail] = useState('');
  const [showMotDePasse, setShowMotDePasse] = useState(false);
  const [message, setMessage] = useState('');

  const toggleMotDePasseVisibility = () => {
    setShowMotDePasse(!showMotDePasse);
  };

  const validation = async (email, motDePasse) => {
    if (!email || !motDePasse) {
      setMessage('Il faut remplir les deux champs');
      return;
    }

    try {
      let utilisateur = await checkUserCredentials(email, motDePasse);
      if (utilisateur.data) {
        storeInfoClient(utilisateur.data, setInfosClient);
        setConnection(false);
      } else {
        setMessage(utilisateur.message);
      }
    } catch (error) {
      setMessage('Problème avec la requête serveur. Veuillez réessayer.');
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCompte} onPress={() => setConnection(false)}>
            <Text style={styles.textCompte}>Retour</Text>
          </TouchableOpacity>
      <Text  style={[styles.textLogin]}>Se connecter :</Text>
      <View style={[styles.button, styles.buttonCompteConnect]}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      </View>
      <View style={[styles.button, styles.buttonCompteConnect]}>
        <TextInput
          secureTextEntry={!showMotDePasse}
          value={motDePasse}
          onChangeText={setMotDePasse}
          placeholder="Mot de passe"
        />
      <TouchableOpacity onPress={toggleMotDePasseVisibility}>
            <Text style={styles.buttonCacher}>{showMotDePasse ? 'Cacher' : 'Afficher'}</Text>
          </TouchableOpacity>
      </View>
      {message.length > 0 && <Text style={styles.errorMessageConnect}>{message}</Text>}
      <TouchableOpacity style={styles.buttonCompte}  onPress={() => validation(email, motDePasse)} >
            <Text style={styles.textCompte}>Valider</Text>
          </TouchableOpacity>
    </View>
  );
};

export default Connection;