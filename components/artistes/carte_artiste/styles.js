import { StyleSheet } from "react-native";
import { wp, hp } from '../../dimensions';

const styles = StyleSheet.create({
  format: {
    flexDirection: "row",
    elevation: 5,
    shadowColor: "#52006A",
    marginVertical: hp('2'),
    marginHorizontal: wp('2'),
    borderRadius: wp('3'),
    backgroundColor: '#333333',
    borderColor: '#e91e63',
    borderWidth: 1,
  },

  formatAdjust: {
    marginVertical: hp('1'),
    marginHorizontal: wp('2'),
    justifyContent: "center",
  },

  icone: {
    width: wp('20'),
    height: wp('20'),
    borderTopLeftRadius: wp('3'),
    borderTopRightRadius: wp('0'),
    borderBottomLeftRadius: wp('3'),
    borderBottomRightRadius: wp('0'),
  },
  text: {
    color: '#e91e63',
  },
});

export default styles;