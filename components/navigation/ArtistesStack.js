import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DetailsArtiste, Programmation } from "../../components";

const Stack = createStackNavigator();

const ArtistesStack = ({ artistes }) => {
  return (
    <Stack.Navigator
      initialRouteName="Programmation" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Programmation">{(props) => <Programmation {...props} artistes={artistes} />}</Stack.Screen>
      <Stack.Screen name="Details de l'artiste" component={DetailsArtiste} />
    </Stack.Navigator>
  );
};

export default ArtistesStack;
