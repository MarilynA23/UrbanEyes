// Navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import ContactUsPage from '../Drawer/ContactUs';
import About from '../Drawer/About';
import Profile from '../Drawer/Profile';
import Settings from '../Drawer/Settings';
import Login from "../Authentication/Login";
import Chat from "../Drawer/Chat";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabsNavigator}/>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Contact Us" component={ContactUsPage} />
            <Drawer.Screen name="About the App" component={About} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
