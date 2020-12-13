export const color = {
  black: "#000000",
  white: "#ffffff",
  redOrange: "#ff3636",
  sunglow: "#ffcd2c",
  orange: "#f68633",
  whiteThemeOrange: "#ff984b",
  lightOrange: "#F58634",
  green: "#27ae60",
  grey: "#272727",
  whiteThemeGrey: "#f2f2f2",
  red: "#ff3e3e",
  greyBlue: "#5fc4b0",
  blue: "#73a1d2",
  deepLavender: "#8b5cb3",
  camel: "#bc995f",
  dustyLavender: "#b977af",
  transparent: "transparent"
};

//Colors to be picked from Global Config
// Consistency measures
export const themeColors = (theme, type) => {
  switch (type) {
    case "baseCardContainer":
      return theme === "dark"
        ? color.blackWithOpacity
        : color.cardBackgroundLight;
    case "opaqueCardContainer":
      return theme === "dark" ? color.blackWithExtraOpacity : "transparent";
    case "font":
      return theme === "dark" ? color.white : color.black;
    case "icon":
      return theme === "dark" ? color.white : color.orange;
    case "bottomNavBar":
      return theme === "dark" ? color.grey : color.lightThemeBackgroundGrey;
    case "textInput":
      return theme === "dark" ? color.white : color.black;
    case "border":
      return theme === "dark" ? color.white : color.orange;
    case "modal":
      return theme === "dark" ? color.grey : color.lightThemeBackgroundGrey;
    default:
      return color.transparent;
  }
};

export const font = {
  allowFontScaling: false,
  size: {
    h1: 25,
    h2: 20,
    h3: 15,
    h4: 14,
    h5: 12,
    h6: 9,
    iconXs: 10,
    medium: 11,
    iconL: 18,
    iconXl: 28,
  },
  family: {
    primary: "Lato-Regular",
    semiBold: "Lato-Semibold",
  },
  weight: {
    semiBold: "600",
  },
};
export const radius = {
  border: 15,
  circle: 50,
  dropDown: 4,
  button: 4,
  cardRadius: 8,
};
export const size = {
  zero: 0,
  xxxs: 1,
  xxs: 2,
  xs: 4,
  small: 7,
  ssm: 6,
  sm: 9,
  smd: 12,
  md: 14,
  l: 17,
  ml: 20,
  xl: 25,
  xxl: 32,
  xxml: 40,
  xxxl: 64,
  giant: 122,
};
export const letterSpacing = {
  xxxs: 0.1,
  xxs: 0.25,
  xs: 0.3,
  s: 0.4,
  sm: 0.5,
  m: 0.6,
  ml: 0.7,
  l: 0.8,
  xl: 1.1,
};
export const heightConst = {
  m: 30,
  ml: 41,
  l: 50,
};
export const fontWeight = {
  mbold: "700",
};

export const perc = {
  perc10: "10%",
  perc2: "2%",
  perc5: "5%",
  perc100: "100%"
}
