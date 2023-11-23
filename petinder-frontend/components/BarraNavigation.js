import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BarraNavegacion = ({ icon }) => {
  const navigation = useNavigation();

  const handleFindMatchPress = () => {
    navigation.navigate("FindMatch");
  };

  const handleCorazonPress = () => {
    navigation.navigate("WishList");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        zIndex: 1,
      }}
    >
      <TouchableOpacity onPress={handleFindMatchPress}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.imagen}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCorazonPress}>
        <Icon name={icon} size={30} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default BarraNavegacion;

const styles = StyleSheet.create({
  imagen: {
    width: 50,
    height: 50,
  },
});
