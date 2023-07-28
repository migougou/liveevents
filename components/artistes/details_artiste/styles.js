import { StyleSheet, Dimensions } from "react-native";
import { wp, hp } from "../../dimensions"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },

  card: {
    padding: 15,
    backgroundColor: '#FFFFFF',
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
    color: "#e91e63",
    textAlign: "center",
    textShadowColor: '#333333',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  info: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e91e63",
    textShadowColor: '#333333',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  centerInfo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 10,
    textAlign: 'center',
    textShadowColor: '#e91e63',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  localiserContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  descriptionContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 20,
  },

  descriptionStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
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
    backgroundColor: "#e91e63",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  chevronContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 52.5,
    alignItems: 'center',
  },
});

export default styles;
