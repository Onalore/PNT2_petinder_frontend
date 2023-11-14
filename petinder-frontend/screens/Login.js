import { Text, StyleSheet, View, ScrollView } from "react-native";
import Title from "../components/Title";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title title={"Valida tu identidad"} />
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
