import { StyleSheet } from "react-native";
import { wp, hp } from "../../dimensions";
import { C1, C2, C3, C4, C5, C6, C7 } from "../../colors";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C7,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: C6,
    paddingVertical: hp("1.5"),
    paddingHorizontal: wp("2"),
    borderRadius: 10,
    borderColor : C3,
    borderWidth : 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
  },

  icone: {
    height: wp("10"),
    width: wp("10"),
    marginHorizontal: wp("2"),
  },

  text: {
    alignItems: "center",
    color: C2,
    fontFamily: 'Poppins_400Regular',
  },

  selectText: {
    alignItems: "center",
    borderBottomWidth: wp("0.7"),
    borderBottomColor: "#000",
    color: C1,
    fontFamily: 'Poppins_400Regular',
  },

  checkboxTitle: {
    color: C7,
  },

  checkboxContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: C5,
    borderRadius: 20,
  },

  title: {
    textAlign: "center",
    marginVertical: wp("3"),
    fontSize: wp("5"),
    color: C3,
    backgroundColor: C6,
    borderWidth: 2,
    borderColor: C3,
    fontFamily: 'Poppins_400Regular',
  },

  dayButton: {
    padding: wp("2"),
    borderRadius: wp("2"),
    backgroundColor: C2,
    marginHorizontal: wp("2"),
    shadowColor: C1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  selectedDayButton: {
    backgroundColor: C5,
    borderRadius: 10,
    borderColor : C3,
    borderWidth : 2,
  },

  dayButtonText: {
    fontSize: wp("4"),
    fontFamily: 'Poppins_400Regular',
    color: C6,
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },

  selectedDayButtonText: {
    color: C3,
  },

  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
   
  },
});

export default styles;
