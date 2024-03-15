import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Plus from "../plus/Plus";
import Infos from "../plus/Infos";
import Services from "../plus/Services";
import Objets from "../plus/Objets";
import Restaurant from "../plus/Restaurant";
import Contact from "../plus/Contact";

import Billetterie from "../billetterie/Billetterie";
import FAQ from "../plus/FAQ/FAQ";
import Partenaires from "../plus/Partenaires";

const Stack = createStackNavigator();

const PlusStack = () => {
  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Plus} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Objets" component={Objets} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Contact" component={Contact} />

      <Stack.Screen name="Billetterie" component={Billetterie} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Partenaires" component={Partenaires} />
    </Stack.Navigator>
  );
}

export default PlusStack;
