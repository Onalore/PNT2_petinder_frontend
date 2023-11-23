import PetCard from "../components/PetCard";
import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, PanResponder } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appsettings from "../appsettings.json";
import { MascotaContext } from "../App";
import { obtenerIndice } from "../services/compatibilidad";
import BarraNavegacion from "../components/BarraNavigation";

export default function FindMatch() {
    const navigation = useNavigation();
    const { mascota } = useContext(MascotaContext);
    const [currentPetIndex, setCurrentPetIndex] = useState(0);

    const handleAccept = () => {
        var indice = obtenerIndice(mascota[currentPetIndex]);
        console.log(indice);
        if (obtenerIndice(mascota[currentPetIndex]) >= 75) {
            navigation.navigate("Match", {
              matchedPet: mascota[currentPetIndex],
            });
        }
        setCurrentPetIndex(currentPetIndex + 1); // Cambia a la siguiente mascota
    };

    const handleReject = () => {
        setCurrentPetIndex(currentPetIndex + 1); // Cambia a la siguiente mascota
    };

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            const { dx } = gestureState;
            return Math.abs(dx) > 5; // Personaliza el umbral de deslizamiento aqu�
        },
        onPanResponderRelease: (evt, gestureState) => {
            const { dx } = gestureState;
            if (dx < 0) {
                // Deslizar hacia la derecha
                handleAccept();
            } else {
                // Deslizar hacia la izquierda
                handleReject();
            }
        },
    });

    return (
      <View style={styles.container}>
        <BarraNavegacion
          icon1= "home-outline" icon2= "cards-heart-outline"/>
        {currentPetIndex < mascota.length ? (
          <PetCard
            {...mascota[currentPetIndex]}
            onAccept={handleAccept}
            onReject={handleReject}
            panResponder={panResponder.panHandlers}
          />
        ) : (
          <Text style={styles.texto2}>No hay más mascotas en tu zona</Text>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  texto2: {
    fontSize: 16,
    color: appsettings.colors.primary,
    marginLeft: 5,
  },
});