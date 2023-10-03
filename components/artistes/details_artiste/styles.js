import { StyleSheet, Dimensions } from "react-native";
import { wp, hp } from "../../dimensions"
import { C1, C2 } from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C2,
  },

  card: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 10,
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
    fontWeight: "bold",
    fontSize: 25,
    color: C1,
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
    fontWeight: "bold",
    color: C1,
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  centerInfo: {
    fontSize: 18,
    fontWeight: "bold",
    color: C2,
    marginTop: 10,
    textAlign: "center",
    textShadowColor: C1,
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
    backgroundColor: C1,
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
