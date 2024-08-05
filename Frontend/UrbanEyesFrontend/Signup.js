import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedpassword] = useState('');
  const [name, setName] = useState('');
  const [userName, setuserName] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    //handle sign up logic
    if (!name || !email || !password) {
      alert('Please fill all details.');
      return;
    } else if (password != confirmedpassword) {
      alert("Passwords don't match.");
      return;
    }
    else if (contactNo.charAt(0) != '+') {
      alert('Enter country code with contact');
    }

    const requestBody = {
      Username: 'abc123',
      Name: 'Red White and Royal Blue',
      Password: 'RedWRBlue123',
      'Email Id': 'red.white.blue@yoooo.com',
      'Contact Number': '+22 1234567890',
      City: 'London',
    };

    try {
      console.log('Sending request to Backend:', requestBody);
      const response = await axios.post('', requestBody);

      console.log('Received response from API:', response.data);
    } catch (error) {
      let errorMsg = '';
      if (error.response) {
        errorMsg = `Error: ${error.response.status} - ${error.response.data}`;
      } else if (error.request) {
        errorMsg = 'No response received from the server';
      } else {
        errorMsg = `Request error: ${error.message}`;
      }
      console.log(errorMsg);
    } finally {
      setLoading(true);
    }
    alert('Signed up with:', email, password);
  };

  return (
    <>
      {
        //   <View style={{flex: 0.2, alignItems: 'center',
        // justifyContent: 'center'}}>
        //     <Text>Logo goes here</Text>
        //   </View>
      }
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          placeholderTextColor={secondary}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={secondary}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number (with country code +)"
          value={contactNo}
          onChangeText={setcontactNo}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          keyboardType="phone-pad"
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirmed Password"
          value={confirmedpassword}
          onChangeText={setConfirmedpassword}
          secureTextEntry
          placeholderTextColor={secondary}
        />
        <Button title="Sign Up" color={'#c14961'} onPress={handleSignUp} />
        <Text style={{ color: text, marginBottom: 8, marginTop: 15 }}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{ color: primary }}>
            Login
          </Text>
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
    backgroundColor: '#080816',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#9da4dd',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#e4e6f6',
  },
});

const text = '#e4e6f6';
const background = '#080816';
const primary = '#9da4dd';
const secondary = '#7a2a5b';
const accent = '#c14961';

export default SignUpPage;
