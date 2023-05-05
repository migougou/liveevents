import React, { useEffect, useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CarteArtiste = ({ item }) => {
    const hmdebut = item.acf.hdebut.slice(0, 5);
    const hmfin = item.acf.hfin.slice(0, 5);
    const [nomTraite, setNomTraite] = useState(item.title.rendered)

    // quand on fait une requete, les apostrophes deviennent des &rsquo; qui ne sont pas retransforme en apostrophes, on le fait donc ici
    useEffect(() => {
        const apostropheNom = () => {
            const nomArtiste = nomTraite
            if (nomArtiste.includes('&rsquo;')) {
                return nomArtiste.replace(/&rsquo;/g, "'");
            }
            return nomArtiste;
        }
        setNomTraite(apostropheNom)
    }, [item])


    return (
        <View style={styles.format}>
            <Image source={{ uri: item.acf.imageurl }} style={styles.icone} />
            <View style={styles.formatAdjust}>
                <Text>{nomTraite}</Text>
                <Text>{hmdebut} - {hmfin}</Text>
                <Text>{item.acf.scene} / {item.acf.style_musical}</Text>
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
        justifyContent: 'center'
    },
    icone: {
        width: screenWidth * 0.2,
        height: screenWidth * 0.2,
        borderTopLeftRadius: screenWidth * 0.03,
        borderTopRightRadius: screenWidth * 0.00,
        borderBottomLeftRadius: screenWidth * 0.03,
        borderBottomRightRadius: screenWidth * 0.00,
    },
})