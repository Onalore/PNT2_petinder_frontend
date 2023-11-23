import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import LoginService from "../services/login";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import appsettings from "../appsettings.json";
import InputCircleBorder from "../components/InputCircleBorder";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const login = () => {
    LoginService.login({ email, password }).then((authData) =>
      console.log(authData)
    );
    navigation.navigate("FindMatch");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.imagen} />
      <View style={styles.formContainer}>
        <Title title="Ingreso con email" />
        <InputCircleBorder
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputCircleBorder
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secure={true}
        />
        <Button text={"Iniciar Sesion"} onPress={login} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    height: "100%",
    paddingVertical: "50%",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "70%",
  },
  imagen: {
    width: 80,
    height: 130,
    marginBottom: "16%",
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
  },
});
