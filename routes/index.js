import {
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  StackViewTransitionConfigs,
  BottomTabBar,
} from "react-navigation";
import GroupBuyPage from "../components/GroupBuyPage";
import PrdouctDescriptionPage from "../components/ProductDescriptionPage";
import CheckoutPage from "../components/CheckoutPage";
import TabBarLabel from "../components/Shared/TabBarLabel";
import { bottomNavigationColor } from "../assets/utils/index";
import React from 'react';

//To be completed 
// Screen and Modals Header Remaining

const TabBarComponent = (props) => <BottomTabBar {...props} />;


const BuyingStack = createStackNavigator(
  {
      Index: {
      screen: GroupBuyPage,
      path: "list-group",
      navigationOptions: { title: "Groups" },
      gesturesEnabled: false,
    },
    ProductDescription: {
      screen: PrdouctDescriptionPage,
      path: "description",
      navigationOptions: { title: "Product Page" },
    }
  },
  {
    mode: "card",
    headerMode: "screen",
    defaultNavigationOptions: ({ navigation }) => ({
      // header: SubHeader,
    }),
  }
);
const MainBottomNavigatorStack = createBottomTabNavigator(
  {

    Deals: {
      screen: PrdouctDescriptionPage,
      path: "deals",
      navigationOptions: {
        tabBarLabel: ({ focused, tintColor }) => (
          <TabBarLabel
            focused={focused}
            label={"PDP"}
            tintColor={tintColor}
            iconName={"home"}
            iconType={"FontAwesome"}
          />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.popToTop();
          defaultHandler();
        },
      },
    },
    Group: {
      screen: BuyingStack,
      path: "group",
      navigationOptions: {
        tabBarLabel: ({ focused, tintColor }) => (
          <TabBarLabel
            focused={focused}
            label={"Group"}
            tintColor={tintColor}
            iconName={"person"}
            iconType={"MaterialIcons"}
          />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.popToTop();
          defaultHandler();
        },
      },
    },
  },
  {
    tabBarComponent: (props) => {
      return (
        <TabBarComponent
          {...props}
          style={{ backgroundColor: bottomNavigationColor }}
        />
      );
    },
    tabBarOptions: {
      style: { backgroundColor: bottomNavigationColor },
    },

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        defaultHandler();
      },
    }),
  }
);


/**
* ModalSwitchNavigator handles all application wide global modals
*/
const ModalSwitchNavigator = createSwitchNavigator(
  {
      CheckoutPage: {
      screen: CheckoutPage,
      path: "checkout",
      navigationOptions: { title: "CheckoutPage", header: null },
    },
  },
  {
    mode: "modal",
    headerMode: "screen",
    defaultNavigationOptions: ({ navigation }) => ({
      // header: SubHeader,
    }),
  }
);


const AppStack = createStackNavigator(
  {
    Main: { screen: MainBottomNavigatorStack, path: "tab" },
    Modal: { screen: ModalSwitchNavigator, path: "modal" },
  },
  {
    mode: "modal",
    headerMode: "none",
    defaultNavigationOptions: ({ navigation }) => ({
      // header: SubHeader,
    }),
    initialRouteName: "Main",
  }
);
export const AppContainer = createAppContainer(AppStack);

export default AppContainer;
