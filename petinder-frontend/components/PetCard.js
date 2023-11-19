import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";

const PetCard = ({ imageUrl, desc, title, logoUrl, onAccept, onReject }) => {
    const [isImageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={imageUrl}
                style={styles.image}
                onLoad={handleImageLoad}
            >
                <Image source={logoUrl} style={styles.logo} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
            </ImageBackground>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.rejectButton} onPress={onReject}>
                    <Text style={styles.buttonText}>Rechazar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
                    <Text style={styles.buttonText}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        position: "relative",
        justifyContent: "flex-end", // Ajusta la posición de los elementos dentro de la imagen de fondo
    },
    textContainer: {
        padding: 70,
    },
    desc: {
        fontSize: 20,
        color: "#ffffff",
    },
    title: {
        fontSize: 30,
        color: "#ffffff",
        fontWeight: "bold",
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 20,
        left: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },
    acceptButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        width: "48%",
    },
    rejectButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        width: "48%",
    },
    buttonText: {
        color: "#ffffff",
        textAlign: "center",
    },
});

export default PetCard;
