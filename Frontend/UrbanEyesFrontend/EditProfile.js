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

const EditProfile = ({ navigation, route }) => {
  // extracting details
  const {profile} = route.params;
  const [name, setName] = useState(profile.Name);
  const [email, setEmail] = useState(profile['Email Id']);
  const [city, setCity] = useState(profile.City);
  const [username, setUsername] = useState(profile.Username);
  const [password, setPassword] = useState(profile.Password);

  const makeChanges = async () => {

    try {
      const response = await axios.put('', {

      });
    }
    catch(error) {
      alert(error.response.message)
    }
    navigation.navigate("Profile");
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