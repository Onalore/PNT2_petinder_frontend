import React, { useEffect, useState } from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import InputCircleBorder from "../components/InputCircleBorder";
import TextPersonalized from "../components/TextPersonalized";
import Button from "../components/Button";
import * as Location from "expo-location";
import { Picker } from "@react-native-picker/picker";

const FormPersonalInfo = () => {
  {
    const navigation = useNavigation();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dia, setDia] = useState("01");
    const [mes, setMes] = useState("01");
    const [anio, setAnio] = useState("2023");
    const [ubicacion, setUbicacion] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const dias = Array.from({ length: 31 }, (_, index) =>
      (index + 1).toString().padStart(2, "0")
    );
    const meses = Array.from({ length: 12 }, (_, index) =>
      (index + 1).toString().padStart(2, "0")
    );
    const anios = Array.from({ length: 100 }, (_, index) =>
      (2023 - index).toString()
    );

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let ubicacion = await Location.getCurrentPositionAsync({});
        setUbicacion(ubicacion);
      })();
    }, []);

    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (ubicacion) {
      text = JSON.stringify(ubicacion);
    }

    const handleFormSubmit = async () => {
      //obtener ubicacion actual
      const location = await Location.getCurrentPositionAsync({});
      const { latitud, longitud } = location.coords;
      const formData = {
        nombre,
        apellido,
        fechaNacimiento,
        latitud,
        longitud,
        telefono,
      };

      submitFormData();
    };

    const submitFormData = () => {
      navigation.navigate("FormHomeInfo");
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.subContainer}>
          <Image source={require("../assets/logo.png")} style={styles.imagen} />
          <Title title={"Tus datos"} />
        </View>
        <TextPersonalized text="Nombre" />
        <InputCircleBorder
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextPersonalized text="Apellido" />
        <InputCircleBorder
          placeholder="Apellido"
          value={apellido}
          onChangeText={(text) => setApellido(text)}
        />

        <TextPersonalized text="Fecha de Nacimiento" />

        <View style={styles.selectContainer}>
          <Picker
            style={styles.picker}
            selectedValue={dia}
            onValueChange={(itemValue) => setDia(itemValue)}
          >
            {dias.map((d) => (
              <Picker.Item key={d} label={d} value={d} />
            ))}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={mes}
            onValueChange={(itemValue) => setMes(itemValue)}
          >
            {meses.map((m) => (
              <Picker.Item key={m} label={m} value={m} />
            ))}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={anio}
            onValueChange={(itemValue) => setAnio(itemValue)}
          >
            {anios.map((a) => (
              <Picker.Item key={a} label={a} value={a} />
            ))}
          </Picker>
        </View>
        <TextPersonalized text="Teléfono" />
        <InputCircleBorder
          placeholder="Teléfono"
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
        />
        <Button text="Continuar" onPress={handleFormSubmit} />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "10%",
    paddingBottom: "4%",
    paddingHorizontal: "8%",
    height: "100%",
  },
  subContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: "100%",
  },
  imagen: {
    width: 60,
    height: 100,
    marginBottom: "5%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  selectContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    height: 35,
    width: "20%",
    borderRadius: 20,
  },
});

export default FormPersonalInfo;
