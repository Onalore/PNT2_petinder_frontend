import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Title from "../components/Title";
import TextInput from "../components/TextInput";
import { Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={{ width: 100, height: 100 }}
            />
            <View style={styles.formContainer}>
                <Title title={"Ingreso con email"} />
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
                <Button text={"Iniciar Sesion"} onPress={() => navigation.navigate("Login")} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    formContainer: {
        width: '80%',
        marginTop: 20,
        alignItems: "center",
        justifyContent: "flex-start"
    }
});
