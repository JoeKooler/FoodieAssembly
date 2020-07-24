import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Meals from "./Meals/index";
import Ingredient from "./Ingredient";
import { ingredientList } from "./Meals/Burger";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Containers, Texts, Buttons } from "../Styles/index";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";

export default function Cook({ route, navigation }) {
  const currentMeal = Meals.AllMeals.find((e) => e.name === route.params);
  const { ingredientList } = currentMeal;
  const [currentIngredient, setCurrentIngredient] = useState(ingredientList[1]);
  const [currentIngredientIndex, setCurrentIngredientIndex] = useState(1);
  const [currentRecipe, setCurrentRecipe] = useState([]);

  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  const nextIngredient = () => {
    if (currentIngredientIndex >= ingredientList.length - 1) {
      return;
    }
    setCurrentIngredient(ingredientList[currentIngredientIndex + 1]);
    setCurrentIngredientIndex(currentIngredientIndex + 1);
  };

  const previousIngredient = () => {
    if (currentIngredientIndex <= 0) {
      return;
    }
    setCurrentIngredient(ingredientList[currentIngredientIndex - 1]);
    setCurrentIngredientIndex(currentIngredientIndex - 1);
  };

  const addIngredient = () => {
    setCurrentRecipe([currentIngredient, ...currentRecipe]);
    console.log(currentRecipe);
  };

  const popIngredient = () => {
    setCurrentRecipe(currentRecipe.filter((e, i) => i > 0));
  };

  //The JSX below looks like a mess
  //If there's more reusable code i should make them components >_>

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}></Text>
      <Text style={styles.nameText}>{currentIngredient}</Text>
      <View style={styles.mealsSelectionContainer}>
        <View>
          <TouchableOpacity style={styles.roundButton} onPress={addIngredient}>
            <Text style={styles.inButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={popIngredient}>
            <Text style={styles.inButtonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View>
          {currentRecipe.map((i) => (
            <Ingredient ingredientType={i}></Ingredient>
          ))}
        </View>
      </View>

      <View style={styles.mealsSelectionContainer}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={previousIngredient}
        >
          <Text style={styles.inButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Ingredient ingredientType={currentIngredient}></Ingredient>
        <TouchableOpacity style={styles.roundButton} onPress={nextIngredient}>
          <Text style={styles.inButtonText}>&gt;</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.rectangleButton}>
        <Text style={styles.inButtonText}>Cook</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...Containers.mainContainer,
    backgroundColor: Colors.background,
  },
  mealsSelectionContainer: {
    ...Containers.withSelectionContainer,
  },
  mainText: {
    ...Texts.mainText,
    color: "white",
  },
  nameText: {
    ...Texts.nameText,
    color: "white",
  },
  selectPanel: {
    flexDirection: "row",
    alignItems: "center",
  },
  roundButton: {
    ...Buttons.NavigatingButton,
  },
  rectangleButton: {
    ...Buttons.MainButton,
  },
  inButtonText: { ...Texts.inButtonText, color: "white" },
});
