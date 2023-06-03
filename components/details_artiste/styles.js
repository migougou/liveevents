import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  format: {
    flexDirection: "row",
    width: screenWidth * 1,
    height: screenWidth * 1,
  },
  nomArtiste: {
    position: "absolute",
    top: 350,
    left: 10,
  },
  sizeArtiste: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  info: {
    fontSize: 18,
    marginStart: 10,
    fontWeight: "bold",
  },

  infos: {
    fontSize: 18,
    marginStart: 10,
  },

  styleContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 2,
    marginBottom: 10,
    marginStart: 10,
  },
  styleOrigineContainer: {
    flexDirection: "row",
    marginVertical: 25,
  },
  styleOrigine: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "violet",
    borderWidth: 2,
    marginBottom: 10,
    marginStart: 10,
  },
  style: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionContainer: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    marginBottom: screenWidth * 0.1,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  descriptionStyle: {
    fontSize: 16,
  },
  localiserContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    marginStart: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: 180,
    height: 50,
    marginStart: 10,
    marginBottom: 20,
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});


export default styles;
