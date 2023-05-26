import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const s_carte_artiste = StyleSheet.create({
  format: {
    flexDirection: "row",
    elevation: 5,
    shadowColor: "#52006A",
    marginVertical: screenWidth * 0.02,
    marginHorizontal: screenWidth * 0.02,
    borderRadius: screenWidth * 0.03,
    backgroundColor: "white",
  },
  formatAdjust: {
    marginVertical: screenWidth * 0.01,
    marginHorizontal: screenWidth * 0.02,
    justifyContent: "center",
  },
  icone: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    borderTopLeftRadius: screenWidth * 0.03,
    borderTopRightRadius: screenWidth * 0.0,
    borderBottomLeftRadius: screenWidth * 0.03,
    borderBottomRightRadius: screenWidth * 0.0,
  },
});

export default s_carte_artiste;