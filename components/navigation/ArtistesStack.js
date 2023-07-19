import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DetailsArtiste from "../artistes/details_artiste/DetailsArtiste";
import Programmation from "../artistes/programmation/Programmation";

const Stack = createStackNavigator();

const ArtistesStack = ({ artistes }) => {
    return (
        <Stack.Navigator initialRouteName="Programmation">
            <Stack.Screen name="Programmation">
                {(props) => <Programmation {...props} artistes={artistes} />}
            </Stack.Screen>
            <Stack.Screen name="Details de l'artiste" component={DetailsArtiste} />
        </Stack.Navigator>
    );
};

export default ArtistesStack;