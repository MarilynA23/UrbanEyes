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
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { BACKEND_SRC } from '@env';

const EditProfile = ({ route }) => {

    const navigation = useNavigation();

  // extracting details
  const {profile} = route.params;

  const [name, setName] = useState(profile.Name);
  const [email, setEmail] = useState(profile['Email Id']);
  const [city, setCity] = useState(profile.City[0]);
  const [username, setUsername] = useState(profile.Username);
  const [password, setPassword] = useState(profile.Password);
  const [contact, setContact] = useState(profile['Contact Number']);

  const makeChanges = async () => {

    let requestBody = {};

    let newprof = 
      {
            "City": [
                city
            ],
            "Email Id": email,
            "Contact Number": contact,
            "Name": name,
            "Username": username,
            "Password": password
      }

      for(key in newprof) {
        // remove this once dhruv adds city
        if(key == "City") {
          continue;
        }
        if(profile[key] !== newprof[key]) {
          requestBody[key] = newprof[key];
        }
      }

      console.log(JSON.stringify(requestBody) + " ------ is requestBody");

    try {
      const response = await axios.patch(BACKEND_SRC + `updateuserdetails/${profile.Username}`, requestBody);
      alert("Received response. " + JSON.stringify(response.data.fields));
      navigation.navigate("ProfileMain", {prof: response.data.fields});

    }
    catch(error) {
      let errorMsg = '';
            if (error.response) {
              if (error.response.status == 500) {
                errorMsg = "Internal Server Error";
              }
              else {
                if (error.response) {
                    errorMsg = error.response.data.message;
                }
                else if (error.request) {
                    errorMsg = error.request;
                }
                else {
                    errorMsg = error.message;
                }
              }
            }
            console.log(error.message);
    }

  }

  return (
    <>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Edit Profile </Text>
      </View>
      <View style={{ flex: 0.75, backgroundColor: 'black' }}>
        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2 }}>
            <MaterialIcon name="person" size={30} color={secondary} />
          </View>
          <View
            style={{
              flex: 0.75,
              flexDirection: 'column',
            }}>
            <Text style={styles.header}> Name: </Text>
            <TextInput
          style={styles.input}
          placeholder={name}
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          </View>
        </View>

        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2}}>
            <MaterialIcon name="mail" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={styles.header}> Email ID: </Text>
            <TextInput
          style={styles.input}
          placeholder={email}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          </View>
        </View>
        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2}}>
            <MaterialIcon name="location-pin" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={styles.header}> Location (City): </Text>
            <TextInput
          style={styles.input}
          placeholder={city}
          value={city}
          onChangeText={setCity}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          </View>
        </View>

        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2 }}>
            <MaterialCommunityIcon name="phone" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={styles.header}> Contact Number: </Text>
            <TextInput
          style={styles.input}
          placeholder={contact}
          value={contact}
          onChangeText={setContact}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          </View>
        </View>

        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2 }}>
            <MaterialCommunityIcon name="card-account-details" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={styles.header}> User Name: </Text>
            <TextInput
          style={styles.input}
          placeholder={username}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          </View>
        </View>
        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2 }}>
            <MaterialIcon name="remove-red-eye" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={styles.header}> Password: </Text>
            <TextInput
          style={styles.input}
          placeholder={password}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholderTextColor={secondary}
          />
          </View>
        </View>

        <View
          style={
            {
              flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
            }
          }>

          <Button title="Confirm Changes" color={"#c14961"} style= {styles.button} onPress={makeChanges}/>

          </View>
      </View>
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: '#9da4dd',
    alignItems: 'center'
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
    marginLeft: "5px"
  },
  button: {
        backgroundColor: '#c14961',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        maxHeight: 25,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: "#e4e6f6"
    },
    header: 
      { color: "#e4e6f6", marginBottom: "5px"}
});

const text= "#e4e6f6";
const background= "#080816";
const primary= "#9da4dd";
const secondary= "#7a2a5b";
const accent= "#c14961";