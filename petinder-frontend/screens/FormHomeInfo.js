import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../components/Button";
import InputBottomLine from "../components/InputBottomLine";
import CheckboxCircle from "../components/CheckboxCircle";

const FormHomeInfo = () => {
  const navigation = useNavigation();
  const [m2Disponibles, setm2Disponibles] = useState("");
  const [animales, setAnimales] = useState("");
  const [horasAlDia, setHorasAlDia] = useState("");
  const [ninios, setNinios] = useState("");
  const [tamanio, setTamanio] = useState("");

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
            onChangeText={(text) => setm2Disponibles(text)}
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
            onChangeText={(text) => setHorasAlDia(text)}
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
        text={"Continuar"}
        onPress={() => navigation.navigate("FormPetInfo")}
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
