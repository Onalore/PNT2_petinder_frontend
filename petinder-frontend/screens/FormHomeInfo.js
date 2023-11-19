import React, { useState } from 'react';
import { StyleSheet, ScrollView, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from '../components/Card';
import {CheckBox} from "react-native-elements"

const FormHomeInfo = () => {
    const navigation = useNavigation();
    const [m2Disponibles, setm2Disponibles] = useState("");
    const [animales, setAnimales] = useState("");
    const [horasAlDia, setHorasAlDia] = useState("");
    const [ninios, setNinios] = useState("");
    const [tamanio, setTamanio] = useState("");
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card
                title="¿Cuantos m2 dispone de su hogar?"
                placeholder="Escribe aquí"
                value={m2Disponibles}
                keyboardType="numeric"
                onChangeText={(text) => setm2Disponibles(text)}
            />

        
        <Text>¿Tiene otros animales?</Text>

            <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Sí"
                checked={animales === true}
                onPress={() => setAnimales(true)}
            />
            <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="No"
                checked={animales === false}
                onPress={() => setAnimales(false)}
            />
            
            <Text>¿Convive con niños?</Text>
        
            <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Sí"
                checked={ninios === true}
                onPress={() => setNinios(true)}
            />
            <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="No"
                checked={ninios === false}
                onPress={() => setNinios(false)}
            />

            <Card
                title="¿Cuantas horas al dia pasas en tu casa?"
                placeholder="Escribe aquí"
                value={horasAlDia}
                onChangeText={(text) => setHorasAlDia(text)}
            />

            <Text>¿Que tamaño de mascota desea?</Text>
        
            <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Pequeño"
                checked={tamanio === "Pequenio"}
                onPress={() => setTamanio("Pequenio")}
            />
            
            <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Mediano"
                checked={tamanio === "Mediano"}
                onPress={() => setTamanio("Mediano")}
            />

            <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Grande"
                checked={tamanio === "Grande"}
                onPress={() => setTamanio("Grande")}
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
