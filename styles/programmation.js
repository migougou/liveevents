import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const programmation = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C0C0C0",
    paddingVertical: screenWidth * 0.015,
  },
  icone: {
    height: screenWidth * 0.1,
    width: screenWidth * 0.1,
    marginHorizontal: screenWidth * 0.02,
  },
  text: {
    alignItems: "center",
  },
  selectText: {
    alignItems: "center",
    borderBottomWidth: screenWidth * 0.007,
    borderBottomColor: "#000",
  },
  list: {
    marginBottom: screenWidth * 0.13,
  },
  checkbox: {
    backgroundColor: "red",
  },
  title: {
    textAlign: "center",
    marginVertical: screenWidth * 0.03,
    fontSize: screenWidth * 0.05,
  },
  subTitle: {
    marginStart: screenWidth * 0.05,
    marginTop: screenWidth * 0.03,
  },
});

export default s_programmation;
