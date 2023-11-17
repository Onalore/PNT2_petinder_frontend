import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function Tittle({ title }) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
});
