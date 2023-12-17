import React, { useContext, useState } from "react";
import { View, Text, FlatList, StyleSheet, Switch } from "react-native";
import PetWish from "../components/PetWish";
import BarraNavegacion from "../components/BarraNavigation";
import { Divider } from "@rneui/themed";
import appsettings from "../appsettings.json";
import { obtenerIndice } from "../services/compatibilidad";

const WishList = () => {
  const { mascotasDeseadas } = useContext(require("../App").MascotaContext);
  const [isEnabled, setIsEnabled] = useState(false);

  console.log("mascotas deseadas ", mascotasDeseadas);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

 const mascotasOrdenadas = [...mascotasDeseadas].sort(
    (mascotaA, mascotaB) => obtenerIndice(mascotaB) - obtenerIndice(mascotaA)
  );

  const mascotasFiltradas = mascotasOrdenadas.filter(
    (mascota) => obtenerIndice(mascota) >= 85
  );

  return (
    <View style={styles.container}>
      <BarraNavegacion icon1="home-outline" icon2="cards-heart-outline" />

      <View style={styles.section}>
        <Text style={styles.text2}>Ver solo matches</Text>
        <Switch
          trackColor={{ false: "#767577", true: appsettings.colors.secondary }}
          thumbColor={"white"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Divider style={styles.divider} />
      {mascotasDeseadas.length > 0 ? (
        <View style={styles.flatlistContainer}>
          <FlatList
            data={!isEnabled ? mascotasOrdenadas : mascotasFiltradas}
            renderItem={({ item }) => <PetWish mascota={item} />}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            width: "80%",
          }}
        >
          <Text style={styles.text}>
            No tienes mascotas añadidas a la wishlist
          </Text>
        </View>
      )}
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
    width: "100%",
  },
  text: {
    color: appsettings.colors.primary,
    fontSize: 20,
    marginTop: "100%",
    textAlign: "center",
  },
  text2: {
    color: "gray",
    fontSize: 20,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.1,
    borderColor: "gray",
    width: "100%",
    elevation: 1,
  },
});

export default WishList;
