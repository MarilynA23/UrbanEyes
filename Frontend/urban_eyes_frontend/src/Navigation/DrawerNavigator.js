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
import appTheme from '../Themes/AppTheme';
import LogoutTab from '../Authentication/Logout';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
            drawerInactiveTintColor: appTheme.colors.Inactive, // Color of the inactive item text
          }}>
            <Drawer.Screen name="Home" component={TabsNavigator}/>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Contact Us" component={ContactUsPage} />
            <Drawer.Screen name="About the App" component={About} />
            <Drawer.Screen name="Logout" component={LogoutTab} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
