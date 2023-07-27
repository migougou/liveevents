import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Badge } from "react-native-elements";

import styles from "./styles";

const Header = ({
  informationType,
  nombreInfoBanales,
  nombreInfoImportantes,
  overlayInfoLogic,
}) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../icones/france.png")}
        style={styles.headerImageDrapeau}
      />
      <View style={styles.headerImageLogo}>
        <Image
          source={require("../../icones/concert.png")}
          style={styles.headerImageLogoAdjust}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            overlayInfoLogic();
          }}
        >
          <Image
            source={
              informationType
                ? require("../../icones/notification.png")
                : require("../../icones/notificationImportante.png")
            }
            style={styles.headerImageNotif}
          />
        </TouchableOpacity>
        <Badge
          status={informationType ? "primary" : "error"}
          value={informationType ? nombreInfoBanales : nombreInfoImportantes}
          containerStyle={{ position: "absolute", left: 20 }}
        />
      </View>
    </View>
  );
};

export default Header;
