import { StyleSheet } from "react-native";

import { wp } from '../dimensions';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  format: {
    flexDirection: "row",
    elevation: 5,
    shadowColor: "#52006A",
    marginVertical: wp('2'),
    marginHorizontal: wp('2'),
    borderRadius: wp('3'),
    backgroundColor: "white",

  },
  formatAdjust: {
    marginVertical: wp('1'),
    marginHorizontal: wp('2'),
    maxWidth: wp('70'),
  },
  icone: {
    width: wp('25'),
    borderTopLeftRadius: wp('3'),
    borderTopRightRadius: wp('0'),
    borderBottomLeftRadius: wp('3'),
    borderBottomRightRadius: wp('0'),
  },
  titre: {
    fontSize: wp('5'),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonCompte: {
    margin: wp('5'),
  },
});

export default styles;
