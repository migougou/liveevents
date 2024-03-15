import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import styles from "./styles";

const logoPays = require("../../icones/france.png");
const logoConcert = require("../../icones/Nations-sounds.png");
const notification = require("../../icones/notification.png");
const notificationImportante = require("../../icones/notificationImportante.png");

const Header = ({ informationType, nombreInfoBanales, nombreInfoImportantes, overlayInfoLogic }) => (
  <View style={styles.header}>
    <Image source={logoPays} style={styles.flagImage} />
    <Image source={logoConcert} style={styles.logoImage} />
    <TouchableOpacity onPress={overlayInfoLogic}>
      <Image source={informationType ? notification : notificationImportante} style={styles.notificationImage} />
      <Badge
        status={informationType ? "primary" : "error"}
        value={informationType ? nombreInfoBanales : nombreInfoImportantes}
        containerStyle={styles.badgeStyle}
      />
    </TouchableOpacity>
  </View>
);

export default Header;
