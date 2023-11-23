import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title"

const Match = ({ perro }) => {
    const [imagen, setImagen] = useState(null);
    const numeroTelefono = "1121652918"

    const abrirWhatsApp = () => {

        const enlaceWhatsApp = `whatsapp://send?phone=${numeroTelefono}`;

        Linking.openURL(enlaceWhatsApp).catch(() => {
            alert("La aplicación de WhatsApp no está instalada en tu dispositivo.");
        });
    };

    return (
        <View style={styles.container}>
            <Image source={require("../assets/perrito.png")} style={styles.imagen} />
            <Title>Es un match!/</Title>
            <Text style={styles.subtitulo}>Matcheaste con {perro}</Text>
            <Button
                text="Contactar por Whatsapp"
                onPress={abrirWhatsApp}
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
    imagen: {
        width: 200,
        height: 200,
    },
    subtitulo: {
        fontSize: 18,
    },
});

export default Match;
