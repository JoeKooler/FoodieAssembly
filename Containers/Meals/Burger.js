import React from "react";
import { View } from "react-native";
import Ingredient from "../Ingredient";

export const preview = () => {
  return (
    <View>
      <Ingredient ingredientType={"TopBun"} />;
      <Ingredient ingredientType={"Veggy"} />;
      <Ingredient ingredientType={"Patty"} />;
      <Ingredient ingredientType={"BottomBun"} />;
    </View>
  );
};

export const name = "Burger";
