import { Dimensions, StyleSheet } from "react-native";
import { C1, C2, C3, C4, C5, C6, C7 } from "../colors";



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
    padding: 5,
  },
  infoImportant: {
    backgroundColor: C4,
  },
  infoBanale: {
    backgroundColor: C7,
  },
  titreTextCarousel: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: 'Poppins_400Regular',
  },
  textCarousel: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  textCarouselMessage: {
    fontSize: 14,
    height: 90,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonBanal: {
    padding: 8.5,
    borderRadius: 5,
    backgroundColor: C6,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonImportant: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: C5,
    borderColor: "black",
    borderWidth: 2
  },
  buttonText: {
    color: "black",
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    textAlign: "center",
  },
  carouselBanal: {
    backgroundColor: C6,
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