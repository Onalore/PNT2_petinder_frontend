import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Card from './components/Card';

export default function FormPetInfo() {
  const navigation = useNavigation();
  const [rol, setRol] = useState('');
  const [caracter, setCaracter] = useState('');
  const [inadaptacion, setInadaptacion] = useState('');
  const [devolucion, setDevolucion] = useState('');
  const [educacion, setEducacion] = useState('');

  const handleFormSubmit = () => {
    const formData = {
      rol,
      caracter,
      inadaptacion,
      devolucion,
      educacion
    }
      submitFormData()
  };

  const submitFormData = () => {
    navigation.navigate('SuccessfulRegistration')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title
        title="Formulario de Información de la Mascota"
      />
      <Card
        title="¿Qué rol crees que debe ocupar el animal en tu hogar?"
        placeholder="Ej. Compañía, guardián, etc."
        value={rol}
        onChangeText={(text) => setRol(text)}
      />
      <Card
        title="Describe el carácter deseado del animal que quieres adoptar:"
        placeholder="Ej. Juguetón, tranquilo, cariñoso, etc."
        value={caracter}
        onChangeText={(text) => setCaracter(text)}
      />
      <Text style={styles.label}>Describe el carácter deseado del animal que quieres adoptar:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Juguetón, tranquilo, cariñoso, etc."
        value={caracter}
        onChangeText={(text) => setCaracter(text)}
      />

      <Card
        title="Ante una inadaptación o problema de comportamiento en el animal que adoptes, ¿qué harías?"
        placeholder="Ej. Consultar a un entrenador, buscar soluciones, etc."
        value={inadaptacion}
        onChangeText={(text) => setInadaptacion(text)}
      />
  
      <Card
        title="¿En qué circunstancias considerarías devolver al animal adoptado? ¿Lo harías?"
        placeholder="Ej. Cambio de circunstancias personales, problemas de salud, etc."
        value={devolucion}
        onChangeText={(text) => setDevolucion(text)}
      />

      <Card
        title="¿Cómo educas/castigas a un animal? ¿Qué medidas tomas para hacerlo?"
        placeholder="Ej. Reforzamiento positivo, tiempo fuera, etc."
        value={educacion}
        onChangeText={(text) => setEducacion(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
