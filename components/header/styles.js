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
        alignItems: "center",
        marginEnd: screenWidth * 0.055,
        marginStart: screenWidth * 0.055,
        flex: 1,
    },
    headerImageLogoAdjust: {
        width: screenWidth * 0.1,
        height: screenWidth * 0.1,
        resizeMode: "contain",
    },
    headerImageNotif: {
        width: screenWidth * 0.08,
        height: screenWidth * 0.08,
        resizeMode: "contain",
    },
    headerImageDrapeau: {
        width: screenWidth * 0.07,
        height: screenWidth * 0.07,
        resizeMode: "contain",
        marginTop: "auto",
        marginBottom: "auto",
    },
})

export default styles;