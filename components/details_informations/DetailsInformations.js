import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";

const DetailsInformations = ({
  informationsBanales,
  informationsImportantes,
  choixInfo,
  setChoixinfo,
}) => {
  const nombreInfoBanales = informationsBanales.length;
  const nombreInfoImportantes = informationsImportantes.length;

  return (
    <React.Fragment>
      {choixInfo === "important"
        ? informationsImportantes.map((infosImp, index) => (
            <Card key={index} containerStyle={styles.cardImportante}>
              <Card.Title>
                <Text style={styles.titleCard}>
                  Information{nombreInfoImportantes > 1 ? "s" : null} importante
                  {nombreInfoImportantes > 1 ? `s n° ${index + 1}` : null}{" "}
                </Text>
              </Card.Title>
              <Card.Divider style={styles.dividerImportant} />
              <Text style={styles.message}>{infosImp.acf.message}</Text>
              <Card.Divider style={styles.dividerImportant} />
              <Text style={styles.moment}>
                {infosImp.acf.momentdepublication}
              </Text>
            </Card>
          ))
        : informationsBanales.map((infosBan, index) => (
            <Card key={index} containerStyle={styles.cardBanale}>
              <Card.Title>
                <Text style={styles.titleCard}>
                  Information{nombreInfoBanales > 1 ? "s" : null} banale
                  {nombreInfoBanales > 1 ? `s n° ${index + 1}` : null}{" "}
                </Text>
              </Card.Title>
              <Card.Divider style={styles.dividerBanale} />
              <Text style={styles.message}>{infosBan.acf.message}</Text>
              <Card.Divider style={styles.dividerBanale} />
              <Text style={styles.moment}>
                {infosBan.acf.momentdepublication}
              </Text>
            </Card>
          ))}
    </React.Fragment>
  );
};

export default DetailsInformations;

const styles = StyleSheet.create({
  cardImportante: {
    backgroundColor: "rgba(226, 68, 68, 0.2)",
    borderColor: "#E24444",
  },
  dividerImportant: {
    backgroundColor: "#E24444",
    height: 1,
  },
  cardBanale: {
    backgroundColor: "rgba(51, 204, 255, 0.2)",
    borderColor: "#33CCFF",
  },
  dividerBanale: {
    backgroundColor: "#33CCFF",
    height: 1,
  },
  moment: {
    textAlign: "right",
  },
  message: {
    marginBottom: 20,
  },
  titleCard: {
    color: "black",
    fontWeight: "900",
    fontSize: 18,
  },
});
