import React from "react";
import { Text, StyleSheet } from "react-native";
import { getBaseStyleSheet } from "../../../assets/utils";
import { font, color } from "../../../assets/utils/styleGlobalConfig";

const globalStyles = getBaseStyleSheet();
export const H4 = (props) => {
  if (props.children) {
    return (
      <Text
        {...props}
        allowFontScaling={font.allowFontScaling}
        style={[
          styles.h4,
          props.style,
          props.highLight && {
            color: color.orange,
          },
          props.bold && {
            fontWeight: "600",
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
  h4: {
    ...globalStyles.baseFontStyle,
    fontSize: font.size.h4,
  },
});
