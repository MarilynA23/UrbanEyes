// src/Navigation/TabsNavigator.js
import React, { useState, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button, Alert } from 'react-native'; // Import Button from react-native
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Track from '../Tabs/Track';
import Map from '../Tabs/Map'; // Updated import path
import Report from '../Tabs/Report';
import appTheme from '../Themes/AppTheme'; // Ensure path to theme is correct

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    const [markers, setMarkers] = useState([]);
    const navigation = useNavigation(); // Hook to get navigation

    const addMarker = useCallback((newMarker) => {
        setMarkers(prevMarkers => [...prevMarkers, newMarker]);
    }, []);

    return (
        <Tab.Navigator
            initialRouteName="Map"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Report') {
                        iconName = focused ? 'alert' : 'alert-outline';
                    } else if (route.name === 'Track') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'Map') {
                        iconName = focused ? 'map' : 'map-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: appTheme.colors.primary,
                tabBarInactiveTintColor: '#9da4dd',
                tabBarStyle: {
                    display: 'flex',
                    backgroundColor : '#080816'
                },

                headerShown: false, // Hide top header
                // Add drawer menu button to bottom header
                headerRight: () => (
                    <Button
                        onPress={() => navigation.openDrawer()}
                        title="Menu"
                        color={appTheme.colors.primary} // Optional: Customize button color
                    />
                )
            })}
        >
            <Tab.Screen name="Report" component={Report}listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        Alert.alert(
                            "Click on a location on the map to report an issue there"
                        );
                        navigation.navigate("Map")
                    },
                }}/>
            <Tab.Screen name="Map">
                {() => <Map markers={markers} addMarker={addMarker} setMarkers={setMarkers}/>}
            </Tab.Screen>
            <Tab.Screen name="Track" component={Track} />
        </Tab.Navigator>
    );
};

export default TabsNavigator;
