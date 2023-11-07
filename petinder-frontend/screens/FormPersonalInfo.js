import { Text, StyleSheet, View } from "react-native";

export default function FormPersonalInfo() {
  return (
    <View style={styles.container}>
      <Text>FormPersonalInfo</Text>
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
