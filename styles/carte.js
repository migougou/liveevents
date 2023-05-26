import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const s_carte = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  legend: {
    position: "absolute",
    top: 10,
    left: 10,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "green",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  textLegend: {
    marginBottom: 5,
    fontSize: 16,
  },
  textLegendScene: {
    marginBottom: 5,
    fontSize: 16,
    marginStart: 0,
  },
  sceneIconLegend: {
    width: 20,
    height: 20,
  },
  toiletIcon: {
    width: 20,
    height: 20,
  },
  sceneIcon: {
    width: 30,
    height: 30,
  },
  restauIcon: {
    width: 20,
    height: 20,
  },
  secourIcon: {
    width: 20,
    height: 20,
  },
  callout: {
    width: 55,
    height: 20,
  },
  calloutRestau: {
    width: 85,
    height: 20,
  },
});

export default s_carte;