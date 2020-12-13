import React from "react";
import { Text, StyleSheet } from "react-native";
import { getBaseStyleSheet } from "../../../assets/utils";
import { color, font } from "../../../assets/utils/styleGlobalConfig";

const globalStyles = getBaseStyleSheet();
export const H3 = (props) => {
  if (props.children) {
    return (
      <Text
        {...props}
        allowFontScaling={font.allowFontScaling}
        style={[
          styles.h3,
          props.style,
          props.highLight && {
            color: color.orange,
          },
          props.bold && {
            fontWeight: "800",
          },
          { textDecorationLine: props.underline ? "underline" : "none" },
        ]}
      >
        {props.children}
      </Text>
    );
  } else return <Text allowFontScaling={false}></Text>;
};
const styles = StyleSheet.create({
  h3: {
    ...globalStyles.baseFontStyle,
    fontSize: font.size.h3,
  },
});
