import React, { useState } from "react";
import { View } from "react-native";
import * as IngredientShape from "./Ingredients/Shape/index";
import Nutrions from "./Ingredients/Nutrions/index.json";

//Should have a better way to deal with this instead of switch case
//If the JSON Can return the svg it could have been a lot easier

export default function Ingredient({ ingredientType }) {
  switch (ingredientType) {
    case "BottomBun": {
      return <IngredientShape.BottomBun />;
    }
    case "Patty": {
      return <IngredientShape.Patty />;
    }
    case "Tomato": {
      return <IngredientShape.Tomato />;
    }
    case "Veggy": {
      return <IngredientShape.Veggy />;
    }
    case "TopBun": {
      return <IngredientShape.TopBun />;
    }
    default:
      break;
  }
}

export const Nutrion = ({ ingredientType }) => {
  return IngredientNutri[ingredientType];
};
