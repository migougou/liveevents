import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    separator: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    textFooter: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 5,
    },
    reseauSocial: {
        flexDirection: 'row',
    },
    PositionReseaux: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    imgReseau: {
        width: 20,
        height: 20,
        marginBottom: 5,
        marginHorizontal: 5,
    },
    footerTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerText: {
        color: 'white',
        fontSize: 12,
        marginLeft: 5,
        marginBottom: 10,
    },
});

export default styles;