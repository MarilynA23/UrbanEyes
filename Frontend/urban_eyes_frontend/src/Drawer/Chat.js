// src/Tabs/Chat.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import appTheme from '../Themes/AppTheme';

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hey, isn\'t this such a cool app?', user: 'Marilyn', timestamp: '9:19', profilePic: require('../../assets/generic_user.png') },
        { id: '2', text: 'Innit! Finally all those potholes will be gone!', user: 'Nehal', timestamp: '9:26', profilePic: require('../../assets/generic_user.png') },
        { id: '3', text: 'Hoorayy', user: 'Dhruv', timestamp: '9:27', profilePic: require('../../assets/generic_user.png') }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const flatListRef = useRef(null);

    const handleSend = () => {
        if (newMessage.trim()) {
            const newMessages = [...messages, { id: Date.now().toString(), text: newMessage, user: 'me', timestamp: new Date().toLocaleTimeString().slice(0, 5), profilePic: null }];
            setMessages(newMessages);
            setNewMessage('');

            // Scroll to the end of the list when a new message is added
            if (flatListRef.current) {
                flatListRef.current.scrollToEnd({ animated: true });
            }
        }
    };

    const renderMessage = ({ item }) => {
        const isCurrentUser = item.user === 'me';
        return (
            <View style={[styles.messageContainer, isCurrentUser ? styles.currentUserMessage : styles.otherUserMessage]}>
                {!isCurrentUser && <Image source={item.profilePic} style={styles.profilePic} />}
                <View style={styles.messageContent}>
                    {!isCurrentUser && <Text style={styles.userName}>{item.user}</Text>}
                    <Text style={styles.messageText}>{item.text}</Text>
                    <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ref={flatListRef}
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
        </SafeAreaView>
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
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 5,
        padding: 10,
        alignItems: 'flex-end',
    },
    currentUserMessage: {
        backgroundColor: appTheme.colors.primary,
        alignSelf: 'flex-end',
        borderTopRightRadius: 0,
    },
    otherUserMessage: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        borderTopLeftRadius: 0,
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    messageContent: {
        maxWidth: '80%',
    },
    userName: {
        fontSize: 12,
        color: appTheme.colors.secondary,
    },
    messageText: {
        color: 'black',
    },
    timestamp: {
        fontSize: 10,
        color: appTheme.colors.secondary,
        alignSelf: 'flex-end',
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

export default Chat;
