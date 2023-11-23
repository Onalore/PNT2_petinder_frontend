import PetCard from "../components/PetCard";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import appsettings from "../appsettings.json";
import mascotas from "../services/mascotas";

export default function FindMatch() {
    const [currentPetIndex, setCurrentPetIndex] = useState(0);
    const pets = mascotas;
    console.log("pets: ", pets);
    //    {
    //        imageUrl: require("../assets/perritoEnAdopcion.png"),
    //        title: "Delfina",
    //        desc: "Tiene 3 meses y se encuentra desparasitada",
    //        logo: require("../assets/adaptive-icon.png")
    //    },
    //    {
    //        imageUrl: require("../assets/gatito.jpg"),
    //        title: "Zoe",
    //        desc: "Gatita de 8 semanas y desparasitada",
    //        logo: require("../assets/adaptive-icon.png")
    //    }
    //];

    const handleAccept = () => {
        setCurrentPetIndex(currentPetIndex + 1); // Cambia a la siguiente mascota
    };

    const handleReject = () => {
        setCurrentPetIndex(currentPetIndex + 1); // Cambia a la siguiente mascota
    };
    return (
        <View style={styles.container}>
            {currentPetIndex < pets.length ? (
                <PetCard
                    {...pets[currentPetIndex]}
                    onAccept={handleAccept}
                    onReject={handleReject}
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