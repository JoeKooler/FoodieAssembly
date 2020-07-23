import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../Styles/index";
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
      <Text
        style={{
          fontFamily: "Righteous_400Regular",
          fontSize: 80,
          color: "white",
        }}
      >
        Select your meal
      </Text>
      <Text
        style={{
          fontFamily: "Righteous_400Regular",
          fontSize: 60,
          color: "white",
        }}
      >
        {currentMeal.name}
      </Text>
      <View>
        <currentMeal.preview />
      </View>
      <TouchableOpacity style={styles.roundButton} onPress={nextMeal}>
        <Text style={styles.inButtonText}>&gt;</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundButton} onPress={previousMeal}>
        <Text style={styles.inButtonText}>&lt;</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundButton} onPress={toCook}>
        <Text style={styles.inButtonText}>Let's Go</Text>
      </TouchableOpacity>
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
