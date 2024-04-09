import { StyleSheet } from "react-native";
import { wp, hp } from "../../dimensions";
import { C1, C2, C3, C4, C5, C6, C7 } from "../../colors";

const styles = StyleSheet.create({
  format: {
    flexDirection: "row",
    elevation: 5,
    shadowColor: "#52006A",
    marginVertical: hp("0.5"),
    marginHorizontal: wp("2"),
    borderRadius: wp("3"),
    backgroundColor: "#ffffff",
    borderColor: C3,
    borderWidth: 2,
  },

  formatAdjust: {
    marginVertical: hp("1"),
    marginHorizontal: wp("2"),
    justifyContent: "center",
  },

  icone: {
    width: wp("20"),
    height: wp("20"),
    borderTopLeftRadius: wp("3"),
    borderTopRightRadius: wp("0"),
    borderBottomLeftRadius: wp("3"),
    borderBottomRightRadius: wp("0"),
  },
  text: {
    color: C3,
    fontFamily: 'Poppins_400Regular',
  },
});

export default styles;
