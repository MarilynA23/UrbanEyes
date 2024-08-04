import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';
import DrawerNavigator from './src/Navigation/DrawerNavigator';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Placeholder check for authentication status
        const userIsLoggedIn = true; // Simulate authentication status
        setIsLoggedIn(userIsLoggedIn);
    }, []);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleSignUpSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthStack screenProps={{ onLoginSuccess: handleLoginSuccess, onSignUpSuccess: handleSignUpSuccess }} />}
        </NavigationContainer>
    );
};

export default App;
