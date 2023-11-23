import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import mascotas from "./services/mascotas";
import React, { createContext, useEffect, useState } from "react";

// Crear el contexto
export const MascotaContext = createContext();

export default function App() {
    // Estado para la mascota en el contexto
    const [mascota, setMascota] = useState([]);

    useEffect(() => {
        setMascota(mascotas);
    }, []);

    return (
        <MascotaContext.Provider value={{ mascota, setMascota }}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Navigation />
            </View>
        </MascotaContext.Provider>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
