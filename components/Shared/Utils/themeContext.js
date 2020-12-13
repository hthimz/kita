import React from "react";
import { getBaseStyleSheet } from "../../../assets/utils";
import ApplicationStorage from "../../../Utils/storage/index";


//To be taken
// can be controlled from a profile page on Dispatch
export const ThemeContext = React.createContext({
  theme: {
    type: "dark",
    style: getBaseStyleSheet("dark"),
  },
  toggleTheme: Function.prototype,
});

export const getUserSpecificTheme = (userID) => {
  return new Promise((resolve, reject) => {
    ApplicationStorage.getItem(`${userID}_theme`)
      .then((theme) => {
        if (theme) {
          const storedTheme = JSON.parse(theme);
          resolve(storedTheme);
        }
        //when theme is not set for new user, it will be taken as WHITE by default,hence no 'else' is needed
      })
      .catch(new Error("Theme not found"));
  });
};

export const setUserSpecificTheme = (userID, theme) => {
  return new Promise((resolve, reject) => {
    ApplicationStorage.setItem(`${userID}_theme`, theme)
      .then(resolve)
      .catch(reject);
  });
};
