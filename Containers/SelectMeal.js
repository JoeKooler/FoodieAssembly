import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Containers, Texts, Buttons } from "../Styles/index";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";
import * as Meals from "./Meals/index";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SelectMeal({ navigation }) {
  const meals = Meals.AllMeals;
  const [currentMeal, setCurrentMeal] = useState(meals[0]);
  let currentMealIndex = 0;

  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  const nextMeal = () => {
    if (currentMealIndex >= meals.length - 1) {
      return;
    }
    currentMealIndex++;
    setCurrentMeal(meals[currentMealIndex]);
  };

  const previousMeal = () => {
    if (currentMealIndex <= 0) {
      return;
    }
    currentMealIndex--;
    setCurrentMeal(meals[currentMealIndex]);
  };

  const toCook = () => {
    navigation.navigate("Cook", currentMeal.name);
  };

  console.log("currentMeal " + currentMeal.name);
  
  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>Select your meal</Text>
        <Text style={styles.nameText}>{currentMeal.name}</Text>
      </View>
      <View style={styles.mealsSelectionContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={previousMeal}>
          <Text style={styles.inButtonText}>&lt;</Text>
        </TouchableOpacity>

        <View style={{ transform: [{ scale: 1.5 }] }}>
          <currentMeal.preview />
        </View>
        <TouchableOpacity style={styles.roundButton} onPress={nextMeal}>
          <Text style={styles.inButtonText}>&gt;</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.rectangleButton} onPress={toCook}>
        <Text style={styles.inButtonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Containers.mainContainer,
    backgroundColor: Colors.background,
  },
  mainText: {
    ...Texts.mainText,
    color: "white",
  },
  nameText: {
    ...Texts.nameText,
    color: "white",
  },
  mealsSelectionContainer: {
    ...Containers.withSelectionContainer,
  },
  roundButton: {
    ...Buttons.NavigatingButton,
  },
  rectangleButton: {
    ...Buttons.MainButton,
  },
  inButtonText: { ...Texts.inButtonText, color: "white" },
});
