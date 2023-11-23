﻿import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../components/Button";
import InputBottomLine from "../components/InputBottomLine";
import CheckboxCircle from "../components/CheckboxCircle";
import { guardarUsuario } from "../services/compatibilidad";

const FormHomeInfo = () => {
  const navigation = useNavigation();
  const [m2Disponibles, setm2Disponibles] = useState("");
  const [animales, setAnimales] = useState("");
  const [horasAlDia, setHorasAlDia] = useState("");
  const [ninios, setNinios] = useState("");
  const [tamanio, setTamanio] = useState("");

    // Función para guardar los datos del usuario antes de navegar
    const guardarDatosUsuario = () => {
        const user = {
            m2Disponibles,
            animales,
            horasAlDia,
            ninios,
            tamanio,
        };

        guardarUsuario(user); // Guarda los datos del usuario en el servicio
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.imagen} />
      <Title title={"Sobre tu hogar"} />
      <Card
        title="¿Cuantos m2 dispone de su hogar?"
        child={
          <InputBottomLine
                placeholder="Tu respuesta"
                value={m2Disponibles}
                onChangeText={(text) => {
                    if (/^\d+$/.test(text) || text === '') { //verifica que el texto ingresado sean unicamente numeros
                        setm2Disponibles(text);
                    }
                }}
                keyboardType="numeric" //en el celular aparece el teclado numerico
                />
        }
      />
      <Card
        title="¿Tiene otros animales?"
        child={
          <View>
            <CheckboxCircle
              title="Sí"
              checked={animales}
              onPress={() => setAnimales(true)}
            />
            <CheckboxCircle
              title="No"
              checked={!animales}
              onPress={() => setAnimales(false)}
            />
          </View>
        }
      />
      <Card
        title="¿Convive con niños?"
        child={
          <View>
            <CheckboxCircle
              title="Sí"
              checked={ninios}
              onPress={() => setNinios(true)}
            />
            <CheckboxCircle
              title="No"
              checked={!ninios}
              onPress={() => setNinios(false)}
            />
          </View>
        }
      />
      <Card
        title="¿Cuantas horas al dia pasas en tu casa?"
        child={
          <InputBottomLine
                placeholder="Tu respuesta"
                value={horasAlDia}
                onChangeText={(text) => {
                    const numerico = parseInt(text, 10); //convierte el texto ingresado en un numero con base 10

                    if (text === '' || !isNaN(numerico) && numerico >= 0 && numerico <= 24) {
                        setHorasAlDia(text)
                    } //controla que el numero este entre 0 y 24
                }}
                keyboardType = "numeric" //en el celular aparece el teclado numerico
          />
        }
      />
      <Card
        title="¿Cuál es el tamaño de mascota ideal para tu hogar?"
        child={
          <View>
            <CheckboxCircle
              title="Pequeño"
              checked={tamanio === "Pequenio"}
              onPress={() => setTamanio("Pequenio")}
            />
            <CheckboxCircle
              title="Mediano"
              checked={tamanio === "Mediano"}
              onPress={() => setTamanio("Mediano")}
            />
            <CheckboxCircle
              title="Grande"
              checked={tamanio === "Grande"}
              onPress={() => setTamanio("Grande")}
            />
          </View>
        }
      />
      <Button
              text="Continuar"
              //disabled={!m2Disponibles || !horasAlDia} // Deshabilita el botón si alguno de los campos está vacío
              onPress={() => {
                  if (m2Disponibles && horasAlDia) {
                      guardarDatosUsuario();
                      navigation.navigate("FormPetInfo")
                  }
              }}
      />
    </ScrollView>
    );
};

export default FormHomeInfo;

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
});