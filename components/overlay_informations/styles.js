import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  fullOverlay: {
    width: screenWidth,
    margin: -10,
  },
  infoCarousel: {
    height: screenWidth / 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
  titreTextCarousel: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "900",
  },
  textCarousel: {
    fontSize: 18,
  },
  textCarouselMessage: {
    fontSize: 18,
    height: 90,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  carouselBanale: {
    backgroundColor: "#33CCFF",
  },
  carouselImportant: {
    backgroundColor: "#E24444",
  },
  paginationDot: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default styles;