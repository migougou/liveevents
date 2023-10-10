import { StyleSheet } from "react-native";
import { wp, hp } from "../dimensions.js";
import { C1, C2 } from "../colors.js";

const styles = StyleSheet.create({
  backButtonContainer: {
    top: 25,
    right: 100,
  },
  backgroundContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    marginBottom: 205,
  },
  button: {
    alignSelf: "stretch",
    marginHorizontal: hp(12.5),
    marginVertical: wp(5),
    backgroundColor: C1,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: C2,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: C2,
  },
  containerPartenaires: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: hp(2),
  },
  content: {
    flex: 1,
    padding: hp(1.2),
    marginHorizontal: hp(1),
  },
  contentContact: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: C1,
    borderRadius: 20,
    marginHorizontal: wp(10),
    marginVertical: hp(15),
    padding: 10,
  },
  contentPlus: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: C1,
    padding: hp(1.5),
    marginHorizontal: wp(2),
    borderRadius: 10,
    marginVertical: hp(2),
  },
  contentText: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: C1,
    borderWidth: 2,
    alignItems: "flex-start",
  },
  email: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 20,
    fontSize: 18,
  },
  header: {
    alignItems: "center",
    marginTop: hp(2.5),
  },
  icon: {
    marginRight: hp(1.5),
    color: C1,
  },
  iconPlus: {
    width: 30,
  },
  image: {
    width: wp(20),
    height: hp(10),
    resizeMode: "contain",
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    padding: hp(2),
    margin: hp(1),
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  infosContainer: {
    padding: hp(1.5),
    backgroundColor: C2,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: hp(1.5),
  },
  plusButton: {
    alignSelf: "stretch",
    marginHorizontal: hp(12.5),
    marginVertical: wp(5),
    backgroundColor: C2,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  plusButtonText: {
    color: C1,
    fontWeight: "bold",
  },
  plusTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: wp(3),
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(1.5),
    marginTop: hp(3.8),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: C1,
  },
  separator: {
    borderBottomColor: C1,
    borderBottomWidth: 1,
    marginBottom: wp(3),
  },
  sousText: {
    flexDirection: "row",
  },
  sousTextIcon: {
    marginRight: 12,
    marginBottom: 12,
  },
  sousTextTitle: {
    fontSize: 16,
    paddingBottom: 10,
    height: 30,
    color: C1,
  },
  textInfos: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: wp(8),
    textAlign: "center",
    color: C1,
  },
  textSousTitre: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: C1,
  },
  titleContact: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  voirPlus: {
    color: C1,
    marginTop: hp(1.5),
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default styles;
