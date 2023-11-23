import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import PetWish from "../components/PetWish";
import { MascotaContext } from "../App";
import BarraNavegacion from "../components/BarraNavigation";
import Title from "../components/Title";

const WishList = () => {
  const { mascotasDeseadas } = useContext(MascotaContext);

  return (
    <View style={styles.container}>
      <BarraNavegacion icon1="home-outline" icon2="cards-heart-outline" />
      <Title title={"Wishlist"} />
      <FlatList
        data={mascotasDeseadas}
        renderItem={({ item }) => <PetWish mascota={item} />} //
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default WishList;
