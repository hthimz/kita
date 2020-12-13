import { StyleSheet } from "react-native";
import React from 'react';
import { color, font, size, themeColors } from "./styleGlobalConfig";

export const themeGlobalStyles = (theme) => {
  return StyleSheet.create({
    baseContainerStyle: {
      backgroundColor: themeColors(theme, "baseContainer"),
    },
    baseCardContainerStyle: {
      backgroundColor: themeColors(theme, "baseCardContainer"),
      shadowOpacity: 0.3,
      shadowOffset: { height: 1, width: 1 },
      shadowColor: "rgba(0, 0, 0, 0.4)",
      //elevation: 2
    },
    baseFontStyle: {
      letterSpacing: 0.8,
      fontFamily: font.family.primary,
      color: themeColors(theme, "font"),
    },
    opaqueCardContainerStyle: {
      backgroundColor: themeColors(theme, "opaqueCardContainer"),
    },
    baseIconStyle: {
      color: themeColors(theme, "icon"),
    },
    baseImageStyle: {
      color: themeColors(theme, "icon"),
    },
    baseBorderStyle: {
      borderColor: themeColors(theme, "border"),
    },
    bottomNavBarStyle: {
      backgroundColor: themeColors(theme, "bottomNavBar"),
    },
    baseTextInputStyle: {
      borderColor: themeColors(theme, "border"),
      color: themeColors(theme, "textInput"),
    },
    baseModalContainerStyle: {
      backgroundColor: themeColors(theme, "modal"),
    },
  });
};
