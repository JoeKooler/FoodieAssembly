import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";

export const mainFont = {
  fontFamily: "Righteous_400Regular",
  color: "white",
};

export const mainFontSize = { fontSize: 80 };
export const nameFontSize = { fontSize: 60 };

export const mainText = {
  ...mainFont,
  ...mainFontSize,
};

export const nameText = {
  ...mainFont,
  ...nameFontSize,
};
