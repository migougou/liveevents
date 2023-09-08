import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import styles from './styles';
import axios from 'axios';
import { checkUserCredentials } from '../utilities';

const Connection = ({ setConnection }) => {

  const [motDePasse, setMotDePasse] = useState('');
  const [email, setEmail] = useState('');
  const [showMotDePasse, setShowMotDePasse] = useState(false);

  const toggleMotDePasseVisibility = () => {
    setShowMotDePasse(!showMotDePasse);
  };

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
      <Button title='Valider' onPress={() => checkUserCredentials(email, motDePasse)} />
    </View>
  );
};

export default Connection;