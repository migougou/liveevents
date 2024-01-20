import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import WooCommerceAPI from 'react-native-woocommerce-api';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Panier from "./panier/Panier"
import Billets from "./billets/Billets"
import Compte from "./compte/Compte"
import styles from './styles';
import { getData, cleanData } from '../utilities';

const Billetterie = () => {

    const [productsData, setProductsData] = useState(null);
    const [panierData, setPanierData] = useState(null);
    const [ordersData, setOrdersData] = useState(null);
    const [loading, setLoading] = useState(false)
    const Tab = createMaterialTopTabNavigator();
    const [loadingText, setLoadingText] = useState("Loading");
    const [infosClient, setInfosClient] = useState(null)

    useEffect(() => {
        setLoading(true)
        let completedRequests = 0;

        const handleRequestComplete = () => {
            completedRequests++;

            if (completedRequests === 2) { // Ajuster le nombre en fonction du nombre de requetes
                setLoading(false);
            }
        };
        fetchWooCommerce("products", setProductsData, handleRequestComplete)
        fetchWooCommerce("orders", setOrdersData, handleRequestComplete)
        getData("infosClient", setInfosClient)
        getData('panier', setPanierData)
    }, [])

    const WooCommerce = new WooCommerceAPI({
        url: 'https://cchost.bmcorp.fr/LiveEvents',
        ssl: true,
        consumerKey: 'ck_6a4763ce4aa883cbb508176c5641f8faffcd9e1c',
        consumerSecret: 'cs_3c71ec52c41cf1353ba02b19fcc8da9b97d6158b',
        wpAPI: true,
        version: 'wc/v3',
        queryStringAuth: true,
    });

    function fetchWooCommerce(endpoint, setData, onComplete) {
        WooCommerce.get(endpoint)
            .then(data => {
                setData(data);
                onComplete();
            })
            .catch(error => {
                console.log(error);
                onComplete();
            });
    }

    function testOrder() {
        console.log('panierData', panierData);
        console.log('infosClient', infosClient);
        const dataCommande = {
            payment_method: "bacs",
            payment_method_title: "Direct Bank Transfer",
            set_paid: true,
            billing: {
                first_name: infosClient.prenom,
                last_name: infosClient.nom,
                address_1: infosClient.addresse,
                city: infosClient.ville,
                state: infosClient.departement,
                postcode: infosClient.codepostal,
                country: infosClient.pays,
                email: infosClient.email,
                phone: infosClient.telephone
            },
            line_items: [
                {
                    product_id: panierData[0].id,
                    quantity: panierData[0].quantite
                }
            ]
        };
        console.log('dataCommande', dataCommande);
        // WooCommerce.post("orders", dataCommande)
        //     .then((response) => {
        //         console.log("ça marche" + response.data);
        //         console.log("ça marche json" + JSON.stringify(response));
        //         cleanData("panier")
        //         setPanierData(null)
        //     })
        //     .catch((error) => {
        //         console.log('erreur ' + error.response.data);
        //     });
    }

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

    return (
        <View style={{ flex: 1 }}>
            {/* <Button title={'Envoyer une nouvelle commande'} onPress={testOrder} buttonStyle={{ margin: 20 }} /> */}
            <Tab.Navigator initialRouteName='Billets'>
                <Tab.Screen name="Panier" >
                    {(props) => <Panier {...props} panierData={panierData} setPanierData={setPanierData} testOrder={testOrder} infosClient={infosClient} />}
                </Tab.Screen>
                <Tab.Screen name="Billets" >
                    {(props) => <Billets {...props} productsData={productsData} setPanierData={setPanierData} />}
                </Tab.Screen>
                <Tab.Screen name="Compte" >
                    {(props) => <Compte {...props} setInfosClient={setInfosClient} infosClient={infosClient} />}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
};

export default Billetterie;