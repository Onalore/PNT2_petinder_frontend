import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  PanResponder,
} from "react-native";

const PetCard = ({
  imagen,
  sexo,
  nombre,
  edad,
  logoUrl,
  onAccept,
  onReject,
  panResponder,
  mascotaAnterior,
  currentPetIndex,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagen}
        style={styles.image}
        onLoad={handleImageLoad}
        {...panResponder}
      >
        <View style={styles.overlay}>
          <Image source={logoUrl} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.sexo}>
              {sexo}, {edad} meses
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {currentPetIndex > 0 && (
            <TouchableOpacity
              style={styles.beforeButton}
              onPress={mascotaAnterior}
            >
              <Text style={styles.buttonText}>Anterior</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.rejectButton} onPress={onReject}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
            <Text style={styles.buttonText}>Me interesa</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "93%",
    width: "100%",
    display: "flex",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 16,
  },
  textContainer: {
    position: "relative",
    marginBottom: 70,
    zIndex: 1,
  },
  sexo: {
    fontSize: 20,
    color: "#ffffff",
  },
  nombre: {
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
    zIndex: 2,
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
    backgroundColor: "#42c24e",
    padding: 10,
    borderRadius: 15,
    width: "30%",
  },
  rejectButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 15,
    width: "30%",
  },
  beforeButton: {
    backgroundColor: "#9093d6",
    padding: 10,
    borderRadius: 15,
    width: "30%",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default PetCard;
