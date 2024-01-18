import { StyleSheet } from "react-native";
import { C1, C2, C3, C4, C5, C6, C7 } from "../colors";

const styles = StyleSheet.create({
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
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: C5,
    borderWidth: 2,
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    width: 160,
  },

  textRestaurant: {
    marginBottom: 5,
    fontSize: 16,
  },
  textWC: {
    marginBottom: 5,
    fontSize: 16,
    marginEnd: 37,
  },
  textAssistance: {
    marginBottom: 5,
    fontSize: 16,
    marginEnd: 40,
  },
  textScene: {
    marginBottom: 5,
    fontSize: 16,
    marginStart: 0,
    marginEnd: 46,
  },
  sceneIconLegend: {
    width: 20,
    height: 20,
  },
  WCIcon: {
    width: 20,
    height: 20,
  },
  sceneIcon: {
    width: 30,
    height: 30,
  },
  restaurantIcon: {
    width: 20,
    height: 20,
  },
  assistanceIcon: {
    width: 20,
    height: 20,
  },
  callout: {
    width: 90,
    height: 20,
  },
});

export default styles;