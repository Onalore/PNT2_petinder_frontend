// WishlistItem.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PetWish = ({ mascota }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={ mascota.imagen } style={styles.itemImage} />
      <Text style={styles.itemName}>{mascota.nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
  },
});

export default PetWish;
