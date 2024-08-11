// src/Navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Alert, View, Text } from 'react-native';
import TabsNavigator from './TabsNavigator';
import ContactUsPage from '../Drawer/ContactUs';
import About from '../Drawer/About';
import Profile from '../Drawer/Profile';
import Settings from '../Drawer/Settings';
import Chat from "../Drawer/Chat";
import EditProfile from '../Drawer/EditProfile';
import Report from '../Tabs/Report';
import appTheme from '../Themes/AppTheme';
import { useFocusEffect } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const LogoutHandler = ({ setIsLoggedIn }) => {
    const navigation = useNavigation();

    const logoutalert = () => {
        Alert.alert(
            "Confirm Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        // Navigate back to the previous screen
                        navigation.goBack();
                    }
                },
                {
                    text: "OK",
                    onPress: () => {
                        Alert.alert("You have been logged out.");
                        setIsLoggedIn(false);
                    }
                }
            ])}

    useFocusEffect(logoutalert)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Logging out...</Text>
        </View>
    );
};

const DrawerNavigator = ({ setIsLoggedIn }) => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: '#080816', // Background color for the header
            },
            headerTintColor: appTheme.colors.primary, // Color of the header text
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            drawerStyle: {
                backgroundColor: '#080816', // Background color for the drawer
                width: 240, // Width of the drawer
            },
            drawerActiveTintColor: appTheme.colors.primary, // Color of the active item text
            drawerInactiveTintColor: appTheme.colors.secondary, // Color of the inactive item text
        }}>
            <Drawer.Screen name="Home" component={TabsNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Contact Us" component={ContactUsPage} />
            <Drawer.Screen name="About the App" component={About} />
            <Drawer.Screen name="Rep" component={Report} />
            <Drawer.Screen
                name="Logout"
                children={() => <LogoutHandler setIsLoggedIn={setIsLoggedIn} />}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
