import PetCard from "../components/PetCard";
import React, { useState } from "react";
import { StyleSheet, View, Text, PanResponder } from "react-native";
import appsettings from "../appsettings.json";
import mascotas from "../services/mascotas";

export default function FindMatch() {
    const [currentPetIndex, setCurrentPetIndex] = useState(0);

    const handleAccept = () => {
        setCurrentPetIndex(currentPetIndex + 1); // Cambia a la siguiente mascota
    };

    const handleReject = () => {
        setCurrentPetIndex(currentPetIndex + 1); // Cambia a la siguiente mascota
    };

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            const { dx } = gestureState;
            return Math.abs(dx) > 5; // Personaliza el umbral de deslizamiento aquí
        },
        onPanResponderRelease: (evt, gestureState) => {
            const { dx } = gestureState;
            if (dx > 0) {
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
            {currentPetIndex < appsettings.pets.length ? (
                <PetCard
                    {...appsettings.pets[currentPetIndex]}
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
    },
    texto2: {
        fontSize: 16,
        color: appsettings.colors.primary,
        marginLeft: 5,
    }
});