import { Text, StyleSheet, TouchableOpacity } from "react-native";
import appsettings from "../appsettings.json";
import { useNavigation } from "@react-navigation/native";

export default function Button({ text, onPress }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appsettings.colors.primary,
    height: 70,
    width: "90%",
    margin: 20,
    color: "#FFFFFF",
    borderRadius: 25,
  },
});
