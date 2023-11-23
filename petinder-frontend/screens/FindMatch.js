import PetCard from "../components/PetCard";
import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, PanResponder } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appsettings from "../appsettings.json";
import { MascotaContext } from "../App";
import { obtenerIndice } from "../services/compatibilidad";
import BarraNavegacion from "../components/BarraNavigation";
import logo from "../assets/logo.png";
import { TouchableOpacity } from "react-native";

export default function FindMatch() {
  const navigation = useNavigation();
  const { mascota, addMascotaDeseada } = useContext(MascotaContext);
  const [currentPetIndex, setCurrentPetIndex] = useState(0);

  const handleAccept = () => {
    addMascotaDeseada(mascota[currentPetIndex]);
    var indice = obtenerIndice(mascota[currentPetIndex]);

    console.log(indice);
    if (obtenerIndice(mascota[currentPetIndex]) >= 75) {
      navigation.navigate("Match", {
        matchedPet: mascota[currentPetIndex],
      });
    }
    setCurrentPetIndex(currentPetIndex + 1); // Cambia a la siguiente mascota
    };

    const volver = () => {
        if (currentPetIndex > 0) {
            setCurrentPetIndex(currentPetIndex - 1); // Vuelve a la mascota anterior
        }
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
            <BarraNavegacion icon="cards-heart-outline" />
            {currentPetIndex > 0 && (
                <TouchableOpacity style={styles.button} onPress={volver}>
                    <Text style={styles.buttonText}>Regresar</Text>
                </TouchableOpacity>
            )}
        {currentPetIndex < mascota.length ? (
          <PetCard
            {...mascota[currentPetIndex]}
            onAccept={handleAccept}
            onReject={handleReject}
            panResponder={panResponder.panHandlers}
          />
        ) : (
          <Text style={styles.texto2}>Ya viste todas las mascotas en tu zona</Text>
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
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appsettings.colors.primary,
        height: 40,
        width: "20%",
        color: "#FFFFFF",
        borderRadius: 25,
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold"
    }
});
