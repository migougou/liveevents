import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  fullOverlay: {
    width: screenWidth,
    margin: -10,
    borderColor: "black",
    borderWidth: 1,
  },
  infoCarousel: {
    height: screenWidth / 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 5,
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
  buttonBanal: {
    padding: 8.5,
    borderRadius: 5,
    backgroundColor: "#33CCFF",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonImportant: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#E24444",
    borderColor: "black",
    borderWidth: 2
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  carouselBanal: {
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