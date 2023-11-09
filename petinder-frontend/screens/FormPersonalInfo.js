import { Text, StyleSheet, View } from "react-native";

export default function FormPersonalInfo() {
  return (
    <View style={styles.container}>
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
    </View>
  );
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