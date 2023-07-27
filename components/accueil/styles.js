import { StyleSheet } from "react-native";
import { hp, wp } from "../dimensions"

const styles = StyleSheet.create({
  nomArtiste: {
    flex: 1,
    justifyContent: 'center',
    color: "#e91e63",
    fontSize: 18,
    marginBottom: hp(0.5),
    fontWeight: "bold",
    textAlign: "center",
  },

  infoArtiste: {
    flex: 1,
    justifyContent: 'center',
    color: "#e91e63",
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
    backgroundColor: "#333333",
    flex: 1,
  },

  image: {
    width: wp(100),
    height: hp(40),
    resizeMode: "cover",
  },

  background: {
    width: wp(100),
    height: hp(43),
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  /*
  overlay: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0.2, 0.2, 0.2, 0.6)",
    width: wp(100),
    textAlign: "center",
    borderColor: "#e91e63",
    borderWidth: 1,
    borderRadius: 10,
  },
  */

  scenesButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 10,
    marginHorizontal: wp(2),
    position: "absolute",
    bottom: 5,
    width: wp(96),
    height: hp(6),
    borderColor: "#e91e63",
    borderWidth: 2,
  },
  
  buttonText: {
    color: "#e91e63",
    fontWeight: "bold",
    fontSize: wp(3),
  },

  textContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0.2, 0.2, 0.2, 0.5)",
    padding: hp(0.1),
    width: wp(100),
    borderColor: "#e91e63",
    borderWidth: 1,
  },

  timer: {
    color: "#e91e63",
    fontWeight: "bold",
    marginBottom: hp(0.25),
    textAlign: "center",
  },

  titleText: {
    textAlign: "center",
    color: "#e91e63",
    fontSize: 25,
    fontWeight: "bold",
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