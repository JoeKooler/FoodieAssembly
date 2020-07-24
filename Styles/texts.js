import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";

const nameFontSize = { fontSize: 60 };
const mainFontSize = { fontSize: 80 };
const inButtonFontSize = { fontSize: 40 };

const mainFont = {
  fontFamily: "Righteous_400Regular",
  textAlign: "center",
};

export const mainText = {
  ...mainFont,
  ...mainFontSize,
};

export const nameText = {
  ...mainFont,
  ...nameFontSize,
};

export const inButtonText = {
  ...mainFont,
  ...inButtonFontSize,
};
