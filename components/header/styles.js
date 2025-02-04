import { StyleSheet } from "react-native";
import { wp, hp } from "../dimensions";
import { C1, C2, C3, C4, C5, C6, C7 } from "../colors";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: C2,
    paddingHorizontal: wp(3),
  },
  logoImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  notificationImage: {
    width: wp(8),
    height: hp(5),
    resizeMode: "contain",
  },
  flagImage: {
    width: wp(8),
    height: wp(8),
    resizeMode: "contain",
  },
  badgeStyle: {
    position: "absolute",
    top: 0,
    right: -wp(2),
  },
});

export default styles;
