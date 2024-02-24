import { StyleSheet } from "react-native";
import { C1, C2, C3, C4, C5, C6, C7 } from "../colors";
import { wp, hp } from '../dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: C7,
    flex: 1,
    alignItems: 'center',
  },
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
    borderColor : C5,
    borderWidth : 2,
    borderRadius: 5,

  },
  formatAdjust: {
    marginVertical: wp('1'),
    marginHorizontal: wp('2'),
    maxWidth: wp('70'),
  },
  formatAdjustBillet: {
    marginVertical: wp('1'),
    marginHorizontal: wp('2'),
    maxWidth: wp('65'),
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
    marginTop: wp('7'),
    marginHorizontal: wp(2),
    justifyContent: "space-between",
    alignItems: "center",
    borderColor : C5,
    borderWidth : 2,
    borderRadius: 5,
    width: wp(80),
    height: hp(6),
    backgroundColor: "white",
    paddingStart: wp(2),
  },
  buttonCompteConnect: {
    marginTop: wp('7'),
    marginHorizontal: wp(2),
    justifyContent: "space-between",
    alignItems: "center",
    borderColor : C5,
    borderWidth : 2,
    borderRadius: 5,
    width: wp(96),
    height: hp(6),
    backgroundColor: "white",
    paddingStart: wp(2),
    alignSelf: 'flex-start',

  },
  buttonInput: {
    justifyContent: "space-between",
    alignItems: "center",
    borderColor : C5,
    borderWidth : 2,
    borderRadius: 5,
    backgroundColor: "white",
    paddingStart: wp(2),
  },
  textCompte: {
    fontSize: 18,
    fontWeight: "bold",
    color: C3,
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    paddingTop: hp(1),
  },
  buttonDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto'
  },
  buttonCacher: {
    marginEnd: wp(10)
  },
  textLogin: {
    fontSize: 16,
    marginLeft: wp(2.5),
    marginTop: hp(1.5),
    color: "black",
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
  },
  errorMessage: {
    color: 'black',
    marginTop: -15,
    marginBottom: 10,
    marginLeft: wp(2.5),
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  errorMessageConnect: {
    color: 'black',
    marginLeft: wp(2.5),
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  input: {
    borderBottomWidth: 0,
  },
  buttonBillets: {
    marginStart: wp('7'),
    justifyContent: "space-between",
    alignItems: "center",
    borderColor : C3,
    borderWidth : 2,
    borderRadius: 5,
    width: wp(50),
    height: hp(6),
    backgroundColor: "white",
    paddingStart: wp(2),
  },
  buttonPanier: {
    marginStart: wp('0'),
    justifyContent: "center",
    alignItems: "center",
    borderColor : C3,
    borderWidth : 2,
    borderRadius: 5,
    width: wp(30),
    height: hp(6),
    backgroundColor: "white",
    marginTop: wp('2'),
  },
  textPanier: {
    fontSize: 13,
    fontWeight: "bold",
    color: C3,
    textShadowColor: C2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
});

export default styles;
