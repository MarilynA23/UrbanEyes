// src/Tabs/Chat.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import appTheme from '../Themes/AppTheme';

const ChatTab = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { id: Date.now().toString(), text: newMessage }]);
            setNewMessage('');
        }
    };

    const renderMessage = ({ item }) => (
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.messageList}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Type a message"
                    placeholderTextColor={appTheme.colors.secondary}
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appTheme.colors.background,
        justifyContent: 'space-between',
    },
    messageList: {
        padding: 10,
    },
    messageContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: appTheme.colors.primary,
        borderRadius: 5,
    },
    messageText: {
        color: appTheme.colors.text,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: appTheme.colors.secondary,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: appTheme.colors.secondary,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: appTheme.colors.text,
    },
    sendButton: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appTheme.colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    sendButtonText: {
        color: appTheme.colors.text,
        fontWeight: 'bold',
    },
});

export default ChatTab;
