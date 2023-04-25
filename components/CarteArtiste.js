import React from 'react';
import { Dimensions, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CarteArtiste = ({ item }) => {

    const hmdebut = item.acf.hdebut.slice(0, 5);
    const hmfin = item.acf.hfin.slice(0, 5);

    return (
        <View style={[styles.format, { backgroundImage: `url(${item.acf.imageurl})` }]}>
            <Image source={{ uri: item.acf.imageurl }} style={styles.icone} />
            <View style={styles.formatAdjust}>
                <Text>{item.title.rendered}</Text>
                <Text style={styles.heure}>{hmdebut} - {hmfin}</Text>
            </View>
        </View>
    );
};

export default CarteArtiste;

const styles = StyleSheet.create({
    format: {
        flexDirection: 'row',
        elevation: 5,
        shadowColor: '#52006A',
        marginVertical: screenWidth * 0.02,
        marginHorizontal: screenWidth * 0.02,
        borderRadius: screenWidth * 0.03,
        backgroundColor: 'white',
    },
    formatAdjust: {
        marginVertical: screenWidth * 0.01,
        marginHorizontal: screenWidth * 0.02,
    },
    icone: {
        width: screenWidth * 0.15,
        height: screenWidth * 0.15,
        borderTopLeftRadius: screenWidth * 0.03,
        borderTopRightRadius: screenWidth * 0.00,
        borderBottomLeftRadius: screenWidth * 0.03,
        borderBottomRightRadius: screenWidth * 0.00,
    },
    heure: {
        /* textAlign: 'right' */
    }
})