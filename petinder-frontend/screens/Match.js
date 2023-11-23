import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, Linking, Dimensions } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";

const Match = ({ route, navigation }) => {

  const numeroTelefono = "1121652918";

  const abrirWhatsApp = () => {
    const enlaceWhatsApp = `whatsapp://send?phone=${numeroTelefono}`;

    Linking.openURL(enlaceWhatsApp).catch(() => {
      alert("La aplicación de WhatsApp no está instalada en tu dispositivo.");
    });
  };

  const matchedPet = route.params?.matchedPet;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navega de nuevo a la vista FindMatch después de 5 segundos
      navigation.navigate("FindMatch");
    }, 5000); // 5000 milisegundos = 5 segundos

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={matchedPet.imagen} style={styles.imagen} />
      <Title>Es un match!</Title>
      <Text style={styles.subtitulo}>Matcheaste con {matchedPet.nombre}</Text>
      <Button text="Contactar por Whatsapp" onPress={abrirWhatsApp} />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  subtitulo: {
    fontSize: 18,
  },
});

export default Match;
