// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigation/RootNavigator'; // Import RootNavigator
import { UserProvider } from './src/UserContext'; // Import UserProvider

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleSignUpSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <UserProvider>
            <NavigationContainer>
                <RootNavigator isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
