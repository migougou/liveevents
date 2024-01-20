import React from 'react';
import { Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { Input } from 'react-native-elements';
import styles from '../styles';

const InputInscription = ({ control, errors, inputData }) => {
  const errorKey = inputData.name;

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={inputData.placeholder}
            keyboardType={inputData.keyboardType}
            secureTextEntry={inputData.secureTextEntry}
          />
        )}
        name={inputData.name}
        rules={inputData.rules}
      />
      {errors[errorKey] && <Text style={styles.errorText}>{errors[errorKey].message}</Text>}
    </>
  )
}

export default InputInscription;
