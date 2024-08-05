import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

const LoginPage = ({ navigation, route }) => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //handle login logic
        alert(`Login attempt with: ${userName} and ${password}`);
        navigation.navigate("Profile");
    };

    return (
      <>
      <View style={{flex: 0.4, alignItems: 'center',
    justifyContent: 'center'}}>
        <Text>Logo goes here</Text>
      </View>
      <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
          style={styles.input}
          placeholder="User Name"
          value={userName}
          onChangeText={setuserName}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={secondary}
          />
          <Button title="Login" color={"#c14961"} style= {styles.button} onPress={handleLogin}/>
          
          <Text style= {{color: text, marginBottom: 10, marginTop: 10}}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("SignUp")} 
            style={{color: primary}}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </>
      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#080816'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "#9da4dd"
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: "#e4e6f6"
    },
    button: {
        backgroundColor: '#c14961',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 10,
    }
});

export default LoginPage;

const text= "#e4e6f6";
const background= "#080816";
const primary= "#9da4dd";
const secondary= "#7a2a5b";
const accent= "#c14961";
