import { Platform } from "react-native";
import React from 'react';

//Fonts to be imported from Google Fonts
const family = {
  primary: "Lato-Regular",
  bold: Platform.OS === "ios" ? "SFProText-Bold" : "SF-Pro-Text-Bold",
  medium: Platform.OS === "ios" ? "SFProText-Medium" : "SF-Pro-Text-Medium",
  light: Platform.OS === "ios" ? "SFProText-Light" : "SF-Pro-Text-Light",
  semiBold:
    Platform.OS === "ios" ? "SFProText-Semibold" : "SF-Pro-Text-Semibold",
  regularWorkSans:
    Platform.OS === "ios" ? "WorkSans-Regular" : "WorkSans-Regular",
  mediumWorkSans: Platform.OS === "ios" ? "WorkSans-Medium" : "WorkSans-Medium"
};

const size = {
  xxs: 4,
  xs: 8,
  ssm: 10,
  smm: 11,
  sm: 9,
  smd: 12,
  mmd: 14,
  mdl: 15,
  md: 16,
  l: 18,
  mlg: 22,
  lg: 28,
  xl: 48,
  xxl: 64,
  title: 15,
  para: 13,
  default: 11
};

const styles = {
  primary: {
    fontSize: size.md,
    fontFamily: family.primary
  }
};

export default {
  family,
  size,
  styles
};
