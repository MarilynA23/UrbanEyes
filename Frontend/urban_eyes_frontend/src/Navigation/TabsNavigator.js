// src/Navigation/TabsNavigator.js
import React, { useState, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native'; // Import Button from react-native
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import TrackTab from '../Tabs/Track';
import MapTab from '../Tabs/Map'; // Updated import path
import ReportTab from '../Tabs/Report';
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
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    display: 'flex'
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
            <Tab.Screen name="Report" component={ReportTab} />
            <Tab.Screen name="Map">
                {() => <MapTab markers={markers} addMarker={addMarker} />}
            </Tab.Screen>
            <Tab.Screen name="Track" component={TrackTab} />
        </Tab.Navigator>
    );
};

export default TabsNavigator;
