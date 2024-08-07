import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestIssueTab = () => {
    return (
        <View style={styles.container}>
            <Text>Test Issue Tab</Text>
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

export default TestIssueTab;
