import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

import { premiereLettreMajuscule } from "../utilities";

import styles from "./styles";

const CardInformation = ({ informationMap, typeInfo }) => {
  const typeInfoCapitalize = premiereLettreMajuscule(typeInfo);

  return (
    <>
      {informationMap.map((infos, index) => (
        <Card key={index} containerStyle={styles[`card${typeInfoCapitalize}`]}>
          <Card.Title>
            <Text style={styles.titleCard}>
              Information {typeInfo}e n°{index + 1}
            </Text>
          </Card.Title>
          <Card.Divider style={styles[`divider${typeInfoCapitalize}`]} />
          <Text style={styles.message}>{infos.acf.message}</Text>
          <Card.Divider style={styles[`divider${typeInfoCapitalize}`]} />
          <Text style={styles.moment}>{infos.acf.momentdepublication}</Text>
        </Card>
      ))}
    </>
  );
};

export default CardInformation;
