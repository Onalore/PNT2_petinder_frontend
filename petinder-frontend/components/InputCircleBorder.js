import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import appsettings from "../appsettings.json";

const InputCircleBorder = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 120, // Ajusta el radio de los bordes según tu preferencia
    padding: 10,
    width: "100%",
    height: "7%",
    marginBottom: "4%",
    marginTop: "2%",
  },
});

export default InputCircleBorder;
