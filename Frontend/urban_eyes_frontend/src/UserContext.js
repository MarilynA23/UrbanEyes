// src/UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        city: '',
        username: '',
        password: '',
        contact: '',
    });

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('Failed to load user data', error);
            }
        };

        loadUserData();
    }, []);

    const updateUser = async (newUser) => {
        setUser(newUser);
        try {
            await AsyncStorage.setItem('user', JSON.stringify(newUser));
        } catch (error) {
            console.error('Failed to save user data', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
