import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  return (<>
  <View style={{flex:0.25, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{alignItems: 'center'}}> Profile </Text>
      </View>
    <View style={{flex:0.75, backgroundColor: 'black'}}>

      <View style={{flex:1, backgroundColor: 'red', alignItems: 'center',     justifyContent: 'center', flexDirection: 'row'}}>
        <View style={{flex: 0.2, backgroundColor: 'white'}}>
        <Icon name="person" size={30} color="black" />
        </View>
        <View style={{flex: 0.75, backgroundColor: 'grey'}}>
        <Text style={{alignItems: 'center'}}> Name: </Text> 
        </View>
      </View>

      <View style={{flex:1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <View style={{flex: 0.2, backgroundColor: 'white'}}>
        <Icon name="mail" size={30} color="black" /> 
        </View>
        <View style={{flex: 0.75, backgroundColor: 'grey'}}>
        <Text style={{alignItems: 'center'}}> Email ID: </Text> 
        </View>
      </View>
      <View style={{flex:1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <View style={{flex: 0.2, backgroundColor: 'white'}}>
        <Icon name="location-pin" size={30} color="black" /> 
        </View>
        <View style={{flex: 0.75, backgroundColor: 'grey'}}>
        <Text style={{alignItems: 'center'}}> Yoo </Text> 
        </View>
      </View>
      <View style={{flex:1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <View style={{flex: 0.2, backgroundColor: 'white'}}>
        <Icon name="mail" size={30} color="black" /> 
        </View>
        <View style={{flex: 0.75, backgroundColor: 'grey'}}>
        <Text style={{alignItems: 'center'}}> Email ID: </Text> 
        </View>
      </View>
      <View style={{flex:1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <View style={{flex: 0.2, backgroundColor: 'white'}}>
        <Icon name="remove-red-eye" size={30} color="black" /> 
        </View>
        <View style={{flex: 0.75, backgroundColor: 'grey'}}>
        <Text style={{alignItems: 'center'}}> Yoo </Text> 
        </View>
      </View>
    </View></>)
};

export default Profile;