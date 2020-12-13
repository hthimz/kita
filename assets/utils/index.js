import { Dimensions, Platform } from "react-native";
import { themeGlobalStyles } from "./themeGlobalStyles";
import DeviceInfo from "react-native-device-info";
import { color, themeColors } from "./styleGlobalConfig";
export color from "./colors";
export margin from "./margins";
export fonts from "./fonts";
import React from 'react';

//Device Config
const { height, width } = Dimensions.get("window");
export const deviceBrand = DeviceInfo.getBrand();
export let bottomNavigationColor = color.white;
const theme = {
  light: themeGlobalStyles("light"),
  dark: themeGlobalStyles("dark"),
};
export const isDarkTheme = (themeColor) => {
  return themeColor === "dark";
};
export const getBaseStyleSheet = (themeType) => {
  if (themeType === "light") {
    bottomNavigationColor = color.white;
    return theme.light;
  }
  bottomNavigationColor = color.grey;
  return theme.dark;
};

//Device Dimension for Scaling
export const deviceHeight = height;
export const deviceWidth = width;
export const containerWrapper = {
  paddingHorizontal: 12,
  backgroundColor: "#0C0D0F",
  flex: 1,
};
export const deviceOS = Platform.OS;
export const appVersion = DeviceInfo.getVersion();
