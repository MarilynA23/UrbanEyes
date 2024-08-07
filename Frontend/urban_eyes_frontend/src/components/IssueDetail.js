// src/components/IssueDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const IssueDetail = ({ route }) => {
    const { image, title, location, name, date, description } = route.params.data;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageSpacer} />
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.spacer} />
            <Text style={styles.title}>
                {title} in {location}
            </Text>
            <Text style={styles.meta}>by {name}</Text>
            <Text style={styles.meta}>{date}</Text>
            <Text style={styles.description}>{description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imageSpacer: {
        height: 20, // Space above the image
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    spacer: {
        height: 20, // Space below the image
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    meta: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default IssueDetail;
