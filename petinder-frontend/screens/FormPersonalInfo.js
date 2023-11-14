import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
            navigation.navigate('FormHomeInfo')
        }

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Formulario de Información Personal</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={(text) => setNombre(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={(text) => setApellido(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Fecha de Nacimiento"
                    value={fechaNacimiento}
                    onChangeText={(text) => setFechaNacimiento(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Dirección"
                    value={direccion}
                    onChangeText={(text) => setDireccion(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Localidad"
                    value={localidad}
                    onChangeText={(text) => setLocalidad(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Provincia"
                    value={provincia}
                    onChangeText={(text) => setProvincia(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Piso (opcional)"
                    value={piso}
                    onChangeText={(text) => setPiso(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Teléfono"
                    value={telefono}
                    onChangeText={(text) => setTelefono(text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Instagram"
                    value={instagram}
                    onChangeText={(text) => setInstagram(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Facebook"
                    value={facebook}
                    onChangeText={(text) => setFacebook(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  }
});

export default FormPersonalInfo;