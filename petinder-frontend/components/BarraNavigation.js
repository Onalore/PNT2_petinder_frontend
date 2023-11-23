import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BarraNavegacion = ({ icon1, icon2 }) => {
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
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <TouchableOpacity onPress={handleFindMatchPress}>
        <Icon name={icon1} size={30} color="green" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCorazonPress}>
        <Icon name={icon2} size={30} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default BarraNavegacion;
