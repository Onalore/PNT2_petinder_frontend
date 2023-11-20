import { Text, StyleSheet, View, Image } from "react-native";
import Title from "../components/Title";
import Button from "../components/Button";
import appsettings from "../appsettings.json";
import { useNavigation } from "@react-navigation/native";
import CardIconText from "../components/CardIconText";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.imagen} />
      <Title tittle={"Valida tu identidad"} />
      <CardIconText
        icon={"email"}
        title={"Email"}
        text={"Ingresa con tu email"}
      />
      <CardIconText
        icon={"google"}
        title={"Google"}
        text={"Ingresa con google"}
      />
      <View style={styles.textAlignment}>
        <Text style={styles.texto1}>Regístrate</Text>
        <Text style={styles.texto2}>si no tienes cuenta</Text>
      </View>
      <Button
        text={"Continuar"}
        onPress={() => navigation.navigate("FormHomeInfo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imagen: {
    width: 80,
    height: 130,
  },
  textAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  texto1: {
    fontSize: 16,
    fontWeight: "bold",
    color: appsettings.colors.primary,
  },
  texto2: {
    fontSize: 16,
    color: appsettings.colors.primary,
    marginLeft: 5,
  },
});
