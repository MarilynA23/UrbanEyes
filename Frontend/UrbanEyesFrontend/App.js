import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './Login';
import SignUpPage from './Signup';
import ContactUsPage from './ContactUs';
import Profile from './Profile';
import EditProfile from './EditProfile'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpPage} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="ContactUs" component={ContactUsPage} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;