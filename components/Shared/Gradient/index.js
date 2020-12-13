import React from "react"
import { View, ViewPropTypes } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from 'prop-types'
const GradientComponent = props => {
    GradientComponent.propTypes = {
        gradientStyles: PropTypes.object
    };
    return (
        <LinearGradient
            start={{
                x: props.xStart,
                y: props.yStart
            }}
            end={{
                x: props.xEnd,
                y: props.yEnd
            }}
            colors={props.colors}
            style={[props.gradientStyles]}
        >
            {props.children}
        </LinearGradient>
    );
};
export default GradientComponent;