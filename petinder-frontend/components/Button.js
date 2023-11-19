import { Text, StyleSheet, TouchableOpacity } from "react-native";
import appsettings from "../appsettings.json";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Button({ icon, text, onPress, color }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name={icon} size={30} color={color} />
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
