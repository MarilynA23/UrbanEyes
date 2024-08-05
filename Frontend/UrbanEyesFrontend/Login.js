import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import BACKEND_URL from './Signup';
import axios from "axios";

const LoginPage = ({ navigation }) => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    let prof = null;

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

prof = respExample.fields;

    const handleLogin = async () => {
        //handle login logic
        setLoading(true);

        try {
          const response = await axios.get(BACKEND_URL + `userdetails/${userName}`);
          alert("Received response. " + response.data.fields);
          navigation.navigate("Profile", {profile: response.data.fields});
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
          }
          alert(error.msg + "Error.msg");
          alert(errorMsg + "errorMsg");
          setError(error.msg);
        }
        finally {
          setLoading(false);
        }
        
        alert(`Login attempt with: ${prof.Username} and ${prof.Password}`);
        navigation.navigate("Profile", {profile: prof});
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


