import { StyleSheet } from "react-native";
import { wp, hp } from "../dimensions";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#333333",
    paddingHorizontal: wp(4),
  },
  logoImage: {
    width: wp(10),
    height: hp(10),
    resizeMode: "contain",
  },
  notificationImage: {
    width: wp(8),
    height: hp(5),
    resizeMode: "contain",
  },
  flagImage: {
    width: wp(7),
    height: wp(7),
    resizeMode: "contain",
  },
  badgeStyle: {
    position: "absolute", 
    top: 0,
    right: -wp(2), 
  },
});

export default styles;
