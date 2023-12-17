import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import mascotas from "./services/mascotas";
import React, { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";

// Crear el contexto
export const MascotaContext = createContext();
export const app = initializeApp(firebaseConfig);

export default function App() {
  // Estado para la mascota en el contexto
  const [mascota, setMascota] = useState([]);
  const [mascotasDeseadas, setMascotasDeseadas] = useState([]);

  useEffect(() => {
    setMascota(mascotas);
  }, []);

  const addMascotaDeseada = (mascota) => {
    setMascotasDeseadas((prevMascotas) => [...prevMascotas, mascota]);
  };

  return (
    <MascotaContext.Provider
      value={{
        mascota,
        setMascota,
        mascotasDeseadas, //para la implementacion de la wishlist
        setMascotasDeseadas,
        addMascotaDeseada,
      }}
    >
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" style="light" />
        <Navigation />
      </View>
    </MascotaContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
