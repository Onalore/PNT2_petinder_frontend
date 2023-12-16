import React, { useState, useEffect }  from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appsettings from "../appsettings.json";
import { ProgressBar } from 'react-native-paper';
import { obtenerIndice } from "../services/compatibilidad";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PetWish = ({ mascota, onPress }) => {
  const [compatibilidad, setCompatibilidad] = useState();
  const numeroTelefono = "+54 01121652918";

  const abrirWhatsApp = () => {
    const enlaceWhatsApp = `whatsapp://send?phone=${numeroTelefono}`;

    Linking.openURL(enlaceWhatsApp).catch(() => {
      alert("La aplicación de WhatsApp no está instalada en tu dispositivo.");
    });
  };

  useEffect(() => {
    const indice = obtenerIndice(mascota);
    const compatiblidadProgressBar = indice / 100;
    setCompatibilidad(compatiblidadProgressBar);
  }, [mascota]);

  const obtenerColorProgressBar = () => {
    if (compatibilidad >= 0.65) {
      return 'green';
    } else if (compatibilidad >= 0.3) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={mascota.imagen} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{mascota.nombre}</Text>
        <Text style={styles.texto}>Indice de compatibilidad</Text>
        <ProgressBar progress={compatibilidad} theme={{ colors: { primary: obtenerColorProgressBar() } }} />
      </View>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Icon style={styles.circle} name={"whatsapp"} size={30} color="black" onPress={abrirWhatsApp}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    padding: "4%",
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: "10%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  itemName: {
    fontSize: 24,
    fontWeight: "bold",
    color: appsettings.colors.primary,
  },
  circle: {
    flexDirection: "row",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: appsettings.colors.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10, 
  },
  texto: {
    fontSize: 16,
    color: appsettings.colors.primary,
  }
});

export default PetWish;
