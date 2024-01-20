import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
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
    <View>
      <View style={styles.buttonCompte}>
        <Button title="retour" onPress={() => setConnection(false)} />
      </View>
      <Text style={styles.buttonCompte}>Se connecter :</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.buttonCompte}
        placeholder="Email"
      />
      <View style={[styles.button, styles.buttonCompte]}>
        <TextInput
          secureTextEntry={!showMotDePasse}
          value={motDePasse}
          onChangeText={setMotDePasse}
          placeholder="Mot de passe"
        />
        <Button
          title={showMotDePasse ? 'Cacher' : 'Afficher'}
          onPress={toggleMotDePasseVisibility}
        />
      </View>
      {message.length > 0 && <Text style={styles.message}>{message}</Text>}
      <Button title='Valider' onPress={() => validation(email, motDePasse)} />
    </View>
  );
};

export default Connection;