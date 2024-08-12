// src/Tabs/Map.js
import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import authTheme from '../Themes/AuthTheme'; // Adjust the path according to your folder structure
import { useNavigation } from '@react-navigation/native';

const Map = ({ markers, addMarker}) => {
    const [currentCoordinate, setCurrentCoordinate] = useState(null);
    const [error, setError] = useState('');
    const navigation = useNavigation()

    const handleMapPress = useCallback((event) => {
        const { coordinate } = event.nativeEvent;
        setCurrentCoordinate(coordinate);
        //setModalVisible(true);
        setError(''); // Clear any previous errors
        navigation.navigate("Report", {coordinate,addMarker})
    }, [navigation,addMarker]);

    

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                onPress={handleMapPress}
                initialRegion={
                    {
                    latitude: 51.4988,
                    longitude: -0.1749,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    }
                }
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    modal: {
        margin: 20,
        backgroundColor: '#080816',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop : 250
    },
    input: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color : "white"
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    headingStyle : {
        color : authTheme.colors.primary,
        fontSize : 18,
        fontWeight : "bold",
        padding : 15
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#080816'
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        color: authTheme.colors.primary,
    },
    formContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        color: authTheme.colors.background,
        fontWeight: 'bold',
        backgroundColor :"grey",
        placeholderTextColor:"black"


    },
    button: {
        backgroundColor: authTheme.colors.primary,
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        color: authTheme.colors.text,
        marginRight: 5,
    },
    signInText: {
        color: authTheme.colors.primary,
    },
});
export default Map;