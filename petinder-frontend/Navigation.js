import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import FormHomeInfo from "./screens/FormHomeInfo";
import FormPersonalInfo from "./screens/FormPersonalInfo";
import FormPetInfo from "./screens/FormPetInfo";
import SuccessfulRegistration from "./screens/SuccessfulRegistration";
import FindMatch from "./screens/FindMatch";
import Match from "./screens/Match";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStackNavigator.Screen name="Home" component={Home} />
            <HomeStackNavigator.Screen name="Login" component={Login} />
            <HomeStackNavigator.Screen name="FormHomeInfo" component={FormHomeInfo} />
            <HomeStackNavigator.Screen
                name="FormPersonalInfo"
                component={FormPersonalInfo}
            />
            <HomeStackNavigator.Screen name="FormPetInfo" component={FormPetInfo} />
            <HomeStackNavigator.Screen
                name="SuccessfulRegistration"
                component={SuccessfulRegistration} />
            <HomeStackNavigator.Screen name="FindMatch" component={FindMatch} />
            <HomeStackNavigator.Screen name="Match" component={Match} />
        </HomeStackNavigator.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
