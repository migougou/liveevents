import { Image, Text, View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect, useState } from "react";
import axios from "axios";

import Accueil from "./components/Accueil";
import Programmation from "./components/Programmation";
import Carte from "./components/Carte";
import Partenaires from "./components/Partenaires";
import Billetterie from "./components/Billetterie";
import DetailsArtiste from "./components/DetailsArtiste";

import styles from "./styles";

const Drawer = createDrawerNavigator();
const API_URL =
  "http://cchost.freeboxos.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100";
const LocalData = require("./wordpress.json");

export default function App() {
  const [posts, setPosts] = useState([]);
  const [artistes, setArtistes] = useState([]);
  const [localisations, setLocalisations] = useState([]);
  const [partenaires, setPartenaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");
  const [error, setError] = useState(null);

  /*
  useEffect(() => {
    setLoading(true);
    axios.get(API_URL).then((res) => {
      setPosts(JSON.parse(res.request._response))
      setLoading(false);
    }).catch((error) => {
      setError('Une erreur s\'est produite ' + error)
      setLoading(false);
    });
  }, [])
  */

  useEffect(() => {
    setPosts(LocalData);
    setLoading(false);
  }, []);

  const filterAndSetData = (term, setData) => {
    const filteredPosts = posts.filter((post) => {
      const terms = post._embedded["wp:term"][0] ?? [];
      return terms.some((termItem) => termItem.slug === term);
    });
    setData(filteredPosts);
  };

  useEffect(() => {
    filterAndSetData("artiste", setArtistes);
    filterAndSetData("localisations", setLocalisations);
    filterAndSetData("partenaires", setPartenaires);
  }, [posts]);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingText((prevLoadingText) =>
          prevLoadingText.endsWith("...") ? "Loading" : prevLoadingText + "."
        );
      }, 500);
      return () => clearInterval(interval);
    }
  }, [loading]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>{loadingText}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerTitle: () => (
            <View style={styles.header}>
              <View style={styles.headerImageLogo}>
                <Image
                  source={require("./icones/concert.png")}
                  style={styles.headerImageLogoAdjust}
                />
              </View>
              <View style={styles.headerImageRight}>
                <Image
                  source={require("./icones/notification.png")}
                  style={styles.headerImageRightNotif}
                />
                <Image
                  source={require("./icones/france.png")}
                  style={styles.headerImageRightDrapeau}
                />
              </View>
            </View>
          ),
        }}
      >
        <Drawer.Screen name="Accueil" component={Accueil} />
        <Drawer.Screen name="Programmation">
          {(props) => <Programmation {...props} artistes={artistes} />}
        </Drawer.Screen>
        <Drawer.Screen name="Carte" component={Carte} />
        <Drawer.Screen name="Billetterie" component={Billetterie} />
        <Drawer.Screen name="Partenaires">
          {(props) => <Partenaires {...props} partenaires={partenaires} />}
        </Drawer.Screen>
        <Drawer.Screen name="DetailsArtiste">
          {(props) => <DetailsArtiste {...props} artiste={artistes[0]} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
