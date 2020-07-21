import React, { useState } from "react";
import { View } from "react-native";
import * as IngredientShape from "./Ingredients/index";

export default function Ingredient({ ingredientType }) {
  const Shape = () => {
    console.log("In shape " + ingredientType);
    switch (ingredientType) {
      case "BottomBun": {
        console.log("Returning");
        return IngredientShape.BottomBun();
        break;
      }
      case "Patty": {
        console.log("Returning");
        return IngredientShape.Patty();
        break;
      }
      case "Veggy": {
        console.log("Returning");
        return IngredientShape.Veggy();
        break;
      }
      case "TopBun": {
        console.log("Returning");
        return IngredientShape.TopBun();
        break;
      }
      default:
        break;
    }
  };
  console.log("Eeweewe");
  return (
    <View>
      <Shape />
    </View>
  );
}
