import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import appsettings from "../appsettings.json";
import { ProgressBar } from "react-native-paper";
import { obtenerIndice } from "../services/compatibilidad";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PetWish = ({ mascota, onPress }) => {
  const [compatibilidad, setCompatibilidad] = useState();
  const [indice, setIndice] = useState(0);
  const numeroTelefono = "+54 01121652918";
  const indiceMinimoParaMatch = 85;

  const abrirWhatsApp = () => {
    const enlaceWhatsApp = `whatsapp://send?phone=${numeroTelefono}`;

    Linking.openURL(enlaceWhatsApp).catch(() => {
      alert("La aplicaci�n de WhatsApp no est� instalada en tu dispositivo.");
    });
  };

  useEffect(() => {
    const i = obtenerIndice(mascota);
    setIndice(i);
    const compatiblidadProgressBar = i / 100;
    setCompatibilidad(compatiblidadProgressBar);
  }, [mascota]);

  const obtenerColorProgressBar = () => {
    if (compatibilidad >= 0.65) {
      return "green";
    } else if (compatibilidad >= 0.3) {
      return "#fcba03";
    } else {
      return "red";
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={mascota.imagen} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{mascota.nombre}</Text>
        <Text style={styles.texto}>Tu compatibilidad: </Text>
        <ProgressBar
          progress={compatibilidad}
          theme={{ colors: { primary: obtenerColorProgressBar() } }}
          style={styles.roundedProgressBar}
        />
      </View>
      {indice >= indiceMinimoParaMatch ? (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.circle}>
            <Icon
              name={"whatsapp"}
              size={35}
              color="white"
              onPress={abrirWhatsApp}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={{ marginRight: 70 }}></View>
      )}
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#075e54",
    color: "white",
    marginLeft: 10,
    paddingBottom: 5,
    textAlign: "center",
  },
  texto: {
    fontSize: 16,
    color: appsettings.colors.primary,
  },
  roundedProgressBar: {
    borderRadius: 8,
    height: 10,
  },
});

export default PetWish;
