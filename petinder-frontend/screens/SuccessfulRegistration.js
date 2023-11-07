import { Text, StyleSheet, View } from "react-native";

export default function SuccessfulRegistration() {
  return (
    <View style={styles.container}>
      <Text>SuccessfulRegistration</Text>
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
