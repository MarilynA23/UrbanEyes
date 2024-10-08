import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import authTheme from '../Themes/AuthTheme'; // Adjust the path according to your folder structure
import axios from 'axios';
import { BACKEND_SRC } from '@env';


// Placeholder function to simulate checking if the email is in use
const isEmailInUse = (email) => {
    const usedEmails = ['test@example.com', 'already@inuse.com']; // Simulate used emails
    //alert("PLACEHOLDER FUNCTION BEING USED FOR AUTHENTICATION");
    return usedEmails.includes(email);
};

const SignUpPage = ({ navigation, onSignUpSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [userName, setUserName] = useState('');
    const [contactNo, setContactNo] = useState('');

    const respExample = {
        "id": "recwtMw0DwkPB2AaC",
        "createdTime": "2024-08-04T17:38:49.000Z",
        "fields": {
            "City": [
                "recTB6GAGDXqR2Jcn"
            ],
            "Email Id": "white.black@example.com",
            "Contact Number": "+00 1234567890",
            "Name": "White Black",
            "Username": "wb123",
            "Password": "WhiteBlack123",
            "Longitude": [
                -0.176894
            ],
            "Latitude": [
                51.498356
            ]
}};

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            alert("Please fill all details.");
            return;
        }
        if (password !== confirmedPassword) {
            alert("Passwords don't match.");
            return;
        }
        if (contactNo.charAt(0) != '+') {
            alert('Enter country code with contact');
            return;
        }
        if (!email.includes('@')) {
            alert('Enter valid email');
            return;
        }
        if (isEmailInUse(email)) {
            alert("Email is already in use.");
            return;
        }

        const requestBody = {
            "Username": userName,
            "Name": name,
            "Password": password,
            "Email Id": email,
            "Contact Number": contactNo,
            "City": city
        };

        try {
            alert("In here signup");

            const response = await axios.post(BACKEND_SRC + 'userdetails/', requestBody, {
                headers: {
                  'Content-Type': 'application/json',
                }});

            console.log("Received response. " + JSON.stringify(response.data.fields, null, 2));

            // Navigate to home by sending the code.
            alert("navigating to home");
            // navigation.navigate("Home", {profile: response.data.fields});

        }
        catch(error) {
            let errorMsg = '';
            if (error.response) {
              if (error.response.status == 500) {
                errorMsg = "Internal Server Error";
              }
              else if (error.response.status == 406) {
                errorMsg = "User already exists.";
              }
            //   else if (error.response.status == 404) {
            //     errorMsg = "Username not found";
            //   }
            // need a status for maybe email diff but same username which we don't want either?
            // so diff user but same username
              else {
                if (error.response) {
                    errorMsg = error.response.data.message;
                }
                else if (error.request) {
                    errorMsg = error.request;
                    alert("req "  + errorMsg)
                }
                else {
                    errorMsg = error.message;
                }
              }
            }
            console.log(errorMsg + " errorMsg");
            alert(error.message + " whyyyyyyy")
            console.error("Error: ", error);
        }

        // alert(`SignIn attempt with: ${respExample.fields.Username} and ${respExample.fields.Password}`);

        // // Simulate successful sign-up
        // alert('Signed up successfully!');
        // if (onSignUpSuccess) {
        //     onSignUpSuccess();
        // }

        // navigation.navigate("Home", {profile: respExample.fields});
    };

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Create Account</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="none"
                    placeholderTextColor={authTheme.colors.tertiary}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor={authTheme.colors.tertiary}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contact Number"
                    value={contactNo}
                    onChangeText={setContactNo}
                    autoCapitalize="none"
                    placeholderTextColor={authTheme.colors.tertiary}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    value={userName}
                    onChangeText={setUserName}
                    autoCapitalize="none"
                    placeholderTextColor={authTheme.colors.tertiary}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor={authTheme.colors.tertiary}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmedPassword}
                    onChangeText={setConfirmedPassword}
                    secureTextEntry
                    placeholderTextColor={authTheme.colors.tertiary}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.signInText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: authTheme.colors.background,
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
        color: authTheme.colors.primary,
    },
    button: {
        backgroundColor: authTheme.colors.primary,
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
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

export default SignUpPage;
