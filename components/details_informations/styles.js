import { StyleSheet } from "react-native";
import { C1, C2, C3, C4, C5, C6, C7 } from "../colors";

const styles = StyleSheet.create({
    cardImportant: {
        backgroundColor: "rgba(226, 68, 68, 0.2)",
        borderColor: "#E24444",
    },
    dividerImportant: {
        backgroundColor: "#E24444",
        height: 1,
    },
    cardBanal: {
        backgroundColor: "rgba(51, 204, 255, 0.2)",
        borderColor: "#33CCFF",
    },
    dividerBanal: {
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
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    },
});

export default styles;