import React from "react";
import { Text } from "react-native";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { H3 } from "./H3";
import { H4 } from "./H4";
import { H5 } from "./H5";
import { H6 } from "./H6";
import { font } from "../../../assets/utils/styleGlobalConfig";
import { ThemeContext } from "../Utils/themeContext";

export const Typography = ({
  fontType,
  children,
  style,
  highLight,
  onPress,
  numberOfLines,
  ellipsizeMode,
  bold,
  underline
}) => {
  switch (fontType) {
    case "H1":
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <H1
              bold={bold}
              ellipsizeMode={ellipsizeMode}
              numberOfLines={numberOfLines}
              onPress={onPress}
              highLight={highLight}
              style={[theme.style.baseFontStyle, style]}
              children={children}
              underline={underline}
            />
          )}
        </ThemeContext.Consumer>
      );
    case "H2":
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <H2
              bold={bold}
              ellipsizeMode={ellipsizeMode}
              numberOfLines={numberOfLines}
              onPress={onPress}
              highLight={highLight}
              style={[theme.style.baseFontStyle, style]}
              children={children}
              underline={underline}
            />
          )}
        </ThemeContext.Consumer>
      );
    case "H3":
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <H3
              bold={bold}
              ellipsizeMode={ellipsizeMode}
              numberOfLines={numberOfLines}
              onPress={onPress}
              highLight={highLight}
              style={[theme.style.baseFontStyle, style]}
              children={children}
              underline={underline}
            />
          )}
        </ThemeContext.Consumer>
      );
    case "H4":
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <H4
              bold={bold}
              ellipsizeMode={ellipsizeMode}
              numberOfLines={numberOfLines}
              onPress={onPress}
              highLight={highLight}
              style={[theme.style.baseFontStyle, style]}
              children={children}
              underline={underline}
            />
          )}
        </ThemeContext.Consumer>
      );
    case "H5": {
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <H5
              bold={bold}
              ellipsizeMode={ellipsizeMode}
              numberOfLines={numberOfLines}
              onPress={onPress}
              highLight={highLight}
              style={[theme.style.baseFontStyle, style]}
              children={children}
              underline={underline}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
    case "H6": {
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <H6
              bold={bold}
              ellipsizeMode={ellipsizeMode}
              numberOfLines={numberOfLines}
              onPress={onPress}
              highLight={highLight}
              style={[theme.style.baseFontStyle, style]}
              children={children}
              underline={underline}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
    default:
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <Text allowFontScaling={false}
              style={[
                {
                  fontFamily: font.family.primary
                },
                theme.style.baseFontStyle,
                style
              ]}
              onPress={onPress}
            >
              {children}
            </Text>
          )}
        </ThemeContext.Consumer>
      );
  }
};
