import { useEffect, useState } from "react";
import { Text, View, StatusBar, Pressable } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Overlay } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";

import {
    Accueil,
    Carte,
    Billetterie,
    OverlayInformations,
    ArtistesStack,
    PlusStack,
    Header,
} from "./components";
import styles from "./styles.js";
import { C1, C2, C3, C4, C5, C6, C7 } from "./components/colors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const Tab = createBottomTabNavigator();

const filterURLs = {
    faq: "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=21",
    informations:
        "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=20",
    artistes:
        "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=18",
    localisations:
        "https://cchost.bmcorp.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100&categories=17",
};

const localData = {
    artistes: require("./local_data/wordpressArtistes.json"),
    localisations: require("./local_data/wordpressLocalisations.json"),
    informations: require("./local_data/wordpressInformations.json"),
    faq: require("./local_data/wordpressFAQ.json"),
};

const LOADING_INTERVAL = 500;
const FETCH_INTERVAL = 30000;

// Empêcher l'écran de démarrage de disparaître automatiquement
SplashScreen.preventAutoHideAsync().catch(() => {
    console.warn("SplashScreen.preventAutoHideAsync did not work as expected");
});

export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    useEffect(() => {
        // Cache le splash screen une fois que tout est chargé (par exemple, les polices)
        async function hideSplashScreenAsync() {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }

        hideSplashScreenAsync();
    }, [fontsLoaded]); // Dépendance à fontsLoaded pour s'exécuter

    const [artistes, setArtistes] = useState([]);
    const [localisations, setLocalisations] = useState([]);
    const [informations, setInformations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState("isLoading");
    const [error, setError] = useState(null);
    const [informationType, setInformationType] = useState(true);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [informationsBanales, setInformationsBanales] = useState([]);
    const [informationsImportantes, setInformationsImportantes] = useState([]);
    const [nombreInfoBanales, setNombreInfoBanales] = useState(0);
    const [nombreInfoImportantes, setNombreInfoImportantes] = useState(0);
    const [choixInfo, setChoixInfo] = useState("important");

    useEffect(() => {
        setArtistes(localData.artistes);
        setLocalisations(localData.localisations);
        setInformations(localData.informations);
        setIsLoading(false);
    }, []);

    // Handle Loading
    useEffect(() => {
        if (!isLoading) return;

        const interval = setInterval(() => {
            setLoadingText((previousLoadingText) =>
                previousLoadingText.endsWith("...")
                    ? "isLoading"
                    : previousLoadingText + "."
            );
        }, LOADING_INTERVAL);

        return () => clearInterval(interval);
    }, [isLoading]);

    // Handle Informations => Banales && Importantes
    useEffect(() => {
        let infoBanales = [];
        let infoImportantes = [];

        informations.filter((information) => {
            const infoLevel = information.acf.niveaudimportance;

            if (infoLevel === "banale") infoBanales.push(information);
            if (infoLevel === "important") infoImportantes.push(information);
        });

        setInformationsBanales(infoBanales);
        setInformationsImportantes(infoImportantes);
        setNombreInfoBanales(infoBanales.length);
        setNombreInfoImportantes(infoImportantes.length);
        setInformationType(infoImportantes.length > 0);
    }, [informations]);

    // const fetchURL = (URL, setData, onComplete) => {
    //   axios
    //     .get(URL)
    //     .then((res) => {
    //       setData(JSON.parse(res.request._response));
    //       onComplete();
    //     })
    //     .catch((error) => {
    //       setError('Une erreur s\'est produite ' + error);
    //       onComplete();
    //     });
    // };

    function overlayInfoLogic() {
        setOverlayVisible(!overlayVisible);
    }

    // TODO: Le render d'un composant doit être unique !
    if (isLoading) {
        return (
            <View style={styles.loading}>
                <Text>{loadingText}</Text>
            </View>
        );
    }

    // TODO: Le render d'un composant doit être unique !
    if (error) {
        return (
            <View style={styles.error}>
                <Text>{error}</Text>
            </View>
        );
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={C2} />
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <Header
                        informationType={informationType}
                        nombreInfoBanales={nombreInfoBanales}
                        nombreInfoImportantes={nombreInfoImportantes}
                        overlayInfoLogic={overlayInfoLogic}
                    />
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
                    <Tab.Navigator
                        backBehavior="initialRoute"
                        initialRouteName="Accueil"
                        screenOptions={({ route }) => ({
                            // Handle Icon Menu
                            tabBarIcon: ({ color = C1, size }) => {
                                let iconName;

                                if (route.name === "Map") {
                                    iconName = "map";
                                } else if (route.name === "Artistes") {
                                    iconName = "music";
                                } else if (route.name === "Accueil") {
                                    iconName = "home";
                                } else if (route.name === "Billeterie") {
                                    iconName = "wallet";
                                } else if (route.name === "Plus") {
                                    iconName = "bars";
                                }

                                return (
                                    <FontAwesome5
                                        name={iconName}
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                            tabBarButton: (props) => (
                                <Pressable
                                    {...props}
                                    style={({ pressed }) => [
                                        styles.tabBarButton,
                                        { opacity: pressed ? 0.5 : 1 },
                                    ]}
                                />
                            ),
                            headerShown: false,
                            tabBarActiveTintColor: C3,
                            tabBarInactiveTintColor: "white",
                            tabBarStyle: { backgroundColor: C2 },
                        })}
                    >
                        <Tab.Screen name="Map">
                            {(props) => (
                                <Carte
                                    {...props}
                                    localisations={localisations}
                                />
                            )}
                        </Tab.Screen>
                        <Tab.Screen
                            name="Artistes"
                            children={(props) => (
                                <ArtistesStack {...props} artistes={artistes} />
                            )}
                            // Route spéciale pour aller de Acceuil à Artistes/DetailsArtiste
                            listeners={({ navigation }) => ({
                                tabPress: (event) => {
                                    event.preventDefault();
                                    navigation.reset({
                                        index: 0,
                                        routes: [
                                            {
                                                name: "Artistes",
                                                params: {
                                                    screen: "Programmation",
                                                },
                                            },
                                        ],
                                    });
                                },
                            })}
                        />
                        <Tab.Screen name="Accueil">
                            {(props) => (
                                <Accueil {...props} artistes={artistes} />
                            )}
                        </Tab.Screen>
                        <Tab.Screen name="Billeterie" component={Billetterie} />
                        <Tab.Screen name="Plus" component={PlusStack} />
                    </Tab.Navigator>
                </SafeAreaView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
