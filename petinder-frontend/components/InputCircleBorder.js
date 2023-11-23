import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import appsettings from "../appsettings.json";

const InputCircleBorder = ({ placeholder, value, onChangeText, secure }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={!secure ? false : secure}
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
    height: 45,
    marginBottom: "4%",
    marginTop: "2%",
  },
});

export default InputCircleBorder;
