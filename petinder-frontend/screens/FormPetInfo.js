import React, { useState } from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import Title from "../components/Title";
import InputBottomLine from "../components/InputBottomLine";
import Button from "../components/Button";

export default function FormPetInfo() {
  const navigation = useNavigation();
  const [rol, setRol] = useState("");
  const [caracter, setCaracter] = useState("");
  const [inadaptacion, setInadaptacion] = useState("");
  const [devolucion, setDevolucion] = useState("");
  const [educacion, setEducacion] = useState("");

  const handleFormSubmit = () => {
    const formData = {
      rol,
      caracter,
      inadaptacion,
      devolucion,
      educacion,
    };
    submitFormData();
  };

  const submitFormData = () => {
    navigation.navigate("SuccessfulRegistration");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.imagen} />
      <Title title={"Sobre la Mascota"} />
      <Card
        title="¿Qué rol crees que debe ocupar el animal en tu hogar?"
        child={
          <InputBottomLine
            placeholder="Ej. Compañía, guardián, etc."
            value={rol}
            onChangeText={(text) => setRol(text)}
          />
        }
      />
      <Card
        title="Describe el carácter deseado del animal que quieres adoptar"
        child={
          <InputBottomLine
            placeholder="Ej. Juguetón, tranquilo, cariñoso, etc."
            value={caracter}
            onChangeText={(text) => setCaracter(text)}
          />
        }
      />
      <Card
        title="Ante una inadaptación o problema de comportamiento en el animal que adoptes, ¿qué harías?"
        child={
          <InputBottomLine
            placeholder="Ej. Consultar a un entrenador, buscar soluciones, etc."
            value={inadaptacion}
            onChangeText={(text) => setInadaptacion(text)}
          />
        }
      />
      <Card
        title="¿En qué circunstancias considerarías devolver al animal adoptado? ¿Lo harías?"
        child={
          <InputBottomLine
            placeholder="Ej. Cambio de circunstancias personales, problemas de salud, etc."
            value={devolucion}
            onChangeText={(text) => setDevolucion(text)}
          />
        }
      />
      <Card
        title="¿Cómo educas/castigas a un animal? ¿Qué medidas tomas para hacerlo?"
        child={
          <InputBottomLine
            placeholder="Ej. Reforzamiento positivo, tiempo fuera, etc."
            value={educacion}
            onChangeText={(text) => setEducacion(text)}
          />
        }
      />
      <Button text="Enviar" onPress={handleFormSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
    paddingBottom: "4%",
    paddingHorizontal: "8%",
  },
  imagen: {
    width: 60,
    height: 100,
    marginBottom: "5%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
