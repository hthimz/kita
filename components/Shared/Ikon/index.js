import React from "react";
import { Icon } from "native-base";
import { ThemeContext } from "../Utils/themeContext";

export const Ikon = ({ active, type, name, size, color, style, onPress }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <Icon
            onPress={onPress}
            active={active}
            type={type}
            name={name}
            style={[
              {
                fontSize: size,
                color: color
              },
              theme.style.baseIconStyle,
              style
            ]}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
};
