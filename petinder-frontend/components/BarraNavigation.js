import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BarraNavegacion = ({ icon }) => {
  const navigation = useNavigation();

  const handleFindMatchPress = () => {
    navigation.navigate("FindMatch");
  };

  const handleCorazonPress = () => {
    navigation.navigate("WishList");
  };

  const auth = getAuth(app);

  // Función para desloguear al usuario
  const handleSignOut = async () => {
    try {
      await signOut(auth).then(() => {
        navigation.navigate("Home");
        console.log("Usuario deslogueado exitosamente");
        AsyncStorage.setItem("sesion", undefined);
      });
    } catch (error) {
      console.error("Error al desloguear:", error);
      Alert.alert(error.message);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        zIndex: 1,
      }}
    >
      <TouchableOpacity onPress={handleFindMatchPress}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.imagen}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={handleCorazonPress}
          style={{ paddingRight: 30 }}
        >
          <Icon name={icon} size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut}>
          <Icon name={"logout"} size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BarraNavegacion;

const styles = StyleSheet.create({
  imagen: {
    width: 50,
    height: 50,
  },
});
