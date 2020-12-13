import React from "react";
import { View, Text } from "react-native";
import { Container, Content, Body, Header } from "native-base";
import GradientComponent from "../Gradient";
import { ThemeContext } from "../Utils/themeContext";
import { color } from "../../../assets/utils/styleGlobalConfig";

export const Anatomy = (props) => {
  if (props.container) {
    return <Container>{props.children}</Container>;
  } else if (props.baseGradientContainer) {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          if (theme.type === "dark") {
            return (
              <GradientComponent
                colors={["#544a4c", "#584644", "#523c3a", "#261e25"]}
                gradientStyles={[{ flex: 1 }, props.gradientStyles]}
                xStart={0}
                yStart={0}
                xEnd={0}
                yEnd={1}
              >
                {props.infiniteScroll ? (
                  props.children
                ) : (
                  <Content
                    padder
                    contentContainerStyle={props.contentContainerStyle}
                  >
                    {props.children}
                  </Content>
                )}
              </GradientComponent>
            );
          } else {
            return (
              <GradientComponent
                colors={[color.white, color.white]}
                gradientStyles={[{ flex: 1 }, props.gradientStyles]}
                xStart={0}
                yStart={0}
                xEnd={0}
                yEnd={1}
              >
                {props.infiniteScroll ? (
                  props.children
                ) : (
                  <Content
                    contentContainerStyle={props.contentContainerStyle}
                    padder
                  >
                    {props.children}
                  </Content>
                )}
              </GradientComponent>
            );
          }
        }}
      </ThemeContext.Consumer>
    );
  } else if (props.scrollContent) {
    return <Content padder>{props.children}</Content>;
  } else if (props.contentInContainer) {
    return (
      <Container>
        <Content padder>{props.children}</Content>
      </Container>
    );
  } else if (props.body) {
    return <Body>{props.children}</Body>;
  } else if (props.container) {
    return <Container>{props.children}</Container>;
  } else if (props.cardContainer) {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <View
            {...props}
            style={[
              props.style,
              props.modal
                ? theme.style.baseModalContainerStyle
                : theme.style.baseCardContainerStyle,
            ]}
          >
            {props.children}
          </View>
        )}
      </ThemeContext.Consumer>
    );
  } else {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <View
            {...props}
            style={[
              props.border ? theme.style.baseBorderStyle : null,
              props.style,
            ]}
          >
            {props.children}
          </View>
        )}
      </ThemeContext.Consumer>
    );
  }
};
