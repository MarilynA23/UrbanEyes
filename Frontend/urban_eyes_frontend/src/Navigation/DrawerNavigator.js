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
import EditProfile from '../Drawer/EditProfile';
import appTheme from '../Themes/AppTheme';
import Logout from '../Authentication/Logout';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Add this import

const Stack = createStackNavigator(); // Add this

// Create a stack navigator for Profile and EditProfile
const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileMain" component={Profile} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();

  const DrawerNavigator = ({setIsLoggedIn}) => {
    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert(
            "Confirm Logout",
            "Are you sure you want to logout?",
            [
                { text: "Cancel" },
                { 
                    text: "OK", 
                    onPress: () => {
                        alert("You have been logged out.");
                        setIsLoggedIn(false);
                    }
                }
            ],
            { cancelable: false }
        );
    };


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
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Contact Us" component={ContactUsPage} />
            <Drawer.Screen name="About the App" component={About} />
            {/* <Drawer.Screen name="Logout" component={Logout} /> */}
            <Drawer.Screen name="Logout" component={() => null}
                listeners={{ drawerItemPress: (e) => {
                        e.preventDefault();
                        handleLogout();
                    }}}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
