import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function Tittle({ tittle }) {
  return <Text style={styles.text}>{tittle}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 23,
    fontWeight: "bold",
  },
});
