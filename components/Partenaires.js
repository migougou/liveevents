import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";

const Partenaires = ({ partenaires }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Ils nous font confiance</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.partenairesContainer}>
            {partenaires.map((partenaire, index) => (
              <TouchableOpacity
                style={styles.imgContainer}
                key={index}
                onPress={() => Linking.openURL(partenaire.acf.sitepartenaire)}
              >
                <Image
                  source={{ uri: partenaire.acf.imageurl }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Partenaires;
