import React, { useRef, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../styles';
import InputInscription from './InputInscription';
import { storeInfoClient } from '../../utilities';

const Inscription = ({ setInscription, setInfosClient }) => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const motdepasse = useRef({});
  motdepasse.current = watch("motdepasse", "");
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    removeMotdepasseConfirmation(data);
    postData(data);
  };

  function removeMotdepasseConfirmation(obj) {
    if ("motdepasseConfirmation" in obj) {
      delete obj.motdepasseConfirmation;
    }
  }

  // 
  async function postData(data) {
    try {
      const response = await axios.post('http://cchost.freeboxos.fr:5001/clients', data);
      const utilisateur = response.data; // Récupérer les données de la réponse POST
      storeInfoClient(utilisateur.data, setInfosClient);
      setInscription(false);
    } catch (error) {
      if (error.response) {
        setMessage('Erreur de réponse : ' + error.response.data.message);
      } else {
        setMessage('Erreur inattendue : ' + error.message);
      }
    }
  }

  inputData = [{
    "id": 1,
    "placeholder": "Prénom",
    "keyboardType": "default",
    "secureTextEntry": false,
    "name": "prenom",
    "rules": { required: 'Le champ prénom est nécessaire', maxLength: { value: 20, message: 'Le prénom ne peut pas dépasser 20 caractères', }, },
  },
  {
    "id": 2,
    "placeholder": "Nom",
    "keyboardType": "default",
    "secureTextEntry": false,
    "name": "nom",
    "rules": { required: 'Le champ nom est nécessaire', maxLength: { value: 100, message: 'Le nom ne peut pas dépasser 100 caractères', }, },
  },
  {
    "id": 3,
    "placeholder": "Adresse",
    "keyboardType": "default",
    "secureTextEntry": false,
    "name": "adresse",
    "rules": { required: 'Le champ adresse est nécessaire' },
  },
  {
    "id": 4,
    "placeholder": "Pays",
    "keyboardType": "default",
    "secureTextEntry": false,
    "name": "pays",
    "rules": { required: 'Le champ pays est nécessaire', maxLength: { value: 50, message: 'Le pays ne peut pas dépasser 50 caractères', }, },
  },
  {
    "id": 5,
    "placeholder": "Ville",
    "keyboardType": "default",
    "secureTextEntry": false,
    "name": "ville",
    "rules": { required: 'Le champ ville est nécessaire', maxLength: { value: 50, message: 'La ville ne peut pas dépasser 50 caractères', }, },
  },
  {
    "id": 6,
    "placeholder": "Code Postal",
    "keyboardType": "numeric",
    "secureTextEntry": false,
    "name": "codepostal",
    "rules": { required: 'Le champ code postal est nécessaire', pattern: { value: /^\d{5}$/, message: 'Veuillez entrer un code postal valide (5 chiffres)' } },
  },
  {
    "id": 7,
    "placeholder": "Département",
    "keyboardType": "default",
    "secureTextEntry": false,
    "name": "departement",
    "rules": { required: 'Le champ département est nécessaire', maxLength: { value: 50, message: 'Le département ne peut pas dépasser 50 caractères', }, },
  },
  {
    "id": 8,
    "placeholder": "Email",
    "keyboardType": "default",
    "secureTextEntry": false,
    "name": "email",
    "rules": { required: 'Le champ email est nécessaire', pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Veuillez entrer une adresse email valide' } },
  },
  {
    "id": 9,
    "placeholder": "Téléphone",
    "keyboardType": "numeric",
    "secureTextEntry": false,
    "name": "telephone",
    "rules": { required: 'Le champ téléphone est nécessaire', pattern: { value: /^0\d{9}$/, message: 'Veuillez entrer un numéro de téléphone valide (10 chiffres)' } },
  },
  {
    "id": 10,
    "placeholder": "Mot de Passe",
    "keyboardType": "default",
    "secureTextEntry": true,
    "name": "motdepasse",
    "rules": {
      required: 'Le champ mot de passe est nécessaire',
      validate: (value) => {
        const hasLowercase = /[a-z]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasDigit = /\d/.test(value);
        if (value.length < 8 || !hasLowercase || !hasUppercase || !hasDigit) { return 'Le mot de passe doit faire au minimum 8 caractères et avoir une minuscule, une majuscule et un chiffre.'; }
        return true;
      },
      maxLength: { value: 100, message: 'Le mot de passe ne peut pas dépasser 100 caractères', },
    },
  },
  {
    "id": 11,
    "placeholder": "Confirmer le Mot de Passe",
    "keyboardType": "default",
    "secureTextEntry": true,
    "name": "motdepasseConfirmation",
    "rules": { validate: value => value === motdepasse.current || 'Les mots de passe ne correspondent pas.', },
  },
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonCompte}>
        <Button title="Retour" onPress={() => setInscription(false)} />
      </View>
      <Text>S'inscrire</Text>
      {inputData.map((item) => (<InputInscription key={item.id} control={control} errors={errors} inputData={item} />))}
      {message.length > 0 && <Text style={styles.message}>{message}</Text>}
      <View style={styles.buttonCompte}>
        <Button title="Soumettre" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default Inscription;
