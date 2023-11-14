import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

export default function SuccessfulRegistration() {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: '../assets/perrito.png'}}  
                style={styles.imagen} />
            <Title Title={"Registracion exitosa!"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    imagen: {
        width: 200,  
        height: 200, 
    }
});
