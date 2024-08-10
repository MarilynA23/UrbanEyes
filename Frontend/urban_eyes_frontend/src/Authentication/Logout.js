// src/Authentication/Logout.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logout = ({ setIsLoggedIn }) => {
    const navigation = useNavigation();

    useEffect(() => {
        Alert.alert(
            "Confirm Logout",
            "Are you sure you want to logout?",
            [
                { text: "Cancel", onPress: () => navigation.goBack() },
                {
                    text: "OK",
                    onPress: () => {
                        alert("You have been logged out.");
                        setIsLoggedIn(false); // Update state to trigger navigation to login screen
                    }
                }
            ],
            { cancelable: false }
        );
    }, []);

    return (
        <View style={styles.container}>
            <Text>Logging out...</Text>
        </View>
    );
};

// function LogoutTab({navigation}) {
//         Alert.alert(
//                 "Confirm Logout",
//                 "Are you sure you want to logout?",
//                 [
//                   {
//                     text: "Cancel"
//                   },
//                   { text: "OK", onPress: () => {
//                       alert("You have been logged out.");
//                       navigation.navigate("Login");
//                     }
//                   }
//                 ]
//               )}
               
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default LogoutTab;