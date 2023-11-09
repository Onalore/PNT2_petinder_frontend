import React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Bienvenido a Petinder</Text>
            <Button
                title="Registrate"
                onPress={() => navigation.navigate('FormHomeInfo')}
            />
            
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
