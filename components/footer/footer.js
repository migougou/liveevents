import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from "./styles"

const Facebook = require("../../icones/facebook.png");
const Instagram = require("../../icones/instagram.png");
const Twitter = require("../../icones/twitter.png");

const Footer = () => {
    const openFacebookPage = () => {
        Linking.openURL('https://www.facebook.com')
    };
    const openInstagramPage = () => {
        Linking.openURL('https://www.instagram.com')
    };
    const openTwitterPage = () => {
        Linking.openURL('https://www.twitter.com')
    };
    const openConfidentialite = () => {
        Linking.openURL('https://www.livenation.fr/privacy')
    };
    const openGenerales = () => {
        Linking.openURL('https://www.livenation.fr/terms')
    };
    const openCookies = () => {
        Linking.openURL('https://www.livenation.fr/cookies')
    };
    const openDurabilite = () => {
        Linking.openURL('https://www.livenation.fr/SustainabilityCharter')
    };

    return (
        <View style={styles.footer}>
            <Text style={styles.textFooter}>Billets</Text>
            <Text style={styles.textFooter}>F.A.Q.</Text>
            <View style={styles.PositionReseaux}>
                <Text style={styles.textFooter}>Partenariats</Text>
                <View style={styles.reseauSocial}>
                    <TouchableOpacity onPress={openFacebookPage}>
                        <Image source={Facebook} style={styles.imgReseau} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openInstagramPage}>
                        <Image source={Instagram} style={styles.imgReseau} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openTwitterPage}>
                        <Image source={Twitter} style={styles.imgReseau} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>©</Text>
                <Text style={styles.footerText}>2023 Live events</Text>
            </View>
            <TouchableOpacity onPress={openConfidentialite}>
                <Text style={styles.textFooter}>Charte de confidentialité</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openGenerales}>
                <Text style={styles.textFooter}>Conditions générales</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCookies}>
                <Text style={styles.textFooter}>Politique de cookies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openDurabilite}>
                <Text style={styles.textFooter}>Charte de durabilité</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;