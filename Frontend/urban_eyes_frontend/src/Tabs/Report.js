import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportTab = () => {
    return (
        <View style={styles.container}>
            <Text>Report Tab</Text>
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

export default ReportTab;
