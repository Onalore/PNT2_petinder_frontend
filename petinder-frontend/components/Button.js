import { Text, StyleSheet, TouchableOpacity } from "react-native";
import appsettings from "../appsettings.json";

export default function Button({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "green",
        fontSize: 15,
    },
    button: {
        color: appsettings.colors.primary,
    },
});