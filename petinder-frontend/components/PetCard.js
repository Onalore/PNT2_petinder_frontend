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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import appsettings from "../appsettings.json";

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
          <View style={styles.buttonContainer}>
            {currentPetIndex > 0 ? (
              <TouchableOpacity
                style={styles.arrowButtons}
                onPress={mascotaAnterior}
              >
                <Icon
                  name={"arrow-left"}
                  size={40}
                  color={appsettings.colors.primary}
                />
              </TouchableOpacity>
            ) : (
              <View style={{ width: 70 }}></View>
            )}
            <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
              <Icon name={"heart-outline"} size={40} color="#B3404A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButtons} onPress={onReject}>
              <Icon
                name={"arrow-right"}
                size={40}
                color={appsettings.colors.primary}
              />
            </TouchableOpacity>
          </View>
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
    marginBottom: "10%",
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
    paddingBottom: 20,
  },
  acceptButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#F4B2B0",
  },
  arrowButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: appsettings.colors.secondary,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default PetCard;
