import { Text, StyleSheet, View } from "react-native";

export default function FormPetInfo() {
  return (
    <View style={styles.container}>
      <Text>FormPetInfo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
