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
  },

  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  image: {
    width: "100%",
    height: 330,
    resizeMode: "cover",
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  infoCarte: {
    color: "white",
    fontSize: 16,
    marginBottom: 3,
    fontWeight: "bold",
  },

  overlay: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "auto",
    textAlign: "center",
  },

  scenesView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    backgroundColor: "rgba(100, 100, 100, 0.8)",
    borderRadius: 10,
    bottom: 5,
    right: 5,
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