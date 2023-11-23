import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import appsettings from "../appsettings.json";
import { useNavigation } from "@react-navigation/native";
import CardIconText from "../components/CardIconText";
//import * as GoogleSingIn from "expo-auth-session/provider/google";

export default function Home() {
  const navigation = useNavigation();
  //   const { request, response, promptAsync } = Google.useAuthRequest({
  //     androidClientId:
  //       "185014890847-p6p59l9kb3l088esl1sjkdbikn1nts48.apps.googleusercontent.com",
  //   });

  const Login = () => {};

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.imagen} />
          <Title title={"Valida tu identidad"} />

      <TouchableOpacity>
        <CardIconText
          icon={"email"}
          title={"Email"}
          text={"Ingresa con tu email"}
          onPress={() => navigation.navigate("Login")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <CardIconText
          icon={"google"}
          title={"Google"}
          text={"Ingresa con google"}
          onPress={() => navigation.navigate("Login")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FormPersonalInfo")}>
        <View style={styles.textAlignment}>
          <Text style={styles.texto1}>Regístrate</Text>
          <Text style={styles.texto2}>si no tienes cuenta</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  imagen: {
    width: 80,
    height: 130,
    marginBottom: "16%",
  },
  textAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: "1%",
    marginBottom: "10%",
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
