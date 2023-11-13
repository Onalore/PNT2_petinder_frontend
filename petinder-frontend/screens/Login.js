import { Text, StyleSheet, View, ScrollView } from "react-native";
import Tittle from "../components/Tittle";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Tittle tittle={"Valida tu identidad"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
