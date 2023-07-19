import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
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
    maxWidth: screenWidth * 0.8,
  },
  icone: {
    height: screenWidth * 0.3,
    borderTopLeftRadius: screenWidth * 0.03,
    borderTopRightRadius: screenWidth * 0.0,
    borderBottomLeftRadius: screenWidth * 0.03,
    borderBottomRightRadius: screenWidth * 0.0,
  },
  titre: {
    fontSize: screenWidth * 0.05
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonCompte: {
    margin: screenWidth * 0.05,
  },
});

export default styles;
