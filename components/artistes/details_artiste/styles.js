import { StyleSheet, Dimensions } from "react-native";
import { wp, hp } from "../../dimensions"
import { C1, C2, C3, C4, C5, C6, C7 } from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C7,
  },

  card: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 10,
    borderColor : C5,
    borderWidth : 2,
  },

  backButtonContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },

  format: {
    flexDirection: "row",
    width: wp(100),
    height: hp(50),
  },

  nomArtiste: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    fontFamily: 'Poppins_400Regular',
    fontSize: 25,
    color: C3,
    textAlign: "center",
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  info: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    color: C7,
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  centerInfo: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    color: C7,
    marginTop: 10,
    textAlign: "center",
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  localiserContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(1),
  },

  descriptionContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 20,
  },

  descriptionStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    fontFamily: 'Poppins_400Regular',
  },

  buttonText: {
    color: C3,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },

  button: {
    width: 180,
    height: 50,
    marginStart: 10,
    marginBottom: 20,
    backgroundColor: "white",
    borderColor : C5,
    borderWidth : 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  chevronContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 52.5,
    alignItems: "center",
  },
});

export default styles;
