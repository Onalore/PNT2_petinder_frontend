import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import appsettings from "../appsettings.json";

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
      <Button style= {styles.button}
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
    paddingTop: "20%",
  },
  imagen: {
    width: 281,
    height: 284,
    backgroundColor: "#507C5C",
    opacity: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: appsettings.colors.primary,
  },
  button: {
    padding: 10,
    marginBottom: 20, 
  },
});