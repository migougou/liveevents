import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Badge } from "react-native-elements";

import styles from "./styles";

const Header = ({ informationType, nombreInfoBanales, nombreInfoImportantes, overlayInfoLogic }) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerImageLogo}>
                <Image
                    source={require("../../icones/concert.png")}
                    style={styles.headerImageLogoAdjust}
                />
            </View>
            <View style={styles.headerImageRight}>
                <TouchableOpacity onPress={() => { overlayInfoLogic(); }}>
                    <Image
                        source={
                            informationType
                                ? require("../../icones/notification.png")
                                : require("../../icones/notificationImportante.png")
                        }
                        style={styles.headerImageRightNotif}
                    />
                </TouchableOpacity>
                <Badge
                    status={informationType ? "primary" : "error"}
                    value={informationType ? nombreInfoBanales : nombreInfoImportantes}
                    containerStyle={{ position: "absolute", left: 20 }}
                />
                <Image
                    source={require("../../icones/france.png")}
                    style={styles.headerImageRightDrapeau}
                />
            </View>
        </View>
    );
};

export default Header;
