import { StyleSheet } from "react-native";
import { hp, wp } from "../dimensions"

const styles = StyleSheet.create({
  nomArtiste: {
    flex: 1,
    justifyContent: 'center',
    color: "white",
    fontSize: 18,
    marginBottom: hp(0.5),
    fontWeight: "bold",
    textAlign: "center",
  },

  infoArtiste: {
    flex: 1,
    justifyContent: 'center',
    color: "white",
    fontSize: 16,
    marginBottom: hp(0.3),
    fontWeight: "bold",
    textAlign: "center",
  },

  boxInformation: {
    margin: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },

  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  image: {
    width: wp(100),
    height: hp(43),
    resizeMode: "cover",
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  overlay: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: wp(100),
    textAlign: "center",
  },

  scenesButton: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "rgba(100, 100, 100, 0.8)",
    borderRadius: 10,
    bottom: 5,
    right: 5,
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
  },

  button: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 7,
    margin: 3,
    borderRadius: 10,
    borderWidth: 2,
  },

  textContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: hp(0.1),
    width: wp(100),
  },

  timer: {
    color: "white",
    fontWeight: "bold",
    marginBottom: hp(0.25),
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

  cardContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  infoContainer: {
    flex: 1,
    padding: 10,
  },
});

export default styles;