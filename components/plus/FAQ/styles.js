import { StyleSheet } from "react-native";
import { C1, C2, C3 } from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C2,
    padding: 10,
  },
  headerText: {
    fontSize: 40,
    color: C3,
    margin: 10,
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: C1,
    marginBottom: 10,
  },
  question: {
    fontSize: 20,
    color: C3,
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: C1,
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
