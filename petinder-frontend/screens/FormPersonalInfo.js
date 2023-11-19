import React, { useState } from "react";
import { Image, StyleSheet, ScrollView, Picker, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import InputCircleBorder from "../components/InputCircleBorder";
import TextPersonalized from "../components/TextPersonalized";
import Button from "../components/Button";

const FormPersonalInfo = () => {
  {
    const navigation = useNavigation();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [provincia, setProvincia] = useState("");
    const [piso, setPiso] = useState("");
    const [telefono, setTelefono] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [dia, setDia] = useState("01");
    const [mes, setMes] = useState("01");
    const [anio, setAnio] = useState("2023");

    const dias = Array.from({ length: 31 }, (_, index) =>
      (index + 1).toString().padStart(2, "0")
    );
    const meses = Array.from({ length: 12 }, (_, index) =>
      (index + 1).toString().padStart(2, "0")
    );
    const anios = Array.from({ length: 100 }, (_, index) =>
      (2023 - index).toString()
    );

    const handleFormSubmit = () => {
      const formData = {
        nombre,
        apellido,
        fechaNacimiento,
        direccion,
        localidad,
        provincia,
        piso,
        telefono,
        instagram,
        facebook,
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
        <TextPersonalized text="Dirección" />
        <InputCircleBorder
          placeholder="Dirección"
          value={direccion}
          onChangeText={(text) => setDireccion(text)}
        />
        <TextPersonalized text="Localidad" />
        <InputCircleBorder
          placeholder="Localidad"
          value={localidad}
          onChangeText={(text) => setLocalidad(text)}
        />
        <TextPersonalized text="Provincia" />
        <InputCircleBorder
          placeholder="Provincia"
          value={provincia}
          onChangeText={(text) => setProvincia(text)}
        />
        <TextPersonalized text="Piso (opcional)" />
        <InputCircleBorder
          placeholder="Piso (opcional)"
          value={piso}
          onChangeText={(text) => setPiso(text)}
        />
        <TextPersonalized text="Teléfono" />
        <InputCircleBorder
          placeholder="Teléfono"
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
        />
        <TextPersonalized text="Instagram" />
        <InputCircleBorder
          placeholder="Instagram"
          value={instagram}
          onChangeText={(text) => setInstagram(text)}
        />
        <TextPersonalized text="Facebook" />
        <InputCircleBorder
          placeholder="Facebook"
          value={facebook}
          onChangeText={(text) => setFacebook(text)}
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
  },
  picker: {
    flex: 1,
    height: 35,
    width: "20%",
    borderRadius: 20,
  },
});

export default FormPersonalInfo;
