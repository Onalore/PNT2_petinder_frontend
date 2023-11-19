import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import appsettings from "../appsettings.json";

const InputSingleLine = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      multiline
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "100%",
  },
});

export default InputSingleLine;
