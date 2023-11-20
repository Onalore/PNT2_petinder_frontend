import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import appsettings from "../appsettings.json";

const Card = ({ title, child }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {child}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: appsettings.colors.secondary,
    borderRadius: 25,
    padding: 16,
    margin: 16,
    width: "100%",
    padding: "7%",
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "90%",
  },
});

export default Card;
