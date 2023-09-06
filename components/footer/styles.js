import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "black",
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
