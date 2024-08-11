import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import authTheme from '../Themes/AuthTheme'; // Adjust the path according to your folder structure
import { useNavigation } from '@react-navigation/native';

const Report = ({currCoordinate, addMarker, setError}) => {

    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [addr, setAddr] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('Open');
    const [location, setLocation] = useState('');
    const [addnComments, setAddnComments] = useState('');
    const navigation = useNavigation()

    const handleSubmitReport = useCallback(() => {
        if (!title.trim()) {
            setError('Please enter a title for the report.');
            return;
        }
        if (!description.trim()) {
            setError('Please enter a description for the report.');
            return;
        }
        alert("Issue Reported")
        addMarker({ coordinate: currCoordinate, title: title, description: description });
        setTitle('');
        setAddr('');
        setDescription('');
        setError(''); // Clear the error message
        navigation.navigate("Map")
    }, [currCoordinate, title, description, addMarker]);

    return ( 
        <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Report An Issue</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            value={title}
                            onChangeText={setTitle}
                            autoCapitalize="none"
                            
            
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={description}
                            onChangeText={setDescription}
                            keyboardType="email-address"
                            autoCapitalize="none"

        
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Location"
                            value={location}
                            onChangeText={setLocation}
                            autoCapitalize="none"
            
                            
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Type"
                            value={type}
                            onChangeText={setType}
                            autoCapitalize="none"
                        
                            
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Status"
                            value={status}
                            onChangeText={setStatus}
                            
                        
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Additional Comments"
                            value={addnComments}
                            onChangeText={setAddnComments}
                        
                            
                        />
                        {/* have to handle registering reports on press */}
                        <TouchableOpacity style={styles.button} onPress={handleSubmitReport}>  
                            <Text style={styles.buttonText}>Report</Text>
                        </TouchableOpacity>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Want to view your reported issues?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Track")}>
                                <Text style={styles.signInText}>Go to Track</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
    )
}

const styles = StyleSheet.create({
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

export default Report;
