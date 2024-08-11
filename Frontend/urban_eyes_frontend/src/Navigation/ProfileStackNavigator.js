// src/Navigation/ProfileStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Drawer/Profile';
import EditProfile from '../Drawer/EditProfile';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Prof" component={Profile}/>
        <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
);

export default ProfileStackNavigator;
