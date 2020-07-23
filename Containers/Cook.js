import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Meals from "./Meals/index";
import Ingredient from "./Ingredient";
import { ingredientList } from "./Meals/Burger";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../Styles/index";

export default function Cook({ route, navigation }) {
  const currentMeal = Meals.AllMeals.find((e) => e.name === route.params);
  const { ingredientList } = currentMeal;
  const [currentIngredient, setCurrentIngredient] = useState(ingredientList[1]);
  const [currentIngredientIndex, setCurrentIngredientIndex] = useState(1);
  const [currentRecipe, setCurrentRecipe] = useState([]);

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

  return (
    <View>
      {currentRecipe.map((i) => (
        <Ingredient ingredientType={i}></Ingredient>
      ))}
      <View style={{ transform: [{ scale: 0.5 }] }}>
        <TouchableOpacity style={styles.roundButton} onPress={nextIngredient}>
          <Text style={styles.inButtonText}>&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={previousIngredient}
        >
          <Text style={styles.inButtonText}>&lt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={addIngredient}>
          <Text style={styles.inButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={popIngredient}>
          <Text style={styles.inButtonText}>-</Text>
        </TouchableOpacity>
        <Ingredient ingredientType={currentIngredient}></Ingredient>
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
  roundButton: {
    borderRadius: 100,
    borderWidth: 5,
  },
  inButtonText: { padding: 20, fontSize: 20 },
});
