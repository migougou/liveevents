import React from "react";
import { Button } from "react-native";

import CardInformation from "./CardInformation";

const DetailsInformations = ({
  informationsBanales,
  informationsImportantes,
  choixInfo,
  changementInformation,
}) => {
  const affichageBoutton =
    informationsBanales.length > 0 && informationsImportantes.length > 0;

  return (
    <>
      {affichageBoutton && (
        <Button
          title="Changement d'information"
          onPress={changementInformation}
        />
      )}
      <CardInformation
        informationMap={
          choixInfo === "important"
            ? informationsImportantes
            : informationsBanales
        }
        typeInfo={choixInfo === "important" ? "important" : "banal"}
      />
    </>
  );
};

export default DetailsInformations;
