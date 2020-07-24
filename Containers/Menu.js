import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors, Containers, Texts, Buttons } from "../Styles/index";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";

export default function Menu({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstButtonText, setFirstButtonText] = useState("MAKE");
  const [secondButtonText, setSecondButtonText] = useState("WHAT I ATE");

  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Foodie Assembly</Text>
      <TouchableOpacity
        style={styles.rectangleButton}
        onPress={() => navigation.navigate("SelectMeal")}
      >
        <Text style={styles.inButtonText}>{firstButtonText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rectangleButton}>
        <Text style={styles.inButtonText}>{secondButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Containers.mainContainer,
    backgroundColor: Colors.background,
  },
  rectangleButton: {
    ...Buttons.MainButton,
  },
  mainText: {
    ...Texts.mainText,
    color: "white",
  },
  nameText: {
    ...Texts.nameText,
    color: "white",
  },
  inButtonText: {
    ...Texts.inButtonText,
    color: "white",
  },
});
