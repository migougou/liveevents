import { StyleSheet } from "react-native";
import { wp, hp } from '../../dimensions';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#333333',
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333333",
    paddingVertical: hp('1.5'),
    paddingHorizontal: wp('2'),
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
  },

  icone: {
    height: wp('10'),
    width: wp('10'),
    marginHorizontal: wp('2'),
  },

  text: {
    alignItems: "center",
    color: '#e91e63',
  },

  selectText: {
    alignItems: "center",
    borderBottomWidth: wp('0.7'),
    borderBottomColor: "#000",
    color: '#e91e63',
  },

  checkboxContainer: {
    flex: 1,
  },

  checkboxTitle: {
    color: '#e91e63',
  },

  title: {
    textAlign: "center",
    marginVertical: wp('3'),
    fontSize: wp('5'),
    color: '#e91e63',
    backgroundColor: '#333333',
  },

  subTitle: {
    marginStart: wp('5'),
    marginTop: wp('3'),
    color: '#e91e63',
    backgroundColor: '#333333',
  },

  dayButton: {
    padding: wp('2'),
    borderRadius: wp('2'),
    backgroundColor: '#333333',
    marginHorizontal: wp('2'),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  selectedDayButton: {
    backgroundColor: '#e91e63',
  },

  dayButtonText: {
    fontSize: wp('4'),
    fontWeight: '600',
    color: '#e91e63',
  },

  selectedDayButtonText: {
    color: '#333333',
  },
});

export default styles;
