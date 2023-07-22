import { StyleSheet } from "react-native";
import { wp, hp } from '../../dimensions';

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C0C0C0",
    paddingVertical: hp('1.5'),
  },
  icone: {
    height: wp('10'),
    width: wp('10'),
    marginHorizontal: wp('2'),
  },
  text: {
    alignItems: "center",
  },
  selectText: {
    alignItems: "center",
    borderBottomWidth: wp('0.7'),
    borderBottomColor: "#000",
  },
  checkbox: {
    backgroundColor: "red",
  },
  title: {
    textAlign: "center",
    marginVertical: wp('3'),
    fontSize: wp('5'),
  },
  subTitle: {
    marginStart: wp('5'),
    marginTop: wp('3'),
  },
});

export default styles;
