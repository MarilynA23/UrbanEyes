
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

const Logout = () => {
    Alert.alert(
        "Confirm Logout",
        "Are you sure you want to logout?",
        [
          {
            text: "Cancel"
          },
          { text: "OK", onPress: () => {
              alert("You have been logged out.");
              navigation.navigate("Login");
            }
          }
        ],
        { cancelable: false }
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Logout;
