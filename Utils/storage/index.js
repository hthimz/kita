import AsyncStorage from "./storage.native";
import React from "react";
const ApplicationStorage = {
  getItem: key => {
    try {
        const storage = AsyncStorage.getItem(key);
        return storage;
    } catch (err) {
      return err;
    }
  },

  setItem: (key, value) => {
    try {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      return err;
    }
  },

  removeItem: key => {
    try {
        return AsyncStorage.removeItem(key);
    } catch (err) {
      return err;
    }
  },
  clear: () => {
    try {
        return AsyncStorage.clear();
    } catch (err) {
      return err;
    }
  }
};

export default ApplicationStorage;
