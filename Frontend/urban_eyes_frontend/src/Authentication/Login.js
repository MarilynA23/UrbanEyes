import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import authTheme from '../Themes/AuthTheme';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BACKEND_SRC } from '@env';


const Login = ({ navigation, onLoginSuccess }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const navigation = useNavigation();


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

    const handleLogin = async () => {
        // Placeholders:
        // const correctUserName = '';
        // const correctPassword = '';

        // if (userName === correctUserName && password === correctPassword) {
        //     alert('Logged in successfully!');
        //     if (onLoginSuccess) {
        //         onLoginSuccess();
        //     }
        // } else {
        //     alert(`Incorrect username or password`);
        // }

        try {
            const response = await axios.get(BACKEND_SRC + `user/${userName}`);
            console.log("Received response. " + JSON.stringify(response.data, null, 2));

            if (!response.data) {
                alert("Wrong username. Try again.");
                setUserName('');
                setPassword('');
                return;
            }

            // checking wrong password
            if (response.data.Password !== password) {
                alert("Wrong Password, try again.");
                return;
            }

            alert("Logged in successfully!")

            if (onLoginSuccess) {
                    onLoginSuccess();
                }

            // Navigate to home by sending the code.
            // This idk how, need to check.
            // navigation.navigate("Home", {profile: response.data});
          }
        catch(error) {
            let errorMsg = '';
            if (error.response) {
              if (error.response.status == 500) {
                errorMsg = "Internal Server Error";
              }
              else if (error.response.status == 401) {
                errorMsg = "Wrong password";
              }
              else if (error.response.status == 404) {
                errorMsg = "Username not found";
              }
              else {
                if (error.response) {
                    errorMsg = error.response.data.message;
                }
                else if (error.request) {
                    errorMsg = error.request.data.message;
                }
                else {
                    errorMsg = error.message;
                }
              }
            }
            alert(errorMsg + " errorMsg");
            console.log(error.message)
        }
        finally {
            // alert(`Login attempt with: ${respExample.fields.Username} and ${respExample.fields.Password}`);

          // again navigation: we need to see
        // if (onLoginSuccess) {
        //     onLoginSuccess();
        // }
        // navigation.navigate("Home", {profile: respExample.fields});
        }
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome Back</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    value={userName}
                    onChangeText={setUserName}
                    keyboardType="email-address"
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
                <TouchableOpacity style={styles.forgotPassword} onPress={() => alert('Forgot password?')}>
                     <Text style={styles.forgotPasswordText}>Forgot password?</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: authTheme.colors.background,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        color: authTheme.colors.primary,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    formContainer: {
        paddingHorizontal: 20,
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
        color: authTheme.colors.secondary,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
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
    signUpText: {
        color: authTheme.colors.primary,
    },
});

export default Login;
