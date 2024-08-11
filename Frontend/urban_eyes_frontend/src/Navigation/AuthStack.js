// src/Navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';

const Stack = createStackNavigator();

const AuthStack = ({ screenProps }) => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login">
                {props => <Login {...props} onLoginSuccess={screenProps.onLoginSuccess} />}  
            </Stack.Screen>
            <Stack.Screen name="SignUp">
                {props => <SignUp {...props} onSignUpSuccess={screenProps.onSignUpSuccess} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AuthStack;
