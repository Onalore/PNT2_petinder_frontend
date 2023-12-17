import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Linking,
  ImageBackground,
} from "react-native";
import Button from "../components/Button";

const Match = ({ route, navigation }) => {
  const [redirectToWishlist, setRedirectToWishlist] = useState(false);
  const numeroTelefono = "+54 01121652918";

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
      if (!redirectToWishlist) {
        navigation.navigate("FindMatch");
      }
    }, 5000); // 5000 milisegundos = 5 segundos

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigation, redirectToWishlist]);

  const handleGoToWishlist = () => {
    // Marcar que la redirección a la Wishlist ha ocurrido
    setRedirectToWishlist(true);
    // Navegar a la Wishlist
    navigation.navigate("WishList");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={matchedPet.imagen} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>¡Es un match!</Text>
          <Text style={styles.subtitulo}>
            Matcheaste con {matchedPet.nombre}
          </Text>
          <Button text="Contactar por Whatsapp" onPress={abrirWhatsApp} />
          <View style={{ marginBottom: "10%" }}></View>
          <Button
            text="Ir a la wishlist"
            onPress={handleGoToWishlist}
            color={"#9093d6"}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "10%",
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: "10%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    textAlign: "center",
    marginBottom: "10%",
  },
});

export default Match;
