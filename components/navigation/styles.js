import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    headerImageLogo: {
        flexDirection: "row",
        marginEnd: "auto",
        marginStart: "auto",
        paddingLeft: screenWidth * 0.055,
    },
    headerImageLogoAdjust: {
        width: screenWidth * 0.1,
        height: screenWidth * 0.1,
        resizeMode: "contain",
        alignItems: "center",
    },
    headerImageRight: {
        flexDirection: "row",
    },
    headerImageRightNotif: {
        width: screenWidth * 0.08,
        height: screenWidth * 0.08,
        resizeMode: "contain",
        alignItems: "center",
        marginRight: 15,
    },
    headerImageRightDrapeau: {
        width: screenWidth * 0.06,
        height: screenWidth * 0.06,
        resizeMode: "contain",
        marginTop: "auto",
        marginBottom: "auto",
    },
})

export default styles;