import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../Styles/index";

import * as IngredientShape from "./Ingredients/index";
import * as Meals from "./Meals/index";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SelectMeal() {
  const [currentMeal, setCurrentMeal] = useState(Meals.Burger);
  console.log("currentMeal " + currentMeal.name);
  return (
    <View style={styles.container}>
      <Text>Select your meal</Text>
      <Text>{currentMeal.name}</Text>
      <View>
        <currentMeal.preview />
      </View>
      <View style={styles.selectPanel}>
        <TouchableOpacity style={styles.unFocusedMeal}></TouchableOpacity>
        <TouchableOpacity style={styles.focusedMeal}></TouchableOpacity>
        <TouchableOpacity style={styles.unFocusedMeal}></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  unFocusedMeal: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    marginHorizontal: 40,
  },
  focusedMeal: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    marginHorizontal: 40,
  },
  selectPanel: {
    flexDirection: "row",
    alignItems: "center",
  },
});
