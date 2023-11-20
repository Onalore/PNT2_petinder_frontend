import React from "react";
import { StyleSheet } from "react-native";
import appsettings from "../appsettings.json";
import { CheckBox } from "react-native-elements";

const CheckboxCircle = ({ title, checked, onPress }) => {
  return (
    <CheckBox
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      title={title}
      checked={checked}
      onPress={onPress}
      containerStyle={styles.checkbox}
      checkedColor={appsettings.colors.primary}
    />
  );
};

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
});

export default CheckboxCircle;
