import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import PetWish from "../components/PetWish";
import BarraNavegacion from "../components/BarraNavigation";
import { Divider } from "@rneui/themed";

const WishList = () => {
  const { mascotasDeseadas } = useContext(require("../App").MascotaContext);

  return (
    <View style={styles.container}>
      <BarraNavegacion icon1="home-outline" icon2="cards-heart-outline" />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={mascotasDeseadas}
          renderItem={({ item }) => <PetWish mascota={item} />}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  flatlistContainer: {
    width: "100%", // Ajusta el ancho según tus necesidades
  },
});

export default WishList;
