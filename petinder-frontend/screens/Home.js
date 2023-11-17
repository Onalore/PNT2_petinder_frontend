import { Text, StyleSheet, ScrollView } from "react-native";
import Tittle from "../components/Title";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Tittle tittle={"Valida tu identidad"} />
      {/* <Button
        text={"Registrate"}
        onPress={() => navigation.navigate("FormHomeInfo")}
      /> */}
      <Button text={"Registrate"}
          onPress={() => navigation.navigate("FormHomeInfo")}
         />
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
