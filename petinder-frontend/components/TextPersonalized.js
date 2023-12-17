import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function TextPersonalized({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    textAlign: "left",
    marginTop: "2%",
  },
});
