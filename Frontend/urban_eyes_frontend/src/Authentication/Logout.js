
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logout = () => {
    return (
        <View style={styles.container}>
            <Text>Logout Page</Text>
        </View>
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
