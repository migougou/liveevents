import { Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Overlay } from "react-native-elements";
import { useEffect, useState } from "react";
import axios from "axios";

import { Accueil, Carte, Partenaires, Billetterie, OverlayInformations, DetailsInformations } from "./components";
import ArtistesStack from "./components/navigation/ArtistesStack";
import Header from "./components/navigation/Header";
import styles from "./styles.js";

const Drawer = createDrawerNavigator();

const filterURLs = {
  faq: "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=21",
  informations: "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=20",
  partenaires: "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=19",
  artistes: "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=18",
  localisations: "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=17",
};

const localData = {
  artistes: require("./wordpressArtistes.json"),
  localisations: require("./wordpressLocalisations.json"),
  partenaires: require("./wordpressPartenaires.json"),
  informations: require("./wordpressInformations.json"),
  faq: require("./wordpressFAQ.json"),
};

const LOADING_INTERVAL = 500;
const FETCH_INTERVAL = 30000;

export default function App() {
  const [artistes, setArtistes] = useState([]);
  const [localisations, setLocalisations] = useState([]);
  const [partenaires, setPartenaires] = useState([]);
  const [informations, setInformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");
  const [error, setError] = useState(null);
  const [informationType, setInformationType] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [informationsBanales, setInformationsBanales] = useState([]);
  const [informationsImportantes, setInformationsImportantes] = useState([]);
  const [nombreInfoBanales, setNombreInfoBanales] = useState(0);
  const [nombreInfoImportantes, setNombreInfoImportantes] = useState(0);
  const [choixInfo, setChoixInfo] = useState("important");

  /* // Choix n°1 : data récupérées via un fetch sur les URL du wordpress
  useEffect(() => {
    setLoading(true);
    let completedRequests = 0;

    const handleRequestComplete = () => {
      completedRequests++;

      if (completedRequests === 4) { // Ajuster le nombre en fonction du nombre de requetes
        setLoading(false);
      }
    };

    fetchURL(filterURLs.artistes, setArtistes, handleRequestComplete);
    fetchURL(filterURLs.localisations, setLocalisations, handleRequestComplete);
    fetchURL(filterURLs.partenaires, setPartenaires, handleRequestComplete);
    fetchURL(filterURLs.informations, setInformations, handleRequestComplete);

    // Fetch des informations toutes les 30 secondes
    const interval = setInterval(() => {
      fetchURL(filterURLs.informations, setInformations, handleRequestComplete);
    }, FETCH_INTERVAL);

    return () => clearInterval(interval);
  }, []); */

  // Choix n°2 : data récupérées via des json
  useEffect(() => {
    setArtistes(localData.artistes);
    setLocalisations(localData.localisations);
    setPartenaires(localData.partenaires);
    setInformations(localData.informations);
    setLoading(false);
  }, []);

  // Permet d'avoir un écran de chargement lors du fetch des données pour afficher l'application seulement quand les données sont récupérées et ainsi éviter les erreurs
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingText((prevLoadingText) =>
          prevLoadingText.endsWith("...") ? "Loading" : prevLoadingText + "."
        );
      }, LOADING_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [loading]);

  // Permet de diviser les informations en 2 catégories, Importantes et banales
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

  // Permet l'affichage de la cloche d'informations et donne les nombre d'informations banales et importantes
  useEffect(() => {
    setNombreInfoBanales(informationsBanales.length);
    setNombreInfoImportantes(informationsImportantes.length);

    // true = info banale / false = info importante
    informationsImportantes.length > 0 ? setInformationType(false) : setInformationType(true);
  }, [informationsBanales, informationsImportantes]);

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
  };

  function overlayInfoLogic() {
    setOverlayVisible(!overlayVisible);
  }

  function changementInformation() {
    setChoixInfo(choixInfo === "important" ? "banale" : "important")
  }

  //fin modifs

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
          headerTitle: () => <Header
            informationType={informationType}
            nombreInfoBanales={nombreInfoBanales}
            nombreInfoImportantes={nombreInfoImportantes}
            overlayInfoLogic={overlayInfoLogic} />
        }}
      >
        <Drawer.Screen name="Accueil" component={Accueil} />
        <Drawer.Screen name="Artistes">
          {(props) => <ArtistesStack {...props} artistes={artistes} />}
        </Drawer.Screen>
        <Drawer.Screen name="Carte">
          {(props) => <Carte {...props} localisations={localisations} />}
        </Drawer.Screen>
        <Drawer.Screen name="Billetterie" component={Billetterie} />
        <Drawer.Screen name="Partenaires">
          {(props) => <Partenaires {...props} partenaires={partenaires} />}
        </Drawer.Screen>
        <Drawer.Screen name="DetailsInformations" options={{ drawerItemStyle: { display: "none" } }}        >
          {(props) => (
            <DetailsInformations
              {...props}
              informationsBanales={informationsBanales}
              informationsImportantes={informationsImportantes}
              choixInfo={choixInfo}
              setChoixInfo={setChoixInfo}
              changementInformation={changementInformation}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
