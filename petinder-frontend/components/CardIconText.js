import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import appsettings from "../appsettings.json";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CardIconText({ icon, title, text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.circle}>
                    <Icon name={icon} size={30} color="black" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: appsettings.colors.secondary,
        borderRadius: 25,
        padding: 16,
        margin: 16,
        width: "90%",
    },
    text: {
        fontSize: 19,
        fontWeight: "bold",
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: appsettings.colors.secondary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 23,
    },
    text: {
        fontSize: 20,
    },
});
