import React, { useState } from 'react';
import { StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from '../components/Card';

const FormHomeInfo = () => {
    const navigation = useNavigation();
    const [nucleoFamiliar, setNucleoFamiliar] = useState("");
    const [conformidad, setConformidad] = useState("");
    const [motivos, setMotivos] = useState("");

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card
                title="¿Cómo se compone tu núcleo familiar?"
                placeholder="Escribe aquí"
                value={nucleoFamiliar}
                onChangeText={(text) => setNucleoFamiliar(text)}
            />

            <Card
                title="¿Están todos los miembros del hogar de acuerdo con la adopción?"
                placeholder="Escribe aquí"
                value={conformidad}
                onChangeText={(text) => setConformidad(text)}
            />

            <Card
                title="¿Cuáles son los motivos que te hacen querer adoptar?"
                placeholder="Escribe aquí"
                value={motivos}
                onChangeText={(text) => setMotivos(text)}
            />

            <Button 
                style={{ backgroundColor: 'blue' }} 
                title="Continuar"
                onPress={() => navigation.navigate('FormPetInfo')}
            />
        </ScrollView>
    );
};

export default FormHomeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
