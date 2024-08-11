// EditProfile.js
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../UserContext'; // Import useUser hook

const EditProfile = () => {
    const navigation = useNavigation();
    const { user, updateUser } = useUser(); // Destructure user and setUser from context

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [city, setCity] = useState(user.city);
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [contact, setContact] = useState(user.contact);

    const makeChanges = () => {
        const updatedUser = {
            name,
            email,
            city,
            username,
            password,
            contact,
        };

        updateUser(updatedUser);
        navigation.navigate("Profile");
    };

    return (
        <>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            <View style={{ flex: 0.75, backgroundColor: 'black' }}>
                <ProfileInput
                    icon="person"
                    label="Name"
                    value={name}
                    onChangeText={setName}
                />
                <ProfileInput
                    icon="mail"
                    label="Email ID"
                    value={email}
                    onChangeText={setEmail}
                />
                <ProfileInput
                    icon="location-pin"
                    label="Location (City)"
                    value={city}
                    onChangeText={setCity}
                />
                <ProfileInput
                    icon="phone"
                    label="Contact Number"
                    value={contact}
                    onChangeText={setContact}
                />
                <ProfileInput
                    icon="person"
                    label="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <ProfileInput
                    icon="remove-red-eye"
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        title="Confirm Changes"
                        color={"#c14961"}
                        style={styles.button}
                        onPress={makeChanges}
                    />
                </View>
            </View>
        </>
    );
};

const ProfileInput = ({ icon, label, value, onChangeText }) => (
    <View style={styles.fieldcontainer}>
        <View style={{ flex: 0.2 }}>
            <MaterialIcon name={icon} size={30} color={styles.secondary.color} />
        </View>
        <View style={{ flex: 0.75 }}>
            <Text style={styles.header}>{label}:</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize="none"
                placeholderTextColor={styles.secondary.color}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: '#9da4dd',
        alignItems: 'center',
    },
    titlecontainer: {
        flex: 0.25,
        backgroundColor: '#080816',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fieldcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 5,
    },
    button: {
        backgroundColor: '#c14961',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 10,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        width: '100%',
        maxHeight: 25,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: "#e4e6f6",
    },
    header: {
        color: "#e4e6f6",
        marginBottom: 5,
    },
    secondary: {
        color: "#7a2a5b",
    },
});

export default EditProfile;
