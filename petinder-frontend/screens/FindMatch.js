import PetCard from "../components/PetCard";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, PanResponder } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appsettings from "../appsettings.json";
import { MascotaContext } from "../App";
import { obtenerIndice } from "../services/compatibilidad";
import BarraNavegacion from "../components/BarraNavigation";
import { getAuth } from "firebase/auth";
import { app } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FindMatch() {
  const navigation = useNavigation();
  const { mascota, addMascotaDeseada } = useContext(MascotaContext);
  const [currentPetIndex, setCurrentPetIndex] = useState(0);

  const auth = getAuth(app);
  console.log("auth findMatch", auth);

  const handleAccept = () => {
    addMascotaDeseada(mascota[currentPetIndex]);
    var indice = obtenerIndice(mascota[currentPetIndex]);

  console.log(indice);
  if (obtenerIndice(mascota[currentPetIndex]) >= 85) {
    navigation.navigate("Match", {
      matchedPet: mascota[currentPetIndex],
    });
  }
  setCurrentPetIndex(currentPetIndex + 1); 

  saveWishlist(); 
};

const volver = () => {
  if (currentPetIndex > 0) {
    setCurrentPetIndex(currentPetIndex - 1); 
  }
};

const handleReject = () => {
  setCurrentPetIndex(currentPetIndex + 1); 

  saveWishlist(); 
};

const saveWishlist = async (wishlist) => {
  try {
    await AsyncStorage.setItem("wishlist", JSON.stringify(wishlist));
  } catch (error) {
    console.error("Error saving wishlist:", error);
  }
};

const loadWishlist = async () => {
  try {
    const wishlist = await AsyncStorage.getItem("wishlist");
    if (wishlist !== null) {
      return JSON.parse(wishlist);
    }
  } catch (error) {
    console.error("Error loading wishlist:", error);
  }
  return [];
};

const loadAndAddToWishlist = async () => {
  const wishlist = await loadWishlist();
  wishlist.forEach((mascota) => addMascotaDeseada(mascota));
};

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      const { dx } = gestureState;
      return Math.abs(dx) > 5; 
    },
    onPanResponderRelease: (evt, gestureState) => {
      const { dx } = gestureState;
      if (dx > 0) {
        handleAccept();
      } else {
        handleReject();
      }
    },
  });

  return (
    <View style={styles.container}>
      <BarraNavegacion icon="cards-heart-outline" />
      {/* {currentPetIndex > 0 && (
                <TouchableOpacity style={styles.button} onPress={volver}>
                    <Text style={styles.buttonText}>Regresar</Text>
                </TouchableOpacity>
            )} */}
      {currentPetIndex < mascota.length ? (
        <PetCard
          {...mascota[currentPetIndex]}
          onAccept={handleAccept}
          onReject={handleReject}
          panResponder={panResponder.panHandlers}
          mascotaAnterior={volver}
          currentPetIndex={currentPetIndex}
        />
      ) : (
        <Text style={styles.texto2}>
          Ya viste todas las mascotas en tu zona
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  texto2: {
    fontSize: 16,
    color: appsettings.colors.primary,
    marginLeft: 5,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appsettings.colors.primary,
    height: 40,
    width: "20%",
    color: "#FFFFFF",
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
