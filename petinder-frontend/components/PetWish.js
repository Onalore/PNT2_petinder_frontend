// WishlistItem.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import appsettings from "../appsettings.json";

const PetWish = ({ mascota }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={mascota.imagen} style={styles.itemImage} />
      <Text style={styles.itemName}>{mascota.nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    padding: "4%",
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: "10%",
  },
  itemName: {
    fontSize: 24,
    fontWeight: "bold",
    color: appsettings.colors.primary,
  },
});

export default PetWish;
