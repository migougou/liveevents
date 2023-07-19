import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import WooCommerceAPI from 'react-native-woocommerce-api';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Panier from "./Panier"
import Billets from "./Billets"
import Compte from "./Compte"
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

const Billetterie = () => {

    const [productsData, setProductsData] = useState(null);
    const [panierData, setPanierData] = useState(null);
    const [ordersData, setOrdersData] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    const [loadingText, setLoadingText] = useState("Loading");

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
    }, [])


    const data = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "john.doe@example.com",
            phone: "(555) 555-5555"
        },
        shipping: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
        },
        line_items: [
            {
                product_id: 542,
                quantity: 1
            }
        ]
    };

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
        WooCommerce.post("orders", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
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
            {/* <Button title={'Voir les produits'} onPress={getProducts} buttonStyle={{ margin: 20 }} />
            <Button title={'Voir les commandes'} onPress={getOrders} buttonStyle={{ margin: 20 }} />
            <Button title={'Envoyer une nouvelle commande'} onPress={testOrder} buttonStyle={{ margin: 20 }} />
            <ScrollView><Text>{JSON.stringify(productData)}</Text></ScrollView> */}
            <Tab.Navigator initialRouteName='Billets'>
                <Tab.Screen name="Panier" >
                    {(props) => <Panier {...props} productsData={productsData} panierData={panierData} setPanierData={setPanierData} />}
                </Tab.Screen>
                <Tab.Screen name="Billets" >
                    {(props) => <Billets {...props} productsData={productsData} setPanierData={setPanierData} />}
                </Tab.Screen>
                <Tab.Screen name="Compte" >
                    {(props) => <Compte {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
};

export default Billetterie;