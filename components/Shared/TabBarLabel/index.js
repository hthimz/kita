import React from "react";
import {
  ViewPropTypes,
  StyleSheet,
} from "react-native";
import { Typography } from "../Typography";
import { Anatomy } from "../Anatomy";
import { Ikon } from "../Ikon";
import { size, color } from "../../../assets/utils/styleGlobalConfig";
import { ThemeContext } from "../Utils/themeContext";
const TabBarLabel = (props) => {
  TabBarLabel.propTypes = {
    label: ViewPropTypes.string,
    tintColor: ViewPropTypes.string,
    iconName: ViewPropTypes.string,
    iconType: ViewPropTypes.string,
    focused: ViewPropTypes.boolean,
  };
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <Anatomy style={styles.container}>
            <Ikon
              name={props.iconName}
              type={props.iconType}
              style={{
                fontSize: 15,
                color: props.focused
                  ? color.orange
                  : theme.type === "dark"
                  ? color.white
                  : color.grey,
              }}
            />
            <Typography
              fontType="H5"
              style={{
                textAlign: "center",
                color: props.focused
                  ? color.orange
                  : theme.type === "dark"
                  ? color.white
                  : color.grey,
              }}
            >
              {props.label}
            </Typography>
          </Anatomy>
        );
      }}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: size.smd,
  },
});
export default TabBarLabel;
