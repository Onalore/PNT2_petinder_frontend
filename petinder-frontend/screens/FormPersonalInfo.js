import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import InputCircleBorder from "../components/InputCircleBorder";
import TextPersonalized from "../components/TextPersonalized";
import Button from "../components/Button";
import { app } from "../App";
import * as Location from "expo-location";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";
import moment from "moment";

const FormPersonalInfo = () => {
  {
    const navigation = useNavigation();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fecha, setFecha] = useState(dayjs());
    const [ubicacion, setUbicacion] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

    const auth = getAuth(app);

    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Usuario creado !");
          const user = userCredential.user;
          console.log(user);
          handleFormSubmit();
          submitFormData();
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(error.message);
        });
    };

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
    };

    const submitFormData = () => {
      navigation.navigate("FormHomeInfo");
    };

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      setFecha(date);
      hideDatePicker();
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
        <TouchableOpacity onPress={showDatePicker} style={{ width: "100%" }}>
          <InputCircleBorder
            placeholder={moment(fecha).format("DD/MM/YYYY")}
            editable={false}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* <View style={styles.selectContainer}>
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
        </View> */}
        <TextPersonalized text="Teléfono" />
        <InputCircleBorder
          placeholder="Teléfono"
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
        />
        <InputCircleBorder
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputCircleBorder
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secure={true}
        />
        <Button text="Continuar" onPress={handleCreateAccount} />
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
