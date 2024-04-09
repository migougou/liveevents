import React from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";




const Facebook = require("../../icones/facebook.png");
const Instagram = require("../../icones/instagram.png");
const Twitter = require("../../icones/twitter.png");
const Youtube = require("../../icones/youtube.png");
const Snapchat = require("../../icones/snapchat.png");
const Linkedin = require("../../icones/linkedin.png");

const openFacebookPage = () =>              { Linking.openURL("https://www.facebook.com") };
const openInstagramPage = () =>             { Linking.openURL("https://www.instagram.com") };
const openTwitterPage = () =>               { Linking.openURL("https://www.twitter.com") };
const openYoutubePage = () =>               { Linking.openURL("https://www.youtube.com") };
const openSnapchatPage = () =>               { Linking.openURL("https://www.snapchat.com") };
const openLinkedinPage = () =>               { Linking.openURL("https://www.linkedin.com") };
const openPrivacyPage = () =>               { Linking.openURL("https://www.livenation.fr/privacy") };
const openTermsPage = () =>                 { Linking.openURL("https://www.livenation.fr/terms") };
const openCookiesPage = () =>               { Linking.openURL("https://www.livenation.fr/cookies") };
const openSustainabilityCharterPage = () => { Linking.openURL("https://www.livenation.fr/SustainabilityCharter") };

const Footer = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.footer}>
      <View style={styles.diversesPages}>
        <Text style={styles.textFooter} onPress={() => navigation.navigate("Billetterie")}>Billets</Text>
        <Text style={styles.textFooter} onPress={() => navigation.navigate("FAQ")}>F.A.Q.</Text>
        <Text style={styles.textFooter} onPress={() => navigation.navigate("Partenaires")}>Partenariats</Text>
      </View>
      <View style={styles.reseauxSociaux}>
        <TouchableOpacity onPress={openFacebookPage}>
          <Image source={Facebook} style={styles.imgReseau} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openInstagramPage}>
          <Image source={Instagram} style={styles.imgReseau} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openTwitterPage}>
          <Image source={Twitter} style={styles.imgReseau} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openYoutubePage}>
          <Image source={Youtube} style={styles.imgReseau} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openSnapchatPage}>
          <Image source={Snapchat} style={styles.imgReseau} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openLinkedinPage}>
          <Image source={Linkedin} style={styles.imgReseau} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={styles.textFooterContainer}>
        <Text style={styles.textFooter}>© 2023 Live events</Text>
      </View>
      <View style={styles.diversesPages}>
        <TouchableOpacity onPress={openPrivacyPage}>
          <Text style={styles.textFooter}>Charte de confidentialité</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openTermsPage}>
          <Text style={styles.textFooter}>Conditions générales</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.diversesPages}>
        <TouchableOpacity onPress={openCookiesPage}>
          <Text style={styles.textFooter}>Politique de cookies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openSustainabilityCharterPage}>
          <Text style={styles.textFooter}>Charte de durabilité</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;