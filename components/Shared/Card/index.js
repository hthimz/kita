import React from "react";
import { ViewPropTypes } from "react-native";
import { PropTypes } from "prop-types";
import { Card } from "native-base";
import { size, radius, color } from "../../../assets/utils/styleGlobalConfig";
import { ThemeContext } from "../Utils/themeContext";
import {deviceHeight, deviceWidth} from "../../../assets/utils";
//import getBaseStyleSheet from "../../../assets/utils";

// const styles = getBaseStyleSheet();
const CardView = (props) => {
  CardView.propTypes = {
    cardContainerStyle: ViewPropTypes.style,
    opaque: PropTypes.bool,
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Card
          transparent={theme.type === "dark" ? true : false}
          style={[
            {
              borderRadius: radius.cardRadius,
            },
            props.opaque
              ? theme.style.opaqueCardContainerStyle
              : theme.style.baseCardContainerStyle,
            props.style,
          ]}
          onPress={props.onPress}
        >
          {props.children}
        </Card>
      )}
    </ThemeContext.Consumer>
  );
};

export default CardView;

