import { StyleSheet } from "react-native";

const s_partenaires = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 40,
  },
  scrollContainer: {
    alignItems: "center",
  },
  partenairesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imgContainer: {
    width: "40%",
    aspectRatio: 1,
    marginVertical: 1,
    marginHorizontal: -3,
    marginStart: 31,
    backgroundColor: "pink",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    height: 100,
    width: 100,
  },
});

export default s_partenaires;