import { Text, StyleSheet, ScrollView } from "react-native";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from 'react-native-elements'
export default function Home() {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: '../assets/perrito.png'}}
                style={{ width: 200, height: 200 }}
            />
            <Title title={"Valida tu identidad"} />
            <Button text={"Registrate"} onPress={() => navigation.navigate("FormHomeInfo")} />
            <Icon
                />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});
