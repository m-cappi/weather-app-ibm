import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../screens/AboutScreen";
import colors from "../styles/palette";

const Stack = createNativeStackNavigator();

const AboutStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="about"
            screenOptions={() => ({
                headerStyle: {
                    backgroundColor: colors.med3,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            })}
        >
            <Stack.Screen
                name="about"
                component={AboutScreen}
                options={{ title: "Nosotros" }}
            />
        </Stack.Navigator>
    );
};

export default AboutStack;
