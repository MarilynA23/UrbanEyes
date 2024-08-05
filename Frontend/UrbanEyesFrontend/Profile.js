import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation}) => {
  // extracting details
  const name = 'Nand';
  const email = '@whatnot';
  const city = 'Dubai';
  const username = 'yoo';
  const password = 'whaa';

  return (
    <>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}> Profile </Text>
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
            <Text style={{color: text}}> Name: </Text>
            <Text style={{ color: primary}}> {name} </Text>
          </View>
        </View>

        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2}}>
            <MaterialIcon name="mail" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={{ color: "#e4e6f6"}}> Email ID: </Text>
            <Text style={{ color: primary}}> {email} </Text>
          </View>
        </View>
        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2}}>
            <MaterialIcon name="location-pin" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={{ color: "#e4e6f6"}}> Location (City): </Text>
            <Text style={{ color: primary}}> {city} </Text>
          </View>
        </View>
        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2 }}>
            <MaterialCommunityIcon name="card-account-details" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={{ color: "#e4e6f6"}}> User Name: </Text>
            <Text style={{ color: primary}}> {username} </Text>
          </View>
        </View>
        <View
          style={styles.fieldcontainer}>
          <View style={{ flex: 0.2 }}>
            <MaterialIcon name="remove-red-eye" size={30} color={secondary} />
          </View>
          <View style={{ flex: 0.75 }}>
            <Text style={{ color: "#e4e6f6"}}> Password: </Text>
            <Text style={{ color: primary}}> {password} </Text>
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

          <Button title="Edit Profile" color={"#c14961"} style= {styles.button} onPress={() => navigation.navigate("EditProfile")} />
          </View>
      </View>
    </>
  );
};

export default Profile;

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
    }
});

const text= "#e4e6f6";
const background= "#080816";
const primary= "#9da4dd";
const secondary= "#7a2a5b";
const accent= "#c14961";