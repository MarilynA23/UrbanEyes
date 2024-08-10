// src/Navigation/RootNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const RootNavigator = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Stack.Screen name="Drawer">
                    {() => <DrawerNavigator setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
            ) : (
                <Stack.Screen name="Auth">
                    {() => <AuthStack screenProps={{ onLoginSuccess: () => setIsLoggedIn(true), onSignUpSuccess: () => setIsLoggedIn(true) }} />}
                </Stack.Screen>
            )}
        </Stack.Navigator>
    );
};

export default RootNavigator;
