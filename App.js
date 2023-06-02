import { Image, Text, View, TouchableOpacity, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Badge, Overlay } from "react-native-elements";
import { useEffect, useState } from "react";
import axios from "axios";

import Accueil from "./components/Accueil";
import Programmation from "./components/Programmation";
import Carte from "./components/Carte";
import Partenaires from "./components/Partenaires";
import Billetterie from "./components/Billetterie";
import DetailsArtiste from "./components/DetailsArtiste";
import OverlayInformations from "./components/OverlayInformations";

import s_app from "./styles/app.js";
import DetailsInformations from "./components/DetailsInformations";

const Drawer = createDrawerNavigator();
const API_URL =
  "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100";
const LocalData = require("./wordpress.json");
const URLFiltreInformations =
  "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=20";
const URLFiltreArtistes =
  "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=18";
const URLFiltreLocalisations =
  "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=17";
const URLFiltrePartenaires =
  "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=19";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [artistes, setArtistes] = useState([]);
  const [localisations, setLocalisations] = useState([]);
  const [partenaires, setPartenaires] = useState([]);
  const [informations, setInformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");
  const [error, setError] = useState(null);

  /* //nouveau fetch en fonction des catégories
    useEffect(() => {
      setLoading(true);
      let completedRequests = 0;
  
      const handleRequestComplete = () => {
        completedRequests++;
  
        if (completedRequests === 4) { // Ajuster le nombre en fonction du nombre de requetes
          setLoading(false);
        }
      };
  
      fetchURL(URLFiltreArtistes, setArtistes, handleRequestComplete);
      fetchURL(URLFiltreLocalisations, setLocalisations, handleRequestComplete);
      fetchURL(URLFiltrePartenaires, setPartenaires, handleRequestComplete);
      fetchURL(URLFiltreInformations, setInformations, handleRequestComplete);
    }, []);
  
    const fetchURL = (URL, setData, onComplete) => {
      axios
        .get(URL)
        .then((res) => {
          setData(JSON.parse(res.request._response));
          onComplete();
        })
        .catch((error) => {
          setError('Une erreur s\'est produite ' + error);
          onComplete();
        });
    }; */

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
    filterAndSetData("informations", setInformations);
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

  // modifications pour fonctionnalité information
  const [informationType, setInformationType] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [informationsBanales, setInformationsBanales] = useState([]);
  const [informationsImportantes, setInformationsImportantes] = useState([]);
  const [nombreInfoBanales, setNombreInfoBanales] = useState(0);
  const [nombreInfoImportantes, setNombreInfoImportantes] = useState(0);
  const [choixInfo, setChoixInfo] = useState("important");

  useEffect(() => {
    const fetchInformations = () => {
      axios
        .get(URLFiltreInformations)
        .then((res) => {
          setInformations(JSON.parse(res.request._response));
        })
        .catch((error) => {
          console.log('Une erreur s\'est produite ' + error);
        });
    };

    // Fetch initial
    fetchInformations();

    // Fetch toutes les 30 secondes
    const interval = setInterval(() => {
      fetchInformations();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let infoBanales = [];
    let infoImportantes = [];
    informations.filter((information) => {
      const infoLevel = information.acf.niveaudimportance;
      if (infoLevel === "banale") {
        infoBanales.push(information);
      } else if (infoLevel === "important") {
        infoImportantes.push(information);
      }
    });
    setInformationsBanales(infoBanales);
    setInformationsImportantes(infoImportantes);
  }, [informations]);

  useEffect(() => {
    setNombreInfoBanales(informationsBanales.length);
    setNombreInfoImportantes(informationsImportantes.length);

    // true = info banale / false = info importante
    if (informationsImportantes.length > 0) {
      setInformationType(false);
    } else {
      setInformationType(true);
    }
  }, [informationsBanales, informationsImportantes]);

  function overlayInfoLogic() {
    setOverlayVisible(!overlayVisible);
  }

  //fin modifs

  if (loading) {
    return (
      <View style={s_app.loading}>
        <Text>{loadingText}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={s_app.error}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Overlay
        isVisible={overlayVisible}
        onBackdropPress={() => overlayInfoLogic()}
      >
        <OverlayInformations
          informationsBanales={informationsBanales}
          informationsImportantes={informationsImportantes}
          overlayInfoLogic={overlayInfoLogic}
          setChoixInfo={setChoixInfo}
        />
      </Overlay>
      <Drawer.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerTitle: () => (
            <View style={s_app.header}>
              <View style={s_app.headerImageLogo}>
                <Image
                  source={require("./icones/concert.png")}
                  style={s_app.headerImageLogoAdjust}
                />
              </View>
              <View style={s_app.headerImageRight}>
                {informationType ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        overlayInfoLogic();
                      }}
                    >
                      <Image
                        source={require("./icones/notification.png")}
                        style={s_app.headerImageRightNotif}
                      />
                    </TouchableOpacity>
                    <Badge
                      status="primary"
                      value={nombreInfoBanales}
                      containerStyle={{ position: "absolute", left: 20 }}
                    />
                  </View>
                ) : (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        overlayInfoLogic();
                      }}
                    >
                      <Image
                        source={require("./icones/notificationImportante.png")}
                        style={s_app.headerImageRightNotif}
                      />
                    </TouchableOpacity>
                    <Badge
                      status="error"
                      value={nombreInfoImportantes}
                      containerStyle={{ position: "absolute", left: 20 }}
                    />
                  </View>
                )}
                <Image
                  source={require("./icones/france.png")}
                  style={s_app.headerImageRightDrapeau}
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
        <Drawer.Screen
          name="DetailsInformations"
          options={{ drawerItemStyle: { display: "none" } }}
        >
          {(props) => (
            <DetailsInformations
              {...props}
              informationsBanales={informationsBanales}
              informationsImportantes={informationsImportantes}
              choixInfo={choixInfo}
              setChoixInfo={setChoixInfo}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
