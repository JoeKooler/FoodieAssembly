import React from "react";
import { Colors } from "./Styles/index";

import Menu from "./Containers/Menu";
import Eiei from "./Containers/Eiei";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ingredient from "./Containers/Ingredient";
import SelectMeal from "./Containers/SelectMeal";
import Cook from "./Containers/Cook";

const { Navigator, Screen } = createStackNavigator();

const styles = StyleSheet.create({});

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Menu" component={Menu} />
        <Screen name="SelectMeal" component={SelectMeal}></Screen>
        <Screen name="Eiei" component={Eiei} />
        <Screen name="Ingredient" component={Ingredient} />
        <Screen name="Cook" component={Cook}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
