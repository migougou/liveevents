import { StyleSheet } from "react-native";
import { C1, C2, C3, C4, C5, C6, C7 } from "../colors";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: C2,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  separator: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  diversesPages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  reseauxSociaux: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  imgReseau: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  textFooter: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
  },
  textFooterContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default styles;
