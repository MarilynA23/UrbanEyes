// src/Tabs/Map.js
import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import authTheme from '../Themes/AuthTheme'; // Adjust the path according to your folder structure

const Map = ({ markers, addMarker }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentCoordinate, setCurrentCoordinate] = useState(null);
    const [desc, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [addr, setAddr] = useState('');
    const [error, setError] = useState('');

    const handleMapPress = useCallback((event) => {
        const { coordinate } = event.nativeEvent;
        setCurrentCoordinate(coordinate);
        setModalVisible(true);
        setError(''); // Clear any previous errors
    }, []);

    const handleSubmitReport = useCallback(() => {
        if (!title.trim()) {
            setError('Please enter a title for the report.');
            return;
        }
        if (!desc.trim()) {
            setError('Please enter a description for the report.');
            return;
        }

        addMarker({ coordinate: currentCoordinate, title: title, description: desc });
        setTitle('');
        setAddr('');
        setDescription('');
        setModalVisible(false);
        setError(''); // Clear the error message
    }, [currentCoordinate, title, desc, addMarker]);

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

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    setError(''); // Clear the error message when closing the modal
                }}>
                <View style={styles.modal}>
                    <Text style={styles.headingStyle}>Quick Report An Issue</Text>
                    <TextInput
                        placeholder='Enter Title'
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter Address'
                        value={addr}
                        onChangeText={setAddr}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Describe The Issue'
                        value={desc}
                        onChangeText={setDescription}
                        multiline={true}
                        numberOfLines={4}
                        style={styles.input}
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <View style={styles.buttonContainer}>
                        <Button title='Cancel' onPress={() => {
                                setModalVisible(false);
                                setError(''); // Clear the error message when cancelling
                            }} />
                        <Button title='Report' onPress={handleSubmitReport} />
                        
                    </View>
                </View>
            </Modal>
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
    }
});
export default Map;