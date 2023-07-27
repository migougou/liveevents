import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Plus from "../plus/Plus";
import Infos from "../plus/Infos";
import Services from "../plus/Services";
import Objets from "../plus/Objets";
import Restaurant from "../plus/Restaurant";
import Contact from "../plus/Contact";

const Stack = createStackNavigator();

function PlusStack() {
  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Plus} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Objets" component={Objets} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export default PlusStack;
