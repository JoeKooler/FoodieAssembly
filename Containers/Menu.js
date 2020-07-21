import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../Styles/index";

export default function Menu({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstButtonText, setFirstButtonText] = useState("MAKE");
  const [secondButtonText, setSecondButtonText] = useState("WHAT I ATE");

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Foodie Assembly</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("SelectMeal")}
      >
        <Text style={styles.textStyle}>{firstButtonText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textStyle}>{secondButtonText}</Text>
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
  buttons: {
    width: 200,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
  },
});
