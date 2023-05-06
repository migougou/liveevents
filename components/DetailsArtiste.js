import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import { } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

moment.locale('fr');

const screenWidth = Dimensions.get('window').width;


const DetailsArtiste = ({ artiste }) => {
    if (typeof artiste !== 'undefined') {

        const hmdebut = artiste.acf.hdebut.slice(0, 5);
        const hmfin = artiste.acf.hfin.slice(0, 5);

        return (
            <ScrollView>
                <View >
                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="chevron-left" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.format} source={{ uri: artiste.acf.imageurl }} />
                    <View style={styles.nomArtiste}>
                        <Text style={styles.sizeArtiste}>{artiste.acf.artiste}</Text>
                    </View>
                    <View style={styles.styleOrigineContainer}>
                        <View style={styles.styleContainer}>
                            <Text style={styles.style}>{artiste.acf.style_musical}</Text>
                        </View>
                        <View style={styles.styleOrigine}>
                            <Text style={styles.style}>{artiste.acf.origine}</Text>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.info}>{moment(artiste.acf.date).format('dddd D MMMM').charAt(0).toUpperCase() + moment(artiste.acf.date).format('dddd D MMMM').slice(1)}</Text>
                        <Text style={styles.infos}>{hmdebut} - {hmfin}</Text>
                        <Text style={styles.infos}>{artiste.acf.scene}</Text>
                    </View>
                    <View style={styles.localiserContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => { }}>
                            <Text style={styles.buttonText}>LOCALISER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionStyle}>{artiste.acf.description}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    } else {
        return null;
    }
};

export default DetailsArtiste;

const styles = StyleSheet.create({
    backButtonContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    format: {
        flexDirection: 'row',
        width: screenWidth * 1,
        height: screenWidth * 1,
    },
    nomArtiste: {
        position: 'absolute',
        top: 350,
        left: 10,
    },
    sizeArtiste: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },

    info: {
        fontSize: 18,
        marginStart: 10,
        fontWeight: 'bold',
    },

    infos: {
        fontSize: 18,
        marginStart: 10,
    },

    styleContainer: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 2,
        marginBottom: 10,
        marginStart: 10,
    },
    styleOrigineContainer: {
        flexDirection: 'row',
        marginVertical: 25,
    },
    styleOrigine: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'violet',
        borderWidth: 2,
        marginBottom: 10,
        marginStart: 10,
    },
    style: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    descriptionContainer: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: screenWidth * 0.10,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
    },
    descriptionStyle: {
        fontSize: 16,
    },
    localiserContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        marginStart: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        width: 180,
        height: 50,
        marginStart: 10,
        marginBottom: 20,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
