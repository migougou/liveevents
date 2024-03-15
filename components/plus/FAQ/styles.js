import { StyleSheet } from "react-native";
import { C1, C2, C3, C4, C5, C6, C7 } from "../../colors";
import { wp, hp } from "../../dimensions.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C7,
    padding: 10,
  },
  faqContainer: {
    padding: hp(1.5),
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: C5,
    borderWidth: 2,
    marginVertical: hp(1.5),
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    textShadowColor: C3,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    alignSelf: "center",
    marginVertical: hp(4),
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: wp(6),
    textAlign: "center",
    color: C3,
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  question: {
    fontSize: 20,
    color: C2,
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: C7,
    borderBottomWidth: 1,
    padding: 8,
  },
  answer: {
    fontSize: 16,
    color: C3,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default styles;
