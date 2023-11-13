import { Text, StyleSheet, ScrollView } from "react-native";
import Tittle from "../components/Tittle";
import Button from "../components/Button";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Tittle tittle={"Valida tu identidad"} />
      {/* <Button
        text={"Registrate"}
        onPress={() => navigation.navigate("FormHomeInfo")}
      /> */}
      <Button text={"Registrate"} />
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
