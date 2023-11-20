import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import Title from "../components/Title";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { useNavigation } from "@react-navigation/native";
import appsettings from "../appsettings.json";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.imagen}
            />
            <View style={styles.formContainer}>
                <View style={styles.textAlignment}>
                    <Text style={styles.texto1}>Ingreso</Text>
                    <Text style={styles.texto2}>con email</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Button text={"Iniciar Sesion"} onPress={() => navigation.navigate("FindMatch")} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    formContainer: {
        width: '80%',
        marginTop: 20,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    imagen: {
        width: 80,
        height: 130,
    },
    textAlignment: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        alignItems: "center",
    },
    texto1: {
        fontSize: 16,
        fontWeight: "bold",
        color: appsettings.colors.primary,
    },
    texto2: {
        fontSize: 16,
        color: appsettings.colors.primary,
        marginLeft: 5,
    }
});
