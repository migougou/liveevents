import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  artist: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#fff",
    padding: 7,
    margin: 3,
    borderRadius: 10,
    borderWidth: 2,
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
  },

  boxInformation: {
    margin: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },

  card: {
    width: 230,
    margin: 7,
  },

  container: {
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 330,
    resizeMode: "cover",
  },

  infoCarte: {
    color: "white",
    fontSize: 16,
    marginBottom: 3,
    fontWeight: "bold",
  },

  informationText: {
    fontSize: 20,
    color: "#293133",
  },

  informationTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 15,
    textAlign: "center",
  },

  overlay: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "auto",
    textAlign: "center",
  },

  scenesText: {
    fontSize: 22,
    marginLeft: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    borderRadius: 100,
  },

  scenesView: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 4,
  },

  searchBar: {
    resizeMode: "cover",
    height: "auto",
  },

  textContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    width: "100%",
  },

  timer: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },

  titleText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    margin: 10,
  },
});

export default styles;