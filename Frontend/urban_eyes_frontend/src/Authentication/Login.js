import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import authTheme from '../Themes/AuthTheme';

const LoginPage = ({ navigation, onLoginSuccess }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Placeholders:
        const correctUserName = '';
        const correctPassword = '';

        if (userName === correctUserName && password === correctPassword) {
            alert('Logged in successfully!');
            if (onLoginSuccess) {
                onLoginSuccess();
            }
        } else {
            alert(`Incorrect username or password`);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome Back</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/logo.png')} // Replace with the path to your image file
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
                    { <Text style={styles.forgotPasswordText}>Forgot password?</Text>   /* Replace this too take you to a form to enter an email to get resent passwd link */}
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

export default LoginPage;
