import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

export default function SuccessfulRegistration() {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>      
      <Image
        source={require("../assets/perrito.png")}
        style={styles.imagen}
      />
     <Text style={styles.text}>
        ¡Completaste el registro con éxito!
      </Text>
      <Button
        text="Ir al inicio de sesiòn"
        onPress={() => navigation.navigate("Login")}
    />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "20%"
  },
  imagen: {
    width: 281,
    height: 284,
    backgroundColor: '#507C5C', 
    opacity: 1,
  },
  text: {
    marginTop: 20,  // Ajusta el margen superior según sea necesario
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 58,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    letterSpacing: 0,
    color: '#507C5C',
    width: 300,
    height: 116,
  },
});